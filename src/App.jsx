import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from "./components/NavBar"
import Header from './components/Header'
import Reviews from './components/Reviews'
import ReviewCard from './components/ReviewCard'
import Users from './components/Users'

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
        <NavBar/>
        <Header/>
      <Routes>
        <Route path="/" element={<Reviews/>} />
        <Route path="/reviews/:review_id" element={<ReviewCard/>} />
        <Route path="/users" element={<Users/>} />
        {/* <Route path="/users-login" element={<Users/>} /> */}
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
