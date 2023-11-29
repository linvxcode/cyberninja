import React from "react";
import HeadHome from "./component/HeadHome";
import MainImg from "./component/MainImg";
import BackgroundGlow from "./component/BackgroundGlow";
import BgGlowAddition from "./component/BgGlowAddition";
import BgLayer from "./component/BgLayer";

const Homepage = () => {
  return (
    <div className="h-auto flex justify-center bg relative ">
      <div className="max-w-[1500px] place-content-start  lg:overflow-hidden  w-full grid lg:grid-cols-2 grid-cols-1 relative z-[9]">
        <HeadHome />
        <MainImg />
      </div>
      <BackgroundGlow />
      <BgGlowAddition />
      <BgLayer />
    </div>
  );
};

export default Homepage;
