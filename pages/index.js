import gsap from "gsap";
import Header from "../components/header";
import Banner from "../components/banner";
import { useEffect } from "react";
import Cases from "../components/cases";
import IntroOverlay from "../components/introOverlay";

export default function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //  Gsap  timeline
    const tl = gsap.timeline();

    //Prevent flashing

    tl.to("body", 0, { css: { visibility: "visible" } });

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay-top", 1.6, { height: 0, ease: "expo.inOut", stagger: 0.4 })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: 0.4,
      })
      .to(".intro-overlay", 0, { css: { display: "none" } })
      .from(".case-image img", 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: 0.2,
      });
  }, []);
  return (
    <div>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}
