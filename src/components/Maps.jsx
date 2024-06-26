import React from 'react'

const Maps = () => {
  return (
<section className="maps mx-4" id='map'>
  {/* <h1 className='text-slate-200 text-xl mt-5'>Shop Location :</h1> */}
  <div className="map-container block bg-slate-900 rounded-lg">
  <div id="map">
    <iframe className='mt-9 '
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.572390445945!2d77.9149107!3d8.443582500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0479a8cbd7d361%3A0x4a37520e45cd9d2b!2sSri%20Parvathi%20Jewellery!5e0!3m2!1sen!2sin!4v1719151993068!5m2!1sen!2sin"
      width={"100%"} height={"200"} allowFullScreen="" loading="lazy"></iframe>
  </div>
  </div>
</section>
  )
}

export default Maps