import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const businessIdeas = [
	{
		title: "Petrol Pump",
		description:
			"Starting a petrol pump requires significant upfront investments but offers impressive returns.",
		steps: [
			"Meet the relevant eligibility criteria and educational requirements.",
			"Acquire land between 800 and 2,000 square metres with legal documentation.",
			"Get necessary investment ranging from 12 lakh to 25 lakh.",
			"Apply for the license on the relevant website with required details.",
		],
	},
	{
		title: "Pharmacy",
		description: "A lucrative business with proper planning and medical demand.",
		steps: [
			"Ensure at least 10 square metres for retail and proper drug storage.",
			"Hire registered pharmacist with relevant experience.",
			"Register pharmacy with necessary documentation.",
			"Complete GST registration and legal formalities.",
		],
	},
	{
		title: "Grocery Shop",
		description: "A reliable business with consistent demand.",
		steps: [
			"Create a detailed business plan and find the right location.",
			"Obtain necessary permits and finalize store layout.",
			"Build brand, hire workforce, and purchase inventory.",
			"Develop marketing strategy and launch store.",
		],
	},
	{
		title: "Salon / Spa",
		description: "High-end grooming and therapy services business opportunity.",
	},
	{
		title: "Real Estate",
		description:
			"Brokerage and property management with good communication skills.",
	},
	{
		title: "Freelance Services",
		description:
			"Offer services like writing, web development, graphic design from home.",
		steps: [
			"Identify niche and build portfolio.",
			"Set pricing and choose platform.",
			"Set up professional workspace.",
			"Market services and manage finances.",
		],
	},
	{
		title: "Travel Agency",
		description:
			"Booming sector with potential for domestic and international tourism.",
		steps: [
			"Define business type based on market research.",
			"Complete legal registrations including GST.",
			"Set up office and online presence.",
			"Launch marketing campaign.",
		],
	},
	{
		title: "Courier Services",
		description: "Logistics service with year-round business.",
	},
	{
		title: "Cloud Kitchen",
		description: "Home-based culinary business leveraging online ordering.",
	},
	{
		title: "Personalized Gifting Business",
		description: "Creative business curating unique gift hampers.",
	},
	{
		title: "Financial Planner",
		description: "Manage portfolios and promote financial literacy.",
	},
	// Add more business ideas as needed
];

const detailedContent: Record<string, JSX.Element> = {
  "Petrol Pump": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Petrol Pump</h2>
      <p>Starting a petrol pump requires significant upfront investments but offers impressive returns.</p>
      <h3 className="mt-4 font-semibold text-blue-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Meet the relevant eligibility criteria and educational requirements.</li>
        <li>Acquire land between 800 and 2,000 square metres with legal documentation.</li>
        <li>Get necessary investment ranging from 12 lakh to 25 lakh.</li>
        <li>Apply for the license on the relevant website with required details.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-blue-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-blue-700 font-semibold">
        <li>Stand-Up India Scheme – For SC/ST/women entrepreneurs, loans from ₹10 lakh–1 crore.</li>
        <li>PMEGP (Prime Minister’s Employment Generation Programme) – Can be explored for rural fuel outlets.</li>
        <li>State-specific Petroleum Dealership Subsidies (e.g., Andhra Pradesh, Maharashtra).</li>
        <li>Land allotment & approvals sometimes fast-tracked via Ease of Doing Business policies.</li>
      </ul>
    </div>
  ),
  "Pharmacy": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-green-700">Pharmacy</h2>
      <p>A lucrative business with proper planning and medical demand.</p>
      <h3 className="mt-4 font-semibold text-green-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Ensure at least 10 square metres for retail and proper drug storage.</li>
        <li>Hire registered pharmacist with relevant experience.</li>
        <li>Register pharmacy with necessary documentation.</li>
        <li>Complete GST registration and legal formalities.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-green-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-green-700 font-semibold">
        <li>Mudra Loans (Tarun Category) – Up to ₹10 lakhs.</li>
        <li>Jan Aushadhi Scheme – Partner with government to open affordable generic medicine outlets.</li>
        <li>PMEGP – Up to ₹25 lakhs project funding for manufacturing/trading.</li>
        <li>Startup India Seed Fund – For innovative health-focused retail platforms.</li>
      </ul>
    </div>
  ),
  "Grocery Shop": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-orange-700">Grocery Shop</h2>
      <p>A reliable business with consistent demand.</p>
      <h3 className="mt-4 font-semibold text-orange-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Create a detailed business plan and find the right location.</li>
        <li>Obtain necessary permits and finalize store layout.</li>
        <li>Build brand, hire workforce, and purchase inventory.</li>
        <li>Develop marketing strategy and launch store.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-orange-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-orange-700 font-semibold">
        <li>Mudra Loans (Shishu/Kishor) – For initial inventory & equipment.</li>
        <li>PM SVANidhi Yojana – If operating as a small vendor.</li>
        <li>FSSAI License Fee Support (State-specific).</li>
        <li>Udyam Registration – Access to government tenders & subsidies.</li>
      </ul>
    </div>
  ),
  "Salon / Spa": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">Salon / Spa</h2>
      <p>High-end grooming and therapy services business opportunity.</p>
      <h3 className="mt-4 font-semibold text-purple-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Obtain health and trade license from municipal body.</li>
        <li>Certified beauticians/therapists preferred.</li>
        <li>Investment: ₹5–₹20 lakhs (varies by scale).</li>
      </ol>
      <h3 className="mt-4 font-semibold text-purple-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-purple-700 font-semibold">
        <li>PMKVY (Skill India) – Free beautician/spa therapy training.</li>
        <li>Mudra Loan (Kishor/Tarun) – Capital for setup.</li>
        <li>NSIC support – Raw material procurement and credit facilitation.</li>
        <li>Women Entrepreneurship Platform (WEP) – Access to mentorship and funding.</li>
      </ul>
    </div>
  ),
  "Real Estate": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-brown-700">Real Estate</h2>
      <p>Brokerage and property management with good communication skills.</p>
      <h3 className="mt-4 font-semibold text-brown-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Register with RERA as a certified agent.</li>
        <li>Business registration, PAN/GST essential.</li>
        <li>Knowledge of local market + communication skills.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-brown-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-brown-700 font-semibold">
        <li>Startup India Registration – Tax exemptions, access to investor networks.</li>
        <li>Stand-Up India – SC/ST/women eligible for loans.</li>
        <li>MSME Registration – For tech-based property solutions.</li>
      </ul>
    </div>
  ),
  "Freelance Services": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-teal-700">Freelance Services</h2>
      <p>Offer services like writing, web development, graphic design from home.</p>
      <h3 className="mt-4 font-semibold text-teal-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Identify niche and build portfolio.</li>
        <li>Set pricing and choose platform.</li>
        <li>Set up professional workspace.</li>
        <li>Market services and manage finances.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-teal-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-teal-700 font-semibold">
        <li>Digital India Platform (DIP) – Freelancers can access govt e-projects.</li>
        <li>Startup India – For tech-enabled freelancers.</li>
        <li>MEITY's FutureSkills PRIME – Free upskilling courses.</li>
        <li>e-Marketplace (GeM) – Register as service provider for government work.</li>
      </ul>
    </div>
  ),
  "Travel Agency": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Travel Agency</h2>
      <p>Booming sector with potential for domestic and international tourism.</p>
      <h3 className="mt-4 font-semibold text-indigo-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Define business type based on market research.</li>
        <li>Complete legal registrations including GST.</li>
        <li>Set up office and online presence.</li>
        <li>Launch marketing campaign.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-indigo-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-indigo-700 font-semibold">
        <li>Tourism Start-Up Scheme by Ministry of Tourism.</li>
        <li>Incredible India Campaign Support.</li>
        <li>Mudra Loan Scheme – Up to ₹10 lakh capital.</li>
        <li>Udyam MSME Benefits – For domestic operators.</li>
      </ul>
    </div>
  ),
  "Courier Services": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Courier Services</h2>
      <p>Logistics service with year-round business.</p>
      <h3 className="mt-4 font-semibold text-gray-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Tie-up with major courier brands or go independent.</li>
        <li>Need motorbike or van, storage facility, tracking software.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-gray-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700 font-semibold">
        <li>PMEGP – Covers logistics and transport businesses.</li>
        <li>Mudra Loans – Useful for vehicle purchase.</li>
        <li>Startup India – If offering tech-enabled logistics.</li>
        <li>GeM Portal – Government courier tender eligibility.</li>
      </ul>
    </div>
  ),
  "Cloud Kitchen": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-pink-700">Cloud Kitchen</h2>
      <p>Home-based culinary business leveraging online ordering.</p>
      <h3 className="mt-4 font-semibold text-pink-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Register business, FSSAI license, cloud kitchen license.</li>
        <li>Partner with Swiggy, Zomato, etc.</li>
        <li>₹3–₹15 lakh initial cost depending on scale.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-pink-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-pink-700 font-semibold">
        <li>PMFME (Micro Food Processing Scheme) – Up to ₹10 lakh subsidy.</li>
        <li>Mudra Loans.</li>
        <li>FSSAI Subsidies – Some states provide initial license reimbursement.</li>
        <li>Startup India – For tech-based delivery or culinary innovation.</li>
      </ul>
    </div>
  ),
  "Personalized Gifting Business": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Personalized Gifting Business</h2>
      <p>Creative business curating unique gift hampers.</p>
      <h3 className="mt-4 font-semibold text-yellow-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Creative setup – design, printing, packaging tools.</li>
        <li>Register under MSME.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-yellow-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-yellow-700 font-semibold">
        <li>Mudra Loan Scheme – Useful for machinery and packaging equipment.</li>
        <li>Design Clinic Scheme by MSME – Get design and branding mentorship.</li>
        <li>Raw Material Assistance by NSIC.</li>
        <li>Export Promotion Schemes – If catering to global markets.</li>
      </ul>
    </div>
  ),
  "Financial Planner": (
    <div className="detailed-content">
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Financial Planner</h2>
      <p>Manage portfolios and promote financial literacy.</p>
      <h3 className="mt-4 font-semibold text-blue-800">How to Start:</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>Certification from NISM or SEBI (for investment advisory).</li>
        <li>GST registration, PAN, and client portfolio software setup.</li>
      </ol>
      <h3 className="mt-4 font-semibold text-blue-800">Government Support:</h3>
      <ul className="list-disc list-inside space-y-1 text-blue-700 font-semibold">
        <li>Skill India/Investment Awareness Programs.</li>
        <li>Startup India – If providing tech-based financial platforms.</li>
        <li>Mudra Loan – For office setup.</li>
        <li>SIDBI Loans – For regulated NBFC/startups offering financial literacy tools.</li>
      </ul>
    </div>
  )
};

// Add your Business component export here
const Business = () => {
	return (
		<div style={{ background: 'white', minHeight: '100vh', padding: '2rem', border: '5px solid red' }}>
			<h1 style={{ color: 'black' }}>Business Ideas Panel (Test)</h1>
			<p style={{ color: 'black' }}>If you see this, the component is rendering!</p>
		</div>
	);
};

export default Business;
