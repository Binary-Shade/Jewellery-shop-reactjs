import React from 'react'
import { Product2, Product5, Product6, Product7 } from './assets' 
import Img from './Img'

const Cards = () => {
    const images = [{
        id:1,
        title: 'Ring',
        location: Product2
    },
    {
        id:2,
        title: 'Necklace',
        location: Product5
    },
    {
        id:3,
        title: 'Bracelet',
        location: Product6
    },
    {
        id:4,
        title: 'Chain',
        location: Product7
    }
]


  return (
    <div className="cards mx-4 my-6" id='designs'>
        <div className="text my-5">
            <h2 className='text-slate-200'>New Customized Collections :</h2>
        </div>
        <div className="section flex justify-between flex-wrap cards-container ">
            {
                images.map((image)=>(
                    <Img img={image.location} title={image.title} key={image.id}/>
                ))
            }
        </div>
    </div>
    
  )
}

export default Cards