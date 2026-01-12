import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-green-600 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Department of Zoology</h2>
                    <p className="text-gray-100">
                        Dedicated to the study of animal life and biodiversity.
                        Our mission is to inspire research, education, and conservation.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-100 flex flex-col">
                        <Link  to={"/"} className="hover:text-white">Home</Link>
                        <Link  to={"/about"} className="hover:text-white">About</Link>
                        <Link  to={"/gallery"} className="hover:text-white">Gallery</Link>
                        <Link  to={"/faculty"} className="hover:text-white">Faculty</Link>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-gray-100">
                        <li className="flex items-center gap-2">
                            <Mail size={18} /> KirodimalDegree@college.edu
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={18} /> +91 987X5 XXX0X
                        </li>
                        <li className="flex gap-4 mt-3">
                            <a href="#" className="hover:text-white"><Facebook /></a>
                            <a href="#" className="hover:text-white"><Instagram /></a>
                            <a href="#" className="hover:text-white"><Twitter /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/20 mt-10 pt-4 text-center text-gray-200 text-sm">
                © {new Date().getFullYear()} Department of Zoology | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
