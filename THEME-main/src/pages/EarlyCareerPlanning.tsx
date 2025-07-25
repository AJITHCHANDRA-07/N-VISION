import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RegularCourses = [
  { title: "Engineering", description: "Civil, Mechanical, Electrical, Computer Science, Chemical, etc.", icon: "🏗️" },
  { title: "Hotel Management", description: "Focuses on hospitality and catering services.", icon: "🏨" },
  { title: "Fashion Technology", description: "Designing apparel, accessories, and fashion collections.", icon: "👗" },
  { title: "Computer Science", description: "Programming, software development, and IT support.", icon: "💻" },
  { title: "Interior Decoration", description: "Designing and decorating interior spaces.", icon: "🛋️" },
  { title: "Animation and Graphic Design", description: "Visual communication.", icon: "🎨" },
  { title: "Photography", description: "Capturing and creating images.", icon: "📸" },
  { title: "Medical Lab Technology", description: "Laboratory work in healthcare.", icon: "🧪" },
  { title: "Digital Marketing", description: "Online marketing strategies and campaigns.", icon: "📱" },
  { title: "Other Diploma Courses", description: "Pharmacy, Accountancy, Biotechnology, and more.", icon: "📚" }
];

const degreeCourses = [
  { title: "Bachelor of Arts (BA)", description: "Languages, literature, history, etc.", icon: "🎭" },
  { title: "Bachelor of Science (BSc)", description: "Science-related fields like Physics, Chemistry, Biology.", icon: "🔬" },
  { title: "Bachelor of Commerce (B.Com)", description: "Business, finance, accounting, economics.", icon: "💼" },
  { title: "Bachelor of Computer Application (BCA)", description: "Computer applications and programming.", icon: "🖥️" },
  { title: "Bachelor of Business Administration (BBA)", description: "Business management, marketing, administration.", icon: "📊" },
  { title: "Law Courses", description: "Including BA LLB.", icon: "⚖️" },
  { title: "Arts/Humanities", description: "History, geography, psychology, political science.", icon: "📜" },
  { title: "Paramedical Fields", description: "Pharmacy, Medical Lab Technology, Radiology.", icon: "🏥" },
  { title: "Vocational Training", description: "Plumbing, carpentry, mechanics.", icon: "🔧" },
  { title: "Agriculture and Farming", description: "Modern farming techniques and agribusiness.", icon: "🌾" },
  { title: "Aviation and Hospitality Management", description: "Airline and hotel industries.", icon: "✈️" },
  { title: "Mass Communication", description: "Media, journalism, public relations.", icon: "📢" },
  { title: "Fine Arts", description: "Painting, sculpture, music.", icon: "🎨" },
  { title: "Digital Marketing", description: "Online marketing and advertising.", icon: "📱" },
  { title: "Data Science", description: "Analyzing and interpreting data.", icon: "📊" }
];

const EarlyCareerPlanning = () => {
  const navigate = useNavigate();

  if (!RegularCourses.length || !degreeCourses.length) {
    return <div className="min-h-screen bg-gray-50 p-6">No course data available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Early Career Planning</h1>
      <Button onClick={() => navigate(-1)} className="mb-6 bg-purple-300 hover:bg-purple-400 px-4 py-2 rounded text-purple-900">
        Back
      </Button>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Regular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RegularCourses.map((course, idx) => (
            <Card key={idx} className="bg-white shadow rounded-lg p-4">
              <CardHeader className="flex items-center space-x-3">
                <div className="text-3xl">{course.icon}</div>
                <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Degree Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {degreeCourses.map((course, idx) => (
            <Card key={idx} className="bg-white shadow rounded-lg p-4">
              <CardHeader className="flex items-center space-x-3">
                <div className="text-3xl">{course.icon}</div>
                <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EarlyCareerPlanning;
