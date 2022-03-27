import "../styles/App.scss";
import Header from "../components/header";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Navigation from "../components/navigation";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import Head from "next/head";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function MyApp({ Component, pageProps }) {
  const [dimensions, setDimensions] = useState({
    height: typeof window !== "undefined" ? window.innerHeight : "",
    width: typeof window !== "undefined" ? window.innerWidth : "",
  });
  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <div>
      <Head>
        <meta description="Pour le besoin de beaute en kinshasa" />
      </Head>
      <Header dimensions={dimensions} />
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
