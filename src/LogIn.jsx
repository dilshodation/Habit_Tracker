import style from './LogIn.module.css'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
function LogIn() {
  
  
  const { inputs,setThisUser, file, setFile} = useContext(UserContext)
  
  
const navigate = useNavigate()

const [logInp1, setLogInp1] = useState(``);
const [logInp2, setLogInp2] = useState(``);

const handleLogin =()=>{
  
  
 let users = `users`

 let getLocalStorage = JSON.parse(localStorage.getItem(users))
 let returnArray = getLocalStorage.find((item)=>{
   
   return(
     item.email === logInp1 && item.password === logInp2
     )
    })

if (returnArray){
alert(`Hamma Ma'lumot to'gri`)
sessionStorage.setItem(`ddd`, JSON.stringify(returnArray))
setThisUser(returnArray)
navigate(`/A`)
}
else{
  alert(`Ma'lumot xato`)
}
}
 

return (
  <div className={style.LogInBigDiv}>
      <div className={style.LogInWrapperDiv}>
        <h1>Log In</h1>
        <h3 className={style.LogInWrapperH3}>Welcome back,{inputs[0]?.name} ! Please enter your
          credentials to access your dashboard.</h3>

        <div className={style.LogInInputsDiv}>
          <h3 className={style.inpH3}>Email Adress</h3>
          <input onChange={(e) => {
            setLogInp1(e.target.value)
          }} type="text" placeholder='@email.com' />
          <h3 className={style.inpH3}>Password</h3>
          <input onChange={(e) => {
            setLogInp2(e.target.value)
          }} type="password" />

        </div>
        <h4 className={style.forgotPasswordH4}>Forgot Password</h4>
        <button onClick={handleLogin}>
          Access Dashboard
        </button>
        <div className={style.downLinksDiv}>
          <a href="">New user?</a>
          <h4 className={style.downLinksDivH4}><Link to={`/Habitwise`}>Create your account</Link>
</h4>
        </div>
      </div>
    </div>
  )
}
export default LogIn