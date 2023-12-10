import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import "./style.scss";
const Skills = () => {
    function resume(){
        window.open("https://drive.google.com/file/d/1SDajqEeAhgarFIUxd_5POs6p7e4Doq7P/view?usp=drivesdk");
    }
    return (
        <>
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JS,React,Node,Mongodb"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>I possess proficient skills in a wide array of web development technologies, including HTML, CSS, JavaScript, React JS, Node JS, Express JS, MongoDB, Bootstrap, Materila UI and Tailwind CSS. Leveraging this versatile skill set, I have successfully crafted several noteworthy projects. Additionally, I have actively participated in various competitions, further honing my abilities and pushing the boundaries of innovation in web development.
                    </p>
                
                    <p>I am concurrently dedicated my skills in data structures and algorithms (DSA), bolstering my logical thinking abilities, and consistently tackling a substantial volume of problem-solving tasks. My proficiency extends beyond DSA to encompass CN, OOPs, OS, DBMS and positioning me as a well-rounded and capable professional.
                    </p>
                    <br />
                    <br />
                    
                    <a href="https://drive.google.com/file/d/19dpVNI5PJediq2xEyIvTLwW62tYp2o3A/view?usp=drivesdk" target="_blank"><CallToAction
                        onClick={resume}
                        text="MY RESUME"
                        icon={<AiOutlineCloudDownload />}
                    /></a>
                </div>
            </div>
        </Section>
        </>
    );
};

export default Skills;
