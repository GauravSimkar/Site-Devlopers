import React from 'react'
import './GoogleMap.css'

const GoogleMap = () => {
  return (
    <div>
    <div className='map-responsive'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.348786637711!2d81.86016417568328!3d25.493411777521494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca78818ddc51%3A0x6690dd2de3a1415b!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1710530104677!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}

export default GoogleMap