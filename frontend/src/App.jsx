// import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {
  const moviesExample = [
    {
      id: 1,
      title: "Inception",
      url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      release_date: "2010",
    },
    {
      id: 2,
      title: "The Matrix",
      url: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
      release_date: "1999",
    },
    {
      id: 3,
      title: "Interstellar",
      url: "https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg",
      release_date: "2014-11-07",
    },
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
