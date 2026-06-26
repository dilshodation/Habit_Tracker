import style from './AsideNavbar.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './UserContext'

function AsideNavbar({openSetting}) {
  const {file,setFile ,asideNavbarTheme} = useContext(UserContext)
      let uer = JSON.parse(sessionStorage.getItem('ddd'))
  return (
    <div className={`${style.asideNavbarBigDiv} ${style[asideNavbarTheme]}`}>
      <div className={style.asideBtnsDiv1}>
        {/* <button className={style[asideNavbarTheme]}></button> */}
        <button className={style[asideNavbarTheme]}>Dashboard</button>
        <button className={style[asideNavbarTheme]} >Analytics</button>
        <button className={style[asideNavbarTheme]} onClick={openSetting}>Settings</button>
        <nav className={style.navvv}>

       
        </nav>
      </div>
      <div className={style.asideBtnsDiv2}>
        <button className={style[asideNavbarTheme]}></button>
        
        <h3>{uer.name}</h3>
      </div>
    </div>
  )
}
export default AsideNavbar