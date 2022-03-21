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
              <span>Votre beauté</span>
            </div>
            <div className={"line"}>
              <span>Notre souci</span>
            </div>
          </h2>
          <div className={"btn-row"}>
            <Link href={"/show-case"}>
              <a>
                en explorer plus <RightArrow />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
