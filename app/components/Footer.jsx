export default function Footer(){
    return (
        <div className="bg-black text-white px-4 md:px-12 lg:px-32">
            <div className='pt-10 font-montserrat flex flex-row justify-between items-center border-b border-gray-400'>
            <div className=' flex gap-2 justify-around pb-4'>
                <img src="Valuetainment.svg" alt="none" className='size-12 md:size-16'/>
                <h1 className='text-5xl md:text-6xl font-bold'>VTMERCH</h1>
            </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 my-10">
                <div className="w-2/3 md:w-1/3">
                    <h1 className="text-lg font-montserrat mb-4">Subscribe and be the first to receive notifications about our upcoming releases and the latest news.</h1>
                    <button className="w-full py-2 border border-white rounded-lg my-4 transition duration-300 hover:bg-red-600">Enter Your Email</button>
                    <button className="w-full py-2 border border-white rounded-lg bg-white text-black transition duration-300 hover:bg-red-600">Subscribe</button>
                </div>
                <div className="flex flex-row justify-around">
                    <div className="font-inter cursor-pointer w-1/3">
                        <h1 className="mb-3">Customer Services</h1>
                        <p className="text-sm text-gray-400 mb-2">About Us</p>
                        <p className="text-sm text-gray-400 mb-2">Search</p>
                        <p className="text-sm text-gray-400 mb-2">Privacy Policy</p>
                        <p className="text-sm text-gray-400 mb-2">Contact Us</p>
                        <p className="text-sm text-gray-400 mb-2">Terms of Service</p>
                        <p className="text-sm text-gray-400 mb-2">Return Policy</p>
                        <p className="text-sm text-gray-400 mb-2">Track Order</p>
                    </div>
                    <div className="font-inter cursor-pointer w-1/3">
                        <h1 className="mb-3">Products</h1>
                        <p className="text-sm text-gray-400 mb-2">Featured Products</p>
                        <p className="text-sm text-gray-400 mb-2">Best Seller</p>
                        <p className="text-sm text-gray-400 mb-2">Latest Products</p>
                        <p className="text-sm text-gray-400 mb-2">All Collections</p>
                        <p className="text-sm text-gray-400 mb-2">All Products</p>
                    </div>
                    <div className="font-inter w-1/3">
                        <h1 className="mb-3">Contact Us</h1>
                        <p className="text-sm text-gray-400 mb-2">Available between 8AM to 8PM. Ready to answer your questions.</p>
                        <p className="text-sm text-gray-400 mb-2 flex"> <img src="telephone.svg" alt="phone" className="mr-1"/> 0123456789</p>
                        <p className="text-sm text-gray-400 mb-2 flex break-all"> <img src="email.svg" alt="phone" className="mr-1"/> store@valuetainment.com</p>
                        <p className="text-sm text-gray-400 mb-2 flex gap-2 cursor-pointer">
                            <img src="fb.svg" alt="fb" />
                            <img src="twitter.svg" alt="twitter" />
                            <img src="linkedin.svg" alt="linkedin" />
                            <img src="insta.svg" alt="insta" />
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-4 flex flex-col md:flex-row md:justify-between items-center">
                <h1 className="font-inter text-center mb-1">
                © 2014 Valuetainment Store. All rights reserved.
                </h1>
                <div className="flex flex-row gap-1 mr-8 cursor-pointer">
                    <img src="visa 1.svg" alt="visa" />
                    <img src="apple-pay 1.svg" alt="applepay" />
                    <img src="diners-club 1.svg" alt="dclub" />
                    <img src="amex 1.svg" alt="amex" />
                    <img src="paypal 1.svg" alt="paypal" />
                    <img src="american-express 1.svg" alt="amex2" />
                </div>
            </div>
        </div>
    )
}