import { createRoot } from "react-dom/client";
import ContactUs from "./Contactus";
import "../assets/tailwind.css";
import Navbar from "../../layouts/Navbar";
import './custom2.css';

createRoot(document.getElementById("root"))
    .render(
        <div> 
            <br/>
                <Navbar/>
                <ContactUs/>
            
        </div>
    )