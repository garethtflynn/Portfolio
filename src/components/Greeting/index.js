import React from "react";
function Greeting() {
  return (
    <div name='greeting' class='w-full h-screen bg-black'>
      <div class="flex flex-col justify-center p-9 bg-black w-fit h-full pt-20 text-slate-50">
        <div>
            <p class='text-lg'>Hi there, my name is</p>
            <p class='text-7xl'>Gareth Flynn</p>
            <br></br>
        </div>
        <div class='w-10/12'>
            <p class='text-lg'>Im a Full Stack Web Developer and recent Georgia Tech Bootcamp grad. Creative thinker with a desire to learn and build amazing web experiences. Currently looking for opportunities in a developer role.</p>
            </div>
      </div>
      </div>
  );
}

export default Greeting;
