import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(){
    return(
        <div id="app-container" className="bg-gray-100 min-h-screen flex">    
        <div id="layout-wrapper" className="flex flex-row flex-1">
            <Navbar/>
            <div id="main-content" className="flex-1 p-4">
                
            
                <Outlet/>

                <Footer/>    
            </div>
        </div>     
    </div>
    )
}