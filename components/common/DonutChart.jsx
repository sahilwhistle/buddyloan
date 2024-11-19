import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels); // Register the plugin
export default function DonutChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%", // For donut shape
    plugins: {
      legend: {
        display: false, // We don't need a legend here as we're manually creating labels on the right side
      },
      datalabels: {
        display: false, // Disable data labels on the chart itself
      },
    },
  };
  return <Doughnut data={data} options={options} />;
}
