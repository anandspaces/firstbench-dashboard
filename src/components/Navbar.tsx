import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-between p-4">
      <div className="flex items-center">
        {/* <img src="/logo.svg" alt="Logo" className="h-8 mr-4" /> */}
        <div className="text-xl font-bold">Firstbench</div>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">Dashboard</a>
        <a href="#" className="hover:underline">FirstGuru</a>
        <a href="#" className="hover:underline">TownHall</a>
        <a href="#" className="hover:underline">AI Evaluation</a>
        <a href="#" className="hover:underline">Performance</a>
        <a href="#" className="hover:underline">Mock Test</a>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-blue-500">
          <FaBell size={20} />
        </button>
        <div className="flex items-center text-gray-500 hover:text-blue-500">
          Profile
          <FaUserCircle size={24} />
        </div>
      </div>
    </nav>
  )
}
// src/components/Navbar.jsx
// import React from "react";
// import { FaBell, FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
//         <h1 className="text-xl font-semibold">Firstbench</h1>
//       </div>
//       <div className="flex items-center space-x-6">
//         <button className="text-gray-500 hover:text-gray-800">
//           <FaBell size={20} />
//         </button>
//         <div className="text-gray-500 hover:text-gray-800">
//           <FaUserCircle size={24} />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
