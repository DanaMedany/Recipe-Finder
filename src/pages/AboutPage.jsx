import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      {/* Header Image */}
      <div className="relative">
        <img
          src="images\brooke-lark-jUPOXXRNdcA-unsplash.jpg"
          alt="Cooking Experience"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <h1 className="absolute inset-x-0 bottom-5 text-center text-4xl text-white font-bold drop-shadow-lg">
          About RecipeMaster
        </h1>
      </div>

      {/* Content Section */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        {/* Introduction */}
        <h2 className="text-3xl font-semibold text-[#EE3715] mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-[#555555] mb-6 leading-relaxed">
          At <strong>RecipeMaster</strong>, we are passionate about bringing the
          joy of cooking to everyone. Our platform is a treasure trove of
          delicious and easy-to-follow recipes from all around the world.
          Whether you’re a beginner or a seasoned chef, you’ll find the perfect
          recipe to inspire your next meal!
        </p>

        {/* Mission */}
        <h2 className="text-2xl font-semibold text-[#333131] mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-[#555555] mb-6 leading-relaxed">
          We believe that cooking should be fun, easy, and accessible to
          everyone. Our mission is to help people discover the joy of cooking by
          providing a wide range of recipes that are simple, creative, and
          delicious. From quick weeknight dinners to impressive gourmet meals,
          we’ve got something for everyone.
        </p>

        {/* Back to Home Button */}
        <div className="flex justify-center">
          <Link to="/">
            <button className="px-6 py-3 bg-[#EE3715] text-white rounded-full hover:bg-[#d63012] transition-colors duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
