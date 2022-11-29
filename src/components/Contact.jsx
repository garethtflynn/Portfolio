import React, { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const successMessage = useState("");

  const [emailErrMessage, setEmailErrMessage] = useState('')
  const [userErrMessage, setUserErrMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState("");

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
  };
  return (
    <div className="flex flex-col gap-4 bg-zinc-700	w-full h-screen">
      <div className="ml-5">
        <div className="text-zinc-50 italic mt-5">
          <h1>I would love to hear from you. Please reach out and send me a message!</h1>
        </div>
        <div>
          <TextInput
            id="small"
            type="text"
            name="name"
            placeholder="name"
            value={userName}
            sizing="sm"
            className="w-1/3 mt-5"
            onChange={handleInput}
          />
        </div>
        <div className="text-slate-50 mt-1">
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
            className="slate-900 w-1/2 mt-5"
            onChange={handleInput}
          />
        </div>
        <div className="text-slate-50 mt-1">
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
            className="w-1/2 mt-5"
            onChange={handleInput}
          />
        </div>
        <div className="text-slate-50">
          <p>{errorMessage}</p>
        </div>
        <div className="text-slate-50 mt-1">
          <p>{successMessage}</p>
        </div>
        <div className="mt-3">
          <Button color="dark" type="submit" value="Send" className="mt-5" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
