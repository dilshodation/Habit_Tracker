import style from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";




function Dashboard({ openModal }) {
  const { setHabit, habit , dayBt, dayInp, setDayBt,setDayInp, dashboard, changeLanguage,t, translation,setChangeLanguage} = useContext(UserContext)
  let getGreeting = () => {
    let hours = new Date().getHours()
    if (
      hours >= 0 && hours < 12
    ) {
      return `${t.gdMorn}`
    }
    else if (hours >= 12 && hours < 18) {
      return `${t.gdAft}`
    }
    else {
      return `${t.gdEve}`
    }
  }
  let greeting = getGreeting()
  let getMonth = () => {
    let month = new Date().getMonth()
    if (month === 0) {
      return `${t.jn}`
    }
    else if (month === 1) {
      return `${t.fb}`
    }
    else if (month === 2) {
      return `${t.mr}`
    }
    else if (month === 3) {
      return `${t.ap}`
    }
    else if (month === 4) {
      return `${t.my}`
    }
    else if (month === 5) {
      return `${t.jn}`
    }
    else if (month === 6) {
      return `${t.jl}`
    }
    else if (month === 7) {
      return `${t.av}`
    }
    else if (month === 8) {
      return `${t.sp}`
    }
    else if (month === 9) {
      return `${t.oct}`
    }
    else if (month === 10) {
      return `${t.nv}`
    }
    else if (month === 11) {
      return `${t.dc}`
    }
  }
  let putMonth = getMonth()

  let getDayYear = new Date()
  let dayYear = [` ${getDayYear.getDate()}, ${getDayYear.getFullYear()}`]


  return (
    <div className={`${style.dashboardDiv} ${style[dashboard]}`}>
      <h1>{greeting}</h1>
      <nav className={style.dashboardMiniCont}>
        <h3 className={style.dashBoardDivH3}>{putMonth}{dayYear}</h3>
        <button onClick={openModal} >+
          <span>{t.spn}</span>
        </button>
      </nav>
      <div>
        {
          habit.map((items) => {
            return (
              <BlockOptions key={items.id} checkbox={items.checkbox} id={items.id} addHabitStickers={items.habitStickers} blockOptionClass={items.habitBgColor}  namee={items.name} dayss={items.day} change={items.percent} />
            )
          })
        }
      </div>
    </div>
  )
}
export default Dashboard




function BlockOptions({ namee, dayss,  blockOptionClass, change, addHabitStickers, id }) {
  const { habit, setHabit, dayInp,setDayInp, dayBt, setDayBt, editPercent , t,translation,changeLanguage,setChangeLanguage} = useContext(UserContext)

  return (
    <div className={style.blockOptions} style={{ backgroundColor: blockOptionClass }}>
      <nav className={style.nav1}>
        <h2>{addHabitStickers}</h2>
        <h2>{namee}</h2>
      </nav>



      <nav className={style.nav2}>
        <h3 className={style.nav2H3}>  {dayss} {t.dayStr}</h3>
 
 <MdDeleteForever className={style.dashIcons} onClick={()=>{
 const deleteHabit = habit.filter((item)=>{
    return(
      item.id !== id
      )
    })
    setHabit(deleteHabit)
 }} />


    
          <IoMdAddCircleOutline className={style.dashIcons}  onClick={() => {
            if(dayss <=0){
              alert(`${t.tp0}`)
              return
            }
            let  step = 100/dayss
            let newPercent = change + step
            if(newPercent >100){
              newPercent = 100
            }
            editPercent(id, Math.round(newPercent))
            
          }} />

      </nav>
      <div className={style.nav3}>
        <nav className={style.nav4}>
          <nav style={{ width: `${change}%` }} className={style.progress}></nav>
        </nav>
        <h3>{change}%</h3>
      </div>


    </div>



  )
}