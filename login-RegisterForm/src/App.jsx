import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
