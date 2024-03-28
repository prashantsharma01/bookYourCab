import React, { useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landingpage from "./Components/LandingPage"
import Booking from "./Components/Booking"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
