// Landing page navbar

import { Link } from "react-router-dom";

function LandingNavbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-3xl font-bold text-emerald-500">
          SplitSync
        </h1>

        <div className="flex gap-8 items-center">

          <a href="#">Home</a>

          <a href="#">Features</a>

          <a href="#">About</a>

          <Link to="/login">
            <button className="border px-5 py-2 rounded-xl">
              Login
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-emerald-500 text-white px-5 py-2 rounded-xl">
              Sign Up
            </button>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar;