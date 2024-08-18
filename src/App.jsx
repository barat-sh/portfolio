import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Education from "./pages/Education.jsx";
import Build from "./pages/Build.jsx";

function App() {
  return (
    <>
            <BrowserRouter>
                <NavBar>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/work" element={<Work/>} />
                        <Route path="/education" element={<Education/>} />
                        <Route path="/build" element={<Build/>} />
                        {/*<Route path="/contact" element={<Home/>} />*/}
                    </Routes>
                </NavBar>
            </BrowserRouter>
    </>
  )
}

export default App
