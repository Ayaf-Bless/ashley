import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/assets/arrow-right.svg";

const SvgArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-arrow-right"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
};

function Banner(props) {
  return (
    <section className={"main"}>
      <div className={"container"}>
        <div className={"row"}>
          <h2 className={"line"}>
            <div className={"line"}>
              <span>Faire en sorte que vous brilez</span>
            </div>
            <div className={"line"}>
              <span>C'est notre soucis</span>
            </div>
          </h2>
          <div className={"btn-row"}>
            <Link href={"/about"}>
              <a>
                en savoir plus <SvgArrow />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
