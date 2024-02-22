import React from "react";

function Technologies() {
  return (
    <>
      <h3 className="text-3xl">Technologies</h3>

      <div className="text-neutral-content grid md:grid-cols-2 gap-[1px]">
        <div className="rounded-t-lg md:rounded-tl-lg md:rounded-tr-none py-4 px-8 bg-light-text hover:bg-dark-text">Javascript / jQuery</div>
        <div className="md:rounded-tr-lg md:rounded-tl-none py-4 px-8 bg-light-text hover:bg-dark-text">Typescript</div>
        <div className="md:rounded-bl-lg py-4 px-8 bg-light-text hover:bg-dark-text">Php</div>
        <div className="rounded-b-lg md:rounded-bl-none py-4 px-8 bg-light-text hover:bg-dark-text">MySql</div>
      </div>

      <div className="text-neutral-content grid md:grid-cols-2 gap-[1px]">
        <div className="rounded-t-lg md:rounded-tl-lg md:rounded-tr-none py-4 px-8 bg-light-text hover:bg-dark-text">React</div>
        <div className="md:rounded-tr-lg md:rounded-tl-none py-4 px-8 bg-light-text hover:bg-dark-text">Angular</div>
        <div className="py-4 px-8 bg-light-text hover:bg-dark-text">Express</div>
        <div className="py-4 px-8 bg-light-text hover:bg-dark-text">Apollo Server</div>
        <div className="py-4 px-8 bg-light-text hover:bg-dark-text">Prisma</div>
        <div className="py-4 px-8 bg-light-text hover:bg-dark-text">GraphQL</div>
        <div className="py-4 px-8 bg-light-text hover:bg-dark-text">Prestashop</div>
        <div className="py-4 px-8 bg-light-text hover:bg-dark-text">Wordpress</div>
        <div className="md:rounded-bl-lg py-4 px-8 bg-light-text hover:bg-dark-text">Firebase</div>
        <div className="rounded-b-lg md:rounded-bl-none py-4 px-8 bg-light-text hover:bg-dark-text">Docker</div>
      </div>
    </>
  );
}

export default Technologies;
