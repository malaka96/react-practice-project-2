import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const Navbar = () => {

  const {searchParam, setSearchParam} = useContext(GlobalContext)!;

  console.log(searchParam);

  return (
    <nav className="bg-white border-b shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Left: Website name */}
      <div className="text-lg font-bold text-gray-800">MyWeatherSite</div>

      {/* Middle: Input field (fixed width, not full) */}
      <div className="mx-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          className="w-64 px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Right: Text buttons */}
      <div className="flex gap-6">
        <span className="cursor-pointer text-gray-700 hover:text-blue-600 transition">
          <NavLink to={"/"}>Home</NavLink>
        </span>
        <span className="cursor-pointer text-gray-700 hover:text-blue-600 transition">
          <NavLink to={"/favorite"}>Favorite</NavLink>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
