import React from "react";

function Tools() {
  return (
    <>
      <h3 className="text-3xl">Outils</h3>
      <div className="text-neutral-content grid md:grid-cols-2 gap-[1px]">
        <div className="rounded-t-lg md:rounded-tl-lg md:rounded-tr-none py-4 px-8 bg-light-text hover:bg-dark-text">Notion</div>
        <div className="md:rounded-tr-lg md:rounded-tl-none py-4 px-8 bg-light-text hover:bg-dark-text">Trello</div>
        <div className="py-4 px-8 bg-light-text hover:bg-dark-text">Slack</div>
        <div className="py-4 px-8 bg-light-text hover:bg-dark-text">Github</div>
        <div className="md:rounded-bl-lg py-4 px-8 bg-light-text hover:bg-dark-text">Visual Studio Code</div>
        <div className="rounded-b-lg md:rounded-bl-none py-4 px-8 bg-light-text hover:bg-dark-text">PhpStorm</div>
      </div>
    </>
  );
}

export default Tools;
