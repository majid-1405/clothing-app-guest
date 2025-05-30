import { createRoot } from "react-dom/client";
import AboutUs from "./Aboutus";
import './custom1.css';
import Navbar from "../../layouts/Navbar";
createRoot(document.getElementById("root"))
    .render(
        <div> 
            <br/>
            <Navbar/>
            <AboutUs/>
       
            
        </div>
    )