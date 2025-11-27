# Movie Catalog

Movie Catalog is a React application that displays the most popular movies from [The Movie Database (TMDB)](https://www.themoviedb.org/) and lets you search for any movie in the database. You can mark movies as favorites, and your favorites are persisted using `localStorage`.

---

## Features

- **Popular Movies**: Shows the currently popular movies from TMDB on the Home page.
- **Search**: Search for movies by title using TMDB’s movie search API.
- **Movie Cards**:
  - Display poster image
  - Display movie title
  - Display release year
  - Favorite icon (heart) at the top-right of each card
- **Favorites Page**:
  - View all movies marked as favorites
  - Favorites are stored and persisted in `localStorage`
  - Favorites are shared between Home and Favorites views
- **State Persistence**:
  - On load, the app syncs with `localStorage` to restore favorite movies.

---

## Tech Stack

- **React** (with Vite)
- **React Router DOM**
- **Tailwind CSS**
- **JavaScript**
- **HTML**

---

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (with npm)

### Installation

Clone the repository and install dependencies:

```bash
# clone the repo
git clone https://github.com/AlejandroMirandaGomez/Movie-Catalog.git

# move into the frontend folder
cd frontend

# install dependencies
npm install
```

---

## Running the App

### Development server

```bash
npm run dev
```

This will start the Vite development server. Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
```

Builds the app for production using Vite.

### Preview production build

```bash
npm run preview
```

Serves the production build locally so you can test it.

---

## TMDB API Configuration

This project uses the TMDB API to fetch movie data.

1. Go to TMDB API settings:  
   <https://www.themoviedb.org/settings/api>
2. Create an API key (if you don’t already have one).
3. Open the file:

   ```text
   frontend/src/services/api.js
   ```

4. Replace the const "API_KEY" with **your own TMDB API key** (for example, `const API_KEY = "YOUR_API_KEY_HERE";`)

---

## Acknowledgements

- Movie data and images provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).
- Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).
