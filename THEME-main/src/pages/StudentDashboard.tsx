import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, TrendingUp, User, LogOut, GraduationCap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StudentProfile from "@/components/StudentProfile";
import ClassDetails from "@/components/ClassDetails";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("education");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const handleClassSelect = (classLevel: string) => {
    setSelectedClass(classLevel);
    navigate(`/education?level=${classLevel}`);
  };

  return (
    <div className="student-dashboard-container">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-700" />
            <h1 className="text-3xl font-extrabold text-gray-900">Student Dashboard</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center space-x-2 text-gray-900 border-gray-900 hover:bg-gray-100">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="welcome-highlight">Welcome, Student!</h2>
          <p className="text-gray-700">Select a domain to explore</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="domain-tabs grid w-full grid-cols-4 gap-4 rounded-lg shadow-md p-2">
            <TabsTrigger value="education" className="tab-education flex items-center space-x-2 font-semibold rounded-md">
              <BookOpen className="h-5 w-5" />
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="entrepreneurs" className="tab-entrepreneurs flex items-center space-x-2 font-semibold rounded-md">
              <TrendingUp className="h-5 w-5" />
              <span>Entrepreneurs</span>
            </TabsTrigger>
            <TabsTrigger value="business" className="tab-business flex items-center space-x-2 font-semibold rounded-md">
              <Award className="h-5 w-5" />
              <span>Business</span>
            </TabsTrigger>
            <TabsTrigger value="sports" className="tab-sports flex items-center space-x-2 font-semibold rounded-md">
              <Users className="h-5 w-5" />
              <span>Sports & Games</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="space-y-6">
            <div className="select-class-section">
              <h3 className="text-3xl font-bold mb-4">Select Class</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Button onClick={() => handleClassSelect("5-9")} variant="outline" className="p-4 text-gray-900 graphical-button">
                  5th to 9th Standard
                </Button>
                <Button onClick={() => handleClassSelect("10")} variant="outline" className="p-4 text-gray-900 graphical-button">
                  10th Standard
                </Button>
              </div>
              {/* Removed Intermediate and Graduation buttons as per request */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button onClick={() => handleClassSelect("graduation")} variant="outline" className="p-4 text-gray-900 graphical-button">
                  Graduation
                </Button>
              </div> */}
              {selectedClass && (
                <div className="mt-8">
                  <ClassDetails classLevel={selectedClass} />
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="entrepreneurs" className="space-y-6">
            <Button onClick={() => navigate('/entrepreneurs')} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded">
              Go to Entrepreneurs Domain
            </Button>
          </TabsContent>

          <TabsContent value="business" className="space-y-6">
            <Button onClick={() => navigate('/business')} className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded">
              Go to Business Domain
            </Button>
          </TabsContent>

          <TabsContent value="sports" className="space-y-6">
            <Button onClick={() => navigate('/sports-games')} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded">
              Go to Sports & Games Domain
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
