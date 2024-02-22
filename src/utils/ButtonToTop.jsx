import { useTheme } from "../context/ThemeContext";

export default function ButtonToTop() {
  const { theme } = useTheme();

  function scrollToTop() {
    console.log("scrolling to top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`border-2 rounded-lg py-2 mt-2 px-4 md:px-8 ${
        theme === "winter"
          ? "text-light-text bg-base-100"
          : "text-dark-text bg-neutral-content"
      }}`}
    >
      ↑
    </button>
  );
}
