export default function Collection(){
    return (
        <div className="relative bg-gradient-to-br from-gray-800 to-black h-full">
            <div className="absolute top-0 left-0 z-0 opacity-10 text-white p-4">
                <img src="Valuetainment.svg" alt="quotes" className="h-2/3 w-80"/>
            </div>
            <div className="p-4 md:p-10 lg:p-20 flex flex-col lg:flex-row md:gap-4 lg:gap-8 lg:justify-center items-center lg:items-end">
                <div className="flex flex-col justify-between">
                    <div className="relative font-montserrat mb-10 md:mb-0 flex flex-col md:items-start items-center">
                        <h1 className="text-white text-3xl font-semibold">SHOP</h1>
                        <h1 className="outline-text-white font-bold text-3xl pt-2">COLLECTION</h1>
                        <a className="mt-6 w-fit flex items-center justify-center transition duration-300 px-4 py-2 mr-6 text-base font-medium text-center text-black rounded-lg bg-white hover:bg-gray-400 cursor-pointer">
                            VIEW ALL
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-end">
                        <div className="relative h-72 w-72 md:w-60 transform duration-300 hover:scale-105">
                            <img
                                src="/bag.jpeg"
                                alt="The Boss Collection"
                                className="rounded-lg object-cover h-full w-full "
                            />
                            <p className="absolute inset-0 flex flex-col justify-end text-black font-bold text-lg shadow-lg pl-4">THE BOSS COLLECTION</p>
                        </div>
                        <div className="flex flex-col gap-4 mb-10 md:mb-0">
                            <div className="relative h-44 w-72 transform duration-300 hover:scale-105">
                                <img
                                    src="/threecap.png"
                                    alt="The Boss Collection"
                                    className="rounded-lg object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <p className="absolute inset-0 flex flex-col justify-end text-black font-bold text-lg shadow-lg pl-4">HEADWEAR</p>
                            </div>
                            <div className="relative h-44 w-72 transform duration-300 hover:scale-105">
                                <img
                                    src="/books.png"
                                    alt="The Boss Collection"
                                    className="rounded-lg object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <p className="absolute inset-0 flex flex-col justify-end text-black font-bold text-lg shadow-lg pl-4">VALUE BOOKS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-end gap-8">
                    <div className="relative h-[500px] w-72 md:w-60 transform duration-300 hover:scale-105">
                            <img
                                src="/bottle.jpeg"
                                alt="The Boss Collection"
                                className="rounded-lg object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <p className="absolute inset-0 flex flex-col justify-end text-black font-bold text-lg shadow-lg pl-4">ACCESSORIES</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative h-1/2 w-72 transform duration-300 hover:scale-105">
                            <img
                                src="/tshirt1.jpeg"
                                alt="The Boss Collection"
                                className="rounded-lg object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <p className="absolute inset-0 flex flex-col justify-end text-black font-bold text-lg shadow-lg pl-4">THE FUTURE LOOKS BRIGHT COLLECTION</p>
                        </div>
                        <div className="relative h-1/2 w-72 transform duration-300 hover:scale-105">
                            <img
                                src="/tshirt2.jpeg"
                                alt="The Boss Collection"
                                className="rounded-lg object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-300"
                            />
                           <p className="absolute inset-0 flex flex-col justify-end text-black font-bold text-lg shadow-lg pl-4">TOPS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}
