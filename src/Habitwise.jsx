import style from './Habitwise.module.css'
import { useState, useContext } from 'react'
import { UserContext } from './UserContext';
import { CiCirclePlus } from "react-icons/ci";


function Habitwise() {
  const { registerFunc, inputs, setInputs, habit } = useContext(UserContext)
  // const {inputs , setInputs} = useContext(UserContext)
  const [input1, setInput1] = useState(``);
  const [input2, setInput2] = useState(``);
  const [input3, setInput3] = useState(``);
  const [input4, setInput4] = useState(``);
  const [inpId, setInpId] = useState(1)


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
            setInput1(e.target.value)
          }} placeholder='Your Name' type="text" name='name' />
          <input onChange={(e) => {
            setInput2(e.target.value)
          }} placeholder='Email Address' type="text" name='email' />
          <input onChange={(e) => {
            setInput3(e.target.value)
          }} placeholder='Create Password' type="text" name='password' />
          <input onChange={(e) => {
            setInput4(e.target.value)
          }} placeholder='+998-XX-XXX-XXXX' type="text" name='telephoneNumber' />

        </div>

        <button
          onClick={() => {
            registerFunc(inpId, input1, input2, input3, input4)
            setInpId(inpId + 1)
            function checkEmailFunc(item) {
            return  item.email === input2
            }
            let checkEmail;
            let users = `users`
            let inputs;
            let get = JSON.parse(localStorage.getItem(users))
            if (get === null) {
              inputs = [
                {
                  id: inpId,
                  name: input1,
                  email: input2,
                  password: input3,
                  telephoneNumber: input4,
                  // habit:{
                  //   id: 1,
                  //   name: `Workout`,
                  //   day: 5,
                  //   percent: 0,
                  //   habitStickers: '🔥',
                  //   habitBgColor: '#3B82F6',
                  //   checkbox: false,
                  // }
                }
              ]
            } else {
              checkEmail = get.some(checkEmailFunc)
              if (checkEmail) {
               alert(`Boshqa email ishlating, bu email ishlatilgan`)
               return

              }
              inputs = [
                ...get,
                {
                  id: inpId,
                  name: input1,
                  email: input2,
                  password: input3,
                  telephoneNumber: input4
                }
              ]
            }
            const str = JSON.stringify(inputs)
            localStorage.setItem(users, str)

          }}
          className={style.createBtn} >Create Account</button>
      </div>
    </div>
  )
}
export default Habitwise