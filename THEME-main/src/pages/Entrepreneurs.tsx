import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const startupIdeas = [
  "AI App",
  "Beauty and Wellness",
  "Blockchain",
  "Cybersecurity",
  "Ecommerce",
  "Edtech",
  "Fashion",
  "Fintech",
  "Food and Beverage",
  "Healthcare",
  "IoT",
  "Mobility",
  "Pet",
  "Real Estate",
  "Software",
  "Sustainable",
  "Travel"
];

const ideaDetails: Record<string, string> = {
  "AI App": "AI-powered personal assistants and applications transforming daily life and work.",
  "Beauty and Wellness": "Startups focusing on clean beauty products and wellness services.",
  "Blockchain": "Platforms for secure transactions, supply chain management, and identity verification.",
  "Cybersecurity": "Services providing protection against online threats and data breaches.",
  "Ecommerce": "Online retail platforms and marketplaces for diverse products.",
  "Edtech": "Educational technology tools including AR, VR, and online learning platforms.",
  "Fashion": "Sustainable and innovative fashion startups.",
  "Fintech": "Financial technology solutions including payments, lending, and investment platforms.",
  "Food and Beverage": "Innovative food products, delivery services, and sustainable packaging.",
  "Healthcare": "Health tech startups offering telemedicine, personalized nutrition, and wellness apps.",
  "IoT": "Internet of Things devices and smart home solutions.",
  "Mobility": "Electric vehicles, micromobility, and transportation innovations.",
  "Pet": "Products and services catering to pet owners.",
  "Real Estate": "Property management, brokerage, and real estate tech.",
  "Software": "Custom software development and SaaS products.",
  "Sustainable": "Startups focused on environmental sustainability and circular economy.",
  "Travel": "Travel agencies, virtual tours, and tourism tech."
};

const detailedContent: Record<string, JSX.Element> = {
  "AI App": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4">AI Applications (Artificial Intelligence)</h2>
      <p>AI-powered personal assistants and automation tools.</p>
      <h3 className="mt-4 font-semibold">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Responsible AI for Youth (by MeitY)</li>
        <li>AI Research and Development Scheme under Digital India</li>
        <li>Technology Incubation and Development of Entrepreneurs (TIDE 2.0)</li>
        <li>Startup India Seed Fund Scheme (SISFS)</li>
        <li>BIRAC BIG Scheme (if used in healthcare AI)</li>
        <li>Funding from NASSCOM CoE for AI and Data Science</li>
      </ul>
    </div>
  ),
  "Beauty and Wellness": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-pink-700">Beauty and Wellness</h2>
      <p className="text-pink-600 font-medium">Clean beauty brands, wellness services (salons, spa tech).</p>
      <h3 className="mt-4 font-semibold text-pink-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-pink-700 font-semibold">
        <li>💄 Skill India – Pradhan Mantri Kaushal Vikas Yojana (PMKVY) (beauty training)</li>
        <li>💰 Mudra Loan Scheme – Tarun Category</li>
        <li>🏦 SIDBI Make in India Soft Loan Fund for MSMEs (SMILE)</li>
        <li>📦 NSIC Raw Material Assistance Scheme</li>
      </ul>
    </div>
  ),
  "Blockchain": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">Blockchain</h2>
      <ul className="list-disc list-inside space-y-1 text-purple-600 font-medium">
        <li>Decentralized platforms, supply chains, digital identity.</li>
      </ul>
      <h3 className="mt-4 font-semibold text-purple-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-purple-700 font-semibold">
        <li>🏛️ MeitY Blockchain Strategy Support</li>
        <li>🏛️ STPI’s Centre of Excellence in Blockchain Technology</li>
        <li>🏛️ Electronics Development Fund (EDF)</li>
        <li>🏛️ Fintech schemes from RBI Sandbox (if applicable)</li>
      </ul>
    </div>
  ),
  "Cybersecurity": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-red-700">Cybersecurity</h2>
      <p className="text-red-600 font-medium">Startups offering data security and digital privacy solutions.</p>
      <h3 className="mt-4 font-semibold text-red-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-red-700 font-semibold">
        <li>🛡️ Cyber Surakshit Bharat Initiative</li>
        <li>🛡️ TIDE 2.0</li>
        <li>🛡️ DPIIT Recognized Startup Benefits</li>
        <li>🛡️ MeitY Grand Challenge on Cyber Security Solutions</li>
      </ul>
    </div>
  ),
  "Ecommerce": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-green-700">E-commerce</h2>
      <ul className="list-disc list-inside space-y-1 text-green-600 font-medium">
        <li>Online marketplaces and product/service aggregators.</li>
      </ul>
      <h3 className="mt-4 font-semibold text-green-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-green-700 font-semibold">
        <li>🏛️ Startup India Initiative</li>
        <li>🏛️ Digital MSME Scheme</li>
        <li>🏛️ Mudra Loans for Retail Startups</li>
        <li>🏛️ Export Promotion Schemes by DGFT (if cross-border trade)</li>
      </ul>
    </div>
  ),
  "Edtech": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Edtech (Education Technology)</h2>
      <ul className="list-disc list-inside space-y-1 text-indigo-600 font-medium">
        <li>Platforms with online learning, AR/VR tools, and content.</li>
      </ul>
      <h3 className="mt-4 font-semibold text-indigo-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-indigo-700 font-semibold">
        <li>📚 PM eVidya</li>
        <li>📚 SWAYAM and DIKSHA platforms</li>
        <li>📚 TIDE 2.0</li>
        <li>📚 AICTE/UGC Innovation Schemes</li>
        <li>📚 Edupreneur support under Atal Innovation Mission (AIM)</li>
      </ul>
    </div>
  ),
  "Fashion": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">Fashion</h2>
      <p className="text-purple-600 font-medium">Sustainable clothing, wearable tech, and accessories.</p>
      <h3 className="mt-4 font-semibold text-purple-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-purple-700 font-semibold">
        <li>🏛️ SAMARTH – Scheme for Capacity Building in Textile Sector</li>
        <li>🏛️ Mudra Loan Scheme</li>
        <li>🏛️ National Handloom Development Programme (NHDP)</li>
        <li>🏛️ Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)</li>
      </ul>
    </div>
  ),
  "Fintech": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Fintech</h2>
      <p className="text-blue-600 font-medium">Digital payment, lending, and investment solutions.</p>
      <h3 className="mt-4 font-semibold text-blue-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-blue-700 font-semibold">
        <li>🏦 Fintech Regulatory Sandbox (by RBI)</li>
        <li>🏦 Startup India & SIDBI Support</li>
        <li>🏦 Financial Inclusion Fund</li>
        <li>🏦 Digital India Bhashini Grants (language tech in fintech)</li>
      </ul>
    </div>
  ),
  "Food and Beverage": (
    <>
      <h2 className="text-2xl font-semibold mb-4">Food and Beverage</h2>
      <p>Packaged foods, cloud kitchens, health food brands.</p>
      <h3 className="mt-4 font-semibold">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>PM Formalization of Micro Food Processing Enterprises (PM-FME)</li>
        <li>Operation Greens (TOP to TOTAL)</li>
        <li>Mega Food Parks Scheme</li>
        <li>Mudra Loans & NABARD Food Processing Fund</li>
      </ul>
    </>
  ),
  "Healthcare": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-teal-700">Healthcare</h2>
      <p className="text-teal-600 font-medium">Telemedicine, diagnostics, wellness tracking apps.</p>
      <h3 className="mt-4 font-semibold text-teal-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-teal-700 font-semibold">
        <li>🏥 BIRAC – Biotechnology Ignition Grant (BIG)</li>
        <li>🏥 National Biopharma Mission</li>
        <li>🏥 Startup India & BioNest Incubators</li>
        <li>🏥 Ayushman Bharat Digital Mission (for tech integration)</li>
      </ul>
    </div>
  ),
  "IoT": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-cyan-700">Internet of Things (IoT)</h2>
      <p className="text-cyan-600 font-medium">Smart home devices, connected systems.</p>
      <h3 className="mt-4 font-semibold text-cyan-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-cyan-700 font-semibold">
        <li>🏭 STPI IoT Centres of Excellence (e.g., Bangalore)</li>
        <li>🏭 Electronics Development Fund (EDF)</li>
        <li>🏭 PLI Scheme for IoT Hardware</li>
        <li>🏭 TIDE 2.0</li>
      </ul>
    </div>
  ),
  "Mobility": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-emerald-700">Mobility</h2>
      <p className="text-emerald-600 font-medium">EVs, shared mobility, micro-mobility vehicles.</p>
      <h3 className="mt-4 font-semibold text-emerald-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-emerald-700 font-semibold">
        <li>🚗 FAME-II (Faster Adoption and Manufacturing of EVs)</li>
        <li>🚗 PLI Scheme for Auto & Auto Components</li>
        <li>🚗 NITI Aayog Startup Support for Mobility Solutions</li>
        <li>🚗 Urban Mobility India Scheme</li>
      </ul>
    </div>
  ),
  "Pet": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-fuchsia-700">Pet Industry</h2>
      <p className="text-fuchsia-600 font-medium">Pet care services, grooming, and pet food.</p>
      <h3 className="mt-4 font-semibold text-fuchsia-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-fuchsia-700 font-semibold">
        <li>🐾 MSME Udyam Registration Benefits</li>
        <li>🐾 Mudra Loan (for small-scale retail)</li>
        <li>🐾 National Livestock Mission (for breeders)</li>
        <li>🐾 Animal Husbandry Infrastructure Development Fund (AHIDF)</li>
      </ul>
    </div>
  ),
  "Real Estate": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-rose-700">Real Estate Tech</h2>
      <p className="text-rose-600 font-medium">Property search apps, brokerage platforms, rental tools.</p>
      <h3 className="mt-4 font-semibold text-rose-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-rose-700 font-semibold">
        <li>🏠 CLSS under PMAY (indirectly fuels real estate demand)</li>
        <li>🏠 RERA registration support for legal compliance</li>
        <li>🏠 Startup India support</li>
        <li>🏠 MSME Loans for Real Estate Support Tech</li>
      </ul>
    </div>
  ),
  "Software": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-sky-700">Software & SaaS</h2>
      <p className="text-sky-600 font-medium">B2B or B2C software products and productivity tools.</p>
      <h3 className="mt-4 font-semibold text-sky-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-sky-700 font-semibold">
        <li>💻 STPI Next Initiative</li>
        <li>💻 Startup India Scheme</li>
        <li>💻 TIDE 2.0 and MeitY Grants</li>
        <li>💻 DPIIT Startup Recognition & Tax Benefits</li>
      </ul>
    </div>
  ),
  "Sustainable": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-lime-700">Sustainability Startups</h2>
      <p className="text-lime-600 font-medium">Waste management, clean energy, water tech.</p>
      <h3 className="mt-4 font-semibold text-lime-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-lime-700 font-semibold">
        <li>🌱 UNNATI – Use of Non-Conventional Energy in MSME Sector</li>
        <li>🌱 PM-KUSUM Scheme (solar pump distribution)</li>
        <li>🌱 National Electric Mobility Mission Plan (NEMMP)</li>
        <li>🌱 Startup India Green Fund / SIDBI Green Financing</li>
      </ul>
    </div>
  ),
  "Travel": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-amber-700">Travel and Tourism Tech</h2>
      <p className="text-amber-600 font-medium">Travel planning, eco-tourism, virtual tourism platforms.</p>
      <h3 className="mt-4 font-semibold text-amber-800">Government Schemes & Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-amber-700 font-semibold">
        <li>🏛️ PRASHAD Scheme (Heritage Tourism)</li>
        <li>🏛️ Swadesh Darshan Scheme</li>
        <li>🏛️ Incredible India Tourism Investor Summit Grants</li>
        <li>🏛️ eVisa and travel facilitation policies supporting tech players</li>
      </ul>
    </div>
  )
};

const Entrepreneurs = () => {
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null);

  return (
    <div className="student-dashboard-container">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
        {!selectedIdea ? (
          <>
            <h1 className="welcome-highlight mb-6">Entrepreneurs Domain</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {startupIdeas.map((idea) => (
                <Card
                  key={idea}
                  className="cursor-pointer hover:shadow-lg"
                  onClick={() => setSelectedIdea(idea)}
                >
                  <CardHeader>
                    <CardTitle>{idea}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{ideaDetails[idea]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              className="mb-6"
              onClick={() => setSelectedIdea(null)}
            >
              Back to Entrepreneurs Domain
            </Button>
            {detailedContent[selectedIdea]}
          </>
        )}
      </div>
    </div>
  );
};

export default Entrepreneurs;
