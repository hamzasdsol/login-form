import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faSnapchatGhost,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialButtons = [
  { to: "#", icon: faFacebookF, label: "Facebook", color: "bg-[#3b5999]" },
  { to: "#", icon: faLinkedinIn, label: "LinkedIn", color: "bg-[#0077b5]" },
  { to: "#", icon: faSnapchatGhost, label: "Snapchat", color: "bg-[#eec900]", },
  {
    to: "#",
    icon: faInstagram,
    label: "Instagram",
    color:
      "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
];

const SocialButtons = () => {
  return (
    
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {socialButtons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            aria-label={button.label}
          >
            <FontAwesomeIcon
              icon={button.icon}
              className={`text-2xl z-10 transition-all duration-300 group-hover:text-white`}
            />
            <span
              className={`absolute inset-0 rounded-full scale-0 ${button.color} transition-transform duration-400 group-hover:scale-100 group-hover:opacity-100 opacity-0`}
            />
          </a>
        ))}
      </div>
    
  );
};

export default SocialButtons;
