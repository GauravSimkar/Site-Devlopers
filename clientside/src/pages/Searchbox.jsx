import React from 'react'
import Layout from '../components/layout/layout';
import { useSearch } from '../components/contextAPI/search';
import { FaRupeeSign } from "react-icons/fa";

 const Search = () => {
  const [values,setValues]=useSearch();
  return (
    <Layout title={'Search Results'}>
   <div className='container'>
    <div className="text-center">
      <h2>Search Results</h2>
      <h6>{values?.results.length<1?'No Products Found': `Found: ${values?.results.length}`}</h6>
      {/* <div className="row row-cols- row-cols-sm- row-cols-md-3 row-cols-lg-8"> */}
      <div className="row">
          <div className="col-md-12 offset-1">
            <div className="d-flex flex-wrap">
            {values?.results.map((p) => (
      <div className="col m-3 " key={p._id}>
        <div className="card m-2"style={{ ['width']: "18rem",["border-radius"]:"10px",['background-color']:'#FEFCFF',['height']:"500px",['position']: 'relative'}} >
          <img src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} style={{height:"210px"}} />
          <hr style={{['border-width']:"3px",['margin-bottom']:"0px"}}/>
          <div className="card-body" style={{height:"200px"}
        }>
            <span style={{['font-size']:"20px",['font-weight']:"500",['display']:"-webkit-box",
            ['-webkit-line-clamp']:"2",
            ['-webkit-box-orient']:"vertical",
            ['overflow']:"hidden"}} 
            className="card-title">{p.name}</span>
            <p className="card-text" style={{['margin-bottom']:"3px",["color"]:"#008000"}}><FaRupeeSign />{p.price}</p>
            <p style={{['margin-bottom']:"0px",['font-weight']:"400",["font-size"]:"14px"}} className="card-text">{p.description.substring(0, 150)}</p>
            <div className="mt-auto">
      <button style={{ ['width']: "94%",['position']: 'absolute',['top']:'430px',['left']:'4px' }} type="button" className="btn btn-danger btn-outline-dark px-4 col-sm-6" onClick={() => addToCart(p.name, p.price, p.description, p._id)}>
        Add to Cart
      </button>
    </div>
          </div>
        </div>
      </div>
    ))}
              </div> 
    </div>
  </div>
    </div>
   </div>


    </Layout>
  )
}
export default Search;
