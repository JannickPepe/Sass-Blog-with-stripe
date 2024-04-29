import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


const SocialIcons = () => {

    return (
        <div className="flex space-x-4">
            {/* 
                <FaTelegram className="icon text-blue-400 telegram swing-animation h-7 w-7" />
                <FaXTwitter className="icon text-white twitter pulse-animation h-7 w-7" />
                <FaInstagram className="icon text-orange-500 insta flip-animation h-7 w-7" />
                <FaWhatsapp className="icon text-green-500 whatsapp bounce-animation h-7 w-7" />
            */}
            <CiFacebook className="icon text-blue-500 fb flash-animation h-7 w-7" />
            <CiYoutube className="icon text-red-400 youtube shake-animation h-7 w-7" />
            <CiLinkedin className="icon text-indigo-400 linkedin rotate-animation h-7 w-7" />
            <FaDiscord className="icon text-violet-400 twitter pulse-animation h-7 w-7" />
        </div>
    );

};

export default SocialIcons;