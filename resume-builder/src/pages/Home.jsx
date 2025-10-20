import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Next-Gen Resume Ecosystem</h1>
      <p className="text-gray-600 max-w-md mb-6">
        Auto-generate, customize, and verify your resume — updated in real-time from your achievements.
      </p>
      <button
        onClick={() => navigate("/resume")}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </main>
  );
}
