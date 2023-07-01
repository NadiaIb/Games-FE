import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import ReviewCard from "./components/ReviewCard";
import Users from "./components/Users";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState("grumpy19")
  const [userList, setUserList] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar isUserLoggedIn={isUserLoggedIn} user={user} userId={userId} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route
            path="/reviews/:review_id"
            element={
              <ReviewCard
                userList={userList}
                setUserList={setUserList}
                isUserLoggedIn={isUserLoggedIn}
                setIsUserLoggedIn={setIsUserLoggedIn}
                user={user}
                setUser={setUser}
                userId={userId}
              />
            }
          />
          <Route
            path="/users"
            element={
              <Users
                userList={userList}
                setUserList={setUserList}
                isUserLoggedIn={isUserLoggedIn}
                setIsUserLoggedIn={setIsUserLoggedIn}
                user={user}
                setUser={setUser}
              />
            }
          />
          {/* <Route path="/categories" element={<SortCategory/>} /> */}
          {/* <Route path="/users-login" element={<Users/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
