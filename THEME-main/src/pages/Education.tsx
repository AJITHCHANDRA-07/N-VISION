
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, School, GraduationCap, Award, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("5");
  const [schoolType, setSchoolType] = useState<"government" | "private">("government");

  const classData = {
    "5": {
      scholarships: {
        government: [
          "Pre-Matric Scholarship for SC/ST students",
          "State Government Merit Scholarships",
          "Mid-Day Meal Scheme benefits"
        ],
        private: [
          "Merit-based school scholarships",
          "Need-based financial aid",
          "Academic excellence awards"
        ]
      },
      exams: [
        "Navodaya Vidyalaya Entrance Test (Class 6 admission)",
        "State-level talent search exams",
        "School-level competitive exams"
      ],
      benefits: {
        government: [
          "Free education and textbooks",
          "Mid-day meal facility",
          "Free uniforms and study materials",
          "Special coaching for competitive exams"
        ],
        private: [
          "Quality education infrastructure",
          "Extracurricular activities",
          "Individual attention",
          "Modern teaching methods"
        ]
      }
    },
    "6": {
      scholarships: {
        government: [
          "Pre-Matric Scholarship for minorities",
          "State Government Educational Support",
          "Free textbook schemes"
        ],
        private: [
          "Academic performance scholarships",
          "Sports scholarships",
          "Cultural activity scholarships"
        ]
      },
      exams: [
        "National Talent Search Examination (NTSE) preparation",
        "Navodaya Vidyalaya selection test",
        "State-level scholarship exams"
      ],
      benefits: {
        government: [
          "Continuation of free education",
          "Access to government libraries",
          "Free transportation in rural areas",
          "Skill development programs"
        ],
        private: [
          "Advanced learning resources",
          "Technology-enabled classrooms",
          "Personality development programs",
          "Career guidance counseling"
        ]
      }
    },
    "7": {
      scholarships: {
        government: [
          "Pre-Matric Scholarship continuation",
          "State Merit Scholarships",
          "Special scholarships for girl students"
        ],
        private: [
          "Academic excellence rewards",
          "Leadership scholarships",
          "Community service scholarships"
        ]
      },
      exams: [
        "NTSE Stage 1 preparation starts",
        "State-level competitive exams",
        "Olympiad examinations"
      ],
      benefits: {
        government: [
          "Free education with quality assurance",
          "Vocational training opportunities",
          "Health check-up programs",
          "Digital literacy programs"
        ],
        private: [
          "Comprehensive curriculum",
          "International exposure programs",
          "Advanced laboratory facilities",
          "Alumni network benefits"
        ]
      }
    },
    "8": {
      scholarships: {
        government: [
          "National Means-cum-Merit Scholarship (NMMS)",
          "Pre-Matric Scholarship for SC/ST/OBC",
          "State Government Merit Awards",
          "Inspire Awards for Science Students"
        ],
        private: [
          "Merit-based tuition waivers",
          "STEM education scholarships",
          "Innovation and creativity awards"
        ]
      },
      exams: [
        "National Means-cum-Merit Scholarship (NMMS) Exam",
        "NTSE preparation intensifies",
        "Regional Science Olympiad",
        "State-level talent search exams"
      ],
      benefits: {
        government: [
          "NMMS scholarship eligibility",
          "Free coaching for competitive exams",
          "Career counseling services",
          "Access to digital learning platforms"
        ],
        private: [
          "Personalized learning paths",
          "Advanced subject specialization",
          "International board options",
          "Premium educational resources"
        ]
      }
    },
    "9": {
      scholarships: {
        government: [
          "NMMS continuation for eligible students",
          "Pre-Matric to Post-Matric transition support",
          "Kishore Vaigyanik Protsahan Yojana (KVPY) preparation",
          "State Government Higher Education Scholarships"
        ],
        private: [
          "Board exam performance scholarships",
          "Stream selection guidance scholarships",
          "Competitive exam preparation support"
        ]
      },
      exams: [
        "National Talent Search Examination (NTSE)",
        "Kishore Vaigyanik Protsahan Yojana (KVPY)",
        "State Board examinations",
        "International Olympiads",
        "JEE/NEET foundation exams"
      ],
      benefits: {
        government: [
          "Direct path to government college benefits",
          "Preparation for Class 10 board exams",
          "Stream selection counseling",
          "Foundation for IIIT Basara eligibility"
        ],
        private: [
          "Comprehensive board exam preparation",
          "Career counseling for stream selection",
          "Foundation courses for competitive exams",
          "University partnership programs"
        ]
      }
    }
  };

  const classes = ["5", "6", "7", "8", "9"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Education Guide</h1>
          </div>
          <Button onClick={() => navigate(-1)} variant="outline" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Class-wise Educational Information</h2>
          <p className="text-gray-600">Select your class and school type to get relevant information</p>
        </div>

        {/* Class Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Your Class</CardTitle>
            <CardDescription>Choose your current class to see relevant scholarships and opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 mb-4">
              {classes.map((classNum) => (
                <Button
                  key={classNum}
                  variant={selectedClass === classNum ? "default" : "outline"}
                  onClick={() => setSelectedClass(classNum)}
                  className="flex items-center space-x-2"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Class {classNum}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* School Type Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>School Background</CardTitle>
            <CardDescription>Select your school type for personalized information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button
                variant={schoolType === "government" ? "default" : "outline"}
                onClick={() => setSchoolType("government")}
                className="flex items-center space-x-2"
              >
                <School className="h-4 w-4" />
                <span>Government School</span>
              </Button>
              <Button
                variant={schoolType === "private" ? "default" : "outline"}
                onClick={() => setSchoolType("private")}
                className="flex items-center space-x-2"
              >
                <School className="h-4 w-4" />
                <span>Private School</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Information Display */}
        <Tabs defaultValue="scholarships" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scholarships" className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Scholarships</span>
            </TabsTrigger>
            <TabsTrigger value="exams" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Entrance Exams</span>
            </TabsTrigger>
            <TabsTrigger value="benefits" className="flex items-center space-x-2">
              <School className="h-4 w-4" />
              <span>Benefits</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scholarships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Scholarships for Class {selectedClass} - {schoolType === "government" ? "Government" : "Private"} School Students</CardTitle>
                <CardDescription>Available scholarship opportunities for your class and school type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {classData[selectedClass as keyof typeof classData].scholarships[schoolType].map((scholarship, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                      <div className="flex items-start space-x-3">
                        <Award className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-blue-800">{scholarship}</h4>
                          <Badge variant="secondary" className="mt-2">Available</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Entrance Exams for Class {selectedClass}</CardTitle>
                <CardDescription>Important competitive exams and entrance tests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {classData[selectedClass as keyof typeof classData].exams.map((exam, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-green-50 border-green-200">
                      <div className="flex items-start space-x-3">
                        <BookOpen className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-green-800">{exam}</h4>
                          <Badge variant="outline" className="mt-2">Upcoming</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Benefits for {schoolType === "government" ? "Government" : "Private"} School Students - Class {selectedClass}</CardTitle>
                <CardDescription>Advantages and opportunities available to you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {classData[selectedClass as keyof typeof classData].benefits[schoolType].map((benefit, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-purple-50 border-purple-200">
                      <div className="flex items-start space-x-3">
                        <School className="h-5 w-5 text-purple-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-purple-800">{benefit}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Special Note for Government School Students */}
        {schoolType === "government" && (
          <Card className="mt-6 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-700">Special Advantage for Government School Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-100 rounded-lg">
                  <h4 className="font-semibold text-green-800">Class 10 Government College Path</h4>
                  <p className="text-green-700">Complete Class 10 from government college → Get FREE admission to IIIT Basara!</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Intermediate Government College Path</h4>
                  <p className="text-blue-700">Complete Intermediate from government college → Get 100% fee reimbursement for higher education!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Education;
