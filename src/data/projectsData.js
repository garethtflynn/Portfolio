import {
  FaHtml5,
  // FaCss3Alt,
  FaJs,
  FaReact,
  // FaArrowsAltH,
} from "react-icons/fa";
import { DiNodejs, DiMongodb, DiMysql } from "react-icons/di";
import {
  SiTailwindcss,
  SiHandlebarsdotjs,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";
import { SiOpenai } from "react-icons/si";


import { GrGraphQl } from "react-icons/gr";

import ceramicsStore from "../assets/claireseCeramics.PNG";
import lyfbroMobile from "../assets/lyfbroMobile.PNG";
import rcmnd from "../assets/rcmnd.PNG";
import startOrSit from "../assets/startOrSit.PNG";

export const projectsData = [
  {
    id: 1,
    name: "rcmnd",
    image: rcmnd,
    url: "https://rcmnd.vercel.app/",
    github: "https://github.com/garethtflynn/rcmnd-next",
    size: "200",
    alt: "rcmnd app",
    icons: [
      <SiNextdotjs size="3rem" />,
      <DiMongodb size="3rem" />,
      <SiPrisma size="3rem" />,
    ],
    description:
      "A platform to share your passions and connect with others through the things you love.",
  },
  {
    id: 2,
    name: "Start or Sit",
    image: startOrSit,
    url: "https://start-or-sit-yqm2.vercel.app/",
    github: "https://github.com/garethtflynn/startOrSit",
    size: "200",
    alt: "start or sit app",
    icons: [
      <SiNextdotjs size="3rem" />,
      <DiMongodb size="3rem" />,
      <SiPrisma size="3rem" />,
      <SiTailwindcss size="3rem" />,
      <SiOpenai size="3rem" />,
    ],
    description:
      "Start or Sit is a web application that helps fantasy football players get quick and personalized start/sit recommendations for their weekly lineups.",
  },
  {
    id: 3,
    name: "Lyfbro",
    image: lyfbroMobile,
    url: "https://lyfbrohealth.herokuapp.com/",
    github: "https://github.com/garethtflynn/Lyfbro-App",
    size: "200",
    alt: "lyfbro-app",
    icons: [
      <SiTailwindcss size="3rem" />,
      <DiMysql size="3rem" />,
      <DiNodejs size="3rem" />,
      <FaJs size="3rem" />,
      <FaHtml5 size="3rem" />,
      <SiHandlebarsdotjs size="3rem" />,
    ],
    description:
      'Lyfbro is a web application aimed at helping a user track activities to monitor health progress. The app provides a "gamified" way to inspire a healthy lifestyle.',
  },
  {
    id: 4,
    name: "Clairese Ceramics",
    image: ceramicsStore,
    url: "https://claireseceramics.herokuapp.com/",
    github: "https://github.com/garethtflynn/shopClaireseCeramics",
    size: "400",
    alt: "clairese-ceramics",
    icons: [
      <FaReact size="3rem" />,
      <SiTailwindcss size="3rem" />,
      <GrGraphQl size="3rem" />,
      <FaJs size="3rem" />,
    ],
    description:
      "Clairese Ceramics is an e-commerce site designed to showcase and sell the pottery created by ceramic artist, Ashlynn Claire. Customers are welcome to browse, shop, and learn about the story behind the company.",
  },
];
