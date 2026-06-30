// Call to action section

import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-4xl mx-auto text-center">

        {/* Main heading */}
        <h1 className="text-6xl font-bold">
          Ready to stop awkward money talks?
        </h1>

        {/* Short description */}
        <p className="text-xl text-gray-500 mt-8">
          Join thousands of users already splitting smarter.
        </p>

        {/* Navigate users to the login/signup page */}
        <Link to="/login">
          <button className="mt-10 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition duration-300">
            Get Started Free →
          </button>
        </Link>

      </div>

    </section>
  );
}

export default CTA;