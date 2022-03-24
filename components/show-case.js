import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { imageData } from "../utils/show-case-data";
import LocomotiveScroll from "locomotive-scroll";

import GalleryItem from "./gallery-item";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
const ShowCase = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
      const scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
        multiplier: 0.5,
      });
    }
  }, []);
  const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        src={url}
        index={elementIndex}
        columnOffset={index * 14}
      />
    ))
  );
  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
      {/*<div className="top" />*/}
      {/*<Navbar />*/}
      <div className="main-container App page">
        <div className="scroll-container" data-scroll-container ref={ref}>
          <div className="content">
            <div className="gallery">
              {images}
              <div className="gallery-helper">Scrollez pour en voir plus</div>
              <div className="behind-text fill" data-scroll data-scroll-speed>
                Faites vous magnifique
              </div>
              <div
                className="behind-text outline"
                data-scroll
                data-scroll-speed
              >
                Faites vous magnifique
              </div>
              <div />
            </div>

            {/*<Footer />*/}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowCase;
