import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return (
        <div className='top-0 font-montserrat flex flex-row justify-between items-center bg-red-600'>
            <div className='mx-2 md:mx-6 lg:mx-10 flex gap-2 md:gap-4 lg:gap-6 justify-around text-white py-2 px-2 md:px-6 lg:px-8'>
                <img src="Valuetainment.svg" alt="none" className='size-9 md:size-11 lg:size-16'/>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>VTMERCH</h1>
            </div>
            <FontAwesomeIcon icon={faBars} className='size-6 md:size-7 lg:size-8 text-white mr-6 md:mr-12 lg:mr-20 items-center cursor-pointer'/>
        </div>
    )
}