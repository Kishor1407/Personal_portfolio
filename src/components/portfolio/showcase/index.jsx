import React from "react";

import Arrow from "../../shared/arrow";

import "./style.scss";

const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase">
            {data.map((project) => (
                <div
                    key={project.name}
                    className={`showcase-item ${
                        transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                    }`}
                >
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <span className="text">Detailed View</span>
                                <Arrow />
                            </a>
                            {/* <a href="google.com"></a> */}
                        </div>
                    </div> 
                    <img src={project.media.thumbnail} />
                    
                </div>
            ))}
        </div>
    );
};

export default Showcase;