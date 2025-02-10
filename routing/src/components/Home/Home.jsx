import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Employee Manager
      </h1>
      <p className="text-gray-700 text-lg max-w-xl">
        A smart solution to manage your employees, track attendance, and handle payroll efficiently.
      </p>

      {/* Call to Action */}
      <Link to="/dashboard" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700">
        Get Started
      </Link>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600">📊 Dashboard</h2>
          <p className="text-gray-600 mt-2">Monitor employee performance and key metrics in real-time.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600">🕒 Attendance</h2>
          <p className="text-gray-600 mt-2">Keep track of employee attendance and working hours.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600">💰 Payroll</h2>
          <p className="text-gray-600 mt-2">Easily manage employee salaries and automate payroll processes.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;
