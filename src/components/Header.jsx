import Cross from "../assets/cross.png"

export default function Header() {
  return (
    <div className="h-20 border-2 border-black my-5 md:my-10 flex">
      <div className="h-full w-20 border-black border-r-2">
        <img src={Cross} alt="cross" />
      </div>
    </div>
  );
}
