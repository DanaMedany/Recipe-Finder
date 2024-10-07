/* eslint-disable react/prop-types */
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

function HomePage({ setGetQuery, getQuery }) {
  return (
    <>
      {/* main */}
      <main className="relative bg-main-image bg-cover bg-center h-[500px] flex flex-col justify-center items-center text-white">
        <h2 className="font-bold text-2xl md:text-4xl mb-3">
          Welcome to out Recipe Collection!
        </h2>
        <p className="font-medium text-lg md:text-xl">
          Discover mouth-watering recipe to satisfy your cravings
        </p>
        <SearchBar setGetQuery={setGetQuery} />
      </main>

      {/* displaying the recipe */}
      <div className="container mx-auto p-4">
        <RecipeCard getQuery={getQuery} />
      </div>
    </>
  );
}

export default HomePage;
