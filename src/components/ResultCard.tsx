export default function ResultCard() {
  return (
    <div className="bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-bold">Your Result!</h2>
      <p className="text-gray-500">All your insights & details in one place</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Score: 136/240</h3>
        <p className="text-green-500 font-bold">76% Accuracy</p>
        <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded">
          Practice More
        </button>
      </div>
    </div>
  )
}