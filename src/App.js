import React from "react";

import Intro from "./components/intro";
import Navigation from "./components/intro/navigation-bar";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs";
import Footer from "./components/footer";
import Contact from "./components/contact";
import "./app.scss";
const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            {/* <Skills /> */}
            <Contact />

            <Footer />
        </div>
    );
};

export default App;
