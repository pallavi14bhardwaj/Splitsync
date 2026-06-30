import { useParams } from "react-router-dom";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import groups from "../Data/groups";
import AddExpenseModal from "../components/Modals/AddExpenseModal";
import { useState } from "react";
import SettleUpModal from "../components/Modals/SettleUpModal";

function SingleGroup() {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showSettleModal, setShowSettleModal] = useState(false);
  const { id } = useParams();

  const group = groups.find(
    (g) => g.id === Number(id)
  );

  const [expenses, setExpenses] = useState(
    group.expenses || []
  );

  if (!group) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Group Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto p-8">

        {/* Group Header */}

        <div className="bg-white rounded-3xl p-8 shadow">

          <div className="flex items-center gap-4">

            <div className="text-6xl">
              {group.icon}
            </div>

            <div>

              <h1 className="text-5xl font-bold">
                {group.name} Group
              </h1>

              <p className="text-gray-500 mt-2">
                {group.members.length} Members
              </p>

            </div>

          </div>

          <h2
            className={`text-4xl font-bold mt-8 ${
              group.balance.includes("-")
                ? "text-red-500"
                : "text-emerald-500"
            }`}
          >
            {group.balance}
          </h2>

        </div>

        {/* Details */}

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          {/* Members */}

          <div className="bg-white rounded-3xl p-8 shadow">

            <h2 className="text-3xl font-bold mb-6">
              Members
            </h2>

            <div className="space-y-4">

              {group.members.map((member, index) => (

                <p key={index}>
                  👤 {member}
                </p>

              ))}

            </div>

          </div>

          {/* Expenses */}

          <div className="bg-white rounded-3xl p-8 shadow">

            <h2 className="text-3xl font-bold mb-6">
              Expenses
            </h2>

            <div className="space-y-4">

            {expenses.map((expense) => (

              <div
                key={expense.id}
                className="border-b pb-3 last:border-b-0"
              >
                {expense.category} {expense.title} ₹{expense.amount}
              </div>

            ))}

          </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <button
            onClick={() => setShowExpenseModal(true)}
            className="
              bg-emerald-500
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-emerald-600
              transition
            "
          >
            ➕ Add Expense
          </button>
          

          <button
            onClick={() => setShowSettleModal(true)}
            className="border px-6 py-3 rounded-xl hover:bg-slate-100 transition"
          >
            🤝 Settle Up
          </button>

        </div>
        {/* Expense History */}

        <div className="bg-white rounded-3xl p-8 shadow mt-8">

          <h2 className="text-3xl font-bold mb-6">
            📜 Expense History
          </h2>

          {expenses.map((expense) => (

            <div
              key={expense.id}
              className="border-b py-4 last:border-b-0"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold text-xl">
                    {expense.category} {expense.title}
                  </h3>

                  <p className="text-gray-500">
                    Paid by {expense.paidBy}
                  </p>

                  <p className="text-sm text-gray-400">
                    {expense.date}
                  </p>

                </div>

                <h3 className="text-2xl font-bold text-emerald-500">
                  ₹{expense.amount}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
      {showExpenseModal && (
        <AddExpenseModal
          group={group}
          expenses={expenses}
          setExpenses={setExpenses}
          closeModal={() => setShowExpenseModal(false)}
        />
      )}
      {showSettleModal && (
        <SettleUpModal
          group={group}
          closeModal={() => setShowSettleModal(false)}
        />
      )}

    </div>
  )
}

export default SingleGroup;