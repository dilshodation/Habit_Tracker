import { useContext , useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();
function Provider({ children }) {

  const [inputs, setInputs] = useState([]);
  const [ThisUser, setThisUser] = useState([]);
  // sessionStorage.setItem(`ddd`, ThisUser.name)
//  const dd = sessionStorage.getItem(`ddd`)
//  console.log(dd)
//  console.log(ThisUser)

//  console.log(sesStor)
// sessionStorage.setItem(`key`,`dilshodation`)
// alert(sessionStorage.getItem(`key`))

  let [habit, setHabit] = useState([
    {
      id: 1,
      name: `Workout`,
      day: 5,
      percent: 0,
      habitStickers: '🔥',
      habitBgColor: '#3B82F6',
      checkbox: false,
    }
  ]);


  function editPercent(id, percent) {
    let editPercent = habit.map((e) => {


      if (e.id === id) {
        if (e.checkbox === false) {
          return { ...e, percent: percent, checkbox: !e.checkbox }

        }
        else {
          return { ...e, percent: percent - percent, checkbox: !e.checkbox }

        }
      }
      else {
        return { ...e }
      }

    })
    setHabit(editPercent)
  }


 function registerFunc(inpId, input1, input2, input3, input4){

  setInputs([...inputs,{
    id : inpId,
    name: input1,
    email : input2,
    password : input3,
    telephoneNumber : input4
  }])
}

    





  return (
    <UserContext.Provider value={{ habit, setHabit, inputs, registerFunc, editPercent,ThisUser, setThisUser}}>
      {children}
    </UserContext.Provider>
  )

}



export default Provider

