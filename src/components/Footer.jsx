import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/24/outline';
const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <div className='text-white'>
        <footer className="relative text-gray-100 bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we'll respond in 24 hours.
                </h5>
                <div className="mt-6 flex lg:mb-0 mb-6">
                    <div className="icons flex gap-5 w-11">
                    <ul>
                        <li>
                            <a href="#">
                            <i className="fab fa-facebook-f icon"></i>    </a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-whatsapp icon"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-instagram icon"></i></a></li>
                        <li>
                            <a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>
                        </ul>
                    </div>
                </div>
                    <div className="mt-5 ">
                        <div className="text text-left pl-5">
                            <p className='text-white leading-9'>Email: <span>sriparvathijewellery@gmail.com</span></p>
                            <p className='text-white leading-9'>Phone: <span>9443523286</span></p>
                            <p className='text-white leading-9'>Phone: <span>9489383487</span></p>
                            <p className='text-white leading-9'>Location: <span>Sathankulam | Pollachi</span></p>
                        </div>
                    </div>
            </div>
            <div className="w-full lg:w-6/12 mt-5 px-4">
                <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-1/2 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                    <ul className="list-unstyled">
                    <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#designs">Designs</a>
                    </li>
                    <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#shop">About Us</a>
                    </li>
                    <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#join">Join community</a>
                    </li>
                    </ul>
                    <div className="developer break-words mt-6 overflow">
                    <h2 className='font-semibold'>For development</h2>
                    <p>Developer : suresh k</p>
                    <p>contact: +91 9342560289</p>
                    <p>E-mail :02042003sureshk@gmail.com</p>
                    <p className='mt-5 capitalize flex gap-2 w-max'>{ <AcademicCapIcon className='w-7' /> }low cost development Team !</p>
                </div>
                </div>
                </div>
            </div>
            </div>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright &copy; <span id="get-current-year">{date}</span><a href="#home" className="text-blueGray-500" target="_blank"> Parvathi Jewellery </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer