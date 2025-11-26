// import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <main className="flex flex-col px-4 flex-1 w-screen text-white font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
