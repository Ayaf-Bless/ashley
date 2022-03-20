import React from "react";

function IntroOverlay() {
  return (
    <div>
      <div className={"intro-overlay"}>
        <div className={"top"}>
          <div className={"overlay-top"} />
          <div className={"overlay-top"} />
          <div className={"overlay-top"} />
        </div>
        <div className={"bottom"}>
          <div className={"overlay-bottom"} />
          <div className={"overlay-bottom"} />
          <div className={"overlay-bottom"} />
        </div>
      </div>
    </div>
  );
}

export default IntroOverlay;
