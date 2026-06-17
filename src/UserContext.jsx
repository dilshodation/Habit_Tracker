import js from "@eslint/js";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { data } from "react-router-dom";

export const UserContext = createContext();
function Provider({ children }) {

  const [inputs, setInputs] = useState([]);
  const [ThisUser, setThisUser] = useState([]);
  let [habit, setHabit] = useState([]);
  
  useEffect(()=>{
const getFromSessionStorage = sessionStorage.getItem(`ddd`);
setThisUser(JSON.parse(getFromSessionStorage))
  },[])

  useEffect(()=>{
    if(!ThisUser) return

    const userKey = `userKey ${ThisUser.id}` 
    
    const data = localStorage.getItem(userKey)
    if(data){
      
      setHabit(JSON.parse(data))
    }else{
      setHabit([])
    }
  },[ThisUser])

useEffect(()=>{
  if(!ThisUser) return
  const userKey = `userKey ${ThisUser.id}`
localStorage.setItem(userKey,JSON.stringify(habit))
},[habit])


function editPercent(id, newPercent) {
    const sanaString = new Date().toISOString().split('T')[0];
    console.log(sanaString)
    let updateHabit = habit.map((e) => {


      if (e.id === id) {
        
          return { ...e, percent:  newPercent}
        }
        
       return e 
      

    })
    setHabit(updateHabit)
  }


  function registerFunc(inpId, input1, input2, input3, input4) {

    setInputs([...inputs, {
      id: inpId,
      name: input1,
      email: input2,
      password: input3,
      telephoneNumber: input4
    }])
  }







  return (
    <UserContext.Provider value={{ habit, setHabit, inputs, registerFunc, editPercent, ThisUser, setThisUser }}>
      {children}
    </UserContext.Provider>
  )

}



export default Provider

