import { ArrowLeft, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const slides = Array.from({ length: 20 }, (_, i) => `/quizkaarten2/slide-${i + 1}.jpg`);

const QuizKaarten2 = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-secondary/10 via-background to-primary/10 border-b border-border print:hidden">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Terug
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Quizkaarten 2
              </h1>
              <p className="text-muted-foreground mt-2">
                Bekijk de quizkaarten over steden
              </p>
            </div>
            <Button onClick={handlePrint} className="gap-2">
              <Printer className="h-4 w-4" />
              Afdrukken
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 print:p-0 print:m-0">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 print:grid-cols-5 print:gap-1 print:p-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="aspect-video bg-muted rounded-lg overflow-hidden shadow-md print:rounded-none print:shadow-none"
            >
              <img
                src={slide}
                alt={`Dia ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 5mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:grid-cols-5 {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizKaarten2;
