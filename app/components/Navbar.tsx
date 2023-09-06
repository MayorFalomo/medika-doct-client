import React from 'react'
import {HiOutlineSquares2X2} from 'react-icons/hi2'
import {AiOutlineCalendar, AiOutlineClockCircle, AiOutlineFileText} from 'react-icons/ai'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {RiSettings2Line} from 'react-icons/ri'
import {BsCreditCard, BsEnvelope} from 'react-icons/bs'

type Props = {}

const Navbar = (props: any) => {
  return (
    <div>
      <div className="border-2 border-red-700 w-72 h-screen" >
      <h1 className="p-4 ml-4 text-2xl font-bold" > MEDIKA </h1>
        <ul className='flex items-start flex-col mt-12 mx-4 gap-5 ' >
        <li className='flex items-center gap-5 cursor-pointer rounded-2xl p-4 hover:text-white hover:bg-black ' ><span><HiOutlineSquares2X2 fontSize="25px" /> </span> Overview </li>
        <li className='flex items-center gap-5 cursor-pointer rounded-2xl p-4 hover:text-white hover:bg-black ' ><span><AiOutlineCalendar  fontSize="25px" /> </span> Appointment </li>
        <li className='flex items-center gap-5 cursor-pointer rounded-2xl p-4 hover:text-white hover:bg-black ' ><span><MdOutlinePersonOutline  fontSize="25px" /> </span>My Patients  </li>
        <li className='flex items-center gap-5 cursor-pointer rounded-2xl p-4 hover:text-white hover:bg-black ' ><span><AiOutlineClockCircle  fontSize="25px" /> </span> Schedule Timings </li>
        <li className='flex items-center gap-5 cursor-pointer rounded-2xl p-4 hover:text-white hover:bg-black ' ><span><BsCreditCard  fontSize="25px" /> </span> Payments </li>
        <li className='flex items-center gap-5 cursor-pointer rounded-2xl p-4 hover:text-white hover:bg-black ' ><span><BsEnvelope  fontSize="25px" /> </span> Message </li>
        <li className='flex items-center gap-5 cursor-pointer rounded-2xl p-4 hover:text-white hover:bg-black ' ><span><AiOutlineFileText  fontSize="25px" /> </span> Blog </li>
        <li className='flex items-center gap-5 cursor-pointer rounded-2xl p-4 hover:text-white hover:bg-black ' ><span><RiSettings2Line  fontSize="25px" /> </span> Settings </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar