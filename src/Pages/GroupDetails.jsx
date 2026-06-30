import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import groups from "../Data/groups";
import CreateGroupModal from "../components/Modals/CreateGroupModal";
import { useState } from "react";
import { Link } from "react-router-dom";

function GroupDetails() {
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto p-8">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-5xl font-bold">
            My Groups 👥
          </h1>

          <p className="text-gray-500 text-lg mt-3">
            Manage and organize your expense groups.
          </p>

        </div>

        {/* Mini Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-2xl p-5 shadow">

            <p className="text-gray-500">
              Total Groups
            </p>

            <h2 className="text-3xl font-bold text-emerald-500 mt-3">
              {groups.length}
            </h2>

          </div>

          <div className="bg-white rounded-2xl p-5 shadow">

            <p className="text-gray-500">
              Total Members
            </p>

            <h2 className="text-3xl font-bold text-blue-500 mt-3">
              {groups.reduce((total, group) => total + group.members.length,0)}
            </h2>

          </div>

          <div className="bg-white rounded-2xl p-5 shadow">

            <p className="text-gray-500">
              Net Balance
            </p>

            <h2 className="text-3xl font-bold text-emerald-500 mt-3">
              ₹2850
            </h2>

          </div>

        </div>

        {/* Search + Create */}

        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">

          <input
            type="text"
            placeholder="🔍 Search Groups..."
            className="
              border
              rounded-xl
              px-5
              py-3
              w-80
            "
          />

          <button
            onClick={() => setShowCreateGroupModal(true)}
            className="
              bg-emerald-500
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-emerald-600
              hover:scale-105
              transition-all
              duration-300
              "
            >
              ➕ Create Group
          </button>

        </div>

        {/* Group Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {groups.map((group) => (

            <div
              key={group.id}
              className="
                bg-white
                rounded-3xl
                shadow
                p-8
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <div className="text-5xl">
                {group.icon}
              </div>

              <h2 className="text-3xl font-bold mt-5">
                {group.name}
              </h2>
              <p className="text-gray-500 mt-3">
                {group.members.length} Members
              </p>

              <div className="mt-6">

                <p className="text-gray-500 mb-3">
                  Members
                </p>

                <div className="flex">

                  {group.members.map((member, index) => (

                    <div
                      key={index}
                      className={`
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        font-bold
                        border-2
                        border-white
                        bg-emerald-100
                        ${index !== 0 ? "-ml-2" : ""}
                      `}
                      title={member}
                    >
                      {member.charAt(0)}
                    </div>

                  ))}

                </div>

              </div>

              <div className="mt-6">

                <p className="text-gray-500">
                  Group Balance
                </p>

                <h3
                  className={`text-4xl font-bold mt-2 ${
                    group.balance.includes("-")
                      ? "text-red-500"
                      : "text-emerald-500"
                  }`}
                >
                  {group.balance}
                </h3>

              </div>

              <div className="mt-6">

                <p className="text-gray-500 mb-3">
                  Members
                </p>

                <div className="flex">

                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold">
                    P
                  </div>

                  <div className="-ml-2 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold">
                    R
                  </div>

                  <div className="-ml-2 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold">
                    A
                  </div>

                </div>

              </div>

              <Link
                to={`/group/${group.id}`}
                className="
                  block
                  text-center
                  w-full
                  mt-8
                  border
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-slate-50
                  transition
                "
              >
                Open Group →
              </Link>

            </div>

          ))}

        </div>

      </div>
      {showCreateGroupModal && (
        <CreateGroupModal
          closeModal={() => setShowCreateGroupModal(false)}
        />
      )}

    </div>
  );
}

export default GroupDetails;