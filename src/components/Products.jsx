import { useState } from "react"
import { Girl1, Girl2, Girl3, Girl4 } from "./assets"


const products = [
    {
      id: 1,
      name: 'Gold Plated Necklace',
      href: '#',
      imageSrc: Girl1,
      imageAlt: "diamond necklace",
      price: '$120',
      material: 'Silver',
    },
    {
      id: 2,
      name: 'Gold Plated ear ring',
      href: '#',
      imageSrc: Girl2,
      imageAlt: "earring ",
      price: '$120',
      material: 'Gold',
    },
    {
      id: 3,
      name: 'Dimond Necklace',
      href: '#',
      imageSrc: Girl3,
      imageAlt: "diamond necklace",
      price: '$1990',
      material: 'Diamond',
    },
    {
      id: 4,
      name: 'Diamond peals Necklace',
      href: '#',
      imageSrc: Girl4,
      imageAlt: "diamond necklace",
      price: '$290',
      material: 'Gold',
    },
    {
      id: 5,
      name: 'Diamond peals Necklace',
      href: '#',
      imageSrc: Girl2,
      imageAlt: "diamond necklace",
      price: '$290',
      material: 'Gold',
    },
    {
      id: 6,
      name: 'Diamond peals Necklace',
      href: '#',
      imageSrc: Girl2,
      imageAlt: "diamond necklace",
      price: '$290',
      material: 'Gold',
    },
    
  ]
  
  export default function Product() {
    const [visible, setVisible] = useState(4);

    const showMore = () =>{
      setVisible((preVisible)=> preVisible + 4)
    }

    return (
      <div className="overflow">
        <div className="mx-4 lg:mx-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-100 mb-5">Recent Trendy Designs :</h2>
  
          <div className="flex flex-wrap gap-2 overflow-hidden lg:justify-between">
            {products.slice(0, visible).map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg: aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={'200px'}
                    height={'200px'}
                    className="object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-200">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.material}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-300">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
            {
              visible < products.length && (
                <div className="mt-6 flex justify-center">
            <button
              onClick={showMore}
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none"
            >
              View More
            </button>
            </div>
              )
            }

        </div>
      </div>
    )
  }
  