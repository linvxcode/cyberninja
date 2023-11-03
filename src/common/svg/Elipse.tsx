import React from "react";

const Elipse = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="841"
        viewBox="0 0 1920 841"
        fill="none"
      >
        <ellipse
          cx="978.5"
          cy="-120.5"
          rx="1457.5"
          ry="961.5"
          fill="url(#paint0_radial_1_2)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1_2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(978.5 -120.5) rotate(91.458) scale(884.286 1340.45)"
          >
            <stop stopColor="#971146" />
            <stop offset="1" stopColor="#8D0A3E" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Elipse;
