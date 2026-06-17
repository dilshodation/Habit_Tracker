import style from './AsideNavbar.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './UserContext'

function AsideNavbar() {
  const {file,setFile} = useContext(UserContext)
      let uer = JSON.parse(sessionStorage.getItem('ddd'))
      console.log(file)

  return (
    <div className={style.asideNavbarBigDiv}>
      <div className={style.asideBtnsDiv1}>
        <button></button>
        <button>Dashboard</button>
        <button >Analytics</button>
        <button>Settings</button>
        <nav className={style.navvv}>

       
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