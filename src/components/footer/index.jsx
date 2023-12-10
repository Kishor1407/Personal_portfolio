import React from "react";

import {
    FaYoutube,
    FaGithub,
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="JS Dev Hindi"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blog & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    {/* <SocialIcon
                        color="#0A66C2"
                        icon={<FaFacebook />}
                        link="https://www.facebook.com"
                    /> */}
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://www.Github.com"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://in.linkedin.com"
                    />
                    {/* <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com"
                    /> */}
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaTwitter />}
                        link="https://www.twitter.com"
                    />
                </div>

                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2022 Kishor Kumar | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
