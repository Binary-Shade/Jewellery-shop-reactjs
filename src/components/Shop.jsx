import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { IoDiamondOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { GiDropEarrings } from "react-icons/gi";

const Shop = () => {
  return (
<section id='shop' className="text-gray-400 bg-gray-900 body-font mb-6 mx-4">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Exquisite Jewelry Collection
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          {<IoDiamondOutline />}
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-white text-lg title-font font-medium mb-2">Dazzling Diamonds</h2>
          <p className="leading-relaxed text-base">Our collection features meticulously crafted diamond jewelry, exuding brilliance and sophistication. Perfect for adding a touch of luxury to any occasion, these pieces are designed to dazzle and delight.</p>
          <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
        {<LuShoppingBag />}
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-white text-lg title-font font-medium mb-2">Eternal Elegance</h2>
          <p className="leading-relaxed text-base">Discover our Eternal Elegance collection, where timeless beauty meets modern craftsmanship. These pieces are designed to celebrate life’s most precious moments, with a focus on elegance and refinement.</p>
          <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          {<GiDropEarrings />}
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-white text-lg title-font font-medium mb-2">Radiant Pearls</h2>
          <p className="leading-relaxed text-base">Indulge in the luminous beauty of our Radiant Pearls collection. Each piece is a masterpiece, showcasing the natural allure of pearls combined with exquisite design.</p>
          <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
            
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Shop