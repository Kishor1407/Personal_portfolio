import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import girl from "../../../images/boy.png";
import { BsAwardFill } from "react-icons/bs";
import { scrollToSection } from "../../utils/helpers";
import { FaUser } from "react-icons/fa";
const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">HELLO</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt=""
                                />
                            </span>
                            <span className="text">, I AM</span>
                        </span>
                        <span className="big-text">KISHOR KUMAR</span>
                    </h1>
                    <p>As a proficient MERN stack developer with a strong foundation in data structures and algorithms,OOPs, OS, CN and DBMS , I bring a blend of technical expertise and problem-solving skills to deliver robust and efficient web applications.
                    </p>
                    <CallToAction
                        text="Contact Me"
                        action={() => scrollToSection("contact")}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="KISHOR KUMAR"
                    />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">12+ Valuable Certificates.</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <br />
                        <div className="text">
                            <span><h4>3</h4></span>
                            
                            
                            <h4>Internships</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
