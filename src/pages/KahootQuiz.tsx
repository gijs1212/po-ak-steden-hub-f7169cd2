import { Link } from "react-router-dom";
import { ArrowLeft, Gamepad2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const KahootQuiz = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar home
          </Link>
          <h1 className="text-3xl font-bold text-primary">Blooket Quiz</h1>
          <p className="text-muted-foreground mt-1">Interactieve quiz over steden</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="p-4 rounded-full bg-primary/10 inline-block mb-6">
            <Gamepad2 className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Speel de Blooket Quiz
          </h2>
          <p className="text-muted-foreground mb-6">
            Test je kennis over onze droomstad en steden met deze interactieve Blooket quiz!
          </p>
          <Button asChild size="lg" className="gap-2">
            <a 
              href="https://dashboard.blooket.com/set/693b03c29bdaa55c78ad8ec4" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5" />
              Open Blooket Quiz
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default KahootQuiz;
