import React from "react";
import Link from "next/link";
import { RightArrow } from "../utils/svg-component";

function Banner(props) {
  return (
    <section className={"main"}>
      <div className={"container"}>
        <div className={"row"}>
          <h2 className={"line"}>
            <div className={"line"}>
              <span>Votre beautee</span>
            </div>
            <div className={"line"}>
              <span>Notre soucis</span>
            </div>
          </h2>
          <div className={"btn-row"}>
            <Link href={"/about"}>
              <a>
                en savoir plus <RightArrow />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
