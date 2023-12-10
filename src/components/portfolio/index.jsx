import React, { useState } from "react";
import Section from "../shared/section";
import Filters from "./filters";
import CallToAction from "../shared/CallToAction";
import "./style.scss";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "MERN stack development",
        tags: ["certificate", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
    },
    {
        id: 2,
        name: "Tally Codebrewers Appreciation",
        tags: ["certificate"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.png"),
        },
    },
    {
        id: 3,
        name: "Eduonix Webdevelopment",
        tags: ["certificate"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 4,
        name: "Artical Writing",
        tags: ["certificate", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-12.jpg"),
        },
    },
    {
        id: 9,
        name: "Booking App",
        tags: ["project", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-13.png"),
        },
        link:"https://github.com/Kishor1407/Booking_app",
        
    },
    {
        id: 10,
        name: "Google Clone",
        tags: ["project", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-35.jpg"),
        },
        link:"https://github.com/Kishor1407/Google_clone",
        
    },
    {
        id: 7,
        name: "Netflix Home",
        tags: ["project"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-143.jpg"),
        },
        link: "https://github.com/Kishor1407/Netflix_Home_Page",
    },
    {
        id: 8,
        name: "ToDo Website",
        tags: ["project", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-141.jpg"),
        },
        link: "https://github.com/Kishor1407/ToDo",
    },

];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check my Protfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />

            </div>
            <br />
            <br />
            {/* <CallToAction text="SEE DATA" /> */}
            <a href="https://drive.google.com/drive/folders/1hnghpQOXRxnBZwcwqTfk29X4UvWSMfFW" target="_blank" rel="noopener noreferrer"><CallToAction text="SEE ALL CERTIFICATIONS" /></a>

        </Section>
    );
};

export default Portfolio;
