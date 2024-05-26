import React from 'react'
import Layout from '../components/layout/layout';
import { useSearch } from '../components/contextAPI/search';

 const Search = () => {
  const [values,setValues]=useSearch();
  return (
    <Layout title={'Search Results'}>
   <div className='container'>
    <div className="text-center">
      <h2>Search Results</h2>
      <h6>{values?.results.length<1?'No Products Found': `Found: ${values?.results.length}`}</h6>
      <div className="row row-cols- row-cols-sm- row-cols-md-3 row-cols-lg-8">
    {values?.results.map((p) => (
      <div className="col mb-6 " key={p._id}>
        <div className="card d-flex" style={{width:"250px",justifyContent:"start"}}>
          <img src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} style={{height:"170px",width:"250px"}} />
          <hr style={{['border-width']:"3px",['margin-bottom']:"0px"}}/>
          <div className="card-body d-flex flex-column" style={{height:"250px",width:"240px"}
        }>
            <span style={{['font-size']:"24px",['font-weight']:"500",['display']:"-webkit-box",
            ['-webkit-line-clamp']:"2",
            ['-webkit-box-orient']:"vertical",
            ['overflow']:"hidden"}} 
            className="card-title">{p.name}</span>
          
            <p style={{['margin-bottom']:"0px"}} className="card-text">{p.description.substring(0, 30)}</p>
          
            <p className="card-text">${p.price}</p>
            <div className="mt-auto">
      <button style={{ width: "96%" }} type="button" className="btn btn-danger btn-outline-dark px-4" onClick={() => addToCart(p.name, p.price, p.description, p._id)}>
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


    </Layout>
  )
}
export default Search;
