export default function Future(){
    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-betweenh-full p-6 md:p-16 lg:p-24">
            <div className="w-2/3 lg:w-1/3 mb-10">
                <h1 className="font-actOfRejection text-6xl md:text-8xl text-center">FUTURE LOOKS BRIGHT</h1>
                <h2 className="font-montserrat text-purple-500 text-2xl md:text-3xl italic font-semibold mt-4 text-center">
                    PURPLE 
                    <span className="font-normal text-black ml-2">&</span>
                </h2>
                <h2 className="font-montserrat text-yellow-400 text-2xl md:text-3xl italic font-semibold mt-2 text-center">
                    GOLD 
                    <span className="outline-text-black ml-2">SERIES</span>
                </h2>
            </div>
            <div className="w-2/3 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                <div className="flex-shrink-0 w-72 bg-white text-black rounded-lg pb-12 transform duration-300 hover:scale-105">
                    <img
                        src="future1.jpeg"
                        alt="none"
                        className="w-full h-72 object-cover rounded-lg"
                    />
                    <div className="font-inter text-black">
                        <h3 className="text-sm py-1">FLB Shir - Purple</h3>
                        <p className="text-sm py-1">
                        34.95 <span className="line-through text-gray-400">34.95</span>
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 w-72 bg-white text-black rounded-lg pb-12 transform duration-300 hover:scale-105">
                    <img
                        src="future2.jpeg"
                        alt="none"
                        className="w-full h-72 object-cover rounded-lg"
                    />
                    <div className="font-inter text-black">
                        <h3 className="text-sm py-1">FLB Shirt - Purple</h3>
                        <p className="text-sm py-1">
                        34.95 <span className="line-through text-gray-400">34.95</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}