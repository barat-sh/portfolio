import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";

function App() {
  return (
    <>
            <BrowserRouter>
                <NavBar>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/work" element={<Work/>} />
                        {/*<Route path="/education" element={<Home/>} />*/}
                        {/*<Route path="/blog" element={<Home/>} />*/}
                        {/*<Route path="/contact" element={<Home/>} />*/}
                    </Routes>
                </NavBar>
            </BrowserRouter>
    </>
  )
}

export default App
