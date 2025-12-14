import { Link } from "react-router-dom";
import { ArrowLeft, Printer, Download, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cities = [
  { rank: 1, name: "Tokio", country: "Japan", continent: "Azië", population: "37 miljoen", description: "Tokio ligt in Oost-Azië. Het is heel lang een grote stad en groeit bijna niet meer." },
  { rank: 2, name: "Delhi", country: "India", continent: "Azië", population: "33 miljoen", description: "Delhi ligt in Zuid-Azië. De stad groeit snel door migratie vanaf het platteland." },
  { rank: 3, name: "Shanghai", country: "China", continent: "Azië", population: "30 miljoen", description: "Shanghai ligt in Oost-Azië. Het is een economisch centrum dat snel is gegroeid." },
  { rank: 4, name: "Dhaka", country: "Bangladesh", continent: "Azië", population: "24 miljoen", description: "Dhaka ligt in Zuid-Azië. Het is een heel dichtbevolkte stad met sterke bevolkingsgroei." },
  { rank: 5, name: "São Paulo", country: "Brazilië", continent: "Zuid-Amerika", population: "22 miljoen", description: "São Paulo ligt in Zuid-Amerika en is het economische centrum van Brazilië." },
  { rank: 6, name: "Mexico-Stad", country: "Mexico", continent: "Noord-Amerika", population: "22 miljoen", description: "Mexico-Stad ligt in Noord-Amerika op een hoogvlakte en is een van de grootste steden in Noord-Amerika." },
  { rank: 7, name: "Caïro", country: "Egypte", continent: "Afrika", population: "21 miljoen", description: "Caïro ligt in Noord-Afrika aan de rivier de Nijl en groeit nog steeds." },
  { rank: 8, name: "Beijing", country: "China", continent: "Azië", population: "21 miljoen", description: "Beijing ligt in Oost-Azië en is de hoofdstad van China. De groei gaat steeds minder snel." },
  { rank: 9, name: "Mumbai", country: "India", continent: "Azië", population: "21 miljoen", description: "Mumbai ligt in Zuid-Azië aan de westkust van India en is een belangrijk economisch centrum." },
  { rank: 10, name: "Osaka", country: "Japan", continent: "Azië", population: "19 miljoen", description: "Osaka ligt in Oost-Azië. De bevolkingsgroei is hier bijna stilgevallen." },
];

const Top10Steden = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/Top_10_grootste_steden.docx";
    link.download = "Top_10_grootste_steden.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-6 print:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                Terug naar home
              </Link>
              <h1 className="text-3xl font-bold text-primary">Top 10 Grootste Steden</h1>
              <p className="text-muted-foreground mt-1">Overzicht van de grootste steden ter wereld (2025)</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleDownload} variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button onClick={handlePrint} variant="outline" className="gap-2">
                <Printer className="h-4 w-4" />
                Afdrukken
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Chart Image */}
      <section className="container mx-auto px-4 py-8 print:py-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Groei van de 10 grootste steden (1990-2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src="/documents/top10-grafiek.jpg" 
              alt="Grafiek groei grootste steden" 
              className="w-full max-w-3xl mx-auto rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              De grafiek laat zien dat de verstedelijking bij de 10 grootste steden niet gelijk loopt. Delhi en Shanghai groeien het snelst, Osaka en Tokio groeien het minst.
            </p>
          </CardContent>
        </Card>

        {/* Verstedelijking Info */}
        <Card className="mb-8 print:break-after-avoid">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
              Verstedelijking wereldwijd
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Verstedelijking is het proces waarbij steeds meer mensen in steden gaan wonen. Dit gebeurt wereldwijd, maar met grote verschillen tussen landen en continenten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Hoge inkomenslanden</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sterk verstedelijkt (vaak &gt;80%)</li>
                  <li>• Groei begon na 1880 (industrialisatie)</li>
                  <li>• Nu laag verstedelijkingstempo</li>
                </ul>
              </div>
              <div className="bg-secondary/5 rounded-lg p-4">
                <h4 className="font-semibold text-secondary mb-2">Lage inkomenslanden</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lage verstedelijkingsgraad</li>
                  <li>• Sterke groei sinds 1970</li>
                  <li>• Hoog verstedelijkingstempo</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Card 
              key={city.rank} 
              className={`relative overflow-hidden group hover:shadow-lg transition-shadow ${city.rank === 7 ? 'print:break-before-page' : ''}`}
            >
              <div className="absolute top-0 left-0 w-16 h-16 bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">{city.rank}</span>
              </div>
              <CardHeader className="pt-8 pl-20">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  {city.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {city.country}, {city.continent}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-semibold text-primary">{city.population}</span>
                  <span className="text-sm text-muted-foreground">inwoners</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {city.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Print header */}
      <div className="hidden print:block print:mb-4">
        <h1 className="text-2xl font-bold text-center">Top 10 Grootste Steden ter Wereld (2025)</h1>
      </div>

      <style>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          .print\\:py-4 {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          .print\\:mb-4 {
            margin-bottom: 1rem !important;
          }
          .print\\:break-before-page {
            break-before: page !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Top10Steden;
