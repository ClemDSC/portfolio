import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pro from "./pages/Pro";
import Training from "./pages/Training";
import More from "./pages/More";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/training" element={<Training />} />
        <Route path="/more" element={<More />} />
      </Routes>
  );
}

export default App;
