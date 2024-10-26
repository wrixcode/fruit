import { useState } from 'react'

import './App.css'
import Navbar from './Container/Navbar/Navbar'
import Hero from './Container/Hero/Hero'
import Menu from './Container/Menu/Menu'
import Banner from './Container/Banner/Banner'
import Banner2 from './Container/Banner2/Banner2'
import Banner3 from './Container/Banner3/Banner3'
import Footer from './Container/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Hero/>
<Menu/>
<Banner/>
<Banner2/>
<Banner3/>
<Footer/>
    </>
  )
}

export default App
