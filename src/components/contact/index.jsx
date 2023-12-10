import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import Section from "../shared/section";
import "./style.scss";
import ContactInfo from "./contact-info";
import Form from "./form";
const Contact = () => {
    return (
        <Section
            id="contact"
            title="Any Question feel free to Contact"
            background="light"
        >
            <div className="contact-content-wrapper">
                <ContactInfo />
                <Form />
            </div>
        </Section>
    );
};

export default Contact;

// template id template_003psyi
// service id  service_jjefw4e
// public key J6HPhPAUiHptJssAY
