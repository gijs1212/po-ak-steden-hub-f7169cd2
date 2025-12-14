import { Link } from "react-router-dom";
import { ArrowLeft, Printer, Download, Users, Home, GraduationCap, Utensils, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const richTraits = [
  { icon: Users, text: "Een kleine groep die heel erg rijk is" },
  { icon: Home, text: "Wonen in mooie en grote huizen" },
  { icon: GraduationCap, text: "Kunnen leren, reizen, feesten en alles doen wat zij willen" },
  { icon: Heart, text: "Wordt naar geluisterd in de politiek" },
  { icon: Utensils, text: "Heel veel eten en drinken in het leven en op bruiloften" },
];

const richDetails = [
  "Hoge kaste",
  "Hoe hoger de kaste hoe meer invloed van Engeland (kolonisator)",
  "Rijken interesseren zich niet voor de armoede van de andere mensen",
  "Rijken denken dat armen arm zijn omdat zij niet goed hun best hebben gedaan",
  "35% stralende mensen - 'haves' leven in het nu",
  "Bruiloft van 20 miljoen roepies",
  "Alle kansen die je maar wilt",
  "Opgeruimde huizen met veel spullen",
  "Ruim opgezette wijken"
];

const poorTraits = [
  { icon: Users, text: "Een heel grote groep die heel erg arm is" },
  { icon: Home, text: "Wonen op straat in krotten of hebben geen huis" },
  { icon: GraduationCap, text: "Moeten bedelen en heel hard werken voor heel weinig geld" },
  { icon: Heart, text: "Doen er niet toe en hebben geen invloed" },
  { icon: Utensils, text: "Geen geld om eten te kopen en zonder eten gaan slapen" },
];

const poorDetails = [
  "Lage kaste",
  "Hoe lager de kaste hoe minder invloed van Engeland (kolonisator)",
  "Armen kijken op tegen de rijken en willen ook zo'n leven",
  "Armen voelen zich machteloos en wanhopig over hun lot",
  "65% worstelende mensen - 'havenots' dromen over de toekomst",
  "Geen geld om te eten en blij zijn met een halve euro per dag",
  "Laagste sociale klasse blijft altijd arm",
  "Geen huis, hooguit een krot met heel weinig spullen",
  "Dicht op elkaar gebouwd, aan je lot overgelaten"
];

const RijkEnArm = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/Arm_en_rijk_in_Delhi.docx";
    link.download = "Arm_en_rijk_in_Delhi.docx";
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
              <h1 className="text-3xl font-bold text-primary">Rijk en Arm in Delhi</h1>
              <p className="text-muted-foreground mt-1">De tegenstellingen in New Delhi</p>
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

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto print:block print:space-y-8">
          {/* Rijken */}
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                <div className="p-3 rounded-full bg-primary/20">
                  <span className="text-2xl">💎</span>
                </div>
                De Rijken
              </CardTitle>
              <p className="text-sm text-muted-foreground">35% van de bevolking - "Haves"</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {richTraits.map((trait, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <trait.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{trait.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 text-primary">Kenmerken:</h4>
                <ul className="space-y-2">
                  {richDetails.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Armen */}
          <Card className="border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent print:break-before-page">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-2xl text-secondary">
                <div className="p-3 rounded-full bg-secondary/20">
                  <span className="text-2xl">🏚️</span>
                </div>
                De Armen
              </CardTitle>
              <p className="text-sm text-muted-foreground">65% van de bevolking - "Have-nots"</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {poorTraits.map((trait, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                    <trait.icon className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm font-medium">{trait.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 text-secondary">Kenmerken:</h4>
                <ul className="space-y-2">
                  {poorDetails.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-secondary font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conclusion */}
        <Card className="mt-8 max-w-3xl mx-auto bg-muted/30">
          <CardContent className="py-6">
            <p className="text-center text-muted-foreground">
              <span className="font-semibold text-foreground">Conclusie:</span> In Delhi zijn er heel veel tegenstellingen tussen arm en rijk. 
              Het kastensysteem speelt hierbij een grote rol en bepaalt vaak je kansen in het leven.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Print header */}
      <div className="hidden print:block print:mb-4">
        <h1 className="text-2xl font-bold text-center">Rijk en Arm in Delhi - De Tegenstellingen</h1>
      </div>

      <style>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          .print\\:mb-4 {
            margin-bottom: 1rem !important;
          }
          .print\\:break-before-page {
            break-before: page !important;
          }
          .print\\:space-y-8 > * + * {
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RijkEnArm;
