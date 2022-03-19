import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Banner from "../components/banner";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
}
