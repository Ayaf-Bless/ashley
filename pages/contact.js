import React from "react";
import Link from "next/link";
import { RightArrow } from "../utils/svg-component";

function Contact() {
  return (
    <div className={"page App"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className="contact">
            <div className="contact__info">abc@gmail.com</div>
            <form className="contact__form">
              <input type={"text"} placeholder="Ton nom" />
              <input type={"email"} placeholder="Ton email" />
              <textarea placeholder="Ton message" />
              <button>Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
