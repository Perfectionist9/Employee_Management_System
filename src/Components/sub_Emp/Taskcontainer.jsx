import React from 'react'

const Taskcontainer = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
      <div className='bg-red-400 w-[45%] px-9 py-6 rounded'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='bg-blue-400 w-[45%] px-9 py-6 rounded'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completedTask}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='bg-green-400 w-[45%] px-9 py-6 rounded'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='bg-yellow-400 w-[45%] px-9 py-6 rounded'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failedTask}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default Taskcontainer
