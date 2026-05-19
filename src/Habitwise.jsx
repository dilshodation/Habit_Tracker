import style from './Habitwise.module.css'
import { useState, useContext } from 'react'
import { UserContext } from './UserContext';
import { CiCirclePlus } from "react-icons/ci";


function Habitwise() {
  const { register } = useContext(UserContext)
  const [input1, setinput1] = useState('')
  const [input2, setinput2] = useState('')
  const [input3, setinput3] = useState('')
  const [input4, setinput4] = useState('')
  const [countId, setCountId] = useState(1)


  return (
    <div className={style.HabitwiseCard}>
      <div className={style.HabitwiseWrapper}>
        <h1>Welcome to Habitwise</h1>
        <div className={style.userPhotoDiv}>
          <CiCirclePlus className={style.icon} />

        </div>
        <h3 className={style.hh3}>Upload Profile Photo Optional </h3>
        <div className={style.inputsDiv}>


          <input onChange={(e) => {
            setinput1(e.target.value)
          }} placeholder='Your Name' type="text" name='name' />
          <input onChange={(e) => {
            setinput2(e.target.value)
          }} placeholder='Email Address' type="text" name='email' />
          <input onChange={(e) => {
            setinput3(e.target.value)
          }} placeholder='Create Password' type="text" name='password' />
          <input onChange={(e) => {
            setinput4(e.target.value)
          }} placeholder='+998-XX-XXX-XXXX' type="text" name='telephoneNumber' />

        </div>
        <button className={style.createBtn} onClick={() => {
          setCountId(countId+1)

          register(input1,input2,input3,input4,countId)
        }} >Create Account</button>
      </div>

    </div>
  )
}
export default Habitwise