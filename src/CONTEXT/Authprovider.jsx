import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../UTILS/Localstorage';

export const Authcontext = createContext();

const Authprovider = ({children}) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
      setLocalStorage();
    const {employee , admin } = getLocalStorage()
    setUserData({employee,admin})
    },[])


    

  return (
    <div>
       <Authcontext.Provider value={userData}>
        {children}
       </Authcontext.Provider>
    </div>  
  )
}

export default Authprovider
