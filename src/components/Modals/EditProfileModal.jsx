function EditProfileModal({
  closeModal,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-bold mb-6">
          Edit Profile
        </h2>

        <input
          type="text"
          placeholder="Name"
          defaultValue="Pallavi"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          defaultValue="pallavi@email.com"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="text"
          placeholder="Profession"
          defaultValue="B.Tech Student"
          className="w-full border p-3 rounded-xl mb-6"
        />

        <div className="flex gap-4">

          <button
            onClick={closeModal}
            className="border px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={closeModal}
            className="bg-emerald-500 text-white px-6 py-3 rounded-xl"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditProfileModal;