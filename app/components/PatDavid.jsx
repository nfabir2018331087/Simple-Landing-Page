import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function PatDavid(){
    return (
        <div>
            <div className="bg-black w-full h-full flex flex-col items-center md:flex-row md:justify-between">
                <div className="pt-20 pb-2 md:pb-20 lg:pb-32 pl-6 md:pl-16 lg:pl-32 font-montserrat w-2/3 md:w-1/2">
                    <h1 className="text-white text-2xl pb-2">PATRICK BET-DAVID&apos;S</h1>
                    <h1 className="text-red-600 font-bold text-4xl pb-2">SINGED </h1>
                    <h2 className="text-red-600 font-bold text-4xl pb-2">COLLECTION</h2>
                    <a className="w-fit flex items-center justify-center transition duration-300 px-4 py-2 mr-6 text-base font-medium text-center text-black rounded-lg bg-white hover:bg-gray-400 cursor-pointer">
                        SHOP NOW
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <img src="pat-sign.png" alt="sign" className="pt-4"/>
                </div>
                <div className="flex flex-row justify-center w-1/2 pt-20 pb-32">
                    <img src="book1.png" alt="book1" className="h-84 md:w-64 lg:w-72 transform duration-300 hover:scale-105"/>
                    <img src="book2.png" alt="book2" className="h-84 md:w-56 lg:w-64 pt-4 transform duration-300 hover:scale-105"/>
                </div>
            </div>
            <div className="relative bg-red-600 text-white pt-20 pb-16 md:pb-32 px-4 md:px-16">
                <div className="absolute top-10 left-2 md:left-10 lg:left-20 opacity-30 z-0">
                    <img src="quotes.svg" alt="quotes" />
                </div>
                <div className="relative z-10 w-2/3 pt-24 pl-2 md:pl-10 lg:pl-24">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                        OUR MISSION IS TO ENLIGHTEN, ENTERTAIN AND EMPOWER CURRENT AND FUTURE LEADERS AROUND THE WORLD.
                    </h2>
                </div>
                <div className="absolute bottom-0 right-0 md:right-6 lg:right-12">
                    <img
                        src="/pat.png"
                        alt="Patrick Bet-David"
                        className="h-96 md:h-[420px] lg:h-[500px] w-48 md:w-60 lg:w-80"
                    />
                </div>
            </div>         
        </div>
    )
}