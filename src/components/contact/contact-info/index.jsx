import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer all your questions and clear all your
                doubts regarding my Portfolio.
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 8696763118</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">kishorhegge1419@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
