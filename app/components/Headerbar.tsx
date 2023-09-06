import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import {GoTriangleDown} from 'react-icons/go'
type Props = {}

const Headerbar = (props: Props) => {
  return (
    <div className="bg-regal-white min-w-full p-4" >
      <div className="flex items-center justify-between w-full" >
        <form className='relative w-7xl' >
          <span className="absolute left-2" ><CiSearch fontSize="25px" /> </span>
          <input type="text" className="w-[400px] p-4 placeholder:p-14" placeholder="Search Appointment, Patient" />
        </form>
        <div className='flex items-center gap-7' >
        <span><AiOutlineQuestionCircle fontSize="25px" /> </span>
          <span><BiBell fontSize="25px" /> </span>
          <div className='flex items-center gap-5' >
            <img className="rounded-full w-12" src='./irene.jpg'  alt="image" />
            <div className='flex items-center gap-4' >
              <div>
              <h2 className='font-bold' >Brandon Sanderson </h2>
                <p>Dental Doctor </p>
                </div>
              <span><GoTriangleDown fontSize="25px" /> </span>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Headerbar