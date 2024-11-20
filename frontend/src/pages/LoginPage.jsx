import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
        Welcome Back
      </h2>

      <form onSubmit={handleLogin}>
        <Input
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={Lock}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          className="w-full py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 
          focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition duration-200"
          type="submit"
          disabled={isLoading}
        >
          Log In
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-gray-800 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
