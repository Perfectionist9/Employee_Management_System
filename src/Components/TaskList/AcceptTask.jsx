import React from 'react'

const AcceptTask = () => {
  return (
    <div className='bg-orange-600 h-full w-[300px] rounded-xl flex-shrink-0 flex-nowrap p-5'>
            <div className='flex items-start justify-between'>
                <h2 className='bg-red-600 px-3 py-1 rounded'>High</h2>
                <h3 className='text-sm'>31 feb 2025</h3>
            </div>
            <h2 className='text-2xl font-semibold mt-5 mb-2'>Nach Ke Dekhao</h2>
            <p className='text-sm'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ipsum.
            </p>
            <div className='flex flex-row justify-between items-center mt-12'>
                <button className='bg-green-500 rounded py-1 px-2 text-sm'>Mark as COMPLETED</button>
                <button className='bg-red-500 rounded py-1 px-2 text-sm'>Mark as FAILED</button>
            </div>
      </div>
  )
}

export default AcceptTask
