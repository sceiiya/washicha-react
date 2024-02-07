import "./App.css"
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async"
import Home from "./views/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Zample from "./components/Zample"


function App() {
  return (
    <>
      <HelmetProvider>
      <Navbar />
      <main className="w-full p-0 m-0 [&>*:nth-child(even z)]:bg-[#87f86794]">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/zam " element={<Zample />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
            <Route path="/" element={<Navigate to="/home" />}></Route>
          </Routes>
        </Router>
      </main>
      <Footer />
      </HelmetProvider>
    </>
  )
}

export default App