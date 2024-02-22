export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center">
      Développé avec ♡ <br /> <span className="font-black">Clémence Pham</span>{" "}
      © {year}
    </footer>
  );
}
