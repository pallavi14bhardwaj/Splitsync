import { useState } from "react";

function CreateGroupModal({ closeModal }) {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("💼");

  const icons = ["💼", "👫", "🏠", "✈️", "🎉", "🎓"];

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-bold mb-6">
          Create New Group
        </h2>

        {/* Group Name */}

        <label className="font-semibold">
          Group Name
        </label>

        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter group name"
          className="w-full border rounded-xl p-3 mt-2 mb-5"
        />

        {/* Choose Icon */}

        <label className="font-semibold">
          Choose Icon
        </label>

        <div className="flex gap-3 mt-3 mb-5 flex-wrap">

          {icons.map((icon) => (

            <button
              key={icon}
              onClick={() => setSelectedIcon(icon)}
              className={`text-3xl p-3 rounded-xl border
              ${
                selectedIcon === icon
                  ? "bg-emerald-100 border-emerald-500"
                  : ""
              }`}
            >
              {icon}
            </button>

          ))}

        </div>

        {/* Members */}

        <label className="font-semibold">
          Members
        </label>

        <input
          type="text"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          placeholder="Example: Pallavi, Rahul, Priya"
          className="w-full border rounded-xl p-3 mt-2 mb-6"
        />

        {/* Buttons */}

        <div className="flex gap-4">

          <button
            onClick={closeModal}
            className="border px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              alert("Group Created!");
              closeModal();
            }}
            className="bg-emerald-500 text-white px-6 py-3 rounded-xl"
          >
            Create Group
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreateGroupModal;