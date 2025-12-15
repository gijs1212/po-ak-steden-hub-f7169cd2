import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Opdracht {
  id: number;
  titel: string;
  beschrijving: string;
  pagina?: string;
}

const opdrachten: Opdracht[] = [
  {
    id: 1,
    titel: "Opdracht 1",
    beschrijving: "Beschrijving van opdracht 1 komt hier",
    pagina: "p. 24",
  },
  {
    id: 2,
    titel: "Opdracht 2",
    beschrijving: "Beschrijving van opdracht 2 komt hier",
    pagina: "p. 25",
  },
  {
    id: 3,
    titel: "Opdracht 3",
    beschrijving: "Beschrijving van opdracht 3 komt hier",
    pagina: "p. 26",
  },
  {
    id: 4,
    titel: "Opdracht 4",
    beschrijving: "Beschrijving van opdracht 4 komt hier",
    pagina: "p. 27",
  },
  {
    id: 5,
    titel: "Opdracht 5",
    beschrijving: "Beschrijving van opdracht 5 komt hier",
    pagina: "p. 28",
  },
];

const OpdrachtenBoek = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Terug
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Opdrachten Boek
            </h1>
          </div>
          <p className="text-muted-foreground mt-2">
            Overzicht van de opdrachten uit het boek voor Hoofdstuk 2 Steden
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {opdrachten.map((opdracht) => (
            <Card key={opdracht.id} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-card-foreground">
                      {opdracht.titel}
                    </CardTitle>
                  </div>
                  {opdracht.pagina && (
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      {opdracht.pagina}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {opdracht.beschrijving}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OpdrachtenBoek;
