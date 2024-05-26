import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
// import "../styles/CategoryProductStyles.css";
import axios from "axios";
import Layout from "../components/layout/layout";
import { useContext } from "react";
import { Cartcontext } from "../components/contextAPI/Cartcontext";
import { FaRupeeSign } from "react-icons/fa";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const {addToCart}=useContext(Cartcontext);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
const { data } = await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`

      );
      console.log({data})
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category d-flex flex-wrap category" style={{width:"100vw"}}>
        <div className="d-flex flex-column" style={{width:"100%"}}>
        <h4 className="text-center"> {category?.name}</h4>
        <h6 className="text-center">{products?.length} Result found </h6>
        <div className="row">
          <div className="col-md-12 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-3" key={p._id}>
                  <div className="card m-2 "style={{ ['width']: "18rem",["border-radius"]:"10px",['background-color']:'#FEFCFF',['height']:"500px",['position']: 'relative'}}>
                  <img style={{height:"210px"}} 
                    src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                   <hr style={{['border-width']:"3px",['margin-bottom']:"0px"}}/>
                   <div className="card-body" style={{height:"200px"}}>
                    
                  <span style={{['font-size']:"20px",['font-weight']:"500",['display']:"-webkit-box",
            ['-webkit-line-clamp']:"2",
            ['-webkit-box-orient']:"vertical",
            ['overflow']:"hidden",['margin-bottom']:"-1px"}} 
            className="card-title">{p.name}</span>
                     <p style={{['margin-bottom']:"3px",["color"]:"#008000"}} className="card-text"><FaRupeeSign />{p.price}</p>
                    
                     <p style={{['margin-bottom']:"0px",['font-weight']:"400",["font-size"]:"14px"}} className="card-text">{p.description.substring(0, 150)}</p>
                     <div className="mt-auto">
      <button style={{ ['width']: "94%",['position']: 'absolute',['top']:'430px',['left']:'4px' }} type="button" className="btn btn-danger btn-outline-dark  col-sm-6" onClick={() => addToCart(p.name, p.price, p.description, p._id)}>
        Add to Cart
      </button>
    </div>
                  </div>
                </div>
               </div>
              ))}
            </div>
            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
