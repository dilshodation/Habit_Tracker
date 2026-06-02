import Dashboard from '../pages/Dashboard'
import AddHabitModal from './AddHabitModal' 
import AsideNavbar from '../AsideNavbar'      
import Habitwise from '../Habitwise'         
import LogIn from '../LogIn'                  
import Stats from './Stats'      
import style from './A.module.css' 
import { useState } from 'react'
import { Route } from 'react-router-dom'

function A (){
  const [isModalOpen,setIsModalOpen] = useState(false)
  return(
    <div className={style.mainDiv} >
      <AsideNavbar/>
      <div className={style.rightsideDiv}>
      <Dashboard openModal={()=>{setIsModalOpen(true)}} />
      <Stats/>
      </div>
     {isModalOpen && <AddHabitModal closeModal={()=>{setIsModalOpen(false)}}/>}
    </div>
   
  )
}

export default A