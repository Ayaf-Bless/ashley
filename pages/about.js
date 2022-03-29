import React from "react";
import Head from "next/head";
import BannerAbout from "../components/bannerAbout";
import AboutBlurb from "../components/aboutBlurb";

const Index = () => {
  return (
    <>
      <Head>
        <title>Ashley salon: show-case</title>
      </Head>
      <BannerAbout />
      <AboutBlurb />
    </>
  );
};
export default Index;
