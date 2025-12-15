import { useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FlipCard {
  id: number;
  question: string;
  answer: string;
}

const quizCards: FlipCard[] = [
  {
    id: 1,
    question: "Vraag 1 komt hier",
    answer: "Antwoord 1 komt hier",
  },
  {
    id: 2,
    question: "Vraag 2 komt hier",
    answer: "Antwoord 2 komt hier",
  },
  {
    id: 3,
    question: "Vraag 3 komt hier",
    answer: "Antwoord 3 komt hier",
  },
  {
    id: 4,
    question: "Vraag 4 komt hier",
    answer: "Antwoord 4 komt hier",
  },
  {
    id: 5,
    question: "Vraag 5 komt hier",
    answer: "Antwoord 5 komt hier",
  },
  {
    id: 6,
    question: "Vraag 6 komt hier",
    answer: "Antwoord 6 komt hier",
  },
  {
    id: 7,
    question: "Vraag 7 komt hier",
    answer: "Antwoord 7 komt hier",
  },
  {
    id: 8,
    question: "Vraag 8 komt hier",
    answer: "Antwoord 8 komt hier",
  },
  {
    id: 9,
    question: "Vraag 9 komt hier",
    answer: "Antwoord 9 komt hier",
  },
  {
    id: 10,
    question: "Vraag 10 komt hier",
    answer: "Antwoord 10 komt hier",
  },
];

const QuizKaarten2 = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const resetAllCards = () => {
    setFlippedCards(new Set());
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-secondary/10 via-background to-primary/10 border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Terug
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            10 Quizkaarten 2
          </h1>
          <p className="text-muted-foreground mt-2">
            Klik op een kaart om het antwoord te zien
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <Button variant="outline" onClick={resetAllCards} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Reset alle kaarten
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {quizCards.map((card) => (
            <div
              key={card.id}
              className="perspective-1000 h-48 cursor-pointer"
              onClick={() => toggleCard(card.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                  flippedCards.has(card.id) ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-4 flex flex-col items-center justify-center text-secondary-foreground shadow-lg">
                  <span className="text-4xl font-bold mb-2">{card.id}</span>
                  <p className="text-center text-sm font-medium">{card.question}</p>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-primary to-primary/80 rounded-xl p-4 flex items-center justify-center text-primary-foreground shadow-lg">
                  <p className="text-center text-sm font-medium">{card.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default QuizKaarten2;
