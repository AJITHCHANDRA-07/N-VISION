import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sportsList = [
  { name: "Football (Soccer)", federation: "FIFA", description: "Widely played and watched globally, with major tournaments like the FIFA World Cup." },
  { name: "Cricket", federation: "ICC", description: "Popular in Commonwealth nations, with the ICC Cricket World Cup being a major event." },
  { name: "Field Hockey", federation: "International Hockey Federation", description: "Played in the Olympics and Commonwealth Games." },
  { name: "Tennis", federation: "International Tennis Federation", description: "Features numerous national and international tournaments." },
  { name: "Volleyball", federation: "FIVB", description: "A popular sport included in various international events." },
  { name: "Badminton", federation: "BWF", description: "Played in over 160 countries and is an Olympic sport." },
  { name: "Boxing", federation: "International Boxing Association", description: "A major Olympic sport with national and international championships." },
  { name: "Table Tennis", federation: "ITTF", description: "An Olympic sport with local, international, and Olympic competitions." },
  { name: "Baseball", federation: "IBAF", description: "Popular in the US, Japan, and Latin America." },
  { name: "Gymnastics", federation: "FIG", description: "An Olympic sport with artistic, rhythmic, and trampoline disciplines." },
  // Add more sports as needed
];

const SportsGames = () => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  const sportDetails = sportsList.find(s => s.name === selectedSport);

  return (
    <div className="student-dashboard-container">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="welcome-highlight mb-6">Sports & Games Domain</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sportsList.map((sport) => (
            <Card key={sport.name} className="cursor-pointer hover:shadow-lg" onClick={() => setSelectedSport(sport.name)}>
              <CardHeader>
                <CardTitle>{sport.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Federation:</strong> {sport.federation}</p>
                <p>{sport.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedSport && (
          <div className="mt-8 p-6 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{selectedSport}</h2>
            <p><strong>Federation:</strong> {sportDetails?.federation}</p>
            <p>{sportDetails?.description}</p>
            <p className="mt-4">
              Detailed info on age limits, government schemes, and other relevant data will be added here.
            </p>
            <Button className="mt-4" onClick={() => setSelectedSport(null)}>Close</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsGames;
