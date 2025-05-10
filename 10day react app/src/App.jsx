import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import Button from './Button'
// import Button from './button'
function App() {
  let a = 100;
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>hello wiord</h1>
      <p>{1+1}</p>
      <p style={{color:"yellow"}}>{a}</p>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
