import { Link } from "react-router-dom";
import { ArrowLeft, Printer, Download, BookOpen, Building2, Users, Map, Landmark, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "Verstedelijkt gebied",
    icon: Building2,
    content: [
      "Een gebied met een hoge bevolkings- en bebouwingsdichtheid",
      "Hoge bevolkings- en bebouwingsdichtheid, veel hoogbouw",
      "Grote variatie in welvaart, opleidingsmogelijkheden en cultuur",
      "Grote variatie in voorzieningen bij elkaar"
    ]
  },
  {
    title: "Landelijk gebied",
    icon: Map,
    content: [
      "Gebied met een lage bevolkings- en bebouwingsdichtheid",
      "Weinig variatie in voorzieningen",
      "Tegenovergestelde van een stedelijk gebied"
    ]
  },
  {
    title: "Verstedelijking",
    icon: Users,
    content: [
      "Toename: Natuurlijke bevolkingsgroei, Migratie",
      "Afname: Vergrijzing, Bevolkingskrimp"
    ]
  },
  {
    title: "Soorten steden",
    icon: Landmark,
    content: [
      "Megasteden: Meer dan 10 miljoen inwoners",
      "Wereldsteden (global city): Wereldwijd zeer belangrijk, veel invloed op politiek, economie of cultuur",
      "Hoofdsteden: Belangrijke stad waar meestal de regering zit",
      "Primate city: Grootste stad van een land met veel meer inwoners dan andere steden",
      "Satellietsteden: Nieuwe stad om de oude stad te ontlasten"
    ]
  },
  {
    title: "Kenmerken verstedelijking",
    icon: BookOpen,
    content: [
      "Meer welvarend land → meer stedelijke bevolking",
      "Verstedelijkingsgraad: % van de bevolking dat in steden woont",
      "Verstedelijkingstempo: % waarmee de bevolking in steden jaarlijks toeneemt",
      "Hoge inkomenslanden: sterk verstedelijkt, groei na 1880, nu laag tempo",
      "Lage inkomenslanden: lage graad, groei sinds 1970, hoog tempo"
    ]
  },
  {
    title: "Opbouw steden welvarende landen",
    icon: Home,
    content: [
      "Suburbs: ruim opgezette woonwijk met laagbouw voor hogere inkomens",
      "Suburbanisatie: verhuizen vanuit stad naar platteland",
      "Oudere woonwijken: hoge bebouwingsdichtheid richting centrum",
      "Central Business District (CBD): zakenwereld, hoogbouw, hoge grondprijzen"
    ]
  }
];

const SchematischeSamenvatting = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/Hoofdstuk_2_Steden_opdracht_AK.docx";
    link.download = "Hoofdstuk_2_Steden_opdracht_AK.docx";
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
              <h1 className="text-3xl font-bold text-primary">Schematische Samenvatting</h1>
              <p className="text-muted-foreground mt-1">Hoofdstuk 2 Steden - Aardrijkskunde</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-shadow ${section.title === "Kenmerken verstedelijking" ? "print:break-before-page" : ""}`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-secondary font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Extra info */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Stadsplanning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                6 belangrijke onderdelen bij stadsplanning:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Water", "Werk", "Variatie aan inwoners", "Infrastructuur", "Voorzieningen", "Wetten"].map((item) => (
                  <div key={item} className="bg-background rounded-lg px-3 py-2 text-sm font-medium text-center border">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Print header */}
      <div className="hidden print:block print:mb-4">
        <h1 className="text-2xl font-bold text-center">Schematische Samenvatting - Hoofdstuk 2 Steden</h1>
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
        }
      `}</style>
    </div>
  );
};

export default SchematischeSamenvatting;
