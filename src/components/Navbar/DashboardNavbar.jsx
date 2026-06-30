// Dashboard navigation bar

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import NotificationModal from "../Modals/NotificationModal";
import user from "../../Data/user";

function DashboardNavbar() {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage")
  );

  useEffect(() => {

    const image = localStorage.getItem("profileImage");

    if (image) {
      setProfileImage(image);
    }

  }, []);

  return (
    <nav className="bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-3xl font-bold text-emerald-500">
          SplitSync
        </h1>

        {/* Navigation */}

        <div className="flex gap-8 text-lg">

          <Link to="/dashboard">Home</Link>

          <Link to="/group">Groups</Link>

          <Link to="/history">History</Link>

          <Link to="/summary">Summary</Link>

          <Link to="/profile">Profile</Link>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <input
            type="text"
            placeholder="Search..."
            className="border rounded-xl px-4 py-2"
          />

          {/* Notification */}

          <button
            onClick={() => setShowNotificationModal(true)}
            className="text-2xl hover:scale-110 transition duration-300"
          >
            🔔
          </button>

          {/* Profile */}

          <Link to="/profile">

            {user.profile ? (

              <img
                src={profileImage || user.profile}
                alt="Profile"
                className="
                  w-12
                  h-12
                  rounded-full
                  object-cover
                  border-2
                  border-emerald-200
                  hover:scale-110
                  transition
                  duration-300
                "
              />

            ) : (

              <div
                className="
                  bg-emerald-100
                  text-emerald-700
                  rounded-full
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-xl
                  hover:scale-110
                  transition
                  duration-300
                "
              >
                P
              </div>

            )}

          </Link>

        </div>

      </div>

      {/* Notification Modal */}

      {showNotificationModal && (
        <NotificationModal
          closeModal={() => setShowNotificationModal(false)}
        />
      )}

    </nav>
  );
}

export default DashboardNavbar;