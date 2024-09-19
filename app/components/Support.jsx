export default function Support(){
    return (
        <div className="h-fit py-6 md:py-16 px-2 md:px-12 lg:px-32 bg-red-600 flex flex-row justify-between gap-4">
            <div className="flex flex-col items-center">
                <img src="delivery.svg" alt="quotes" className="h-1/6 md:h-1/3 w-24 md:w-40"/>
                <h1 className="font-montserrat font-semibold md:text-2xl text-white mt-4">Shipping</h1>
                <p className="font-inter text-white text-center text-xs md:text-sm pt-2">The attention to detail is evident in every aspect of this backpack.</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="exchange.svg" alt="quotes" className="h-1/6 md:h-1/3 w-24 md:w-40"/>
                <h1 className="font-montserrat font-semibold md:text-2xl text-white mt-4">Return</h1>
                <p className="font-inter text-white text-xs md:text-sm text-center pt-2">The attention to detail is evident in every aspect of this backpack.</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="customer-support 1.svg" alt="quotes" className="h-1/6 md:h-1/3 w-24 md:w-40"/>
                <h1 className="font-montserrat font-semibold md:text-2xl text-white mt-4">Support</h1>
                <p className="font-inter text-white text-xs md:text-sm text-center pt-2">The attention to detail is evident in every aspect of this backpack.</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="verified.svg" alt="quotes" className="h-1/6 md:h-1/3 w-24 md:w-40"/>
                <h1 className="font-montserrat font-semibold md:text-2xl text-white mt-4">Payment</h1>
                <p className="font-inter text-white pt-2 text-center text-xs md:text-sm">The attention to detail is evident in every aspect of this backpack.</p>
            </div>
        </div>
    )
}