import "../styles/App.scss";
import Header from "../components/header";
import { useEffect } from "react";
import gsap from "gsap";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", 0, { css: { visibility: "visible" } });
  }, []);
  return (
    <>
      <Header />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
