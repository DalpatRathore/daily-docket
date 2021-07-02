import React from "react";
import { motion } from "framer-motion";

const logoVariants = {
  enter: {
    pathLength: 0,
  },
  center: {
    pathLength: 1,
    transition: {
      duration: 5,
    },
  },
};

const iconVariants = {
  enter: {
    pathLength: 0,
    fill: "url(#paint09999_radial)",
  },
  center: {
    pathLength: 1,
    fill: "url(#paint0_radial)",
    transition: {
      pathLength: {
        duration: 5,
      },
      fill: {
        delay: 5,
      },
    },
  },
};

const Logo = () => {
  return (
    <svg
      className="logo"
      viewBox="0 0 400 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="150" rx="10" fill="white" fillOpacity="0.8" />
      <g filter="url(#filter0_d)">
        <motion.path
          d="M334.053 101.32H341V93H305V101.32H318.263V125H325.842V101.32"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M267.107 116.547H292V125H258V93H292V100.849H267.107V108.698H285.929"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M217.636 125H210V93H218.909V104.333L231.636 93H245L218.909 115L231.636 125H245L232.909 114.333"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M183.964 116.385H178.378C169.066 115.154 170.928 102.846 178.378 102.231H197V93H178.378C156.651 94.8462 159.134 124.385 178.378 125H197V116.385H192.655"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M143.75 108.5C143.75 113.056 140.056 116.75 135.5 116.75C130.944 116.75 127.25 113.056 127.25 108.5C127.25 103.944 130.944 100.25 135.5 100.25C140.056 100.25 143.75 103.944 143.75 108.5Z"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M152 108.5C152 117.613 144.613 125 135.5 125C126.387 125 119 117.613 119 108.5C119 99.3873 126.387 92 135.5 92C144.613 92 152 99.3873 152 108.5Z"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M81.927 108.5V117.5H94.8083C101.249 114.5 101.249 103.5 94.8083 101H74V125H94.8083C112.644 122 112.149 95 94.8083 93H74"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
      </g>
      <g filter="url(#filter1_d)">
        <motion.path
          d="M230.175 35.4462L227.635 32H219L229.667 48.7385V64H238.81V48.7385L251 32H240.841L234.746 41.8462"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M182 64H208V55.5H182V32H190V48.5"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M164 64H155V32H164V56"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M127.19 54L132.62 64H142L127.19 39L112.38 64H103L121.266 32"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M63.927 47.5V56.5H76.8083C83.249 53.5 83.249 42.5 76.8083 40H56V64H76.8083C94.6441 61 94.1486 34 76.8083 32H56"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
          variants={logoVariants}
          initial="enter"
          animate="center"
        />
      </g>
      <g filter="url(#filter2_d)">
        <motion.path
          d="M333.791 39.5489L318 70H359.009C383.862 50.4734 384.794 26.6864 359.009 10L318 10L333.791 39.5489Z"
          fillOpacity="0.6"
          variants={iconVariants}
          initial="enter"
          animate="center"
        />
        <motion.path
          d="M342.854 56.5089C369.445 60.0592 369.792 18.8757 342.854 22.071L318 70H359.009C383.862 50.4734 384.794 26.6864 359.009 10L318 10L342.854 56.5089Z"
          stroke="#1F324E"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={iconVariants}
          initial="enter"
          animate="center"
        />
      </g>
      <path d="M380 111H378V96H380V111Z" fill="#1F324E" />
      <circle
        r="9"
        transform="matrix(-1 0 0 1 379 86)"
        fill="#1F324E"
        stroke="#1F324E"
        strokeWidth="2"
      />
      <circle cx="379" cy="123" r="6" fill="url(#paint1_linear)" />
      <circle cx="379" cy="123" r="11" stroke="#1F324E" strokeWidth="2" />
      <path d="M380 149.8H378V134.8H380V149.8Z" fill="#1F324E" />
      <circle
        r="11.5"
        transform="matrix(-1 0 0 1 288.5 66.5)"
        stroke="#1F324E"
        strokeWidth="2"
      />
      <circle
        r="6.5"
        transform="matrix(-1 0 0 1 288.5 63.5)"
        stroke="#1F324E"
        strokeWidth="2"
      />
      <path d="M289 56H287V36H289V56Z" fill="#1F324E" />
      <circle
        cx="288.5"
        cy="23.5"
        r="6.5"
        fill="#1F324E"
        stroke="#1F324E"
        strokeWidth="2"
      />
      <circle cx="288.5" cy="23.5" r="11.5" stroke="#1F324E" strokeWidth="2" />
      <path d="M289 11H287V1H289V11Z" fill="#1F324E" />
      <path d="M38 94H40V114H38V94Z" fill="#1F324E" />
      <circle
        cx="38.5"
        cy="126.5"
        r="6.5"
        transform="rotate(-180 38.5 126.5)"
        stroke="#1F324E"
        strokeWidth="2"
      />
      <circle
        cx="38.5"
        cy="126.5"
        r="11.5"
        transform="rotate(-180 38.5 126.5)"
        stroke="#1F324E"
        strokeWidth="2"
      />
      <path d="M38 139H40V149H38V139Z" fill="#1F324E" />
      <circle
        r="9"
        transform="matrix(-1 0 0 1 29 80)"
        stroke="#1F324E"
        strokeWidth="2"
      />
      <circle
        r="9"
        transform="matrix(-1 0 0 1 37 84)"
        stroke="#1F324E"
        strokeWidth="2"
      />
      <path d="M29 39.8H27V69.8H29V39.8Z" fill="#1F324E" />
      <circle cx="28" cy="28" r="6" fill="url(#paint2_linear)" />
      <circle
        r="11"
        transform="matrix(1 0 0 -1 28 28)"
        stroke="#1F324E"
        strokeWidth="2"
      />
      <path d="M29 1H27V16H29V1Z" fill="#1F324E" />
      <rect
        x="0.5"
        y="0.5"
        width="399"
        height="149"
        rx="9.5"
        stroke="#1F324E"
        strokeOpacity="0.5"
      />
      <defs>
        <filter
          id="filter0_d"
          x="70.5"
          y="88.5"
          width="278"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="52.5"
          y="27.5895"
          width="206"
          height="43.9105"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d"
          x="312.5"
          y="4.5"
          width="75"
          height="75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(348 40) rotate(-90) scale(30)"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </radialGradient>
        <linearGradient
          id="paint1_linear"
          x1="379"
          y1="117"
          x2="379"
          y2="129"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="28"
          y1="22"
          x2="28"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
