import Dashboard from '../pages/Dashboard'
import AddHabitModal from './AddHabitModal' 
import AsideNavbar from '../AsideNavbar'      
import Habitwise from '../Habitwise'         
import LogIn from '../LogIn'                  
import Stats from './Stats'      
import style from './A.module.css' 
import { useState } from 'react'
import { Route } from 'react-router-dom'
import Heatmap from './Heatmap'
import MonthlyCalendar from './MonthlyCalendar' // Yangi kalendarni import qilamiz
import SettingModal from '../SettingModal'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

function A (){
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [isSettingOpen,setIsSettingOpen] = useState(false)
  const {aTheme} = useContext(UserContext)

  return(
    <div className={`${style.mainDiv} ${style[aTheme]}`} >
  
    <AsideNavbar openSetting={()=>{
      setIsSettingOpen(true)
    }}/>
      <div className={style.leftsideDiv}>

      <Heatmap/>
      <MonthlyCalendar/>
      </div>
      <div className={style.rightsideDiv}>
      <Dashboard openModal={()=>{setIsModalOpen(true)}} />
      <Stats/>
      
      </div>
     {isModalOpen && <AddHabitModal closeModal={()=>{setIsModalOpen(false)}}/>}
      { isSettingOpen && <SettingModal closeSetting={()=>{
        setIsSettingOpen(false)
      }}/> }
    </div>
   
  )
}

export default A