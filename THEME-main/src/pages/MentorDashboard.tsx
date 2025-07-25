import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, TrendingUp, LogOut, GraduationCap, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MentorDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("guidance");
  const [studentId, setStudentId] = useState("");
  const [verifiedStudent, setVerifiedStudent] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const verifyStudent = () => {
    if (studentId.trim() !== "") {
      setVerifiedStudent(studentId.trim());
    } else {
      alert("Please enter a valid student ID");
    }
  };

  const class10Benefits = [
    "Free admission to IIIT Basara for government college students",
    "Direct entry to top engineering colleges",
    "Merit-based scholarship opportunities",
    "Reserved seats in professional courses"
  ];

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

const professionalCourses = [
  {
    course: "PG Diploma in Management (PGDM) in Finance",
    jobs: ["Investment Banker", "Financial Advisor", "Private Banker", "Financial Analyst"]
  },
  {
    course: "MBA (Masters in Business Administration)",
    jobs: ["HR Manager", "Sales Manager", "Business Consultant", "Administrative Manager"]
  },
  {
    course: "MTech",
    jobs: ["Civil Engineer", "Software Developer", "Network Planning Engineer"]
  },
  {
    course: "Masters in Data Science",
    jobs: ["Data Scientist", "Business Intelligence Analyst", "Big Data Engineer"]
  }
];

// New career categories added as per user request
const itSoftwareCareers = [
  { title: "Software Developer/Engineer", description: "Develops and maintains software applications.", icon: "💻" },
  { title: "Data Scientist", description: "Analyzes large datasets to extract insights and inform decision-making.", icon: "📊" },
  { title: "Systems Analyst", description: "Evaluates computer systems and recommends improvements.", icon: "🖥️" },
  { title: "QA Analyst", description: "Ensures software quality through testing and analysis.", icon: "🧪" }
];

const managementCareers = [
  { title: "Sales Manager", description: "Leads sales teams and develops sales strategies.", icon: "📈" },
  { title: "Financial Planner", description: "Helps individuals and organizations manage their finances.", icon: "💰" },
  { title: "Investment Banker", description: "Advises clients on financial transactions and investments.", icon: "🏦" },
  { title: "Management Consultant", description: "Provides expert advice to organizations on various business issues.", icon: "📋" }
];

const healthcareCareers = [
  { title: "Medical Professionals (Doctors, Surgeons)", description: "Provide medical care and treatment to patients.", icon: "🏥" },
  { title: "Nurse Practitioner", description: "Provides advanced nursing care, often with greater autonomy.", icon: "👩‍⚕️" },
  { title: "Physical Therapist", description: "Helps patients recover from injuries and illnesses through physical rehabilitation.", icon: "🦽" },
  { title: "Pharmacist", description: "Dispenses medications and provides advice on their usage.", icon: "💊" }
];

const creativeArtisticCareers = [
  { title: "Graphic Designer", description: "Creates visual concepts for websites, marketing materials, and other media.", icon: "🎨" },
  { title: "Fashion Designer", description: "Designs clothing and accessories.", icon: "👗" },
  { title: "Animator", description: "Creates moving images for films, games, and other media.", icon: "🎬" },
  { title: "Illustrator", description: "Creates images for books, magazines, and other publications.", icon: "🖌️" }
];

const otherNotableFields = [
  { title: "Digital Marketing", description: "Includes roles like Content Writer, Social Media Executive, and Analytics Manager.", icon: "📢" },
  { title: "Civil Services (IAS, IPS)", description: "Involves working in various government departments and public administration.", icon: "🏛️" },
  { title: "Financial Analyst", description: "Analyzes financial data to provide investment recommendations.", icon: "📈" },
  { title: "Law", description: "Opportunities include lawyers, judges, and legal advisors.", icon: "⚖️" },
  { title: "Education", description: "Opportunities include teachers, professors, and educational administrators.", icon: "📚" },
  { title: "Arts and Entertainment", description: "Includes roles like actors, musicians, and filmmakers.", icon: "🎭" }
];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Mentor Dashboard</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center space-x-2">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome, Mentor!</h2>
          <p className="text-gray-600">Guide students through their educational journey</p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter Student ID to verify progress"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="border p-2 rounded w-full max-w-sm mb-2"
          />
          <Button onClick={verifyStudent} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Verify Student
          </Button>
        </div>

        {verifiedStudent && (
          <div className="p-4 border rounded bg-green-50 mb-6 max-w-2xl">
            <h3 className="text-xl font-semibold mb-2">Student Progress for ID: {verifiedStudent}</h3>
            <p>Progress details and upcoming updates will be displayed here.</p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guidance" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Class 10 Guidance</span>
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span>Graduation Paths</span>
            </TabsTrigger>
            <TabsTrigger value="careers" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Career Opportunities</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guidance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow rounded-lg p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Active Students Daily</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">1,250</p>
                  <p className="text-gray-600">Students actively engaged in career paths today</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow rounded-lg p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Registered Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">8,430</p>
                  <p className="text-gray-600">Total students registered in our platform</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow rounded-lg p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Profile Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-purple-600">15,780</p>
                  <p className="text-gray-600">Total profile views by students and mentors</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow rounded-lg p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Achieved Career Paths</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-600">1,020</p>
                  <p className="text-gray-600">Students who achieved career goals through our guidance</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Graduation Course Options</CardTitle>
                <CardDescription>Comprehensive guide to graduation fields after 12th</CardDescription>
              </CardHeader>
          <CardContent>
            <div>
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Regular Courses</h3>
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
                <h3 className="text-xl font-semibold mb-4">Degree Courses</h3>
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
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-600">Science Stream</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">BE/BTech</Badge>
                <Badge variant="outline">MBBS</Badge>
                <Badge variant="outline">BArch</Badge>
                <Badge variant="outline">BPharma</Badge>
                <Badge variant="outline">BSc Science</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-600">Commerce Stream</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">BCom</Badge>
                <Badge variant="outline">BBA</Badge>
                <Badge variant="outline">CA</Badge>
                <Badge variant="outline">CS</Badge>
                <Badge variant="outline">BBA LLB</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-600">Arts Stream</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">BA</Badge>
                <Badge variant="outline">BFA</Badge>
                <Badge variant="outline">BJMC</Badge>
                <Badge variant="outline">BA LLB</Badge>
                <Badge variant="outline">BDes</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
          </TabsContent>

          <TabsContent value="careers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Professional Courses After Graduation</CardTitle>
                <CardDescription>Career paths and job opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
          {professionalCourses.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg bg-white hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">{item.course}</h3>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Career Opportunities:</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                  {item.jobs.map((job, jobIndex) => (
                    <Badge key={jobIndex} variant="secondary" className="text-center p-2">
                      {job}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* New Career Categories */}
          <div className="mt-8 space-y-8">
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">IT & Software Careers</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {itSoftwareCareers.map((career, idx) => (
                  <Card key={idx} className="bg-white shadow rounded-lg p-4">
                    <CardHeader className="flex items-center space-x-3">
                      <div className="text-3xl">{career.icon}</div>
                      <CardTitle className="text-lg font-semibold">{career.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm">{career.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Management Careers</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {managementCareers.map((career, idx) => (
                  <Card key={idx} className="bg-white shadow rounded-lg p-4">
                    <CardHeader className="flex items-center space-x-3">
                      <div className="text-3xl">{career.icon}</div>
                      <CardTitle className="text-lg font-semibold">{career.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm">{career.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Healthcare Careers</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {healthcareCareers.map((career, idx) => (
                  <Card key={idx} className="bg-white shadow rounded-lg p-4">
                    <CardHeader className="flex items-center space-x-3">
                      <div className="text-3xl">{career.icon}</div>
                      <CardTitle className="text-lg font-semibold">{career.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm">{career.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Creative & Artistic Careers</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {creativeArtisticCareers.map((career, idx) => (
                  <Card key={idx} className="bg-white shadow rounded-lg p-4">
                    <CardHeader className="flex items-center space-x-3">
                      <div className="text-3xl">{career.icon}</div>
                      <CardTitle className="text-lg font-semibold">{career.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm">{career.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-pink-600">Other Notable Fields</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherNotableFields.map((career, idx) => (
                  <Card key={idx} className="bg-white shadow rounded-lg p-4">
                    <CardHeader className="flex items-center space-x-3">
                      <div className="text-3xl">{career.icon}</div>
                      <CardTitle className="text-lg font-semibold">{career.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm">{career.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MentorDashboard;
