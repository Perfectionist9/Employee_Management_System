import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTAsk from './FailedTAsk'
import CompleteTask from './CompleteTask'

const Alltask = ({data}) => {
  return (
    <div id='alltask' className='h-[55%] flex items-center gap-5 justify-start mt-10 overflow-x-scroll py-5 '>
      
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
            return <AcceptTask key={idx}/>
        }
        if(elem.newTask){
            return <NewTask key={idx}/>
        }
        if(elem.completedTask){
            return <CompleteTask key={idx}/>
        }
        if(elem.failedTask){
            return <FailedTAsk key={idx}/>
        }
      })}
      

      
      

      

    </div>
    
  )
}

export default Alltask
