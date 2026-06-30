import { useNavigate } from "react-router-dom";

function LogoutModal({ closeModal }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold mb-4">
          🚪 Logout
        </h2>

        <p className="text-gray-500 mb-8">
          Are you sure you want to logout?
        </p>

        <div className="flex gap-4">

          <button
            onClick={closeModal}
            className="border px-6 py-3 rounded-xl hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default LogoutModal;