import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { error, isLoading, verifyEmail } = useAuthStore();

  const handleChange = (index, value) => {
    const newCode = [...code];

    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode);
      navigate("/");
      toast.success("Email verified successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Auto submit when all fields are filled
  // useEffect(() => {
  //   if (code.every((digit) => digit !== "")) {
  //     handleSubmit(new Event("submit"));
  //   }
  // }, [code]);

  return (
    <div className="max-w-md w-full bg-white backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-white  backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center  bg-gray-800 text-transparent bg-clip-text">
          Verify Your Email
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="6"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-bold bg-gray-100 text-gray-800 border-2 border-gray-600 rounded-lg"
              />
            ))}
          </div>
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <button
            disabled={isLoading || code.some((digit) => !digit)}
            className="w-full bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 
          focus:outline-none focus:ring-2 focus:ring-gray-600 font-bold py-3 px-4 rounded-lg shadow-lg "
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};
export default EmailVerificationPage;
