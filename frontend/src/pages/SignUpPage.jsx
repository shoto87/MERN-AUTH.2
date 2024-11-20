import Input from "../components/Input";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
        Create Account
      </h2>

      <form onSubmit={handleSignUp}>
        <Input
          icon={User}
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          className="mt-5 w-full py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 
          focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition duration-200"
          type="submit"
          disabled={isLoading}
        >
          Sign Up
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-gray-800 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUpPage;
