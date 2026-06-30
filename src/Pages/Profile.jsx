
import { useState } from "react";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import EditProfileModal from "../components/Modals/EditProfileModal";
import ChangePasswordModal from "../components/Modals/ChangePasswordModal";
import NotificationModal from "../components/Modals/NotificationModal";
import LogoutModal from "../components/Modals/LogoutModal";

function Profile() {

  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage"));
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  <button
  onClick={() => setShowEditModal(true)}
  className="bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition duration-300"
>
  ✏ Edit Profile
</button>
  {showEditModal && (
    <EditProfileModal
      closeModal={() => setShowEditModal(false)}
    />
  )}
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

      reader.onloadend = () => {
        const image = reader.result;

        setProfileImage(image);

        localStorage.setItem("profileImage", image);
      };
      reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto p-8">

        {/* Heading */}

        <h1 className="text-5xl font-bold mb-8">
          My Profile 👤
        </h1>

        {/* Profile Card */}

        <div className="bg-white rounded-3xl shadow p-8 hover:shadow-xl transition-all duration-300">

          <div className="flex items-center gap-6">

            {/* Profile Picture */}

            <div className="relative">

              {profileImage ? (

                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-emerald-200"
                />

              ) : (

                <div
                  className="
                  w-24 h-24
                  rounded-full
                  bg-emerald-100
                  flex
                  items-center
                  justify-center
                  text-4xl
                  font-bold
                  text-emerald-600
                  hover:scale-105
                  transition-all
                  duration-300
                "
                >
                  P
                </div>

              )}

            </div>

            {/* Profile Info */}

            <div>

              <h2 className="text-3xl font-bold">
                Pallavi
              </h2>

              <p className="text-gray-500 mt-2">
                B.Tech Student
              </p>

              <p className="text-gray-500">
                pallavi@email.com
              </p>

              {/* Upload Button */}

              <div className="mt-4">

                <label
                  className="
                  bg-emerald-500
                  text-white
                  px-4
                  py-2
                  rounded-xl
                  cursor-pointer
                  hover:bg-emerald-600
                  transition
                "
                >

                  📷 Upload Profile

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                </label>

              </div>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

            <p className="text-gray-500">
              Groups Joined
            </p>

            <h2 className="text-4xl font-bold text-emerald-500 mt-4">
              3
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

            <p className="text-gray-500">
              Expenses Added
            </p>

            <h2 className="text-4xl font-bold text-blue-500 mt-4">
              25
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

            <p className="text-gray-500">
              Settlements
            </p>

            <h2 className="text-4xl font-bold text-orange-500 mt-4">
              12
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

            <p className="text-gray-500">
              Money Saved
            </p>

            <h2 className="text-4xl font-bold text-emerald-500 mt-4">
              ₹4,500
            </h2>

          </div>

        </div>

        {/* Account Settings */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8 hover:shadow-xl transition-all duration-300">

          <h2 className="text-3xl font-bold mb-6">
            Account Settings
          </h2>

          <div className="flex gap-4 flex-wrap">

            <button
              onClick={() => setShowEditModal(true)}
              className="bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition duration-300"
            >
              ✏ Edit Profile
            </button>

            <button
              onClick={() => setShowPasswordModal(true)}
              className="border px-6 py-3 rounded-xl hover:bg-slate-100 transition duration-300"
            >
              🔒 Change Password
            </button>

            <button
              onClick={() => setShowNotificationModal(true)}
              className="border px-6 py-3 rounded-xl hover:bg-slate-100 transition duration-300"
            >
              🔔 Notifications
            </button>

            <button
              onClick={() => setShowLogoutModal(true)}
              className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8 hover:shadow-xl transition-all duration-300">

          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="border-b pb-3 hover:bg-slate-50 p-2 rounded-lg transition duration-200">
               Joined Office Group.
            </div>

            <div className="border-b pb-3 hover:bg-slate-50 p-2 rounded-lg transition duration-200">
               Added Team Lunch expense.
            </div>

            <div className="hover:bg-slate-50 p-2 rounded-lg transition duration-200">
              Settled ₹500 with Rahul.
            </div>

          </div>

        </div>

      </div>

      {showEditModal && (
        <EditProfileModal
          closeModal={() => setShowEditModal(false)}
        />
      )}

      {showPasswordModal && (
        <ChangePasswordModal
          closeModal={() => setShowPasswordModal(false)}
        />
      )}

      {showNotificationModal && (
        <NotificationModal
          closeModal={() => setShowNotificationModal(false)}
        />
      )}

      {showLogoutModal && (
        <LogoutModal
          closeModal={() => setShowLogoutModal(false)}
        />
      )}

    </div>
  );
}

export default Profile;