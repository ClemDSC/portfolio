import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function ButtonToBack() {
  const { theme } = useTheme();

  return (
    <button aria-label="Retour vers la page Projets"
      className={`border-2 rounded-lg py-2 mt-2 px-4 md:px-8 ${
        theme === "winter"
          ? "text-light-text bg-base-100"
          : "text-dark-text bg-neutral-content"
      }}`}
    >
      <Link to="/projects">← Retour</Link>
    </button>
  );
}
