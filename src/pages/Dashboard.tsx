import Navbar from "../components/Navbar";
import ResultCard from "../components/ResultCard";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResultCard />
          {/* <Chart /> */}
          {/* <Chart /> */}
        </div>
      </div>
    </div>
  )
}