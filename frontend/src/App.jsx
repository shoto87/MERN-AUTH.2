import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-br
     from-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden"
      >
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
