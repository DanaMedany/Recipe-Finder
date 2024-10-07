import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchRecipeById } from "../api/fetchRecipe"; // Assuming you have an API function to fetch recipe by ID

function RecipeDetailPage() {
  const { detailsId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        const data = await fetchRecipeById(detailsId); // Fetch recipe details by ID
        if (data && data.idMeal) {
          setRecipe(data);
          setError(false); // Reset error state if recipe is found
        } else {
          setError(true); // Set error if recipe is not found
        }
      } catch (error) {
        setError(true); // Set error if API call fails
        console.log(error);
      }
    };

    getRecipeDetails();
  }, [detailsId]);

  if (error) {
    return <p>No recipe details found. Please try a different recipe.</p>;
  }

  if (!recipe) {
    return <p>Loading recipe details...</p>; // Show a loading message while fetching data
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-[#f9f9f9] rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#EE3715] mb-4">
            {recipe.strMeal}
          </h1>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-[300px] h-[300px] object-cover rounded-md mb-4"
          />
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-[#333131]">
            Category: {recipe.strCategory}
          </h2>
          <h3 className="text-xl font-semibold text-[#333131]">
            Cuisine: {recipe.strArea}
          </h3>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-[#333131] mb-2">
          Instructions:
        </h4>
        <p className="text-base text-[#555555]">{recipe.strInstructions}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-[#333131] mb-2">
          Ingredients:
        </h4>
        <ul className="list-disc pl-5 text-base text-[#555555]">
          {Object.keys(recipe)
            .filter((key) => key.startsWith("strIngredient") && recipe[key])
            .map((key, index) => (
              <li key={index}>
                {recipe[key]} - {recipe[`strMeasure${key.slice(13)}`]}
              </li>
            ))}
        </ul>
      </div>
      {/* Adding the Source and YouTube sections */}
      {recipe.strSource && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-[#333131] mb-2">
            Recipe Source:
          </h4>
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EE3715] hover:underline"
          >
            View Source
          </a>
        </div>
      )}

      {recipe.strYoutube && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-[#333131] mb-2">
            Watch on YouTube:
          </h4>
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EE3715] hover:underline"
          >
            Watch Video
          </a>
        </div>
      )}

      <button className="px-4 py-2 bg-[#EE3715] text-white rounded hover:bg-[#d63012]">
        <Link to="/">Back to Recipes</Link>
      </button>
    </div>
  );
}

export default RecipeDetailPage;
