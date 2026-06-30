import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    labels: ["Food", "Travel", "Shopping", "Entertainment"],
    datasets: [
      {
        data: [4000, 6000, 2500, 2500],
        backgroundColor: [
          "#10B981",
          "#60A5FA",
          "#F59E0B",
          "#EF4444",
        ],
      },
    ],
  };

  return (
    <div className="h-64">
      <Doughnut
        data={data}
        options={{
            maintainAspectRatio: false,
            cutout: "55%",
        }}
        />
    </div>
  );
}

export default DoughnutChart;