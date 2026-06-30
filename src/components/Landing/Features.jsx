// Features section

import {
  Users,
  Calculator,
  Activity,
  PieChart,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Users size={35} />,
      title: "Create Groups",
      text: "Create family, friends, office and trip groups.",
    },

    {
      icon: <Calculator size={35} />,
      title: "Custom Splits",
      text: "Split bills equally or with custom amounts.",
    },

    {
      icon: <Activity size={35} />,
      title: "Real-Time Balances",
      text: "Instantly know who owes whom.",
    },

    {
      icon: <PieChart size={35} />,
      title: "Shared Expenses",
      text: "Track every shared expense easily.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          Everything you need
        </h1>

        <p className="text-center text-gray-500 mt-4 text-xl">
          Smart tools for splitting expenses.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="text-emerald-500">
                {item.icon}
              </div>

              <h2 className="font-bold text-2xl mt-6">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-4">
                {item.text}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;