import { useState } from "react";

function ChangePasswordModal({ closeModal }) {

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-bold mb-6">
          Change Password
        </h2>

        {/* Current Password */}

        <div className="relative mb-4">

          <input
            type={showCurrent ? "text" : "password"}
            placeholder="Current Password"
            className="w-full border p-3 pr-12 rounded-xl"
          />

          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-500"
          >
            {showCurrent ? "🙈" : "👁"}
          </button>

        </div>

        {/* New Password */}

        <div className="relative mb-4">

          <input
            type={showNew ? "text" : "password"}
            placeholder="New Password"
            className="w-full border p-3 pr-12 rounded-xl"
          />

          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-500"
          >
            {showNew ? "🙈" : "👁"}
          </button>

        </div>

        {/* Confirm Password */}

        <div className="relative mb-6">

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full border p-3 pr-12 rounded-xl"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-500"
          >
            {showConfirm ? "🙈" : "👁"}
          </button>

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <button
            onClick={closeModal}
            className="border px-6 py-3 rounded-xl hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={closeModal}
            className="bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition"
          >
            Update Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default ChangePasswordModal;