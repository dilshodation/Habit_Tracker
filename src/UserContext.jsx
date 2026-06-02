import { useContext } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();
function Provider({ children }) {

  const [inputs, setInputs] = useState([]);
  const [logInputs, setLogInputs] = useState([]);


  let [habit, setHabit] = useState([
    {
      id: 1,
      name: `Workout`,
      day: 5,
      percent: 0,
      habitStickers: '🔥',
      habitBgColor: '#3B82F6',
      checkbox: false

    },
    // {
    //   id: 2,
    //   name: `Read`,
    //   day: 12,
    //   percent: 50,
    //   habitStickers: '📖',
    //   habitBgColor: '#22C55E',
    //   checkbox: false

    // },
    // {
    //   id: 3,
    //   name: `Meditate`,
    //   day: 3,
    //   percent: 30,
    //   habitStickers: '🧘‍♂️',
    //   habitBgColor: '#7B61FF',
    //   checkbox: false



    // }

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

  // function LogInFunc(logInpEmail,logInpPassword) {
    
  // }




  return (
    //// savol: nimaga inputs chaqiriklgan , setInputs emas
    <UserContext.Provider value={{ habit, setHabit, inputs, registerFunc, editPercent ,setLogInputs, logInputs }}>
      {children}
    </UserContext.Provider>
  )

}



export default Provider