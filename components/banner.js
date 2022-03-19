import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/assets/arrow-right.svg";

function Banner(props) {
  return (
    <section className={"main"}>
      <div className={"container"}>
        <div className={"row"}>
          <h2 className={"line"}>
            <div className={"line"}>
              <span>Faire en sorte que vos briellez</span>
            </div>
            <div className={"line"}>
              <span>C'est notre mettier</span>
            </div>
          </h2>
          <div className={"btn-row"}>
            <Link href={"/about"}>
              <a>
                en savoir plus <Image src={arrow} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
