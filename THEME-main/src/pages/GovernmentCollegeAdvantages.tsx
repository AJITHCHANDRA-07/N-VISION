import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const scholarships = [
  {
    name: "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    focus: "Targets economically weaker sections to prevent dropout at class 8th level and encourage continued education.",
    eligibility: "Students studying in class 8th who meet income and merit criteria.",
    award: "Fixed number of scholarships offered by each State/UT based on norms.",
    implementation: "Implemented through State Governments and UT administrations."
  },
  {
    name: "Pre-Matric Scholarship Scheme for Scheduled Castes & Others",
    focus: "Supports parents of children belonging to Scheduled Castes and disadvantaged categories to ensure education and minimize dropouts.",
    eligibility: "Students in classes 1 to 10th from these categories.",
    implementation: "Centrally Sponsored Scheme implemented through State Governments and UT administrations."
  },
  {
    name: "National Scholarship Portal (NSP)",
    focus: "Platform for various scholarship schemes including pre-matric and post-matric students.",
    benefits: "Centralized platform for students to apply and track scholarships.",
    access: "Accessible through Common Service Centers (CSCs)."
  },
  {
    name: "CBSE Merit Scholarship Scheme for Single Girl Child",
    description: "Scholarships to single girl children studying in CBSE-affiliated schools."
  },
  {
    name: "Prime Minister's Scholarship Scheme (PMSS)",
    description: "For higher education, students meeting eligibility criteria can benefit."
  },
  {
    name: "Vidya Vikas Scholarship",
    description: "Available for students in government-approved colleges."
  }
];

const entranceExams = [
  {
    name: "CUET (Common University Entrance Test)",
    description: "Used for undergraduate admissions to central universities and other institutions."
  },
  {
    name: "JEE (Joint Entrance Examination)",
    description: "Primary exam for engineering programs; JEE Main and Advanced for IIT admissions."
  },
  {
    name: "NEET (National Eligibility cum Entrance Test)",
    description: "Main exam for medical and related courses."
  },
  {
    name: "Jawahar Navodaya Vidyalaya (JNV) Entrance Exam",
    description: "Admission to central government-run residential schools for gifted students."
  },
  {
    name: "Kendriya Vidyalaya Sangathan (KVS) Entrance Exam",
    description: "Admission to Kendriya Vidyalayas, central government school system."
  }
];

const GovernmentCollegeAdvantages = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Government College Advantages</h1>
      <Button onClick={() => navigate(-1)} className="mb-6 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded">
        Back
      </Button>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Scholarships from 5th to Post Graduation</h2>
        {scholarships.map((sch, idx) => (
          <div key={idx} className="mb-4 p-6 border rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg text-indigo-700">{sch.name}</h3>
            <p className="mt-1"><strong className="text-indigo-600">Focus:</strong> {sch.focus || sch.description}</p>
            {sch.eligibility && <p><strong className="text-indigo-600">Eligibility:</strong> {sch.eligibility}</p>}
            {sch.award && <p><strong className="text-indigo-600">Award:</strong> {sch.award}</p>}
            {sch.implementation && <p><strong className="text-indigo-600">Implementation:</strong> {sch.implementation}</p>}
            {sch.benefits && <p><strong className="text-indigo-600">Benefits:</strong> {sch.benefits}</p>}
            {sch.access && <p><strong className="text-indigo-600">Access:</strong> {sch.access}</p>}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Entrance Exams for Government Colleges</h2>
        {entranceExams.map((exam, idx) => (
          <div key={idx} className="mb-4 p-6 border rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg text-indigo-700">{exam.name}</h3>
            <p className="mt-1 text-indigo-600">{exam.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GovernmentCollegeAdvantages;
