import Layer21svg from "@/common/svg/Layer21svg";
import Layersvg from "@/common/svg/Layersvg";
import React from "react";

const BgLayer = () => {
  return (
    <div className="absolute top-0 overflow-hidden flex justify-center w-full h-auto max-w-full">
      <div className="object-fill  max-w-full h-auto relative ">
        <Layersvg />
      </div>
      <div className="absolute right-0 top-0">
        <Layer21svg />
      </div>
    </div>
  );
};

export default BgLayer;
