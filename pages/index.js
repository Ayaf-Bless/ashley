import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Banner from "../components/banner";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
}
