import { Link } from "react-router-dom";
import { MdOutlineSaveAlt } from "react-icons/md";

function Header() {
  return (
    <header className="bg-[#333333] text-white">
      <div className="flex justify-between items-center py-4 container mx-auto">
        <div>
          <h1 className="uppercase text-xl lg:text-2xl font-bold pl-3">
            Delicious Recipes
          </h1>
        </div>

        <div className="font-medium text-lg flex items-center">
          <Link to="/" className="pr-6">
            Home
          </Link>
          <Link to="/about" className="pr-5">
            About
          </Link>
          <Link to="/favorite-list">
            <MdOutlineSaveAlt size={30} className="mr-3" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
