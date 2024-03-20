import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
// import "../styles/CategoryProductStyles.css";
import axios from "axios";
import Layout from "../components/layout/layout";
import { useContext } from "react";
import { Cartcontext } from "../components/contextAPI/Cartcontext";
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
          <div className="col-md-10 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img style={{width:"250px"}}
                    src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body d-flex flex-column" style={{width:"250px"}}>
                    <div className="card-name-price">
                      <span className="card-title">{p.name}</span>
                      <p className="card-title card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                    </div>
                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price mt-auto">
                      <button style={{ width: "96%" }}         type="button"
                        className="btn btn-info ms-1"
                        onClick={() => addToCart(p.name, p.price, p.description, p._id)}                >
                        Add to Cart
                      </button>
                      {/* <button
                    className="btn btn-dark ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    ADD TO CART
                  </button> */}
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
