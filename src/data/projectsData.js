import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaArrowsAltH,
  } from "react-icons/fa";
  import { DiResponsive, DiNodejs, DiMongodb, DiMysql } from "react-icons/di";
  import { SiTailwindcss, SiInsomnia, SiHandlebarsdotjs } from "react-icons/si";
  import { GrGraphQl } from "react-icons/gr";
  import lyfbro from "../assets/lyfbroApp.PNG"
  import clairese from "../assets/clairCeramics.png"
  import weather from '../assets/weatherDash.png'
  import password from '../assets/passwordGen.PNG'
  import socialNetwork from '../assets/socialNetworkAPI.png' 
  import quiz from '../assets/codingQuiz.png'

export const projectsData = [
    {
        id: 3,
        name: 'Weather Dashboard',
        image: weather,
        url: 'https://garethtflynn.github.io/WeatherDashboard/',
        github: 'https://github.com/garethtflynn/WeatherDashboard',
        alt: 'weather-dashboard',
        icons: [<FaHtml5 size="3rem" />, <FaJs size="3rem" />, <SiTailwindcss size="3rem" />, <FaArrowsAltH size="3rem"/>],
        description: "Do you check the weather constantly? This mobile-first designed apllication allows users to search cities and destinations' weather in current and five day format."
    },
    {
        id: 6,
        name: 'Coding Quiz',
        image: quiz ,
        url: 'https://garethtflynn.github.io/JavaScriptQuiz/',
        github: 'https://github.com/garethtflynn/JavaScriptQuiz',
        alt: 'coding-quiz',
        icons: [<FaJs size="3rem" />, <FaHtml5 size="3rem" />, <FaCss3Alt size="3rem" />],
        description: "This application's purpose is to test the users knowledge of JavaScript and other coding topics."
    },
    {
        id: 5,
        name: 'Social Network API',
        image: socialNetwork,
        url: 'https://drive.google.com/file/d/1lyodVWb5ku78TnSANran-Z1Jm5SzW1XF/view',
        github: 'https://github.com/garethtflynn/SocialNetworkApi',
        alt: 'social-network API',
        icons: [<SiInsomnia size='3rem'/>, <DiNodejs size='3rem'/>, <DiMongodb size='3rem'/>, <FaArrowsAltH size="3rem"/> ],
        description: "The purpose of this application is to show an API for a social network platform where you can see users' thoughts, reactions, and create a friends list."
    },   
    {
        id: 2,
        name: 'Clairese Ceramics',
        image: clairese,
        url: 'https://shopclaireseceramics.herokuapp.com/',
        github: 'https://github.com/garethtflynn/claireseCeramics',
        alt: 'clairese-ceramics',
        icons: [<FaReact size='3rem'/>, <SiTailwindcss size='3rem'/>, <GrGraphQl size='3rem'/>, <FaJs size='3rem'/>],
        description: 'Clairese Ceramics is an e-commerce site designed to showcase and sell the pottery created by ceramic artist, Ashlynn Claire. Customers are welcome to browse, shop, and learn about the story behind the company.' 
    }, 
    {
        id: 1,
        name: 'Lyfbro',
        image: lyfbro,
        url: 'https://lyfbrohealth.herokuapp.com/',
        github: 'https://github.com/garethtflynn/Lyfbro-App',
        alt: 'lyfbro-app',
        icons: [<SiTailwindcss size='3rem'/>, <DiMysql size='3rem'/>, <DiNodejs size='3rem'/>, <FaJs size='3rem'/>, <FaHtml5 size='3rem'/>, <SiHandlebarsdotjs size='3rem'/>,],
        description: 'Lyfbro is a web application aimed at helping a user track activities to monitor health progress. The app provides a "gamified" way to inspire a healthy lifestyle. This repository is a mirror of'
    },
    {
        id: 4,
        name: 'Password Generator',
        image: password,
        url: 'https://garethtflynn.github.io/PassWordGenerator/',
        github: 'https://github.com/garethtflynn/PassWordGenerator',
        alt: 'password-generator',
        icons: [ <FaJs size="3rem" />, <FaCss3Alt size="3rem" />, <FaHtml5 size="3rem" />],
        description: 'This application is designed to give users the ability to create their own secure passwords based off of their prefernces.'
    },
]