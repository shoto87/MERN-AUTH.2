import { useAuthStore } from "../store/authStore";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="max-w-md w-full mx-auto mt-10 p-8 bg-white text-gray-800 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center  text-gray-700 text-transparent bg-clip-text">
        Dashboard
      </h2>

      <div className="space-y-6">
        <div className="p-4 bg-gray-400 bg-opacity-50 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Profile Information
          </h3>
          <p className="text-gray-800">Name: {user.name}</p>
          <p className="text-gray-800">Email: {user.email}</p>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-gray-800 text-white 
				font-bold rounded-lg shadow-lg hover:bg-gray-600
				 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default DashboardPage;
