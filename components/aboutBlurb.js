import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutBlurb = () => {
  return (
    <div className="about-blurb">
      <div className="container-about">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to create</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className="btn-row">
              <Link href="/contact">Contactez-Nous</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Image
                src={require(`../public/assets/ullistration/nails.jpg`)}
                alt=""
              />
            </div>
            <div className="bottom-left">
              <Image
                src={require(`../public/assets/ullistration/nails.jpg`)}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  );
};

export default AboutBlurb;
