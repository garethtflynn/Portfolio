import React, { useState, useRef } from "react";
import { TextInput } from "flowbite-react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";

function Contact() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const successMessage = useState("");

  const [emailErrMessage, setEmailErrMessage] = useState("");
  const [userErrMessage, setUserErrMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useRef();

  const handleInput = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setUserEmail(inputValue);
    } else if (inputType === "name") {
      setUserName(inputValue);
    } else {
      setUserMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(userEmail)) {
      setEmailErrMessage("Please enter a valid email!");
      return;
    }

    if (!userName) {
      setUserErrMessage("Please enter your name!");
      return;
    }

    if (!userMessage) {
      setErrorMessage(`Please enter your message!`);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    setUserEmail("");
    setUserName("");
    setUserMessage("");
    setEmailErrMessage("");
    setUserErrMessage("");
    setErrorMessage("");
  };

  return (
    <div name="contact" class="bg-black w-full h-screen	 p-5">
      <div class="flex justify-center ">
        <p class="text-slate-50 text-3xl underline underline-offset-4">
          Contact Me
        </p>
      </div>
      <div class="pt-5 grid grid-cols-2 w-full">
        <form ref={form} onSubmit={handleSubmit}>
          <TextInput
            id="small"
            type="text"
            name="name"
            placeholder="name"
            value={userName}
            sizing="md"
            class="w-10/12 mt-5"
            onChange={handleInput}
          />
          <div class="text-slate-50 mt-1">
            <p>{userErrMessage}</p>
          </div>
          <div>
            <TextInput
              id="base"
              type="email"
              name="email"
              placeholder="email"
              value={userEmail}
              sizing="md"
              class="w-10/12 mt-5"
              onChange={handleInput}
            />
          </div>
          <div class="text-slate-50 mt-1">
            <p>{emailErrMessage}</p>
          </div>
          <div>
            <TextInput
              id="large"
              type="text"
              sizing="lg"
              name="message"
              placeholder="message"
              value={userMessage}
              class="w-10/12 h-64
            mt-5"
              onChange={handleInput}
            />
          </div>
          <div class="text-slate-50">
            <p>{errorMessage}</p>
          </div>
          <div class="text-slate-50 mt-1">
            <p>{successMessage}</p>
          </div>
          <div class="mt-3">
            <button
              onClick={handleSubmit}
              target="blank"
              type="submit"
              class="hover:scale-105 duration-150 bg-stone-50 hover:opacity-75 text-black font-bold py-2 px-4 items-center"
            >
              <span>Get In Touch!</span>
            </button>
          </div>
        </form>
        <div class="text-slate-50">
          <br></br>
          <p>
            If you have any questions about myself or my projects, please feel
            free to reach out!
          </p>
          <br></br>
          <br></br>
          <p>Or if you want a straight shot to my inbox, email me here:</p>
          <a
            href="mailto: gareth.t.flynn@gmail.com"
            rel="noreferrer"
            target="_blank"
            class="hover:italic hover:opacity"
          >
            gareth.t.flynn@gmail.com
          </a>
        </div>
      </div>
      <div class="bg-black w-full flex justify-center items-center text-slate-50 pt-52">
        <Link to="greeting" spy={true} smooth={true} duration={500} class='cursor-pointer'>
          Back To Top
        </Link>
      </div>
    </div>
  );
}

export default Contact;
