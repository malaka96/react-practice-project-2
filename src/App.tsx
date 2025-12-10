import './App.css'
import Navbar from './components/Navbar';
import Detail from './pages/details/Detail';
import Favorite from './pages/favorite/favorite';
import Home from './pages/home/home'
import { Routes, Route, } from "react-router-dom";

function App() {

  return (
    <>
    <div className='p-5'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/favorite' element = {<Favorite/>}></Route>
        <Route path='/recipe-item/:id' element = {<Detail/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
