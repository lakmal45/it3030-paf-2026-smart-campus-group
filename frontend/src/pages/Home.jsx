import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-3xl w-full space-y-10 text-center transform transition-all duration-700 hover:scale-[1.02]">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-full mb-4 ring-1 ring-indigo-500/30">
            <span className="text-indigo-300 font-semibold tracking-wide uppercase text-sm">
              IT3030 Assignment
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-indigo-200 tracking-tight drop-shadow-sm">
            Smart Campus Operations
          </h1>
          <p className="max-w-xl mx-auto mt-5 text-xl text-indigo-200/80 font-light">
            Centralized management for facilities, assets, and maintenance
            workflows.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <Link to="/signup" className="group w-full sm:w-auto">
            <button className="w-full relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-indigo-600 border border-transparent rounded-xl shadow-lg hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-slate-900 active:scale-95">
              Create Account
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>

          <Link to="/login" className="w-full sm:w-auto">
            <button className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-indigo-100 transition-all duration-300 bg-white/5 border border-white/10 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 focus:ring-offset-slate-900 active:scale-95">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
