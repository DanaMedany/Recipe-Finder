import { useEffect, useState } from "react";
import { fetchRecipeById } from "../api/fetchRecipe"; 
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

function FavoriteList() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadFavoriteRecipes = async () => {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favoriteItem")) || [];

      if (storedFavorites.length > 0) {
        try {
          const recipes = await Promise.all(
            storedFavorites.map(async (id) => {
              // Fetch recipe by ID
              const recipe = await fetchRecipeById(id); 
              return recipe;
            })
          );
          setFavoriteRecipes(recipes);
        } catch (error) {
          console.error("Error fetching favorite recipes:", error);
          setError(true);
        }
      }
      setLoading(false);
    };

    loadFavoriteRecipes();
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favoriteRecipes.filter(
      (recipe) => recipe.idMeal !== id
    );
    setFavoriteRecipes(updatedFavorites);
    localStorage.setItem(
      "favoriteItem",
      JSON.stringify(updatedFavorites.map((recipe) => recipe.idMeal))
    );
  };

  if (loading) {
    return <p className="text-center">Loading favorite recipes...</p>;
  }

  if (error) {
    return (
      <p className="text-center">
        Error loading favorite recipes. Please try again later.
      </p>
    );
  }

  if (favoriteRecipes.length === 0) {
    return <p className="text-center">No favorite recipes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 ">
      {favoriteRecipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="border border-[#ccc] my-[25px] mx-[10px] rounded-md shadow-md hover:scale-105 hover:transition-all duration-300 cursor-pointer relative"
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-[200px] object-cover bg-center rounded-t-[8px]"
          />
          <h2 className="text-[19px] font-semibold p-5 text-wrap">
            {recipe.strMeal}
          </h2>
          <p className="p-5 font-medium text-[14px] flex items-center justify-between">
            {recipe.strCategory} - {recipe.strArea}
            <MdFavorite
              size={20}
              className="text-red-500 cursor-pointer"
              // Remove from favorites
              onClick={() => handleRemoveFavorite(recipe.idMeal)} 
            />
          </p>
          {/* Link to Recipe Detail Page */}
          <button className="w-full block absolute text-white py-2 bg-[#333131] hover:bg-[#EE3715]">
            <Link to={`/details/${recipe.idMeal}`}>View Recipe</Link>
            
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteList;
