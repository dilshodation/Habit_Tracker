import { Routes, Route, } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import A from "./components/A"

import style from './App.module.css'
import LogIn from './LogIn'
import Habitwise from './Habitwise'
function App() {
const {aTheme} = useContext(UserContext)

  return (

    <>


      <main className={style[aTheme]}>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/A' element={<A />} />
          <Route path='/Habitwise' element={<Habitwise />} />
        </Routes>
      </main>
    </>

  )
}

export default App