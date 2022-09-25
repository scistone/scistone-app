import Navbar from "./components/main/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages";

function App() {
  const DefaultContainer = ({ children }) => {
    return (
      <div className="App">
        <Navbar />
        {children}
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultContainer children={<Home />} />} />
        <Route
          path="/about"
          element={<DefaultContainer children={<About />} />}
        />
        <Route path="/job" element={<DefaultContainer />} />
        <Route path="/projects" element={<DefaultContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
