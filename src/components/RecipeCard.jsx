/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchRecipe } from "../api/fetchRecipe";
import { Link } from "react-router-dom";

// import icons from react-icons
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

function RecipeCard({ getQuery }) {
  const [recipes, setRecipes] = useState([]);
  // To handle the case of no recipes
  const [error, setError] = useState(false);
  // handle favorite items
  const [favoritesItems, setFavoritesItems] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipe(getQuery);
        if (data && data.length > 0) {
          setRecipes(data);
          setError(false); // Reset error state if recipes are found
        } else {
          setError(true); // Set error if no recipes are found
        }
        // Set error if API call fails
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    if (getQuery) {
      getRecipes();
    }
  }, [getQuery]);

  useEffect(() => {
    localStorage.setItem("favoriteItem", JSON.stringify(favoritesItems));
  }, [favoritesItems]);

  // Display a message if no recipes are found
  if (error) {
    return (
      <p className="text-center flex justify-center items-center font-bold text-xl h-[150px]">
        No recipes found. Please try a different search.
      </p>
    );
  }

  // Toggle favorite status for a recipe
  const handleFavoriteItems = (id) => {
    const isAlreadyFavorite = favoritesItems.includes(id);
    if (isAlreadyFavorite) {
      setFavoritesItems(favoritesItems.filter((itemId) => itemId !== id));
    } else {
      setFavoritesItems([...favoritesItems, id]);
    }
  };

  // If there are valid recipes, display them
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 ">
      {recipes.map((recipe) => (
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
            {favoritesItems.includes(recipe.idMeal) ? (
              <MdFavorite
                size={20}
                onClick={() => handleFavoriteItems(recipe.idMeal)}
              />
            ) : (
              <MdFavoriteBorder
                size={20}
                onClick={() => handleFavoriteItems(recipe.idMeal)}
              />
            )}
          </p>
          <button className="w-full block absolute text-white py-2 bg-[#333131] hover:bg-[#EE3715]">
            <Link to={`details/${recipe.idMeal}`}>View Recipe</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default RecipeCard;
