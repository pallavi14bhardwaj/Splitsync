function NotificationModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-lg">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            🔔 Notifications
          </h2>

          <button
            onClick={closeModal}
            className="text-2xl hover:text-red-500"
          >
            ✖
          </button>

        </div>

        <div className="space-y-4">

          <div className="bg-slate-50 p-4 rounded-xl hover:bg-slate-100">
            💸 Rahul settled ₹500 with you.
          </div>

          <div className="bg-slate-50 p-4 rounded-xl hover:bg-slate-100">
            🍕 Team Lunch expense was added.
          </div>

          <div className="bg-slate-50 p-4 rounded-xl hover:bg-slate-100">
            👨‍👩‍👧 Family group was updated.
          </div>

          <div className="bg-slate-50 p-4 rounded-xl hover:bg-slate-100">
            💼 Office group created a new expense.
          </div>

        </div>

        <button
          onClick={closeModal}
          className="mt-6 bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default NotificationModal;