import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/DashBoard/EmployeeDashboard'
import AdminDashboard from './Components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './UTILS/Localstorage'
import { use } from 'react'
import { Authcontext } from './CONTEXT/Authprovider'


const App = () => {
  

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData = useContext(Authcontext)

useEffect(()=>{
  const loggedInUser = localStorage.getItem("loggedInUser");
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser) 
    console.log(userData)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
    
  }
},[])

const handleLogin = (email,password)=>{
  if(email== 'admin@me.com' && password==123){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  else if(authData){
    const employee = authData.employee.find((e)=> email==e.email && password==e.password)
    if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
  }
  else alert('Invaild email')
    
}

   
  return (
    <>
    {!user ?  <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard/> : (user=='employee'? <EmployeeDashboard data={loggedInUserData}/> : null) }
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
