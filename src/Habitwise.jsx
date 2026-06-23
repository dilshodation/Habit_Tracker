import style from './Habitwise.module.css'
import { useState, useContext } from 'react'
import { UserContext } from './UserContext';
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


function Habitwise() {
  const { registerFunc, inputs, setInputs, habit } = useContext(UserContext)
  const [input1, setInput1] = useState(``);
  const [input2, setInput2] = useState(``);
  const [input3, setInput3] = useState(``);
  const [input4, setInput4] = useState(``);
  const navigate = useNavigate()
  const [file, setFile] = useState()
  // function getFile(event) {
  //   setFile(URL.createObjectURL(event.target.files[0]))
  // }
  
  console.log(file)

  return (
    <div className={style.HabitwiseCard}>
      <div className={style.HabitwiseWrapper}>
        <h1>Welcome to Habitwise</h1>
        <div className={style.userPhotoDiv}>

          <input className={style.imgInp} type="file" onChange={(e)=>{
            // setFile(e.target.files[0].name)
              setFile(URL.createObjectURL(e.target.files[0]))
          }} />
          <img src={file} />

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
          }} placeholder='Create Password' type="password" name='password' />
          <input onChange={(e) => {
            setInput4(e.target.value)
          }} placeholder='+998-XX-XXX-XXXX' type="text" name='telephoneNumber' />

        </div>

        <button
          onClick={() => {
            registerFunc(file, input1, input2, input3, input4)
            function checkEmailFunc(item) {
              return item.email === input2
            }
            let checkEmail;
            let users = `users`
            let inputs;
            let get = JSON.parse(localStorage.getItem(users))
            if (input1 === `` || input2 === `` || input3 === `` || input4 === ``) {
              alert(`inputni toldiring`)
              return
            }
            if (get === null) {
              inputs = [
                {
                  id: Date.now(),
                  name: input1,
                  email: input2,
                  password: input3,
                  telephoneNumber: input4,
                  userImg: file
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
                  id: Date.now(),
                  name: input1,
                  email: input2,
                  password: input3,
                  telephoneNumber: input4,
                  userImg: file
                }
              ]
            }
            const str = JSON.stringify(inputs)
            localStorage.setItem(users, str)
            navigate(`/`)

          }}
        className={style.createBtn} >Create Account</button>
    </div>
    </div >
  )
}
export default Habitwise