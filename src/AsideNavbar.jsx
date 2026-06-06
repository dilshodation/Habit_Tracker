import style from './AsideNavbar.module.css'
import { Link } from 'react-router-dom'
// import { use, useState,useEffect } from 'react'
// import { UserContext } from './UserContext'
// import { useContext } from 'react'
function AsideNavbar() {
  // const { inputs,ThisUser } = useContext(UserContext)
      let uer = JSON.parse(sessionStorage.getItem('ddd'))
  console.log(uer.name)
  return (
    <div className={style.asideNavbarBigDiv}>
      {/* <h1 className={style.hh1}>oeeeeeeee</h1> */}
      <div className={style.asideBtnsDiv1}>
        <button></button>
        <button><Link to={'Dashboard'}>Dashboard</Link></button>
        <button>Analytics</button>
        <button>Settings</button>
        <nav className={style.navvv}>

          {/* <Link to={'/Habitwise'}>Habitwise</Link> */}
          {/* <Link to={'/AsideNavbar'}>AsideNavbar</Link> */}
          {/* <Link to={'/'}>LogIn</Link> */}
          {/* <Link to={'Stats'}>Stats</Link> */}
        </nav>
      </div>
      <div className={style.asideBtnsDiv2}>
        <button></button>
        <h3>{uer.name}</h3>
      </div>
    </div>
  )
}
export default AsideNavbar