export default function Believe(){
    return (
        <div className="relative p-8 md:p-16 lg:p-32 bg-gradient-to-r from-gray-800 to-black h-full w-full">
            <div className="absolute top-0 right-0 z-0 opacity-10 p-10">
                <img src="Valuetainment.svg" alt="quotes" className="h-2/3 w-80"/>
            </div>
            <h1 className="absolute inset-0 z-20 flex justify-around pt-8 md:pt-16 lg:pt-32 font-actOfRejection text-5xl md:text-6xl lg:text-8xl text-white">WHAT WE BELIEVE</h1>
            <div className="relative flex flex-col lg:flex-row justify-center gap-4 lg:gap-12 z-10">
                <div>
                    <img src="img2.png" alt="patdavid" className="mt-10 h-96 md:h-[500px] w-full rounded-lg"/>
                </div>
                <div className="flex flex-col justify-end mt-20">
                    <p className="capitalize text-white font-montserrat text-2xl font-bold pb-4 border-b border-gray-200">
                        Leadership 
                        <span className="text-xs ml-1 text-gray-400">
                            is vital from the top of corporations to the military to small businesses to parents to students. We all can be leaders.
                        </span>
                    </p>
                    <p className="capitalize text-white font-montserrat text-2xl font-bold pt-8 py-4 border-b-2 border-gray-200">
                        Entrepreneurs 
                        <span className="text-xs ml-1 text-gray-400">
                            is vital from the top of corporations to the military to small businesses to parents to students. We all can be leaders.
                        </span>
                    </p>
                    <p className="capitalize text-white font-montserrat text-2xl font-bold pt-8 pb-4 border-b-2 border-gray-200">
                        Capitalism 
                        <span className="text-xs ml-1 text-gray-400">
                            is vital from the top of corporations to the military to small businesses to parents to students. We all can be leaders.
                        </span>
                    </p>
                    <p className="capitalize text-white font-montserrat text-2xl font-bold pt-8 pb-4 border-b-2 border-gray-200">
                        Debate 
                        <span className="text-xs ml-1 text-gray-400">
                            is vital from the top of corporations to the military to small businesses to parents to students. We all can be leaders.
                        </span>
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 z-0 opacity-50 lg:opacity-100">
                    <img
                        src="/king.png"
                        alt="Patrick Bet-David"
                        className="w-24 h-60"
                    />
                </div>
        </div>
    )
}