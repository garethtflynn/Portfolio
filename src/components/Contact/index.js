import React, { useState, useRef } from "react";
import { TextInput, Textarea } from "flowbite-react";
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
    <div name="contact" class="bg-black w-full h-fit p-5">
      <div class="flex justify-center pb-12">
        <p class="text-[#fef2f2] text-3xl underline underline-offset-4">
          Contact Me
        </p>
      </div>
      <div class="pt-5 md:grid md:grid-cols-2 w-full">
        <form ref={form} onSubmit={handleSubmit}>
          <TextInput
            id="small"
            type="text"
            name="name"
            placeholder="name"
            value={userName}
            sizing="md"
            class="w-full md:w-11/12 mt-5 bg-[#fef2f2] rounded"
            onChange={handleInput}
          />
          <div class="text-[#fef2f2] mt-1">
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
              class="w-full md:w-11/12 mt-5 bg-[#fef2f2] rounded"
              onChange={handleInput}
            />
          </div>
          <div class="text-[#fef2f2] mt-1">
            <p>{emailErrMessage}</p>
          </div>
          <div>
            <Textarea
              id="large"
              type="text"
              sizing="lg"
              name="message"
              placeholder="message"
              value={userMessage}
              class="w-full md:w-11/12 h-64
            mt-5 bg-[#fef2f2] rounded"
              onChange={handleInput}
            />
          </div>
          <div class="text-[#fef2f2]">
            <p>{errorMessage}</p>
          </div>
          <div class="text-[#fef2f2] mt-1">
            <p>{successMessage}</p>
          </div>
          <div class="mt-3">
            <button
              onClick={handleSubmit}
              target="blank"
              type="submit"
              class="hover:scale-105 duration-150 bg-[#fef2f2] hover:opacity-75 text-black font-bold py-2 px-4 items-center rounded"
            >
              <span>Get In Touch!</span>
            </button>
          </div>
        </form>
        <div class="text-[#fef2f2]">
          <br></br>
          <p>
            If you have any questions about myself or my projects, please feel
            free to reach out!
          </p>
          <p className="pt-5">
            Or if you want a straight shot to my inbox, email me
            <span>
              {" "}
              <a
                href="mailto: gareth.t.flynn@gmail.com"
                rel="noreferrer"
                target="_blank"
                class="hover:italic hover:opacity-50 hover:underline"
              >
                here.
              </a>
            </span>
          </p>
        </div>
      </div>
      <div class="bg-black w-full flex justify-center items-center text-[#fef2f2] pt-48">
        <Link
          to="greeting"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:opacity-50"
        >
          Back To Top
        </Link>
      </div>
    </div>
  );
}

export default Contact;
