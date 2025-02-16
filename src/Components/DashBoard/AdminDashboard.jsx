import React from 'react'
import Navbar from '../sub_Emp/Navbar'
import Createtask from '../sub_Emp/Createtask'
import Alltask from '../sub_Emp/Alltask'

const AdminDashboard = () => {
  return (
    <div className='w-full h-screen p-8'>
       <Navbar/>
       <Createtask/>
       <Alltask />
    </div>
  )
}

export default AdminDashboard
