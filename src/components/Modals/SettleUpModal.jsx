import { useState } from "react";

function SettleUpModal({ group, closeModal }) {

  const [payer, setPayer] = useState(group.members[0]);
  const [receiver, setReceiver] = useState(group.members[1] || group.members[0]);
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-bold mb-6">
          🤝 Settle Up
        </h2>

        <label className="block mb-2 font-medium">
          From
        </label>

        <select
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        >
          {group.members.map((member, index) => (
            <option key={index}>
              {member}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-medium">
          To
        </label>

        <select
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        >
          {group.members.map((member, index) => (
            <option key={index}>
              {member}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="💰 Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        />

        <textarea
          placeholder="📝 Notes (Optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="3"
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
            onClick={() => {
              alert("Settlement Recorded ✅");
              closeModal();
            }}
            className="bg-emerald-500 text-white px-6 py-3 rounded-xl"
          >
            Settle
          </button>

        </div>

      </div>

    </div>
  );
}

export default SettleUpModal;