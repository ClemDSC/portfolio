import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx"
import Presentation from "./components/Presentation.jsx";

function App() {
  return (
    <div className="my-5 px-5 md:px-20 bg-gray-100"> 
      <Header /> 
      <Presentation />
      <Contact />
    </div>
  );
}

export default App;
