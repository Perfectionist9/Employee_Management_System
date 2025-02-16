import React from 'react'
import Navbar from '../sub_Emp/Navbar'
import Taskcontainer from '../sub_Emp/Taskcontainer'
import Alltask from '../TaskList/Alltask'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen '>
      <Navbar data={data} />
      <Taskcontainer data={data} />
      <Alltask data={data} />
    </div>
  )
}

export default EmployeeDashboard
