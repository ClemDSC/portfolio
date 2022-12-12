import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx"
import Presentation from "./components/Presentation.jsx";

function App() {
  return (
    <div className="mx-5 md:mx-20"> 
      <Header /> 
      <Presentation />
      <Contact />
    </div>
  );
}

export default App;
