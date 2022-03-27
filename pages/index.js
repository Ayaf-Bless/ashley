import gsap from "gsap";
import Banner from "../components/banner";
import { useEffect, useState } from "react";
import Cases from "../components/cases";
import IntroOverlay from "../components/introOverlay";
import Head from "next/head"
const tl = gsap.timeline();
const homeAnimation = (completeAnimation) => {
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
      onComplete: completeAnimation,
    });
};

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };
  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);
  return (
    <div className={"App"}>
      <Head>
        <title>Ashley salon</title>
      </Head>
      {!animationComplete ? <IntroOverlay /> : null}
      <Banner />
      <Cases />
    </div>
  );
}
