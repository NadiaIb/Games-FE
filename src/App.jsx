import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import ReviewCard from "./components/ReviewCard";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState("grumpy19");

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar userId={userId} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route
            path="/reviews/:review_id"
            element={<ReviewCard userId={userId} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
