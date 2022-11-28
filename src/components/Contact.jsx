import React, { useState } from "react";
import { TextInput, Label, Button } from "flowbite-react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const successMessage = useState("");

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
      setErrorMessage("Please enter a valid email!");
      return;
    }

    if (!userName) {
      setErrorMessage("Please enter your name!");
      return;
    }

    if (!userMessage) {
      setErrorMessage(`Please enter your message!`);
      return;
    }
  };
  return (
    <div className="flex flex-col gap-4 bg-zinc-700	w-full h-screen">
      <div className="ml-5" onSubmit={handleSubmit}>
        <div className="text-zinc-50 italic">
          <h1>I would love to hear from you. Please reach out and send me a message!</h1>
        </div>
        <div>
          <div className="mb-2 block ">
            <Label htmlFor="small" value="Name" className="text-zinc-50" />
          </div>
          <TextInput
            id="small"
            type="text"
            name="name"
            value={userName}
            sizing="sm"
            className="w-1/3"
            onChange={handleInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Email" className="text-zinc-50" />
          </div>
          <TextInput
            id="base"
            type="email"
            name="email"
            value={userEmail}
            sizing="md"
            className="slate-900 w-1/2"
            onChange={handleInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="large" value="Message" className="text-zinc-50" />
          </div>
          <TextInput
            id="large"
            type="text"
            sizing="lg"
            name="message"
            value={userMessage}
            className="w-1/2"
            onChange={handleInput}
          />
        </div>
        <div className="mt-3">
          <Button color="dark" type="submit" value="Send">
            Submit
          </Button>
        </div>
        <div>
          <p>{errorMessage}</p>
          <p>{successMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
