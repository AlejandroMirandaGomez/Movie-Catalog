// import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {
  const moviesExample = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "The Matrix", year: 1999 },
    { id: 3, title: "Interstellar", year: 2014 },
    // Add more movie objects as needed
  ];

  return (
    <>
      <NavBar />
      <main className="flex flex-col px-4 flex-1 w-screen text-white font-sans">
        <Routes>
          <Route path="/" element={<Home movies={moviesExample} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
