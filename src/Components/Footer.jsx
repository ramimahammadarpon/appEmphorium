import React from "react";
import { Link } from "react-router";
import facebook from '../assets/facebook.png';
import gitHub from '../assets/github.png';
import linkedIn from '../assets/linkedIn.png';
import gmail from '../assets/gmail.png';

const Footer = () => {
  return (
    <div className="bg-[#001524] h-[30vh] flex flex-col items-center p-12">
      <p className="font-light text-2xl text-primary">
        App<span className="font-bold text-secondary">Emporium</span>
      </p>
      <div className="flex flex-col text-center">
        <div className="flex flex-col">
          <Link className="text-secondary" to="/">
            Apps
          </Link>
          <Link className="text-secondary" to="/profile">
            My Profile
          </Link>
        </div>
        <h4 className="font-semibold text-lg text-secondary my-2">Contact Us In</h4>
        <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=100009160702928" target="blank"><img className="w-8" src={facebook} alt="" /></a>
            <a href="mailto:ramim6708@gmail.com" target="blank"><img className="w-8" src={gmail} alt="" /></a>
            <a href="https://github.com/ramimahammadarpon" target="blank"><img className="w-8" src={gitHub} alt="" /></a>
            <a href="https://www.linkedin.com/in/ramim-ahammad-367431297/" target="blank"><img className="w-8" src={linkedIn} alt="" /></a>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
