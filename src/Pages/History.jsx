// Expense History page
import { useState } from "react";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import groups from "../Data/groups";

function History() {

  const allExpenses = groups.flatMap((group) =>
    group.expenses.map((expense) => ({
      ...expense,
      groupName: group.name,
      groupIcon: group.icon
    }))
  );
  const [selectedGroup, setSelectedGroup] = useState("All Groups");
  const filteredExpenses =
    selectedGroup === "All Groups"
      ? allExpenses
      : allExpenses.filter(
          (expense) => expense.groupName === selectedGroup
        );

  return (
    <div className="min-h-screen bg-slate-100">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto p-8">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-5xl font-bold">
            📜 Expense History
          </h1>

          <p className="text-gray-500 text-lg mt-2">
            View all expenses from every group.
          </p>

        </div>

        {/* Summary Cards */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-2xl p-6 shadow">

            <p className="text-gray-500">
              Total Expenses
            </p>

            <h2 className="text-4xl font-bold text-emerald-500 mt-2">
              {allExpenses.length}
            </h2>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow">

            <p className="text-gray-500">
              Total Groups
            </p>

            <h2 className="text-4xl font-bold text-blue-500 mt-2">
              {groups.length}
            </h2>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow">

            <p className="text-gray-500">
              Total Amount
            </p>

            <h2 className="text-4xl font-bold text-orange-500 mt-2">
              ₹
              {allExpenses.reduce(
                (sum, expense) => sum + expense.amount,
                0
              )}
            </h2>

          </div>

        </div>

        {/* Search + Filter */}

        <div className="flex gap-4 mb-8 flex-wrap">

          <input
            type="text"
            placeholder="🔍 Search expenses..."
            className="border rounded-xl px-5 py-3 w-80"
          />

          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="border rounded-xl px-5 py-3"
          >
            <option>All Groups</option>

            {groups.map((group) => (

              <option key={group.id}>
                {group.name}
              </option>

            ))}

          </select>

        </div>

        {/* Expense List */}

        <div className="space-y-5">

          
            {filteredExpenses.map((expense) => (

            <div
              key={`${expense.groupName}-${expense.id}`}
              className="bg-white rounded-3xl shadow p-6 hover:shadow-lg transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-2xl font-bold">
                    {expense.category} {expense.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    👤 Paid by <span className="font-semibold">{expense.paidBy}</span>
                  </p>

                  <p className="text-gray-500">
                    {expense.groupIcon} {expense.groupName}
                  </p>

                  <p className="text-sm text-gray-400">
                    📅 {expense.date}
                  </p>

                </div>

                <div className="text-right">

                  <h2 className="text-4xl font-bold text-emerald-500">
                    ₹{expense.amount}
                  </h2>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default History;