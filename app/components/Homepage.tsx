import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiBriefcaseAlt } from 'react-icons/bi'
import { BsCameraVideo } from 'react-icons/bs'

type Props = {}

const Homepage = (props: Props) => {
  return (
      <div className='bg-regal-white' >
      <h1 className='p-2 text-2xl' >Welcome Dr. Brandon </h1>
      <span className='p-2' >Have a nice day at work </span>
      <div className='flex items-center justify-around flex-wrap gap-x-5 gap-y-4 mt-5' >
      <div className='flex items-center justify-center gap-4 p-8 text-white bg-appointment rounded-lg' >
          <span className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10' >
            <AiOutlineCalendar fontSize="25px" />
          </span>
        <div >
          <h2 className='text-xl' >24.4k </h2>
            <p>Appointments </p>
            </div>
      </div>
      <div className='flex items-center justify-center gap-5 p-8 text-white bg-pink rounded-lg' >
          <AiOutlineCalendar fontSize="25px" />
          <div>
        <h2 className='text-xl' >166.4k </h2>
        <p>Total Patients </p>
          </div>
          </div>
      <div className='flex items-center justify-center gap-5 p-8 text-white bg-yellow-consult rounded-lg ' >
          <BiBriefcaseAlt fontSize="25px" />
          <div>
        <h2 className='text-xl' > 53.5k </h2>
        <p>clinic consulting </p>
          </div>
          </div>
      <div className='flex items-center justify-center gap-5 p-8 text-white bg-blue rounded-lg' >
          <BsCameraVideo fontSize="25px" />
          <div>
        <h2 className='text-xl' >28.0k </h2>
        <p>Video Consulting </p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Homepage