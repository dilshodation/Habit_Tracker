import { createContext,useState } from "react";


export const UserContext = createContext();

function Provider ({children}){

  const [inputs,setinputs] = useState([])

  let [habit, setHabit] = useState([
    {
      id: 1,
      name: `Workout`,
      day: 5,
      percent: 80,
      habitStickers: '🔥',
      habitBgColor: '#3B82F6'
    },
    {
      id: 2,
      name: `Read`,
      day: 12,
      percent: 50,
      habitStickers: '📖',
      habitBgColor: '#22C55E'
    },
    {
      id: 3,
      name: `Meditate`,
      day: 3,
      percent: 30,
      habitStickers: '🧘‍♂️',
      habitBgColor: '#7B61FF'

    }
    
  ]);
  function edit(id,percent){
  //  let changePercent = habit.find((r)=>{
  //   return(
  //       r.id === id
  //   )
  //   })
  //   console.log(changePercent.percent)
  //   console.log(percent)
  //   setHabit([])
    console.log(habit)
  }
  function register (input1,input2,input3,input4,countId){
    setinputs([...inputs,
    
        {
          id: countId,
          name: input1,
          email: input2,
          password: input3,
          telephoneNumber: input4
        }
      
    ])
  }

  return(
    <UserContext.Provider value={{habit, setHabit,edit,register,inputs}}>
      {children}
    </UserContext.Provider>
  )



}


export default Provider