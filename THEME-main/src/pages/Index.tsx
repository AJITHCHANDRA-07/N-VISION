 import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const highlightIcons: Record<string, JSX.Element> = {
  "Career Guide": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.578c0 3.866-3.582 7-8 7s-8-3.134-8-7a12.083 12.083 0 01.84-4.578L12 14z" />
    </svg>
  ),
  "Career Map": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.94L9 2m0 18v-6m0 0l6-3m-6 3l-6-3" />
    </svg>
  ),
  "Government Scholarships": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a9 9 0 00-9 9v3a9 9 0 0018 0v-3a9 9 0 00-9-9z" />
    </svg>
  ),
  "Entrance Tests": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z" />
    </svg>
  ),
  "Loans & Schemes": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a9 9 0 00-9 9v3a9 9 0 0018 0v-3a9 9 0 00-9-9z" />
    </svg>
  ),
  "Funds & Subsidies": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a9 9 0 00-9 9v3a9 9 0 0018 0v-3a9 9 0 00-9-9z" />
    </svg>
  ),
};

const highlights = [
  "Career Guide",
  "Career Map",
  "Government Scholarships",
  "Entrance Tests",
  "Loans & Schemes",
  "Funds & Subsidies",
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-sky-200 via-green-100 to-white p-10 rounded-lg shadow-lg">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          {/* Graduated cap icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.578c0 3.866-3.582 7-8 7s-8-3.134-8-7a12.083 12.083 0 01.84-4.578L12 14z" />
          </svg>
          <span className="text-3xl font-extrabold italic text-black select-none tracking-wide">N-VISION</span>
        </div>
        <button
          onClick={() => navigate('/signup')}
          className="flex items-center space-x-2 text-black font-bold hover:text-accent hover:opacity-90 focus:outline-none"
          aria-label="Sign Up"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-3-3.87M12 7a4 4 0 110-8 4 4 0 010 8zM6 21v-2a4 4 0 013-3.87" />
          </svg>
          <span>Sign Up</span>
        </button>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center space-y-16">
        <div className="relative text-center max-w-5xl panel bg-white shadow-md rounded-md p-12 flex flex-col items-center">
          <h1 className="text-6xl font-extrabold mb-8 text-black">Welcome to N-VISION</h1>
          <p className="text-xl mb-12 font-bold text-black max-w-3xl">
            Your one-stop platform for career guidance, educational resources, government scholarships, business funding, and more.
          </p>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-xl px-16 py-5 rounded-full shadow-lg text-black font-extrabold flex items-center justify-center space-x-3"
              onClick={() => navigate('/auth')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>Get Started</span>
            </Button>
          </div>
        </div>

        <div className="flex space-x-12 max-w-6xl w-full justify-center">
          {highlights.map((label) => (
            <div
              key={label}
              className="flex flex-col items-center cursor-default bg-white rounded-lg shadow-md p-8 text-center text-lg font-bold text-black w-48 hover:shadow-xl transform transition duration-300"
            >
              {highlightIcons[label]}
              <span className="mt-2">{label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
