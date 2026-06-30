// Summary and settlements page
import DoughnutChart from "../components/Charts/DoughnutChart";
import BarChart from "../components/Charts/BarChart";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";

function Summary() {
  return (
    <div className="min-h-screen bg-slate-100">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto p-8">

        {/* Heading */}

        <div className="mb-8">

          <h1 className="text-5xl font-bold">
            Financial Summary 📊
          </h1>

          <p className="text-gray-500 text-lg mt-3">
            Track your spending and settlements.
          </p>

        </div>

        {/* Summary Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow">
            <p className="text-gray-500">Total Paid</p>
            <h2 className="text-4xl font-bold text-blue-500 mt-4">
              ₹15,000
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <p className="text-gray-500">Your Share</p>
            <h2 className="text-4xl font-bold text-orange-500 mt-4">
              ₹10,000
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <p className="text-gray-500">You Owe</p>
            <h2 className="text-4xl font-bold text-red-500 mt-4">
              ₹500
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <p className="text-gray-500">You Are Owed</p>
            <h2 className="text-4xl font-bold text-emerald-500 mt-4">
              ₹4,500
            </h2>
          </div>

        </div>

        {/* Charts */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-3xl shadow p-8 h-[450px]">
          
            <h2 className="text-3xl font-bold mb-8">
              Spending by Category
            </h2>

            <div className="h-72 flex items-center justify-center">
              <DoughnutChart />
            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-3xl font-bold mb-8">
              Monthly Spending
            </h2>

            <div className="h-72 flex items-center justify-center">
              <BarChart /> 
              
            </div>

          </div>

        </div>

        {/* Settlement History */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-bold">
              Settlement History
            </h2>

            <span className="bg-red-100 text-red-500 px-4 py-2 rounded-full font-semibold">
              You owe ₹500
            </span>

          </div>

          <div className="space-y-4">

            <div className="border-b pb-3">
              Rahul paid Pallavi ₹500.
            </div>

            <div className="border-b pb-3">
              Priya settled ₹300.
            </div>

            <div>
              Ankit paid Rahul ₹800.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
export default Summary;