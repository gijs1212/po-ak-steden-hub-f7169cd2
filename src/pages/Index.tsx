import { Link } from "react-router-dom";
import { HelpCircle, Search, Building2, MapPin, Users, GraduationCap, Gamepad2, Globe, BookOpen, Scale, FileText, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  {
    title: "Top 10 Grootste Steden",
    description: "Overzicht van de grootste steden ter wereld",
    icon: Globe,
    path: "/top-10-steden",
    available: true,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "10 Quizkaarten",
    description: "Interactieve flipkaarten met quizvragen en antwoorden over steden",
    icon: HelpCircle,
    path: "/quiz-kaarten",
    available: true,
    color: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    title: "Schematische Samenvatting",
    description: "Samenvatting van Hoofdstuk 2 Steden - Aardrijkskunde",
    icon: BookOpen,
    path: "/schematische-samenvatting",
    available: true,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Rijk en Arm in Delhi",
    description: "De tegenstellingen tussen arm en rijk in New Delhi",
    icon: Scale,
    path: "/rijk-en-arm",
    available: true,
    color: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    title: "Monopoly Onderzoek",
    description: "Bekijk en download het volledige onderzoek over Monopoly en steden",
    icon: Search,
    path: "/monopoly-onderzoek",
    available: true,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Droomstad",
    description: "Bekijk onze droomstad in 3D en ontdek de verschillende onderdelen",
    icon: Building2,
    path: "/droomstad",
    available: true,
    color: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    title: "Blooket Quiz",
    description: "Speel de interactieve Blooket quiz over onze droomstad en steden",
    icon: Gamepad2,
    path: "/kahoot-quiz",
    available: true,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "10 Quizkaarten 2",
    description: "Nog meer interactieve flipkaarten met quizvragen over steden",
    icon: Layers,
    path: "/quiz-kaarten-2",
    available: false,
    color: "bg-secondary/20",
    iconColor: "text-secondary",
  },
  {
    title: "Opdrachten Boek",
    description: "Bekijk de opdrachten uit het boek voor dit hoofdstuk",
    icon: FileText,
    path: "/opdrachten-boek",
    available: false,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              PO AK Steden
            </span>
          </h1>
          
          <p className="text-center text-muted-foreground text-lg md:text-xl mb-8">
            Aardrijkskunde Project
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">Gijs, James, Jurre</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="h-5 w-5 text-secondary" />
              <span className="font-medium">Schoolproject</span>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block group"
            >
              <Card className={`h-full bg-card border-border transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                !item.available ? "opacity-75" : ""
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                      <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center justify-between">
                    {item.available ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Beschikbaar
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                        Binnenkort
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      Bekijk →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">PO AK Steden</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Gijs, James & Jurre
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
