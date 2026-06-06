import style from './Stats.module.css'
import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import {Link} from 'react-router-dom'

function Stats (){
  const {habit} = useContext(UserContext)
  // function reducee(pr1,pr2){
  //   return pr1+pr2.day
  // }
  // let varrr = habit.reduce(reducee)
  // console.log(varrr)
  return(

    <div className={style.statsMainDiv}>
<h2>My Overview</h2>
<div className={style.statsDiv}>

  <div className={style.statsSmallDiv}>
<h3>Total Habits</h3>
<h1 className={style.statsTotalHabits}>{5}</h1>
<p>Active Habits</p>
  </div>
  <div className={style.statsSmallDiv}>
    <h3>Longest Streak</h3>
    <h1 className={style.statsLongestStreakNumber}> 0 days</h1>
    <p className={style.statsLongestStreakString}>RUn</p>
  </div>
  <div className={style.statsSmallDiv}>
    <h3>Completion %</h3>
    <h1 className={style.statsCompletion}>24%</h1>
    <p>This month</p>
  </div>
</div>
    </div>
  )
}

export default Stats