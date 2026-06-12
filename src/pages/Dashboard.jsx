import style from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';


function Dashboard({ openModal }) {
  const { setHabit, habit } = useContext(UserContext)
  let getGreeting = () => {
    let hours = new Date().getHours()
    if (
      hours >= 0 && hours < 12
    ) {
      return `Good Morning!`
    }
    else if (hours >= 12 && hours < 18) {
      return `Good Afternoon`
    }
    else {
      return `Good Evening`
    }
  }
  let greeting = getGreeting()
  let getMonth = () => {
    let month = new Date().getMonth()
    if (month === 0) {
      return `January`
    }
    else if (month === 1) {
      return `February`
    }
    else if (month === 2) {
      return `March`
    }
    else if (month === 3) {
      return `April`
    }
    else if (month === 4) {
      return `May`
    }
    else if (month === 5) {
      return `June`
    }
    else if (month === 6) {
      return `July`
    }
    else if (month === 7) {
      return `August`
    }
    else if (month === 8) {
      return `September`
    }
    else if (month === 9) {
      return `October`
    }
    else if (month === 10) {
      return `November`
    }
    else if (month === 11) {
      return `December`
    }
  }
  let putMonth = getMonth()

  let getDayYear = new Date()
  let dayYear = [` ${getDayYear.getDate()}, ${getDayYear.getFullYear()}`]


  return (
    <div className={style.dashboardDiv}>
      <h1>{greeting}</h1>
      <nav className={style.dashboardMiniCont}>
        <h3 className={style.dashBoardDivH3}>{putMonth}{dayYear}</h3>
        <button onClick={openModal} >+
          <span>Add a new Habit</span>
        </button>
      </nav>
      <div>
        {
          habit.map((items) => {
            return (
              <BlockOptions key={items.id} checkbox={items.checkbox} id={items.id} addHabitStickers={items.habitStickers} blockOptionClass={items.habitBgColor} namee={items.name} dayss={items.day} change={items.percent} />
            )
          })
        }
      </div>
    </div>
  )
}
export default Dashboard




function BlockOptions({ namee, dayss, blockOptionClass, change, addHabitStickers, id }) {
  const { habit, setHabit, editPercent } = useContext(UserContext)

  return (
    <div className={style.blockOptions} style={{ backgroundColor: blockOptionClass }}>
      <nav className={style.nav1}>
        <h2>{addHabitStickers}</h2>
        <h2>{namee}</h2>
      </nav>



      <nav className={style.nav2}>
        <h3 className={style.nav2H3}>  {dayss} days streak</h3>
 <button style={{fontSize: `12px` }} onClick={()=>{
 const deleteHabit = habit.filter((item)=>{
    return(
      item.id !== id
      )
    })
    setHabit(deleteHabit)
 }}>del</button>
       <button 
          onClick={() => {
            editPercent(id, Math.round(100 / dayss))
          }}>add</button>
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