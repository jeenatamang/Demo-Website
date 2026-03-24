import { NavLink } from 'react-router-dom';
import { FaFacebook, FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaYoutube,  FaInstagramSquare, FaTiktok, FaWhatsappSquare, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-200 bottom-0 w-full px-2 py-10 mt-10">
            <div className="flex justify-between items-stretch my-10 mx-auto text-center">
                <div className="flex flex-col text-start px-2">
                <h4 className="text-5xl font-bold mt-5">EduNepal</h4>
                <span className="text-gray-300 text-wrap">Welcome! Explore our courses and <br></br>find the perfect path for you.</span>
                <ul className="flex items-center justify-start space-x-2 mb-4">
                <li><NavLink to="https://www.facebook.com" className="mx-2 hover:text-gray-400 "><FaFacebook  className="text-2xl text-white "/></NavLink></li>
                <li><NavLink to="https://www.twitter.com" className="mx-2 hover:text-gray-400"><FaSquareXTwitter className="text-2xl text-white "/></NavLink></li>
                <li><NavLink to="https://www.youtube.com" className="mx-2 hover:text-gray-400"><FaYoutube className="text-2xl text-white bg-red-600 rounded-full "/></NavLink></li>
                <li><NavLink to="https://www.instagram.com" className="mx-2 hover:text-gray-400"><FaInstagramSquare className="text-2xl text-white "/></NavLink></li>
                <li><NavLink to="https://www.tiktok.com" className="mx-2 hover:text-gray-400"><FaTiktok className="text-2xl text-white "/></NavLink></li>
                <li><NavLink to="https://www.whatsapp.com" className="mx-2 hover:text-gray-400"><FaWhatsappSquare className="text-2xl text-green-500"/></NavLink></li>
                </ul>
                
                
                </div>
                <div className="flex flex-col text-start gap-5">
                    <h5 className="text-lg font-bold mt-5 ">Quick Link</h5>
                    <ul className="text-gray-300">
                        <li><NavLink to="/Courses">Courses</NavLink></li>
                        <li><NavLink to="/Events">Events</NavLink></li>
                        <li><NavLink to="/Blog">Blog</NavLink></li>
                        <li><NavLink to="/Contact">Contact Us</NavLink></li>
                        <li><NavLink to="#certificate">Certificate Verification</NavLink></li>
                    </ul>
                </div>
                <div className="flex flex-col text-start gap-5">
                    <h5 className="text-lg font-bold mt-5">Contact</h5>
                    <ul className="text-gray-300">
                        <li><FaPhoneAlt className="inline-block mr-2"/><NavLink to="/contact">01-5455430, 9875640321</NavLink></li>
                        <li><FiMail className="inline-block mr-2"/><NavLink to="mailto:info@edunepal.com">info@edunepal.com</NavLink></li>
                        <li><FaLocationDot className="inline-block mr-2"/><NavLink to="#"> Kathmandu, Nepal</NavLink></li>
                    </ul>
                </div>
                <div className=" flex flex-col mr-4">
                    <h4 className="text-lg font-bold mt-5">Subscribe Newsletter</h4>
                    <input type="email" placeholder="Enter your email" className="p-2 rounded-md text-black w-full mt-2 bg-white border-none"></input>
                     <button className="mt-2 p-2 bg-blue-500 text-white rounded-md w-full border-5 border-white">Subscribe</button>
                </div>
            </div>
            <div className="text-center">
                <p className="font-semi-bold text-white">Copyright &copy;2026 EduNepal Pvt. Ltd.</p>
            </div>
        </footer>
    );
}
export default Footer;