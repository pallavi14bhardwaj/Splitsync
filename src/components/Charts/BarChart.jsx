import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Spending",
        data: [5000, 3000, 2000, 4500, 8000, 11000, 7500, 13500, 9800, 16000, 2400, 1050, ],
        backgroundColor: "#10B981", 
        barPercentage: 0.75,
        categoryPercentage: 0.8,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: {
            display: false,
        },
    
        tooltip: {
            callbacks: {
                label: function(context) {
                    return "₹" + context.raw.toLocaleString();
                },
            },
        },
    },

    scales: {
        x: {
        grid: {
            display: false,
            },
        },
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 2000,
            },
            grid: {
                color: "#E5E7EB",
            },
        },
    },
  };

  return (
    <div className="h-72">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
