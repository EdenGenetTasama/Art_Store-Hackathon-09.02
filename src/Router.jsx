import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Home from "./Components/pages/Home/home";
import Navbar from "./Components/parts/Navbar/navbar";
import Footer from "./Components/parts/Footer/footer";

const Router=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;