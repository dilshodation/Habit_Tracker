import js from "@eslint/js";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { data } from "react-router-dom";

export const UserContext = createContext();
function Provider({ children }) {

  const [inputs, setInputs] = useState([]);
  const [ThisUser, setThisUser] = useState([]);
  let [habit, setHabit] = useState([]);
  const [asideNavbarTheme, setAsideNavbarTheme] = useState(``)
  const [aTheme, setAtheme] = useState(``)
  const [heatmap, setHeatmap] = useState(``)
  const [calendar, setCalendar] = useState(``)
  const [dashboard, setDashboard] = useState(``)
  const [stats, setStats] = useState(``)

  // foydalanuvchi sahifani yangilaganda , ma'lumotlar o'chib ketmasligi uchun
  useEffect(() => {
    const getFromSessionStorage = sessionStorage.getItem(`ddd`);
    setThisUser(JSON.parse(getFromSessionStorage))
  }, [])


  // habitarni olish uchun
  useEffect(() => {
    if (!ThisUser) return

    const userKey = `userKey ${ThisUser.id}`

    const data = localStorage.getItem(userKey)
    if (data) {
      setHabit(JSON.parse(data))
    } else {
      setHabit([])
    }
  }, [ThisUser])

  // ==================================open===========================================

  useEffect(() => {
    if (!ThisUser) return

    const userKey = `keyTheme_${ThisUser.id}`

    const data = localStorage.getItem(userKey)
    if (data) {
      const themeDate = JSON.parse(data)

      setAsideNavbarTheme(themeDate.asideNavbarTheme)
      setAtheme(themeDate.aTheme)
      setCalendar(themeDate.calendar)
      setDashboard(themeDate.dashboard)
      setHeatmap(themeDate.heatmap)
      setStats(themeDate.stats)
    } else {
      setAsideNavbarTheme('')
      setAtheme(``)
      setCalendar(``)
      setDashboard(``)
      setHeatmap(``)
      setStats(``)
    }
  }, [ThisUser])
  // ====================================close=========================================

  useEffect(() => {
    if (!ThisUser) return
    const userKey = `userKey ${ThisUser.id}`
    localStorage.setItem(userKey, JSON.stringify(habit))
  }, [habit])

  // =======================================open======================================
  useEffect(() => {
    if (!ThisUser) return
    const userKey = `keyTheme_${ThisUser.id}`
    const allThemes = {
      asideNavbarTheme,
      aTheme,
      heatmap,
      calendar,
      stats,
      dashboard
    }
    localStorage.setItem(userKey, JSON.stringify(allThemes))
  }, [asideNavbarTheme,
    aTheme,
    heatmap,
    calendar,
    stats,
    dashboard])
  // ======================================close=======================================


  function editPercent(id, newPercent) {
    const sanaString = new Date().toISOString().split('T')[0];
    console.log(sanaString)
    let updateHabit = habit.map((e) => {


      if (e.id === id) {

        return { ...e, percent: newPercent }
      }

      return e


    })
    setHabit(updateHabit)
  }


  function registerFunc(inpId, input1, input2, input3, input4) {

    setInputs([...inputs, {
      id: inpId,
      name: input1,
      email: input2,
      password: input3,
      telephoneNumber: input4
    }])
  }



  function changeTheme() {
    if (asideNavbarTheme === '' || aTheme === '' || heatmap === `` || calendar === `` || dashboard === `` || stats === ``) {
      setAsideNavbarTheme('BgColor')
      setAtheme(`aTheme`)
      setHeatmap(`heatmapTheme`)
      setCalendar(`calendarTheme`)
      setDashboard(`dashboardTheme`)
      setStats(`statsTheme`)

      // setgbBTN('BgColor')
    }
    else {
      setAsideNavbarTheme('')
      setAtheme(``)
      setHeatmap(``)
      setCalendar(``)
      setDashboard(``)
      setStats(``)
      // setgbBTN('')

    }
  }




  return (
    <UserContext.Provider value={{ habit, setHabit, inputs, registerFunc, editPercent, ThisUser, setThisUser, changeTheme, asideNavbarTheme, aTheme, heatmap, calendar, dashboard, stats }}>
      {children}
    </UserContext.Provider>
  )

}



export default Provider

