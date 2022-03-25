import React, { useRef } from "react";
import Link from "next/link";
import { RightArrow } from "../utils/svg-component";
import emailjs from "@emailjs/browser";
import ContactComponent from "../components/contact";

function Contact() {
  return (
    <div className={"page App"}>
      <ContactComponent />
    </div>
  );
}

export default Contact;
