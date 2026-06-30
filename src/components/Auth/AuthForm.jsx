// Right side authentication form
import { useNavigate } from "react-router-dom";
function AuthForm() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center p-10">

      <div className="w-full max-w-lg">

        <h1 className="text-5xl font-bold">
          Create your account
        </h1>

        <p className="text-gray-500 mt-3">
          Start splitting smarter today.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-xl p-4 mt-8"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl p-4 mt-5"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl p-4 mt-5"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-emerald-500 text-white rounded-xl py-4 mt-8 text-lg font-semibold"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full border rounded-xl py-4 mt-5"
        >
          Continue with Google
        </button>

      </div>

    </div>
  );
}

export default AuthForm;