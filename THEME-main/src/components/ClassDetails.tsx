import React from "react";

interface ClassDetailsProps {
  classLevel: string;
}

const ClassDetails: React.FC<ClassDetailsProps> = ({ classLevel = "5" }) => {
  console.log("ClassDetails received classLevel:", classLevel);
  const classContent: Record<string, React.ReactNode> = {
    "5": (
      <>
        <h3 className="text-xl font-bold mb-4">Government Exams for Class 5 to 9</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Jawahar Navodaya Vidyalaya Selection Test (JNVST)</li>
          <li>Sainik School Entrance Exam (AISSEE)</li>
          <li>Rashtriya Military School Common Entrance Test (RMS CET)</li>
          <li>National Means-cum-Merit Scholarship (NMMS) Exam</li>
          <li>National Talent Search Examination (NTSE) (discontinued)</li>
          <li>Andhra Pradesh IIIT RGUKT (IIIT Basara) Admission</li>
          <li>Olympiad Exams (SOF, NSO, IMO, IEO, etc.)</li>
          <li>Kishore Vaigyanik Protsahan Yojana (KVPY) (until 2021-22)</li>
          <li>Eklavya Model Residential Schools (EMRS) Admission Test</li>
          <li>Model School Entrance Exams (State Level)</li>
        </ul>
      </>
    ),
    "10": (
      <>
        <h3 className="text-xl font-bold mb-4">Entrance Tests</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-6">
          <li>National Talent Search Examination (NTSE): This scholarship program conducted by NCERT identifies and nurtures talented students, offering financial aid for their future studies.</li>
          <li>Kishore Vaigyanik Protsahan Yojana (KVPY): Provides fellowships and scholarships to students pursuing basic science courses.</li>
          <li>Science Olympiads (NSO, IMO, IEO, NCO): Exams testing knowledge in science and mathematics.</li>
          <li>JEE (Joint Entrance Examination): For engineering admissions to IITs, NITs, IIITs.</li>
          <li>NEET (National Eligibility cum Entrance Test): Gateway for undergraduate medical courses.</li>
          <li>CUET (Common University Entrance Test): Admissions to various central universities.</li>
          <li>Other Exams: Law entrance exams (CLAT), management entrance exams (IIMs), state-level engineering and medical exams.</li>
        </ul>
        <h3 className="text-xl font-bold mb-4">Scholarship Exams</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>National Talent Search Examination (NTSE): Conducted by NCERT, identifies and nurtures talented students.</li>
          <li>Kishore Vaigyanik Protsahan Yojana (KVPY): Encourages students to pursue research careers in science.</li>
          <li>National Means Cum Merit Scholarship (NMMSS): Scholarships for meritorious students from economically weaker sections.</li>
          <li>Olympiads: SOF, NSEP, and others offering scholarships based on performance.</li>
          <li>Aakash ANTHE and iACST: Scholarship and admission tests for classes 6 to 12.</li>
          <li>Sitaram Jindal Foundation Scholarship: Supports underprivileged students from class 11 and up.</li>
          <li>Maulana Azad National Scholarship Scheme (MANF): For meritorious students from minority communities.</li>
          <li>Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship: Maharashtra government scholarship for class 11 and 12.</li>
          <li>Shiksha Sahayog Yojana: LIC scheme for children of JBY members in classes 9 to 12.</li>
          <li>Swami Vivekananda Post-Matric Scholarship: For class 11 and 12 students from low-income government schools.</li>
        </ul>
      </>
    ),
  };

  return <div>{classContent[classLevel] || <p>No details available for this class level.</p>}</div>;
};

export default ClassDetails;
