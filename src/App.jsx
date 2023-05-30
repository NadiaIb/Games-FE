import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from "./components/NavBar"
import Header from './components/Header'
import Reviews from './components/Reviews'

function App() {

  return (
    <BrowserRouter>
    <>
        <Header/>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Reviews/>} />
        {/* <Route path="/users" element={<Users/>} />
        <Route path="/users-login" element={<Users/>} /> */}
      </Routes>
    </>
  </BrowserRouter>
  )
}

export default App
