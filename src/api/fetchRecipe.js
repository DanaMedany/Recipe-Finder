// fetch the data by query
export const fetchRecipe = async (query) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    console.log(data.meals);

    return data.meals;
  } catch (error) {
    console.log("Failed to fetch the data", error);
  }
};

// fetch the data by id
export const fetchRecipeById = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.meals ? data.meals[0] : null; // Return the first meal or null
};
