export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-between p-4">
      <div className="text-xl font-bold">Firstbench</div>
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">Dashboard</a>
        <a href="#" className="hover:underline">FirstGuru</a>
        <a href="#" className="hover:underline">TownHall</a>
        <a href="#" className="hover:underline">AI Evaluation</a>
        <a href="#" className="hover:underline">Performance</a>
        <a href="#" className="hover:underline">Mock Test</a>
      </div>
      <div>
        <button className="bg-blue-500 px-4 py-2 rounded">Profile</button>
      </div>
    </nav>
  )
}