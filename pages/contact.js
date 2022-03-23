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
            <form className="contact__form" autoComplete="off">
              <p className="para">
                Ecrivez nous, et On vous repondra aussi vite que possible
              </p>
              <input type={"text"} placeholder="Ton nom" className="fields" />
              <input
                type={"email"}
                placeholder="Ton email"
                className="fields"
                autoComplete="new password"
              />
              <textarea placeholder="Ton message" className="fields" />
              <button>Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
