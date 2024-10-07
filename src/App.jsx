import { useState } from "react";
import "./App.css";

import Header from "./components/Header";

// import router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AboutPage from "./pages/AboutPage";
import FavoriteList from "./pages/FavoriteList";

function App() {
  const [getQuery, setGetQuery] = useState([]);

  return (
    <>
      <Router>
        {/* header */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage setGetQuery={setGetQuery} getQuery={getQuery} />}
          />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/details/:detailsId" element={<RecipeDetailPage />} />
          <Route path="/favorite-list" element={<FavoriteList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
