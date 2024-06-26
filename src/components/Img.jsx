import React from 'react'

const Img = ({img, title}) => {
  return (
    <div className="images-tag">
        <div className="card w-40 my-6 lg:w-96 md:w-48">
                <img src={img} alt=""  className='rounded-sm' />
                <p className='text-slate-400 lg:my-5'>{title}</p>
        </div>
    </div>
  )
}

export default Img