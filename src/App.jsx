import About from "./pages/About";
import Header from "./pages/Header";
import Pro from "./pages/Pro";
import Skills from "./pages/Skills";
import Training from "./pages/Training";  
import Social from "./pages/Social";  
import More from "./pages/More";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="main-container bg-feldgrau p-4">
      <About />
      <Header />
      <Pro />
      <Skills />
      <Training />
      <Social />
      <More />
      <Footer />
    </div>
  );
}

export default App;
