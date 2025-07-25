import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Award, TrendingUp, LogOut, GraduationCap, Users } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("guidance");
  const [studentId, setStudentId] = useState("");
  const [verifiedStudent, setVerifiedStudent] = useState<string | null>(null);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

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

  const educationalTips = [
    {
      title: "Government College Advantage",
      description: "Enrolling your child in government colleges provides significant financial benefits and scholarships",
      icon: "🏛️"
    },
    {
      title: "Early Career Planning",
      description: "Start discussing career options from Class 10 to make informed decisions",
      icon: "🎯"
    },
    {
      title: "Financial Planning",
      description: "Understand scholarship schemes and fee reimbursement programs available",
      icon: "💰"
    },
    {
      title: "Mentorship Support",
      description: "Connect with mentors who can guide your child's educational journey",
      icon: "👥"
    }
  ];

  const scholarshipInfo = [
    {
      type: "Government College Benefits",
      details: "100% fee reimbursement for students from government intermediate colleges",
      eligibility: "Must complete intermediate from government college"
    },
    {
      type: "Merit-based Scholarships",
      details: "Scholarships for academically excellent students",
      eligibility: "Minimum 80% marks in previous qualifying exam"
    },
    {
      type: "Need-based Financial Aid",
      details: "Financial assistance for economically weaker sections",
      eligibility: "Family income below specified limit"
    }
  ];

  const careerPaths = [
    {
      stream: "Science",
      courses: ["Engineering", "Medicine", "Architecture", "Pharmacy", "Research"],
      prospects: "High-paying technical and medical careers"
    },
    {
      stream: "Commerce",
      courses: ["Business Administration", "Chartered Accountancy", "Company Secretary", "Banking"],
      prospects: "Corporate and financial sector opportunities"
    },
    {
      stream: "Arts",
      courses: ["Journalism", "Law", "Fine Arts", "Psychology", "Social Work"],
      prospects: "Creative and social service careers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center space-x-2">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome, Parent!</h2>
          <p className="text-gray-600">Support your child's educational journey with informed decisions</p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter Student ID to verify progress"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="border p-2 rounded w-full max-w-sm mb-2"
          />
          <Button onClick={verifyStudent} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Verify Student
          </Button>
        </div>

        {verifiedStudent && (
          <div className="p-4 border rounded bg-purple-50 mb-6 max-w-2xl">
            <h3 className="text-xl font-semibold mb-2">Student Progress for ID: {verifiedStudent}</h3>
            <p>Progress details and upcoming updates will be displayed here.</p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="guidance" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Guidance</span>
            </TabsTrigger>
          <TabsTrigger value="scholarships" className="flex items-center space-x-2">
            <Award className="h-4 w-4" />
            <span>Scholarships</span>
          </TabsTrigger>
          <TabsTrigger value="careers" className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>Career Paths</span>
          </TabsTrigger>
          <TabsTrigger value="mentorship" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Mentorship</span>
          </TabsTrigger>
          <TabsTrigger value="support" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Support</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mentorship" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "AJITH CHANDRA FOUNDER OF N-VISION",
                email: "ajith.chandra@n-vision.com",
                mobile: "+91 90000 00001",
                companyEmail: "contact@n-vision.com",
                icon: "👨‍💼"
              },
              {
                name: "Anita Sharma",
                email: "anita.sharma@n-vision.com",
                mobile: "+91 90000 00002",
                companyEmail: "consultants@n-vision.com",
                icon: "👩‍💼"
              },
              {
                name: "Ravi Kumar",
                email: "ravi.kumar@n-vision.com",
                mobile: "+91 90000 00003",
                companyEmail: "consultants@n-vision.com",
                icon: "👨‍💼"
              },
              {
                name: "Sneha Patel",
                email: "sneha.patel@n-vision.com",
                mobile: "+91 90000 00004",
                companyEmail: "consultants@n-vision.com",
                icon: "👩‍💼"
              },
              {
                name: "Vikram Singh",
                email: "vikram.singh@n-vision.com",
                mobile: "+91 90000 00005",
                companyEmail: "consultants@n-vision.com",
                icon: "👨‍💼"
              },
              {
                name: "Priya Nair",
                email: "priya.nair@n-vision.com",
                mobile: "+91 90000 00006",
                companyEmail: "consultants@n-vision.com",
                icon: "👩‍💼"
              },
              {
                name: "Arjun Das",
                email: "arjun.das@n-vision.com",
                mobile: "+91 90000 00007",
                companyEmail: "consultants@n-vision.com",
                icon: "👨‍💼"
              },
              {
                name: "Meera Joshi",
                email: "meera.joshi@n-vision.com",
                mobile: "+91 90000 00008",
                companyEmail: "consultants@n-vision.com",
                icon: "👩‍💼"
              },
              {
                name: "Karan Mehta",
                email: "karan.mehta@n-vision.com",
                mobile: "+91 90000 00009",
                companyEmail: "consultants@n-vision.com",
                icon: "👨‍💼"
              },
              {
                name: "Divya Reddy",
                email: "divya.reddy@n-vision.com",
                mobile: "+91 90000 00010",
                companyEmail: "consultants@n-vision.com",
                icon: "👩‍💼"
              },
              {
                name: "Suresh Kumar",
                email: "suresh.kumar@n-vision.com",
                mobile: "+91 90000 00011",
                companyEmail: "consultants@n-vision.com",
                icon: "👨‍💼"
              }
            ].map((mentor, index) => (
              <Card key={index} className="bg-white p-4 shadow rounded-lg flex items-center space-x-4">
                <div className="text-4xl">{mentor.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">Email: <a href={`mailto:${mentor.email}`} className="text-blue-600 underline">{mentor.email}</a></p>
                  <p className="text-sm text-gray-600">Mobile: <a href={`tel:${mentor.mobile}`} className="text-blue-600 underline">{mentor.mobile}</a></p>
                  <p className="text-sm text-gray-600">Company Email: <a href={`mailto:${mentor.companyEmail}`} className="text-blue-600 underline">{mentor.companyEmail}</a></p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scholarships" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "National Talent Search Examination or NTSE",
                description: "A national level examination cum scholarship program, it is one of most prestigious competitive exams for school students. NTSE’s focuses on students who have high academic talent and exceptional intellectual ability. It follows the NCERT prescribed syllabus covering Science, Maths, Social Science and Mental Ability. The students who qualify this two-tier exam receive cash scholarship for the complete academic year. The examination will consist of Mental Ability Test(MAT) and Scholastic Ability Test(SAT)",
              },
              {
                title: "National Level Science Talent Search Exam or NLSTSE",
                description: "NSTSE is a diagnostic test from classes II to XII and helps them improve their overall learning ability and educational performance. They include thinking process questions. NSTSE provides a detailed skill-wise feedback, highlighting the strengths and weaknesses of students so that immediate action can be taken to correct the aberration and pave a path for improvement.",
              },
              {
                title: "Indian National Olympiad (INO)",
                description: "Financially supported by the Government of India, this programme aims at promoting excellence in science and mathematics among students at school level. This Olympiads involve a five-stage procedure. The first stage for each subject is organized by the Indian Association of Physics Teachers (IAPT) in collaboration with teacher associations in other subjects. All the remaining  stages are organized by Homi Bhabha Centre for Science Education (HBCSE).",
              },
              {
                title: "Science Olympiad Foundation",
                description: "This was established to promote science, mathematics, introductory computer education and English language skills amongst school children in India. The foundation conducts separate exams for subjects like Computer (National Cyber Olympiad), Maths (International Maths Olympiad), Science (National Science Olympiad) and English (International English Olympiad).",
              },
              {
                title: "GeoGenius",
                description: "To cultivate the understanding of Geography among the school students, GeoGenius was established.  Students from Class II to XII are eligible for these exams. This test is conducted in two phases. In Phase I, children participate in their respective schools throughout the country and then on the basis of cut-off, students are selected for Phase-II where they are invited to the National Finals.",
              },
              {
                title: "Kishore Vigyan Protsahan Yojana (KVPY)",
                description: "It is a national level competitive exam for students of classes XI and XII which is conducted with an aim to encourage students to take up research as a career in the field of Science, Engineering and Medicine. The selected students become eligible for admission to the five-year integrated MS program at the Indian Institute for Science Education and Research.",
              },
              {
                title: "Silverzone Olympiads",
                description: "This Olympiad aims to promote competitive awareness of academics in school students in India and abroad. Conducted for classes I to XII in various subjects, the test aims to develop creative thinking and enhance the problem-solving ability among students.",
              },
              {
                title: "National Interactive Maths Olympiad (NIMO)",
                description: "This national-level test includes interactive activities like interactive olympiad, workshops and seminars. Thus, NIMO works for a sole purpose to improve the mathematical skills and mental ability of school students.",
              },
              {
                title: "National Biotechnology Olympiad or NBO",
                description: "NBO is conducted for class I to XII with an aim to enhance the students’ knowledge about Biotechnology issues and to test their aptitude for taking up career in Biotechnology in future. The test comprises of 50 questions for 50 marks.",
              },
              {
                title: "Assessment of Scholastic Skills through Educational Testing (ASSET)",
                description: "ASSET is conducted for students of classes III-X, have multiple-choice questions to focus on measuring how well skills and concepts underlying the school syllabus have been understood by the students thus breaking the concept of rote learning. The test is mainly based on the CBSE, ICSE, IGCSE, and major state boards’ curriculum.",
              },
              {
                title: "UCO–UNIFIED CYBER OLYMPIAD",
                description: "The Unified Council conducts UCO every year. UCO is a test that helps students improve their mental ability, logical reasoning and computer skills. Students in class-III to class-XII of recognised schools are eligible. Subjects are more generic and is suitable for CBSE, ICSE and state boards. The selection is done in two stages. STAGE I: An aptitude type of exam is conducted in school level. And the selected students from each class appear for the second exam. STAGE II: Students selected in school level appear for state level selection exam. Toppers are announced based on the stage II performance.",
              },
              {
                title: "NSO–NATIONAL SCIENCE OLYMPIAD",
                description: "NSO is a national level science exam conducted by Science Olympiad Foundation (SOF). NSO rankings will be allotted based on the marks obtained. Students of class-I to class-XII are eligible to participate. Science and math syllabus as prescribed by CBSE, ICSE or various state boards. There will be four levels of exams. First will be within the school, at the city state level and above all will be the international level.",
              },
              {
                title: "NSEJS- NATIONAL STANDARD EXAM IN JUNIOR SCIENCE",
                description: "NSEJS is jointly conducted by IAPT (Indian Association of Physics Teachers) and HBCSE (Homi Bhabha Centre for Science Examination). All Indian students of class-I to X. Subjects and curriculum of CBSE and ICSE boards. Mainly focussed on science and generic content. The selection is first made at the school level. And the qualifying students then are then appeared for the national round.",
              },
              {
                title: "HBBVS–DR.HOMI BABA BAL VAIDYANIK SPARDHA",
                description: "The main aim of this exam is to search for science talents in students. Only students studying classes VI and IX are eligible for this exam. The exam covers the subjects and topics covered in curriculum up to class VI and class IX. STAGE I: Written test STAGE II: Practical skill test FINAL STAGE: Oral test i.e. the interview and submission of action research report.",
              },
              {
                title: "RMO- REGIONAL MATHEMATICS OLYMPIAD",
                description: "RMO is an exam jointly conducted by IAPT (Indian Association of Physics Teachers) and HBCSE (Homi Bhabha Centre for Science Examination). Students of classes XI & XII of recognised schools are eligible. The main focus of this exam is mathematics and based on CBSE curriculum. It is held at the school level and the topper are selected and awarded accordingly.",
              },
            ].map((scholarship, index) => (
              <Card key={index} className="bg-white p-4 shadow rounded-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-purple-700 flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-500" />
                    <span>{scholarship.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{scholarship.description}</p>
                </CardContent>
              </Card>
            ))}

            <div className="mt-8">
              <h2 className="text-xl font-bold text-purple-700 mb-4">For Class 10 Students:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "National Talent Search Examination (NTSE)",
                    description: "A national-level scholarship program for students studying in Class 10.",
                  },
                  {
                    title: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
                    description: "A program that provides scholarships to students pursuing basic science, engineering, and medical courses.",
                  },
                  {
                    title: "National Means-cum-Merit Scholarship (NMMSS)",
                    description: "A scheme for students from economically weaker sections.",
                  },
                  {
                    title: "Indian National Olympiad (INO)",
                    description: "A series of science and mathematics Olympiads.",
                  },
                  {
                    title: "Science Olympiad Foundation (SOF) Exams",
                    description: "A variety of subject-specific Olympiads.",
                  },
                  {
                    title: "All India Youth Scholarship Entrance Examination (AIYSEE)",
                    description: "An exam for students seeking scholarships for various undergraduate courses.",
                  },
                  {
                    title: "Aakash National Talent Hunt Exam (ANTHE)",
                    description: "An exam conducted by Aakash Institute for students preparing for NEET and JEE.",
                  },
                  {
                    title: "Sitaram Jindal Scholarship Scheme",
                    description: "A scholarship for students pursuing higher education.",
                  },
                ].map((scholarship, index) => (
                  <Card key={index} className="bg-white p-4 shadow rounded-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-purple-700 flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-500" />
                        <span>{scholarship.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm">{scholarship.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-purple-700 mb-4">For Class 12 Students:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Central Sector Scheme of Scholarship for College and University Students",
                    description: "A scholarship for students pursuing higher education.",
                  },
                  {
                    title: "INSPIRE Scholarship for Higher Education (SHE)",
                    description: "A scholarship for students pursuing science courses.",
                  },
                  {
                    title: "AICTE Pragati Scholarship for Girls",
                    description: "A scholarship for girls pursuing technical education.",
                  },
                  {
                    title: "AICTE – Saksham Scholarship Scheme",
                    description: "A scholarship for specially-abled students pursuing technical education.",
                  },
                  {
                    title: "CBSE Single Girl Child Scholarship",
                    description: "A scholarship for meritorious single girl children.",
                  },
                  {
                    title: "L'Oreal India For Young Women in Science Scholarship",
                    description: "A scholarship for girls pursuing science.",
                  },
                ].map((scholarship, index) => (
                  <Card key={index} className="bg-white p-4 shadow rounded-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-purple-700 flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-500" />
                        <span>{scholarship.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm">{scholarship.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-purple-700 mb-4">For Graduate Students:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Foundation for Excellence (FFE)",
                    description: "A scholarship program for students pursuing undergraduate and postgraduate studies.",
                  },
                  {
                    title: "Merit cum Means Scholarship for Professional and Technical Courses CS (Minorities)",
                    description: "A scholarship for minority students pursuing technical education.",
                  },
                  {
                    title: "Post Matric Scholarship Scheme for Minorities",
                    description: "A scholarship for minority students pursuing post-matric education.",
                  },
                ].map((scholarship, index) => (
                  <Card key={index} className="bg-white p-4 shadow rounded-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-purple-700 flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-500" />
                        <span>{scholarship.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm">{scholarship.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

          <TabsContent value="guidance" className="space-y-6">

            {activeTab === 'guidance' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationalTips.map((tip, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (tip.title === "Government College Advantage") {
                        navigate('/government-college-advantages');
                      } else if (tip.title === "Early Career Planning") {
                        navigate('/early-career-planning');
                      } else if (tip.title === "Financial Planning") {
                        setActiveTab('financial');
                      } else if (tip.title === "Mentorship Support") {
                        setActiveTab('mentorship');
                      }
                    }}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{tip.icon}</span>
                      <div>
                        <h4 className="text-xl font-semibold">{tip.title}</h4>
                        <p className="text-sm">{tip.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Understanding Your Child's Options</CardTitle>
                <CardDescription>Key decisions at different educational stages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold text-blue-800">After Class 10</h4>
                    <p className="text-blue-700 text-sm">Choose between Science, Commerce, or Arts based on your child's interests and career goals</p>
                  </div>
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h4 className="font-semibold text-green-800">After Class 12</h4>
                    <p className="text-green-700 text-sm">Multiple graduation options available including professional courses like Engineering, Medicine, Law, etc.</p>
                  </div>
                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold text-purple-800">After Graduation</h4>
                    <p className="text-purple-700 text-sm">Professional courses and specializations for better career prospects and higher earnings</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        <TabsContent value="financial" className="space-y-6">
<Button onClick={() => handleTabChange('guidance')} className="mb-4 bg-purple-300 hover:bg-purple-400 px-4 py-2 rounded inline-flex items-center space-x-2 text-purple-900">
  <span></span>
  <span>Back</span>
</Button>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Financial Planning</CardTitle>
              <CardDescription>Entrepreneurs, Business, Stocks and Trade Information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: "AI App", icon: "💻" },
                      { title: "Beauty and Wellness", icon: "💅" },
                      { title: "Blockchain", icon: "🔗" },
                      { title: "Cybersecurity", icon: "🛡️" },
                      { title: "Ecommerce", icon: "🛒" },
                      { title: "Edtech", icon: "📚" },
                      { title: "Fashion", icon: "👗" },
                      { title: "Fintech", icon: "💰" },
                      { title: "Food and Beverage", icon: "🍔" },
                      { title: "Healthcare", icon: "🏥" },
                      { title: "IoT", icon: "📡" },
                      { title: "Mobility", icon: "🚗" },
                      { title: "Pet", icon: "🐾" },
                      { title: "Real Estate", icon: "🏠" },
                      { title: "Software", icon: "🖥️" },
                      { title: "Sustainable", icon: "🌱" },
                      { title: "Travel", icon: "✈️" },
                    ].map((item, idx) => (
                  <Card key={idx} className="bg-white p-4 shadow rounded-lg flex items-center space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="text-lg font-semibold">{item.title}</div>
                  </Card>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-4">Stocks and Trade</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Stock Market Basics", icon: "📈" },
                  { title: "Trading Strategies", icon: "📊" },
                  { title: "Investment Tips", icon: "💡" },
                  { title: "Crypto Stocks Trading", icon: "🪙" },
                ].map((item, idx) => (
                  <Card key={idx} className="bg-white p-4 shadow rounded-lg flex items-center space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="text-lg font-semibold">{item.title}</div>
                  </Card>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-8">Business</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Petrol Pump", icon: "⛽" },
                  { title: "Pharmacy", icon: "💊" },
                  { title: "Grocery Shop", icon: "🛒" },
                  { title: "Salon / Spa", icon: "💇‍♀️" },
                  { title: "Real Estate", icon: "🏠" },
                  { title: "Freelance Services", icon: "🧑‍💻" },
                  { title: "Travel Agency", icon: "🌍" },
                  { title: "Courier Services", icon: "📦" },
                  { title: "Cloud Kitchen", icon: "🍳" },
                  { title: "Personalized Gifting Business", icon: "🎁" },
                  { title: "Financial Planner", icon: "📈" },
                ].map((item, idx) => (
                  <Card key={idx} className="bg-white p-4 shadow rounded-lg flex items-center space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="text-lg font-semibold">{item.title}</div>
                  </Card>
                ))}
              </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: "Petrol Pump", icon: "⛽" },
                      { title: "Pharmacy", icon: "💊" },
                      { title: "Grocery Shop", icon: "🛒" },
                      { title: "Salon / Spa", icon: "💇‍♀️" },
                      { title: "Real Estate", icon: "🏠" },
                      { title: "Freelance Services", icon: "🧑‍💻" },
                      { title: "Travel Agency", icon: "🌍" },
                      { title: "Courier Services", icon: "📦" },
                      { title: "Cloud Kitchen", icon: "🍳" },
                      { title: "Personalized Gifting Business", icon: "🎁" },
                      
                    ].map((item, idx) => (
                      <Card key={idx} className="bg-white p-4 shadow rounded-lg flex items-center space-x-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="text-lg font-semibold">{item.title}</div>
                      </Card>
                    ))}
                  </div>

                  
                </div>
              </div>
            </CardContent>
          </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6" />
                  <span>Class 10 Government College Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-800">Key Benefits:</h3>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <p className="text-green-700">Free admission to IIIT Basara for government college students</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <p className="text-green-700">Direct entry to top engineering colleges</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <p className="text-green-700">Merit-based scholarship opportunities</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <p className="text-green-700">Reserved seats in professional courses</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">IIIT Basara - Free Admission</h4>
                    <p className="text-green-700 text-sm mb-4">
                      Students who complete Class 10 from government colleges get direct free admission to IIIT Basara, 
                      one of the premier technical institutions.
                    </p>
                    <Badge className="bg-green-600 text-white">100% Fee Waiver</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="careers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Career Path Overview</CardTitle>
                <CardDescription>Help your child choose the right educational stream</CardDescription>
              </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {careerPaths.map((path, index) => (
                  <Card key={index} className="bg-white p-6 rounded-lg shadow">
                    <CardHeader>
                      <h3 className="text-xl font-semibold text-blue-600">{path.stream} Stream</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Popular Courses:</h4>
                          <div className="flex flex-wrap gap-2">
                            {path.courses.map((course, courseIndex) => (
                              <Badge key={courseIndex} variant="outline">{course}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Career Prospects:</h4>
                          <p className="text-gray-600 text-sm">{path.prospects}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold text-blue-700 mb-4">Entrance Exams by Academic Stage</h2>

                <h3 className="text-lg font-semibold text-blue-600 mb-2">After Class 10:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[
                    {
                      title: "National Talent Search Examination (NTSE)",
                      description: "For students in class 10, conducted by NCERT.",
                    },
                    {
                      title: "National Level Science Talent Search Exam (NLSTSE)",
                      description: "For students in class 10.",
                    },
                    {
                      title: "Science Olympiads",
                      description: "Including the Indian National Olympiad (INO) and others organized by the Science Olympiad Foundation.",
                    },
                    {
                      title: "GeoGenius",
                      description: "An exam for geography enthusiasts.",
                    },
                    {
                      title: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
                      description: "For students in class 11 and 12, with a focus on scientific research.",
                    },
                    {
                      title: "Silverzone Olympiads",
                      description: "A range of subject-specific Olympiads.",
                    },
                    {
                      title: "National Interactive Maths Olympiad (NIMO)",
                      description: "Focused on mathematics.",
                    },
                    {
                      title: "National Biotechnology Olympiad (NBO)",
                      description: "For students interested in biotechnology.",
                    },
                    {
                      title: "Assessment of Scholastic Skills Through Educational Testing (ASSET)",
                      description: "A diagnostic test for students.",
                    },
                  ].map((exam, index) => (
                    <Card key={index} className="bg-white p-4 shadow rounded-lg">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-blue-700 flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-blue-500" />
                          <span>{exam.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm">{exam.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-blue-600 mb-2">After Class 12:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[
                    {
                      title: "JEE Main",
                      description: "For admission to NITs, IIITs, and other engineering colleges, and also a qualifying exam for JEE Advanced.",
                    },
                    {
                      title: "JEE Advanced",
                      description: "For admission to the Indian Institutes of Technology (IITs).",
                    },
                    {
                      title: "NEET",
                      description: "For admission to undergraduate medical courses (MBBS, BDS).",
                    },
                    {
                      title: "CLAT",
                      description: "For admission to undergraduate and postgraduate law programs.",
                    },
                    {
                      title: "BITSAT",
                      description: "For admission to BITS Pilani campuses.",
                    },
                    {
                      title: "VITEEE",
                      description: "For Vellore Institute of Technology.",
                    },
                    {
                      title: "SRMJEEE",
                      description: "For SRM Institute of Science and Technology.",
                    },
                    {
                      title: "State-level Engineering Entrance Exams",
                      description: "Many states conduct their own engineering entrance exams.",
                    },
                    {
                      title: "CUET",
                      description: "For admission to various undergraduate courses in central universities.",
                    },
                  ].map((exam, index) => (
                    <Card key={index} className="bg-white p-4 shadow rounded-lg">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-blue-700 flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-blue-500" />
                          <span>{exam.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm">{exam.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-blue-600 mb-2">After Graduation:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[
                    {
                      title: "UPSC Civil Services Exam",
                      description: "For recruitment into the Indian Administrative Service (IAS), Indian Police Service (IPS), and other civil services.",
                    },
                    {
                      title: "SSC CGL",
                      description: "For recruitment into various Group B and Group C posts in the Indian government.",
                    },
                    {
                      title: "IBPS PO/Clerk",
                      description: "For recruitment into Public Sector Banks.",
                    },
                    {
                      title: "GATE",
                      description: "For admission to postgraduate engineering and technology programs (M.Tech) at IITs and NITs, and also for PhD programs.",
                    },
                    {
                      title: "CAT/MAT/XAT",
                      description: "For admission to MBA programs in various management institutes.",
                    },
                    {
                      title: "Indian Economic Service (IES) Examination",
                      description: "For recruitment into the Indian Economic Service.",
                    },
                    {
                      title: "Indian Statistical Service (ISS) Examination",
                      description: "For recruitment into the Indian Statistical Service.",
                    },
                    {
                      title: "UGC NET",
                      description: "For determining eligibility for Assistant Professor and Junior Research Fellowship in Indian universities and colleges.",
                    },
                  ].map((exam, index) => (
                    <Card key={index} className="bg-white p-4 shadow rounded-lg">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-blue-700 flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-blue-500" />
                          <span>{exam.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm">{exam.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-blue-600 mb-2">Other Important Exams:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Railway Recruitment Board (RRB) Exams",
                      description: "For various positions in the Indian Railways.",
                    },
                    {
                      title: "Combined Defence Services Examination (CDSE)",
                      description: "For entry into the Indian Armed Forces.",
                    },
                    {
                      title: "Indian Navy B.Tech Entry Scheme",
                      description: "For direct entry into the Indian Navy for engineering graduates.",
                    },
                    {
                      title: "State-level Public Service Commission Exams",
                      description: "For various state government jobs.",
                    },
                    {
                      title: "Banking Exams",
                      description: "Include exams for PO, Clerk, and other positions in public sector banks.",
                    },
                  ].map((exam, index) => (
                    <Card key={index} className="bg-white p-4 shadow rounded-lg">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-blue-700 flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-blue-500" />
                          <span>{exam.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm">{exam.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span> For Government Support Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We provide government support services to assist you in navigating educational schemes and benefits.
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:support@n-vision.com" className="text-blue-600 underline">support@n-vision.com</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/n-vision" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">N-VISION LinkedIn</a></p>
                <p><strong>Mobile:</strong> <a href="tel:+919876543210" className="text-blue-600 underline">+91 98765 43210</a></p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span>For Our Support Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We provide solutions for your queries support services to assist you in navigating educational schemes and benefits.
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:support@n-vision.com" className="text-blue-600 underline">support@n-vision.com</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/n-vision" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">N-VISION LinkedIn</a></p>
                <p><strong>Mobile:</strong> <a href="tel:+919876543210" className="text-blue-600 underline">+91 98765 43210</a></p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span>Carrer Support Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We provide career paths support services to assist you in navigating educational schemes and benefits.
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:support@n-vision.com" className="text-blue-600 underline">support@n-vision.com</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/n-vision" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">N-VISION LinkedIn</a></p>
                <p><strong>Mobile:</strong> <a href="tel:+919876543210" className="text-blue-600 underline">+91 98765 43210</a></p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span>Feedback Form</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent Name</label>
                  <input type="text" id="parentName" name="parentName" placeholder="Enter your name" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
                  <input type="text" id="studentName" name="studentName" placeholder="Enter student name" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">Student ID Number</label>
                  <input type="text" id="studentId" name="studentId" placeholder="Enter student ID" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="emailAddress" name="emailAddress" placeholder="Enter email address" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
                  <textarea id="about" name="about" rows={4} placeholder="Write your feedback here" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Send</button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
  );
};

export default ParentDashboard;
