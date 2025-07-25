import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Education from "./pages/Education";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import Entrepreneurs from "./pages/Entrepreneurs";
import Business from "./pages/Business";
import SportsGames from "./pages/SportsGames";
import GovernmentCollegeAdvantages from "./pages/GovernmentCollegeAdvantages";
import EarlyCareerPlanning from "./pages/EarlyCareerPlanning";
import NotFound from "./pages/NotFound";

import "./styles/theme.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/education" element={<Education />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports-games" element={<SportsGames />} />
        <Route path="/government-college-advantages" element={<GovernmentCollegeAdvantages />} />
        <Route path="/early-career-planning" element={<EarlyCareerPlanning />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
