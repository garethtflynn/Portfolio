import React from "react";
import { Card } from "flowbite-react";
import Lyfbro from "../../assets/lyfbro.png";
import Pswd from "../../assets/passwordGen.png";
import MusicPilot from "../../assets/musicPilot.png";
import WeatherDash from "../../assets/weatherDash.png";
import Note from "../../assets/noteTaker.png";
import Clairese from '../../assets/clairese-ceramics.png'

function Portfolio() {
  return (
    <div className="flex flex-wrap justify-around gap-8 bg-black w-full h-screen">
        <div className="max-w-sm">
          <Card
            imgAlt="Lyfbro-app"
            imgSrc={Lyfbro}
            href="https://lyfbro99.herokuapp.com/login"
            target="_blank"
            className="bg-neutral-200"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Lyfbro
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lyfbro is a web application aimed at helping a user track
              activities to monitor health progress. The app provides a
              "gamified" way to inspire a healthy lifestyle.
            </p>
            <a
              href="https://github.com/garethtflynn/Lyfbro"
              target="blank"
              className="hover:opacity-75 hover:italic font-bold"
            >
              GitHub Repo
            </a>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="password-generator-app"
            imgSrc={Pswd}
            href="https://garethtflynn.github.io/PassWordGenerator/"
            target="_blank"
            className="bg-neutral-200"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              Password Generator
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Lets users create a secure password based on their preferences for
              what they might need.
            </p>
            <a
              href="https://github.com/garethtflynn/PassWordGenerator"
              target="blank"
              className="hover:opacity-75 hover:italic font-bold"
            >
              GitHub Repo
            </a>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Note-Taker-App"
            imgSrc={Note}
            href="https://dry-shelf-62743.herokuapp.com/"
            target="_blank"
            className="bg-neutral-200"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Note Taker
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Allows users to write and takes notes for organizational purposes.
            </p>
            <a
              href="https://github.com/garethtflynn/NoteTaker"
              target="blank"
              className="hover:opacity-75 hover:italic font-bold"
            >
              GitHub Repo
            </a>
          </Card>
        </div>
        <div className="max-w-sm">
        <Card
            imgAlt="clairese-ceramics"
            imgSrc={Clairese}
            href="https://clairese-ceramics.herokuapp.com/"
            target="_blank"
            className="bg-neutral-200"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Clairese Ceramics
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              An Ecommerce website for a custom pottery business
            </p>
            <a
              href="https://github.com/garethtflynn/clairese-ceramics"
              target="blank"
              className="hover:opacity-75 hover:italic font-bold"
            >
              GitHub Repo
            </a>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Weather-Dashboard-App"
            imgSrc={WeatherDash}
            href="https://garethtflynn.github.io/WeatherDashboard/"
            target="_blank"
            className="bg-neutral-200"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Weather Dashboard
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Fives the user the ability to see the weather for a specific city
              in current and five day format.
            </p>
            <a
              href="https://github.com/garethtflynn/WeatherDashboard"
              target="blank"
              className="hover:opacity-75 hover:italic font-bold"
            >
              GitHub Repo
            </a>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card
            imgAlt="Music-Pilot-App"
            imgSrc={MusicPilot}
            href="https://garethtflynn.github.io/MusicPilot/"
            target="_blank"
            className="bg-neutral-200"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Music Pilot
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Music Pilot allows the music enthusiast to retrieve music videos,
              a list of tracks and song lyrics, from their favorite artists.
            </p>
            <a
              href="https://github.com/garethtflynn/MusicPilot"
              target="blank"
              className="hover:opacity-75 hover:italic font-bold"
            >
              GitHub Repo
            </a>
          </Card>
        </div>
    </div>
  );
}

export default Portfolio;
