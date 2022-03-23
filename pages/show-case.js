import React from "react";
import Loadable from "react-loadable";

const loader = () => (
  <div className={"page App"}>
    <div className={"container"}>
      <div className={"row"}>Loading...</div>
    </div>
  </div>
);
//
const HomeLazy = Loadable({
  loader: () => import("../components/show-case"),
  loading: loader,
});

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Index;
