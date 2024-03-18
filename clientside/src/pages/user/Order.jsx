
import Layout from "../../components/layout/layout";
import Usermenu from "../../components/layout/Usermenu";


const Order=()=>{
    return(
      <Layout>
        <div className="row">
          <div className="col-md-3">
             <Usermenu/>
          </div>
          <div className="col-md-9">
            Your Orders
          </div>
        </div>
        
    </Layout>
    );
}

export default Order;