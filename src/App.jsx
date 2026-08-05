import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Top, Hero, About, Projects, Services, Contact } from './components/pages'

function App() {
  const [count, setCount] = useState(0)
  const [menu, setMenu] = useState('')

  return (
    <>
      <Top />
      <Navbar menu={menu} setMenu={setMenu} />
      <Routes>
        <Route exact path='/' element={<Hero setMenu={setMenu} />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
