import React from 'react'
import './Offer.css'
import exclusive_image from './Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
       <div className='Offers-left'>
       <h1>Exclusive</h1>
       <h1>Offers For YOU</h1>
       <p>Only on best sellers product</p>
       <button>Check Now</button>
       </div>
       <div className='offers-right'>
         <img src={exclusive_image}></img>

       </div>   
    </div>
  )
}

export default Offer