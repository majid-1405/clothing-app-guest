import { createRoot } from "react-dom/client";
import HomePage from "./Homepage";
import './custom.css';
import Navbar from "../../layouts/Navbar";
import '../../assets/tailwind.css';
import Footer from "../../layouts/Footer";
import HeroSection from "../../layouts/HeroSection";


createRoot(document.getElementById("root"))
    .render(
        <div> 
            <Navbar/>
            <HeroSection/>
            <HomePage/>
            <Footer/>
                     
        </div>
    )