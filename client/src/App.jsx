/* eslint-disable react/jsx-no-undef */
import "./assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MenuTracks from "./pages/MenuTracks";
import Blog from "./pages/Blog";
import GetStarted from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Create from "./pages/Create";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MenuTracks" element={<MenuTracks />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/GetStarted" element={<GetStarted />} /> 
            <Route path="/SignIn" element={<SignIn />} />  {/* Add SignIn component here */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
