// Dashboard summary cards

import summary from "../../Data/summary";

function SummaryCard() {
  return (
    <div className="grid md:grid-cols-4 gap-6 mt-8">

      {summary.map((item) => (

        <div
          key={item.id}
          className="bg-white p-6 rounded-3xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >

          <p className="text-gray-500 font-medium">
            {item.title}
          </p>

          <h2 className={`text-4xl font-bold mt-4 ${item.color}`}>
            {item.amount}
          </h2>

        </div>

      ))}

    </div>
  );
}

export default SummaryCard;