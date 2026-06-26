import style from './Stats.module.css'
import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import {Link} from 'react-router-dom'

function Stats (){
  const {habit,stats,t, changeLanguage,setChangeLanguage,translation} = useContext(UserContext)


  let LongestStreakVariable = habit.reduce((day1, day2)=>{
if(day1 > day2.day){
  return day1
}else{
 return day2.day
}
  },0)

  let CompletionVariable = habit.reduce((percent1,percent2)=>{
    if(percent1 > percent2.percent){
      return percent1
    }else{
      return percent2.percent
    }
  },0)
 
  return(

    <div className={`${style.statsMainDiv} ${style[stats]}`}>
<h2>{t.myOver}</h2>
<div className={style.statsDiv}>

  <div className={style.statsSmallDiv}>
<h3>{t.totHab}</h3>
<h1 className={style.statsTotalHabits}>{habit.length}</h1>
<p>{t.actHab}</p>
  </div>
  <div className={style.statsSmallDiv}>
    <h3>{t.longstr}</h3>
    <h1 className={style.statsLongestStreakNumber}> {LongestStreakVariable} days</h1>
    <p className={style.statsLongestStreakString}>RUn</p>
  </div>
  <div className={style.statsSmallDiv}>
    <h3>{t.compl} %</h3>
    <h1 className={style.statsCompletion}>{CompletionVariable}%</h1>
    <p>{t.thsMon}</p>
  </div>
</div>
    </div>
  )
}

export default Stats