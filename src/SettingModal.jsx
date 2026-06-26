import style from './SettingModal.module.css'
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { TiPencil } from "react-icons/ti";
import { IoEarthOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useState } from 'react';




function SettingModal({ closeSetting }) {
  const { changeTheme, LogoutFunc, setting, changeLanguage, translation ,t,setChangeLanguage} = useContext(UserContext)
 
  return (
    <div className={`${style.mainDiv} ${style[setting]}`}>
      <div className={style.settingDiv}>
        <h1>{t.title}</h1>
        <h1 className={style.iksBtn} onClick={closeSetting}>X</h1>
      </div>
      <p>{t.p1}</p>
      <div className={style.optionDivs}>

        <div className={style.opt}>
          <div className={style.div1}>
            <TiPencil className={style.pencilIcon} />

            <div className={style.div2}>
              <h2>{t.theme}</h2>
              <p>{t.p2}</p>
            </div>
          </div>
          <input onChange={() => {
            changeTheme()
            changeLanguage()


          }} className={style.checkboxInp} type="checkbox" />
        </div>

        <div className={style.opt}>
          <div className={style.div1}>
            <IoEarthOutline className={style.earthIcon} />
            <div className={style.div2}>
              <h2>{t.language}</h2>
              <p>{t.p2}</p>
            </div>
          </div>
          <select onChange={(e) => {
            setChangeLanguage(e.target.value)
          }}>
            <option value="English">English</option>
            <option value="Russian">Russian</option>
            <option value="Uzbek">Uzbek</option>
          </select>
        </div>

        <div className={style.opt}>
          <div className={style.div1}>
            <MdLogout className={style.logOutIcon} />
            <div className={style.div2}>
              <h2>{t.logout}</h2>
              <p>{t.p4}</p>
            </div>
          </div>
          <button onClick={() => {
            if (confirm(`${t.wntLg}`)) {
              LogoutFunc()

            } else {
              alert(`${t.mtv}`)
            }
          }

          }>Logout</button>
        </div>

      </div>
    </div>
  )
}
export default SettingModal


