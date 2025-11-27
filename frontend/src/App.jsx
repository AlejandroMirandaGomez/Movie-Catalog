import { Routes, Route } from "react-router-dom";

import { MovieProvider } from "./contexts/MovieContext";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="flex flex-col px-4 flex-1 w-screen text-white font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
