import React from 'react'

const Createtask = () => {
  return (
    <div>
       <div className='p-5 bg-[#1c1c1c] mt-10 rounded'>
            <form className='flex items-center justify-between w-full flex-wrap'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input className='text-sm w-4/5 py-1 px-2 outline-none bg-transparent border-[1px] rounded border-gray-400 mb-4' type="text" placeholder='Make a UI/UX design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>DATE</h3>
                        <input className='text-sm w-4/5 py-1 px-2 outline-none bg-transparent border-[1px] rounded border-gray-400 mb-4' type="date" placeholder='Make a UI/UX design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input className='text-sm w-4/5 py-1 px-2 outline-none bg-transparent border-[1px] rounded border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input className='text-sm w-4/5 py-1 px-2 outline-none bg-transparent border-[1px] rounded border-gray-400 mb-4' type="text" placeholder='design,development,etc' />
                    </div>
                </div>

                <div className='flex flex-col items-start w-2/5 '>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rpunded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='text-xl bg-emerald-500 hover:bg-emerald-600 px-3 py-4 rounded mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Createtask
