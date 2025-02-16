import React, { useState } from 'react'

const Login = ({handleLogin}) => {

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    console.log("email is ",email)
    console.log("password is",password) 

    setEmail("")
    setPassword("")
  }

  return (
  <div className='flex items-center justify-center h-screen w-screen'>

    <div className='flex items-center justify-center flex-nowrap border-2 border-white-500 rounded-xl p-20'>
      
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}
          className='flex flex-col items-center justify-center'>
        
              <input value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              required type="email" placeholder='Enter your email' className='border-2 border-emerald-500 rounded-full py-3 px-4 text-xl mx-5 my-5 text-white bg-transparent placeholder:text-gray-400  outline-none' />
        
              <input value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              required type="text" placeholder='Enter password' className='border-2 border-emerald-500 rounded-full py-3 px-4 text-xl mx-5 my-5 text-white bg-transparent outline-none placeholder:text-gray-400' />
            
              <button className='border-2 border-none bg-emerald-500 rounded-full py-4 px-8 text-xl mx-5 my-5 mt-5 text-white  placeholder:text-white' >Login</button>
      </form>
    </div>

  </div>
  )
}

export default Login
