import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Home from "./Components/pages/Home/home";
import Navbar from "./Components/parts/Navbar/navbar";
import Footer from "./Components/parts/Footer/footer";
import Painting from "./Components/pages/Painting/painting";
import Sculpture from "./Components/pages/Sculpture/sculpture";
import Photography from "./Components/pages/Photography/photography";
import Drawing from "./Components/pages/Drawing/drawing";
const Router=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/painting"} element={<Painting/>}></Route>
            <Route path={"/drawing"} element={<Drawing/>}></Route>
            <Route path={"/sculpture"} element={<Sculpture/>}></Route>
            <Route path={"/photography"} element={<Photography/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;