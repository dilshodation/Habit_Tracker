import style from './Habitwise.module.css'
import { useState, useContext } from 'react'
import { UserContext } from './UserContext';
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


function Habitwise() {
  const { registerFunc, inputs, setInputs, habit, t, translation, changeLanguage, setChangeLanguage } = useContext(UserContext)
  const [input1, setInput1] = useState(``);
  const [input2, setInput2] = useState(``);
  const [input3, setInput3] = useState(``);
  const [input4, setInput4] = useState(``);
  const navigate = useNavigate()
  const [imgg, setImgg] = useState()


  // console.log(imgg)

  return (
    <div className={style.HabitwiseCard}>
      <div className={style.HabitwiseWrapper}>
        <h1>{t.hbtWs}</h1>
        <div className={style.userPhotoDiv}>

          <input type="file" onChange={(e) => {
          
            const filee = e.target.files[0]
            const renderr = new FileReader()
            renderr.onloadend = function () {
              const rasm = renderr.result
              console.log(rasm)
              setImgg(rasm)
            }
            renderr.readAsDataURL(filee)
          }} />
          <img  className={style.imgInp} src={imgg} />

        </div>

        <h3 className={style.hh3}>{t.imgUpl}</h3>
        <div className={style.inputsDiv}>


          <input onChange={(e) => {
            setInput1(e.target.value)
          }} placeholder={t.yrNm}  type="text" name='name' />
          <input onChange={(e) => {
            setInput2(e.target.value)
          }} placeholder={t.emAdr}  type="text" name='email' />
          <input onChange={(e) => {
            setInput3(e.target.value)
          }} placeholder={t.crtPasw} type="password" name='password' />
          <input onChange={(e) => {
            setInput4(e.target.value)
          }} placeholder='+998-XX-XXX-XXXX' type="text" name='telephoneNumber' />

        </div>

        <button
          onClick={() => {
            registerFunc( input1, input2, input3, input4,imgg)
            function checkEmailFunc(item) {
              return item.email === input2
            }
            let checkEmail;
            let users = `users`
            let inputs;
            let get = JSON.parse(localStorage.getItem(users))
            if (input1 === `` || input2 === `` || input3 === `` || input4 === ``) {
              if(!imgg)
              alert(`${t.flInp}`)
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
                  userImg: imgg
                }
              ]
            } else {
              checkEmail = get.some(checkEmailFunc)
              if (checkEmail) {
                alert(`${t.anEm}`)
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
                  userImg: imgg
                }
              ]
            }
            const str = JSON.stringify(inputs)
            localStorage.setItem(users, str)
            navigate(`/`)

          }}
          className={style.createBtn} >{t.crAc}</button>
      </div>
    </div >
  )
}
export default Habitwise