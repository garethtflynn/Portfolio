import React from "react";
import { TextInput, Label, Button } from "flowbite-react";

function Contact() {
  return (
    <div className="flex flex-col gap-4 bg-zinc-700	w-full h-screen">
      <div className="text-zinc-50">
        <h1>Contact Me</h1>
      </div>
      <div>
        <div className="mb-2 block ">
          <Label htmlFor="small" value="Name" className="text-zinc-50" />
        </div>
        <TextInput id="small" type="text" sizing="sm"/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Email" className="text-zinc-50"/>
        </div>
        <TextInput id="base" type="text" sizing="md" className="slate-900" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="large" value="Message" className="text-zinc-50"/>
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      </div>
      <div>
        <Button color="dark" type="submit">Submit</Button>
      </div>
    </div>
  );
}

export default Contact;
