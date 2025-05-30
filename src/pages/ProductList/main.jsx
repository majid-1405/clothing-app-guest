import { createRoot } from "react-dom/client";
import '../../assets/tailwind.css';
import ProductListSearchFilter from "../ProductList/ProductListSearchFilter"
import Navbar from "../../layouts/Navbar";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Navbar/>
            <ProductListSearchFilter/>
            
        </div>
    )