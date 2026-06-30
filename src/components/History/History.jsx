import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import groups from "../Data/groups";

function History() {

  const allExpenses = groups.flatMap((group) =>
    group.expenses.map((expense) => ({
      ...expense,
      groupName: group.name
    }))
  );

  return (
    <div className="min-h-screen bg-slate-100">

      <DashboardNavbar />

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-5xl font-bold mb-2">
          📜 Expense History
        </h1>

        <p className="text-gray-500 mb-8">
          View all expenses across your groups.
        </p>

        <div className="space-y-5">

          {allExpenses.map((expense) => (

            <div
              key={expense.id + expense.groupName}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-2xl font-bold">
                    {expense.category} {expense.title}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Paid by <span className="font-semibold">{expense.paidBy}</span>
                  </p>

                  <p className="text-gray-500">
                    Group : {expense.groupName}
                  </p>

                  <p className="text-sm text-gray-400">
                    {expense.date}
                  </p>

                </div>

                <div className="text-right">

                  <h2 className="text-3xl font-bold text-emerald-500">
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