import { Routes, Route, } from 'react-router-dom'
import './App.css'
import A from "./components/A"

import style from './App.module.css'
import LogIn from './LogIn'
import Habitwise from './Habitwise'
function App() {


  return (

    <>


      <main>
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