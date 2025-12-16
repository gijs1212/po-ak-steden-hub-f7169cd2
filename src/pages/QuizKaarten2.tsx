import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const slides = Array.from({ length: 20 }, (_, i) => `/quizkaarten2/slide-${i + 1}.jpg`);

const QuizKaarten2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Quizkaarten 2 - Afdrukken</title>
          <style>
            @page { size: A4 landscape; margin: 5mm; }
            body { margin: 0; padding: 10px; }
            .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
            .grid img { width: 100%; height: auto; object-fit: contain; border: 2px solid black; box-sizing: border-box; }
          </style>
        </head>
        <body>
          <div class="grid">
            ${slides.map((src, i) => `<img src="${src}" alt="Dia ${i + 1}" />`).join('')}
          </div>
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-gradient-to-r from-secondary/10 via-background to-primary/10 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Terug
                </Button>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                Quizkaarten 2
              </h1>
            </div>
            <Button onClick={handlePrint} variant="outline" className="gap-2">
              <Printer className="h-4 w-4" />
              Afdrukken
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-5xl flex flex-col items-center gap-4">
          <div className="w-full aspect-video bg-muted rounded-xl overflow-hidden shadow-lg">
            <img
              src={slides[currentSlide]}
              alt={`Dia ${currentSlide + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={goToPrevious}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <span className="text-lg font-medium min-w-[100px] text-center">
              {currentSlide + 1} / {slides.length}
            </span>
            
            <Button
              variant="outline"
              size="lg"
              onClick={goToNext}
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                  currentSlide === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizKaarten2;
