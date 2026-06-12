import style from './Stats.module.css'
import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import {Link} from 'react-router-dom'

function Stats (){
  const {habit} = useContext(UserContext)


  let LongestStreakVariable = habit.reduce((day1, day2)=>{
if(day1 > day2.day){
  return day1
}else{
 return day2.day
}
  },0)
  // console.log(LongestStreakVariable)

  let CompletionVariable = habit.reduce((percent1,percent2)=>{
    if(percent1 > percent2.percent){
      return percent1
    }else{
      return percent2.percent
    }
  },0)
  // console.log(CompletionVariable)
 
  return(

    <div className={style.statsMainDiv}>
<h2>My Overview</h2>
<div className={style.statsDiv}>

  <div className={style.statsSmallDiv}>
<h3>Total Habits</h3>
<h1 className={style.statsTotalHabits}>{habit.length}</h1>
<p>Active Habits</p>
  </div>
  <div className={style.statsSmallDiv}>
    <h3>Longest Streak</h3>
    <h1 className={style.statsLongestStreakNumber}> {LongestStreakVariable} days</h1>
    <p className={style.statsLongestStreakString}>RUn</p>
  </div>
  <div className={style.statsSmallDiv}>
    <h3>Completion %</h3>
    <h1 className={style.statsCompletion}>{CompletionVariable}%</h1>
    <p>This month</p>
  </div>
</div>
    </div>
  )
}

export default Stats