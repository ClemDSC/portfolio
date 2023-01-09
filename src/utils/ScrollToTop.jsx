import Arrow from "../assets/top.png";

export default function ScrollToTop() {
  return (
    <div className="flex justify-center mt-5">
      <img
        className="w-[64px] hover:cursor-pointer"
        src={Arrow}
        alt="arrow top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
