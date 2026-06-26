import style from './LogIn.module.css'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function LogIn() {


  const { inputs, setThisUser, file, setFile, t, translation, changeLanguage, setChangeLanguage } = useContext(UserContext)


  const navigate = useNavigate()

  const [logInp1, setLogInp1] = useState(``);
  const [logInp2, setLogInp2] = useState(``);

  const handleLogin = () => {


    let users = `users`

    let getLocalStorage = JSON.parse(localStorage.getItem(users)) || []
    let returnArray = getLocalStorage.find((item) => {

      return (
        item.email === logInp1 && item.password === logInp2
      )
    })

    if (returnArray) {
      alert(`${t.crInf}`)

      // sesionStorage yuborobmiz har ehtimolga qarshi (agar noxos foydalanuvchi sahifani yangilasa!)
      sessionStorage.setItem(`ddd`, JSON.stringify(returnArray))

      setThisUser(returnArray)
      navigate(`/A`)
    }
    else {
      alert(`${t.incrInf}`)
    }
  }


  return (
    <div className={style.LogInBigDiv}>
      <div className={style.LogInWrapperDiv}>
        <h1>{t.lgIn}</h1>
        <h3 className={style.LogInWrapperH3}>{t.welBa}</h3>

        <div className={style.LogInInputsDiv}>
          <h3 className={style.inpH3}>{t.eAdr}</h3>
          <input onChange={(e) => {
            setLogInp1(e.target.value)
          }} type="text" placeholder='@email.com' />
          <h3 className={style.inpH3}>{t.pasw}</h3>
          <input onChange={(e) => {
            setLogInp2(e.target.value)
          }} type="password" />

        </div>
        <h4 className={style.forgotPasswordH4}>{t.forgPasw}</h4>
        <button onClick={handleLogin}>{t.acsAc}</button>
        <div className={style.downLinksDiv}>
          <a href="">{t.nwUsr}</a>
          <h4 className={style.downLinksDivH4}><Link to={`/Habitwise`}>{t.crtAc}</Link>
          </h4>
        </div>
      </div>
    </div>
  )
}
export default LogIn