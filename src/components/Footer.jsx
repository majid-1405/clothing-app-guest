import { FaPhone } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
            <footer className="footer bg-white text-black p-20">
            <div className=" text-center">
            <nav className="mb-4">
                    <a href="#home" className="mx-2 hover:underline ">Home</a>
                    <a href="#services" className="mx-2 hover:underline">Services</a>
                    <a href="#about" className="mx-2 hover:underline">About</a>
                    <a href="/Contactus" className="mx-2 hover:underline">Contact</a>
                </nav>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="ContactUs.html" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaPhone  className="transition hover:bg-gray-300 rounded-md"/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <AiFillInstagram className="transition hover:bg-gray-300 rounded-md"/>
                    </a>
                    <a href="https://www.email.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <MdEmail className="transition hover:bg-gray-300 rounded-md"/>
                    </a>
                </div>
                <p className="text-sm  font-gothic">© {new Date().getFullYear()} Clothing Store. All rights reserved.</p>
            </div>
        </footer>
    );
}