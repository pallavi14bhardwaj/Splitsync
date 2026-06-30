// Dashboard page

// Dashboard components
import DashboardNavbar from "../components/Navbar/DashboardNavbar";

import Welcome from "../components/Dashboard/Welcome";
import SummaryCard from "../components/Dashboard/SummaryCard";
import GroupCard from "../components/Dashboard/GroupCard";
import ExpenseCard from "../components/Dashboard/ExpenseCard";
import ActivityCard from "../components/Dashboard/ActivityCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Top navigation bar */}
      <DashboardNavbar />

      {/* Main dashboard container */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Welcome message */}
        <Welcome />

        {/* Financial summary cards */}
        <SummaryCard />

        {/* User groups */}
        <GroupCard />

        {/* Recent expenses */}
        <ExpenseCard />

        {/* Latest activities */}
        <ActivityCard />

      </div>

    </div>
  );
}

export default Dashboard;