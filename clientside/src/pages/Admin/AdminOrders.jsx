import { useContext, useEffect, useState } from "react";
import AdminMenu from "../../components/layout/Adminmenu";
import Layout from "../../components/layout/layout";
import { Authcontext } from "../../components/contextAPI/Authcontext";
import axios from "axios";
import moment from 'moment'

const AdminOrders=()=>{
    // const [status,setStatus]=useState(["Not Process","Processing","Shipped","deliverd","cancel"]);
    // const [changeStatus,setChangeStatus]=useState("");
    const [orders,setOrders]=useState([]);
    const [auth]=useContext(Authcontext);
  
    const getAllOrders=async ()=>{
      try{
      const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/auth/all-orders`);
      setOrders(data.orders);
      console.log(data);
      }
      catch (error){
        console.log(error);
      }
    }
    useEffect(()=>{
      if(auth?.token)
      getAllOrders();
    },[auth?.token]);

    const handleChange = async (orderId, value) => {
        console.log(value,orderId);
        try {
          const { data } = await axios.put(`${import.meta.env.REACT_APP_API}/api/v1/product/order-status/${orderId}`, {
            status: value,
          });
          getAllOrders();
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <Layout>
        <div className="row">
          <div className="col-md-3">
             <AdminMenu/>
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
              {orders.length > 0 ? (
            <div className="border shadow">
              {orders?.map((o, i) => (
                <div key={i}>
                  <table className="table" style={{marginBottom:"0px"}}>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">{i + 1}</td>
                        <td>
                        <select className="form-select" defaultValue={o.status} style={{border:"none",outline:"none"}} onChange={(e)=>handleChange(o._id,e.target.value)}>
                            <option value="" disabled>Select options</option>
                            <option value="Not Process">Not Process</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Deliverd</option>
                            <option value="Cancel">Cancel</option>
                        </select>
                        </td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).format("DD-MM-YYYY")}</td>
                        <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                   {o.products.map((p) => (
                    <div
                      key={p._id}
                      className="d-flex"
                      style={{
                        width: "100%",
                        gap: "3rem",
                        border: "solid 1px gray",
                        borderRadius: "4px",
                        padding: "16px",
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                        alt={p.name}
                        style={{ width: "200px", height: "200px" }}
                      />
                      <div style={{ width: "60%" }}>
                        <h6 style={{ fontSize: "20px" }}>{p.name}</h6>
                        <p>{p.description}</p>
                        <p>
                          Cost: <span style={{ color: "#48C11B" }}>${p.price}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p>No orders Found!</p>
          )}
          </div>
        </div> 
    </Layout>
    );
}

export default AdminOrders;