import { FaGraduationCap } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="overflow-x-hidden fixed top-0 bg-sky-500 w-screen z-10 border-b-2 border-sky-900">
      <div className="flex items-center h-20 px-4 text-white">
        <h1 className="flex gap-3 text-4xl font-semibold"><span className="animate-bounce-slow"><FaGraduationCap /></span>Bang Info</h1>
      </div>
    </nav>
  );
}
