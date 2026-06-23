import style from './SettingModal.module.css'
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { TiPencil } from "react-icons/ti";
import { IoEarthOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";




function SettingModal({ closeSetting }) {
  const {changeTheme} = useContext(UserContext)
  return (
    <div className={style.mainDiv}>
      <div className={style.settingDiv}>
        <h1>Settings</h1>
        <h1 className={style.iksBtn} onClick={closeSetting}>X</h1>
      </div>
      <p>Manage your preferences and account</p>
      <div className={style.optionDivs}>

        <div className={style.opt}>
          <div className={style.div1}>
          <TiPencil className={style.pencilIcon} />

            <div className={style.div2}>
              <h2>Theme</h2>
              <p>Choose your preferred appearance</p>
            </div>
          </div>
          <input onChange={()=>{
            changeTheme()
            
            
          }} className={style.checkboxInp} type="checkbox" />
        </div>

        <div className={style.opt}>
          <div className={style.div1}>
          <IoEarthOutline className={style.earthIcon} />
            <div className={style.div2}>
              <h2>Language</h2>
              <p>Select your preferred language</p>
            </div>
          </div>
          <select name="" id="">
            <option value="English">English</option>
            <option value="Russian">Russian</option>
            <option value="Uzbek">Uzbek</option>
          </select>
        </div>

        <div className={style.opt}>
          <div className={style.div1}>
          <MdLogout className={style.logOutIcon} />
            <div className={style.div2}>
              <h2>Logout</h2>
              <p>Sign out from your account</p>
            </div>
          </div>
          <button>Logout</button>
        </div>

      </div>
    </div>
  )
}
export default SettingModal