import React from "react";

import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-11.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.png";
import Blog3 from "../../images/blogs/blog-thumb-3.png";
import BlogCard from "./blog-card";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Internships"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Bharat Intern"
                    date="Jul 2023"
                    image={Blog1}
                    // title="In Webdevelopment"
                    title={
                        <a
                            href="https://drive.google.com/file/d/1hQm4VaMNyGq6m5MYXoC8r2XwAc9ecv3K/view?usp=drivesdk"
                            target="_blank"
                        >
                            In Webdevelopment
                        </a>
                    }
                    description={
                        <a
                            href="https://medium.com/@kishorhegge1419/embarking-on-a-web-development-odyssey-at-bharatintern-12012b673264"
                            target="_blank"
                        >
                            During a transformative 4-week internship at
                            BharatIntern, I had the privilege of delving into
                            the dynamic world of web development. In this
                            immersive experience, I harnessed and honed my
                            frontend skills to make a meaningful impact in the
                            field of web development. Let me take you on a
                            journey through my enriching internship experience,
                            where I bridged the gap between theory and practice
                            to create innovative and user-friendly web
                            solutions.
                        </a>
                    }
                />
                <BlogCard
                    user="Oasis Infobyte"
                    date="Aug 2023"
                    image={Blog2}
                    // title="In Webdevelopment"
                    title={
                        <a
                            href="https://drive.google.com/file/d/1hX966m9YvihcHZb4pmMo4mD7es5NejYD/view?usp=drivesdk"
                            target="_blank"
                        >
                            In Webdevelopment
                        </a>
                    }
                    description={
                        <a
                            href="https://medium.com/@kishorhegge1419/my-virtual-internship-journey-at-oasis-infobyte-nurturing-web-development-and-designing-skills-cab871582985"
                            target="_blank"
                        >
                            Over the course of an intensive 4-week internship at
                            Oasis Infobyte, I embarked on a voyage deep into the
                            realm of web development. This immersive opportunity
                            not only honed my frontend skills but also ignited a
                            passion for crafting digital experiences. In the
                            following narrative, I invite you to explore how I
                            translated my technical acumen into tangible
                            contributions to real-world web projects during my
                            tenure at Oasis Infobyte."
                        </a>
                    }
                />
                <BlogCard
                    user="Varcons Tech"
                    date="Sept 2023"
                    image={Blog3}
                    // title="In Embedded System"
                    title={
                        <a
                            href="https://drive.google.com/file/d/1hwuDmIGq40hIqPOSTY38d6biLwydg3zq/view?usp=drivesdk"
                            target="_blank"
                        >
                            In Embedded System
                        </a>
                    }
                    description={
                        <a
                            href="https://medium.com/@kishorhegge1419/navigating-the-world-of-embedded-systems-my-month-at-varcons-technologies-7817f886e56f"
                            target="_blank"
                        >
                            During a captivating 4-week internship at Varcons
                            Tech, I entered the fascinating world of embedded
                            systems. This special experience allowed me to
                            combine my skills of embedded systems. Come with me
                            as I share how I brought these different abilities
                            together to make valuable contributions to Varcons
                            Tech's embedded systems projects.
                        </a>
                    }
                />
            </div>
        </Section>
    );
};

export default Blogs;
