import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ConnectButton({ label = "LET'S CONNECT", to = "/" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
    >
        <span className="text-base font-semibold text-black">{label}</span>

      <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white shadow-md">
        <ArrowRight className="w-4 h-4" />
      </span>
    </button>
  );
}
