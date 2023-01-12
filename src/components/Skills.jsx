import HardSkills from "./skills/HardSkills";
import SoftSkills from "./skills/SoftSkills";

export default function Skills() {
  return (
    <div
      id="skills"
      className="relative mt-5 shadow-[10px_10px_0_-2.5px_#c3fa4f] bg-white dark:bg-zinc-200 border-black border-2"
    >
      <button className="cursor-default tracking-wide absolute left-20 -top-7 shadow-[10px_10px_0_-2.5px_#c3fa4f] bg-white dark:bg-zinc-100 border-black border-2 font-semibold text-2xl px-10 py-3 ">
        Skills
      </button>
      <div className="mt-12 p-2">
        <div className="flex flex-col gap-4 md:flex-row">
          <HardSkills />
          <SoftSkills />
        </div>
        <p className="mt-4 md:mt-6 text-lg pb-2">
          I'm also learning <span className="font-bold">React Native</span>,{" "}
          <span className="font-bold">Swift / Xcode</span> and later <span className="font-bold">Flutter</span> because I
          like working on a mobile format.
        </p>
      </div>
    </div>
  );
}
