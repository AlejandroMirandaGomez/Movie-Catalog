/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteMovies");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // useEffect(() => {
  //   const storedFavorites = localStorage.getItem("favoriteMovies");
  //   if (storedFavorites) {
  //     setFavoriteMovies(JSON.parse(storedFavorites));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const addFavorite = (movie) => {
    setFavoriteMovies((prevFavorites) => {
      if (!prevFavorites.find((fav) => fav.id === movie.id)) {
        return [...prevFavorites, movie];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (movieId) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    );
  };

  const isFavorite = (movieId) => {
    return favoriteMovies.some((movie) => movie.id === movieId);
  };

  const value = {
    favoriteMovies,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
