import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#032541]">
      <div className="px-auto py-4">
        <div className="flex justify-between items-center py-2 px-0">
          <div>
            <Link to="/" className="font-bold text-2xl">Watchlist</Link>
          </div>
          <ul className="p-0 m-0 list-none flex items-center last:mr-0">
            <li className="inline-block mr-8"><Link to="/" className="text-white text-xl no-underline transition-all">Watchlist</Link></li>
            <li className="inline-block mr-8"><Link to="/watched" className="text-white text-xl no-underline transition-all">Watched</Link></li>
            <li className="inline-block mr-8"><Link to="/add" className="inline-block py-2 px-4 rounded-md uppercase font-bold border-none transition-all text-base line-clamp-2 color-[#032541] bg-[#21d07a] hover:opacity-100 hover:cursor-pointer hover:bg-[#1aa762] disabled:pointer-events-none disabled:opacity-50">+Add</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
 
export default Header;