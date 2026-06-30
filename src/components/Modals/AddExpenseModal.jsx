import { useState } from "react";

  function AddExpenseModal({
    group,
    expenses,
    setExpenses,
    closeModal
  }) {

  const [category, setCategory] = useState("🍕 Food");
  const [splitType, setSplitType] = useState("Equal");


  const [customAmounts, setCustomAmounts] = useState(
    Array(group.members.length).fill("")
  );

  const [percentages, setPercentages] = useState(
    Array(group.members.length).fill("")
  );

  const [amount, setAmount] = useState("");

  const [expenseName, setExpenseName] = useState("");

  const [paidBy, setPaidBy] = useState(
    group.members[0]
  );

  const totalCustom =
  customAmounts.reduce(
    (sum, value) => sum + Number(value || 0),
    0
  );

  const remainingCustom =
    Number(amount || 0) - totalCustom;

  const totalPercent =
    percentages.reduce(
      (sum, value) => sum + Number(value || 0),
      0
    );

  const equalAmount =
    Number(amount || 0) /
    group.members.length;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 overflow-y-auto">

      <div className="bg-white rounded-3xl p-8 w-full max-w-2xl my-10">

        <h2 className="text-4xl font-bold mb-8">
          Add Expense
        </h2>

        {/* Expense Name */}

        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="📝 Expense Name"
          className="w-full border p-3 rounded-xl mb-4"
        />

        {/* Amount */}

        <input
          type="number"
          placeholder="💰 Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        />

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        >
          <option>🍕 Food</option>
          <option>🚕 Travel</option>
          <option>🛒 Shopping</option>
          <option>🎬 Entertainment</option>
          <option>🏠 Household</option>
          <option>📚 Education</option>
          <option>💼 Office</option>
          <option>🎉 Celebration</option>
          <option>🏥 Medical</option>
          <option>📌 Other</option>
        </select>

        {/* Custom Category */}

        {category === "📌 Other" && (
          <input
            type="text"
            placeholder="✍ Enter Custom Category"
            className="w-full border p-3 rounded-xl mb-4"
          />
        )}

        {/* Paid By */}

        <select
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        >
    

          {group.members.map((member, index) => (

            <option key={index}>
              👤 {member}
            </option>

          ))}
        </select>


        {/* Split Type */}

        <div className="mb-4">

          <p className="font-semibold mb-3">
            ⚖ Split Type
          </p>

          <div className="flex gap-6 flex-wrap">

            {/* Equal */}

            <label className="flex items-center gap-2">

              <input
                type="radio"
                value="Equal"
                checked={splitType === "Equal"}
                onChange={(e) =>
                  setSplitType(e.target.value)
                }
              />

              Equal

            </label>

            {/* Custom */}

            <label className="flex items-center gap-2">

              <input
                type="radio"
                value="Custom"
                checked={splitType === "Custom"}
                onChange={(e) => setSplitType(e.target.value)
                }
              />

              Custom

            </label>

            {/* Percentage */}

            <label className="flex items-center gap-2">

              <input
                type="radio"
                value="Percentage"
                checked={splitType === "Percentage"}
                onChange={(e) =>
                  setSplitType(e.target.value)
                }
              />

              Percentage

            </label>

          </div>

        </div>

        {/* Equal Split */}

        {splitType === "Equal" && (

        <div className="mb-4 p-4 bg-slate-50 rounded-xl">

          <h3 className="font-semibold mb-3">
            Equal Split
          </h3>


          {group.members.map((member, index) => (

            <p key={index}>
              👤 {member} : ₹{equalAmount.toFixed(2)}
            </p>

          ))}

          <p className="text-emerald-500 mt-3">
            ✅ Automatically Calculated
          </p>

        </div>

        )}

        {/* Custom Split */}

        {splitType === "Custom" && (

        <div className="mb-4">

          <h3 className="font-semibold mb-4">
            Custom Split
          </h3>

          {/* Split Summary */}

            {group.members.map((member, index) => (

          <div key={index} className="mb-3">

            <p className="font-medium mb-2">
              👤 {member}
            </p>

            <input
              type="number"
              value={customAmounts[index]}
              onChange={(e) => {

                const updated = [...customAmounts];
                updated[index] = e.target.value;

                setCustomAmounts(updated);

              }}
              placeholder="Enter amount"
              className="w-full border p-3 rounded-xl"
            />

          </div>

        ))}

        {/* Split Summary */}



          <div className="mt-4 p-4 bg-slate-50 rounded-xl">

            <h3 className="font-semibold mb-3">
              Split Summary
            </h3>

            <p>
              Allocated : ₹{totalCustom}
            </p>

            <p>
              Remaining : ₹{remainingCustom}
            </p>

            <hr className="my-3"/>

            {group.members.map((member, index) => (

              <p key={index}>
                👤 {member} : ₹{Number(customAmounts[index]) || 0}
              </p>

            ))}


            <hr className="my-3"/>

            {Number(amount) === 0 ? (

              <p className="text-gray-500">
                Enter amount to calculate.
              </p>

            ) : remainingCustom === 0 ? (

              <p className="text-emerald-500 font-medium">
                ✅ Split Complete
              </p>

            ) : remainingCustom > 0 ? (

              <p className="text-orange-500 font-medium">
                ⚠ Remaining ₹{remainingCustom}
              </p>

            ) : (

              <p className="text-red-500 font-medium">
                ❌ Exceeded by ₹{-remainingCustom}
              </p>

            )}

          </div>

        </div>

        )}
        
        {/* Percentage */}

        {splitType === "Percentage" && (

        <div className="mb-4">

          <h3 className="font-semibold mb-3">
            Percentage Split
          </h3>


          {group.members.map((member, index) => (

          <input
            key={index}
            type="number"
            value={percentages[index]}
            onChange={(e) => {

              const updated = [...percentages];
              updated[index] = e.target.value;

              setPercentages(updated);

            }}
            placeholder={`👤 ${member} %`}
            className="w-full border p-3 rounded-xl mb-3"
          />

        ))}

          <div className="mt-4 p-4 bg-slate-50 rounded-xl">

            <h3 className="font-semibold mb-3">
              Amount Distribution
            </h3>

      

            {group.members.map((member, index) => (

              <p key={index}>
                👤 {member} : ₹
                {(
                  (Number(amount) *
                    Number(percentages[index] || 0)) / 100
                ).toFixed(2)}
              </p>

            ))}

            <hr className="my-2" />

            <p>
              Total Percentage : {totalPercent}%
            </p>

            {amount === 0 ? (

              <p className="text-gray-500">
                Enter amount to calculate.
              </p>

            ) : totalPercent === 100 ? (

              <p className="text-emerald-500">
                ✅ Split Complete
              </p>

            ) : totalPercent < 100 ? (

              <p className="text-orange-500">
                ⚠ {100 - totalPercent}% Remaining
              </p>

            ) : (

              <p className="text-red-500">
                ❌ Exceeded by {totalPercent - 100}%
              </p>

            )}

          </div>

        </div>

        )}

        {/* Date */}

        <input
          type="date"
          className="w-full border p-3 rounded-xl mb-4"
        />

        {/* Notes */}

        <textarea
          placeholder="🗒 Notes (Optional)"
          rows="3"
          className="w-full border p-3 rounded-xl mb-6"
        />

        {/* Buttons */}

        <div className="flex gap-4">

          <button
            onClick={closeModal}
            className="
              border
              px-6
              py-3
              rounded-xl
              hover:bg-slate-100
            "
          >
            Cancel
          </button>

      
          <button
            onClick={() => {

              const newExpense = {
                id: Date.now(),
                title: expenseName,
                amount: Number(amount),
                paidBy: paidBy,
                category: category,
                date: new Date().toLocaleDateString(),
              };

              setExpenses([
                newExpense,
                ...expenses,
              ]);

              closeModal();

            }}
            className="
              bg-emerald-500
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-emerald-600
            "
          >
            ➕ Add Expense
          </button>
        </div>

      </div>

    </div>
  );
}

export default AddExpenseModal;
