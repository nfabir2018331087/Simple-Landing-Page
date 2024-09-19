'use client'

import ImageViewer from "./ImageViewer"
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faTwitter, faLinkedIn, faInstagram  } from "@fortawesome/free-solid-svg-icons";

export default function Product(){

    const [selectedSize, setSelectedSize] = useState("");
    const [total, setTotal] = useState(1);

    function calculateTotal(val){
        let tot = total
        tot += val
        if(tot > 0) setTotal(tot)
    }

    return (
        <div className="py-10 md:py-20 px-6 md:px-12 lg:px-40">
            <h1 className="text-4xl text-black text-center tracking-wider font-montserrat font-semibold">
                PRODUCT OF 
                <span className="outline-text-black ml-3">THE MONTH</span>
            </h1>
            <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mt-10">
                <div className=" md:w-1/2">
                    <ImageViewer />
                </div>
                <div className="w-5/6 md:w-1/2">
                    <h1 className="font-montserrat font-bold text-2xl">Premium Valuetainment Leather Backpack</h1>
                    <p className="font-inter pt-2 text-sm">The attention to detail is evident in every aspect of this backpack. From the sturdy hardware and reinforced stitching to the smooth zippers and luxurious lining, no detail has been overlooked.</p>
                    <h1 className="font-bold text-lg pt-2">Price: <span className="text-red-500">$199.95</span></h1>
                    <div className="flex flex-row gap-2 pt-2">
                        <h1 className="font-semibold pt-2 ">Size: </h1>
                        <div>
                            <button className={`border border-black px-2 py-1 ${selectedSize === 'S' ? 'bg-red-500 text-white' : 'bg-white'} hover:bg-gray-200`}
                            onClick={() => setSelectedSize('S')}
                            >
                            S
                            </button>
                            <button
                            className={`border border-black px-2 py-1 ${selectedSize === 'M' ? 'bg-red-500 text-white' : 'bg-white'} hover:bg-gray-200`}
                            onClick={() => setSelectedSize('M')}
                            >
                            M
                            </button>
                            <button
                            className={`border border-black px-2 py-1 ${selectedSize === 'L' ? 'bg-red-500 text-white' : 'bg-white'} hover:bg-gray-200`}
                            onClick={() => setSelectedSize('L')}
                            >
                            L
                            </button>
                            <button
                            className={`border border-black px-2 py-1 ${selectedSize === 'XL' ? 'bg-red-500 text-white' : 'bg-white'} hover:bg-gray-200`}
                            onClick={() => setSelectedSize('XL')}
                            >
                            XL
                            </button>
                            <button
                            className={`border border-black px-2 py-1 ${selectedSize === 'XXL' ? 'bg-red-500 text-white' : 'bg-whtie'} hover:bg-gray-200`}
                            onClick={() => setSelectedSize('XXL')}
                            >
                            XXL
                            </button>
                        </div>
                    </div>
                    <h1 className="font-semibold pt-2">Quantity: </h1>
                    <div className="pt-2">
                        <button onClick={() => calculateTotal(-1)} className="font-bold border border-black px-2 py-1 hover:bg-gray-200">-</button>
                        <button className="border border-black px-2 py-1 ">{total}</button>
                        {/* <input type="number" name="number" min="1" defaultValue="1" className="border border-black px-2 py-1 w-10"/> */}
                        <button onClick={() => calculateTotal(1)} className="font-bold border border-black px-2 py-1 hover:bg-gray-200">+</button>
                    </div>
                    <div className="flex flex-row gap-2 mt-4">
                        <button className="border border-black rounded-lg py-2 px-10 hover:bg-gray-300 transition duration-300">ADD TO CART</button>
                        <button className="border border-black rounded-lg py-2 px-10 bg-black text-white hover:bg-red-500 transition duration-300">BUY IT NOW</button>
                    </div>
                    <div className="flex flex-row items-center gap-4 pt-4">
                        <h1 className="font-semibold">Share: </h1>
                        <div className="w-3 h-3 cursor-pointer transform duration-300 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        </div>
                        <div className="w-4 h-4 cursor-pointer transform duration-300 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                        </div>
                        <div className="w-4 h-4 cursor-pointer transform duration-300 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>                        
                        </div>
                        <div className="w-4 h-4 cursor-pointer transform duration-300 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>                        
                        </div>
                    </div>
                    <p className="underline pt-4 cursor-pointer">View Details</p>
                </div>
            </div>

        </div>
    )
}