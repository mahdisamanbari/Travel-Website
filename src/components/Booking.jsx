import React from 'react'

const Booking = () => {
  return (
    <div id='#deels'className='max-w-[1140px] m-auto p-4 w-full'>
        <form action="" className="lg:flex lg:justify-between w-full items-center">
            <div className="flex flex-col my-2 py-2">
                <label>Destination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option value="" className="">Grand Antigua</option>
                    <option value="" className="">Maldives</option>
                    <option value="" className="">Key West</option>
                    <option value="" className="">Tehran</option>
                </select>
            </div>
            <div className="flex w-full">
                <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                    <label htmlFor="" className="">Check-In</label>
                    <input type="date" className="border rounded-md p-2" />
                </div>
                <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                    <label htmlFor="" className="">Check-Out</label>
                    <input type="date" className="border rounded-md p-2" />
                </div>
            </div>
            <div className="flex flex-col my-2 p-2 w-full">
                <label htmlFor="" className="">Search</label>
                <button className='w-full'>Rates & Availibilites</button>
            </div>
        </form>
      
    </div>
  )
}

export default Booking
