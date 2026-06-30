// Recent expenses

import expenses from "../../Data/expenses";

function ExpenseCard() {
  return (
    <div className="mt-8">

      <h2 className="text-3xl font-bold mb-5">
        Recent Expenses
      </h2>

      <div className="bg-white rounded-3xl shadow">

        {expenses.map((expense) => (

          <div
            key={expense.id}
            className="flex justify-between p-6 border-b"
          >

            <div>

              <h3 className="text-xl font-bold">
                {expense.title}
              </h3>

              <p className="text-gray-500">
                Paid by {expense.paidBy}
              </p>

            </div>

            <h2 className="text-2xl font-bold">
              ₹{expense.amount}
            </h2>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ExpenseCard;