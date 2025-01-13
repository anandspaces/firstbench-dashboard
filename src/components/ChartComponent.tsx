import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartOptions,
  ChartData
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Define the types for the props
interface ChartComponentProps {
  type: "bar" | "line" | "doughnut"; // Chart type
  data: ChartData<'bar'> | ChartData<'line'> | ChartData<'doughnut'>; // Chart data, specific to type
  options?: ChartOptions<'bar'> | ChartOptions<'line'> | ChartOptions<'doughnut'>; // Options specific to chart type
}

const ChartComponent: React.FC<ChartComponentProps> = ({ type, data, options }) => {
  if (type === "bar") return <Bar data={data as ChartData<'bar'>} options={options as ChartOptions<'bar'>} />;
  if (type === "line") return <Line data={data as ChartData<'line'>} options={options as ChartOptions<'line'>} />;
  if (type === "doughnut") return <Doughnut data={data as ChartData<'doughnut'>} options={options as ChartOptions<'doughnut'>} />;
  return <p>Invalid chart type</p>;
};

export default ChartComponent;
