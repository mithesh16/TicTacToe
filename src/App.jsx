import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './Components/NavBar'
import GameBoard from './Components/GameBoard'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='pt-5 flex flex-col items-center justify-center min-h-screen'>
  <NavBar />
  <div className='flex-grow'>
    <GameBoard />
  </div>
  <footer className='bg-blue-900 w-screen'>
    <div className='flex xl:flex-col items-center justify-center space-x-2'>
      <h1 className='text-xl text-gray-200'>More Games: </h1>
      <a href='https://wordleunlimitedweb.netlify.app/' target='blank' className='text-xl text-white font-bold'> Wordle</a>
    </div>
  </footer>
</div>
  )
}

export default App


