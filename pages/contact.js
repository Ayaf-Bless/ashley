import React, { useRef } from "react";
import Link from "next/link";
import { RightArrow } from "../utils/svg-component";
import emailjs from "@emailjs/browser";
import ContactComponent from "../components/contact";
import Head from "next/head";

function Contact() {
  return (
    <div className={"page App"}>
      <Head>
        <title>Ashley salon: Contactez-nous</title>
      </Head>
      <ContactComponent />
    </div>
  );
}

export default Contact;
