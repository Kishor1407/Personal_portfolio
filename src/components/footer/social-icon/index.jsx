import React from "react";
import { FaWindowMinimize } from "react-icons/fa";

const SocialIcon = ({icon, color, link}) => {
    return (
        <div
            className="social-icon"
            style={{ backgroundColor: color }}
            onClick={() => {
                window.open(link, "_blank");
            }}
        >
            {icon}
        </div>
    );
};

export default SocialIcon;
