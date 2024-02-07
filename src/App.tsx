import "./App.css"
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async"
import Zample from "./components/Zample"
import Home from "./views/Home"


function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Zample />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App