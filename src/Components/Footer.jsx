import React from 'react';
import logo from "../images/eazeplaceFooter.png";  // Ensure to have the logo file
import { FaLinkedin, FaDiscord, FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black h-[22rem] text-white py-10">
      <div className="container mx-auto flex flex-row justify-around gap-20 items-start">
      
        <div className="w-full sm:w-1/3 px-4">
          <div className="flex pl-5 items-center">
            <img src={logo} alt="Eazeplace logo" className="w-[75px] h-[85px] mr-4" />
            <div>
              <h2 className="text-5xl font-bold font-gilroy">EAZEPLACE</h2>
              <p className="text-sm mt-2 font-gilroyMed">Eazeplace is one stop solution for students to get hired as an intern, gain experience, connect with like-minded people, and upskill themselves.</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-2/3 flex flex-wrap justify-around mt-8 sm:mt-0">
         
          <div className="w-1/2 sm:w-auto px-4">
            <h3 className="text-xl font-gilroy underline mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 font-gilroyMed">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-400 font-gilroyMed">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400 font-gilroyMed">Legal Policy</a></li>
              <li><a href="#" className="hover:text-gray-400 font-gilroyMed">Copy Right</a></li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-auto px-4">
            <h3 className="text-xl font-gilroy underline mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 font-gilroyMed">Feedback</a></li>
              <li><a href="#" className="hover:text-gray-400 font-gilroyMed">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-400 font-gilroyMed">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-400 font-gilroyMed">Query</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto px-4 mt-8 sm:mt-0">
            <h3 className="text-xl font-gilroy underline mb-4">Community</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaInstagram className="mr-2" />
                <a href="#" className="hover:text-gray-400 font-gilroyMed">Instagram</a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-2" />
                <a href="#" className="hover:text-gray-400 font-gilroyMed">LinkedIn</a>
              </li>
              <li className="flex items-center">
                <FaDiscord className="mr-2" />
                <a href="#" className="hover:text-gray-400 font-gilroyMed">Discord</a>
              </li>
              <li className="flex items-center">
                <FaFacebook className="mr-2" />
                <a href="#" className="hover:text-gray-400 font-gilroyMed">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
