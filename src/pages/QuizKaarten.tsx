import { Link } from "react-router-dom";
import { ArrowLeft, Printer } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface QuizCard {
  number: number;
  question: string;
  answers: string[];
}

const quizCards: QuizCard[] = [
  {
    number: 1,
    question: "Noem 2 verschillen tussen een verstedelijkt gebied en een landelijk gebied.",
    answers: [
      "Hoge - lage bevolkingsdichtheid en bebouwingsdichtheid.",
      "Grote - kleine variatie in welvaart en voorzieningen."
    ]
  },
  {
    number: 2,
    question: "Wanneer zijn hoge en lage inkomenslanden gaan industrialiseren?",
    answers: [
      "Hoge inkomenslanden tijdens de industrialisatie na 1880.",
      "Lage inkomenslanden sinds 1970."
    ]
  },
  {
    number: 3,
    question: "Noem 4 wereldsteden en vertel waarom zij economische invloed hebben.",
    answers: [
      "New York: hoog bbp.",
      "Tokyo: heel veel inwoners.",
      "Londen: veel internationale bedrijven en banken.",
      "Shanghai: drukste haven ter wereld."
    ]
  },
  {
    number: 4,
    question: "Wat is het verschil tussen een primate city en een satellietstad?",
    answers: [
      "Primate city: de grootste stad van een land, als deze veel meer inwoners heeft dan alle andere steden en/of veel belangrijker is op economisch, politiek of cultureel gebied.",
      "Satellietsteden: een nieuwe stad op enige afstand van de oude stad om deze te ontlasten en de bevolking te spreiden."
    ]
  },
  {
    number: 5,
    question: "In welk land zijn steden met een grid patroon gebouwd?",
    answers: ["In China."]
  },
  {
    number: 6,
    question: "Hoe heet het deel van de stad waar de zakenwereld zit, vaak met hoogbouw en hoge grondprijzen?",
    answers: ["Central Business District."]
  },
  {
    number: 7,
    question: "Hoe ziet de opbouw van steden in welvarende landen eruit?",
    answers: [
      "Suburbs: ruim opgezette woonwijk met laagbouw. Hier wonen mensen met hogere inkomens.",
      "Oudere woonwijken: naar het centrum toe is de bebouwingsdichtheid veel groter.",
      "Een Centraal Business District: deel van de stad waar de zakenwereld zit."
    ]
  },
  {
    number: 8,
    question: "Welke 6 onderdelen zijn bij stadsplanning belangrijk?",
    answers: [
      "Water",
      "Werk",
      "Variatie aan inwoners",
      "Infrastructuur",
      "Voorzieningen",
      "Wetten"
    ]
  },
  {
    number: 9,
    question: "Wie maakt de stadsplanning als deze top down wordt gemaakt?",
    answers: ["De overheid."]
  },
  {
    number: 10,
    question: "Tijdens de urbanisatie in de 19ᵉ eeuw groeiden 5 Nederlandse steden. Welke steden waren dit?",
    answers: [
      "Amsterdam: diensten, zaken- en toeristencentrum.",
      "Den Haag: bestuurscentrum.",
      "Rotterdam: mainport van de haven en industrie.",
      "Utrecht: knooppunt van spoor- en autowegen.",
      "Eindhoven: innovatie en design center."
    ]
  }
];

const QuizKaarten = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (cardNumber: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardNumber)) {
        newSet.delete(cardNumber);
      } else {
        newSet.add(cardNumber);
      }
      return newSet;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - hide on print */}
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
              <h1 className="text-3xl font-bold text-primary">10 Quizkaarten</h1>
              <p className="text-muted-foreground mt-1">Klik op een kaart om het antwoord te zien</p>
            </div>
            <Button onClick={handlePrint} variant="outline" className="gap-2">
              <Printer className="h-4 w-4" />
              Afdrukken
            </Button>
          </div>
        </div>
      </header>

      {/* Interactive Cards Grid - hide on print */}
      <main className="container mx-auto px-4 py-8 print:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {quizCards.map((card) => (
            <div
              key={card.number}
              className="cursor-pointer group"
              onClick={() => toggleCard(card.number)}
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full transition-transform duration-700 ease-in-out"
                style={{
                  aspectRatio: "2.5/3.5",
                  transformStyle: "preserve-3d",
                  transform: flippedCards.has(card.number) ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* Front of card - Question */}
                <div
                  className="absolute inset-0 rounded-lg p-4 flex flex-col border-2 border-primary bg-primary/5 shadow-lg group-hover:shadow-xl transition-shadow"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {card.number}
                    </div>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wide">Vraag</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-foreground text-sm font-medium text-center leading-relaxed">
                      {card.question}
                    </p>
                  </div>
                  
                  <div className="mt-2 text-center">
                    <span className="inline-flex items-center gap-2 text-muted-foreground text-xs">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Klik voor antwoord
                    </span>
                  </div>
                </div>

                {/* Back of card - Answer */}
                <div
                  className="absolute inset-0 rounded-lg p-4 flex flex-col border-2 border-secondary bg-secondary/5 shadow-lg"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold text-lg">
                      {card.number}
                    </div>
                    <span className="text-secondary text-xs font-semibold uppercase tracking-wide">Antwoord</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center overflow-auto">
                    <ul className="space-y-1.5 text-foreground text-xs">
                      {card.answers.map((answer, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <span className="font-bold text-secondary">{String.fromCharCode(97 + idx)}.</span> {answer}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-2 text-center">
                    <span className="inline-flex items-center gap-2 text-muted-foreground text-xs">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                      Klik voor vraag
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Print Layout - Questions Page */}
      <div className="hidden print:block">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">10 Quizkaarten - Vragen</h1>
        </div>
        <div className="grid grid-cols-5 gap-4 px-4">
          {quizCards.map((card) => (
            <div
              key={`print-q-${card.number}`}
              className="border-2 border-primary rounded-lg p-3 bg-primary/5"
              style={{ 
                aspectRatio: "3.5/2.5",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)"
              }}
            >
              <div className="h-full flex flex-col items-center justify-between">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm shrink-0">
                  {card.number}
                </div>
                <p className="text-xs text-center leading-tight flex-1 flex items-center px-1">
                  {card.question}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Page break */}
        <div className="page-break" style={{ pageBreakAfter: "always" }} />
        
        {/* Answers Page */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">10 Quizkaarten - Antwoorden</h1>
        </div>
        <div className="grid grid-cols-5 gap-4 px-4">
          {quizCards.map((card) => (
            <div
              key={`print-a-${card.number}`}
              className="border-2 border-secondary rounded-lg p-3 bg-secondary/5"
              style={{ 
                aspectRatio: "3.5/2.5",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)"
              }}
            >
              <div className="h-full flex flex-col items-center justify-between">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white font-bold text-sm shrink-0">
                  {card.number}
                </div>
                <ul className="space-y-0.5 flex-1 flex flex-col justify-center px-1 text-[7px]">
                  {card.answers.map((answer, idx) => (
                    <li key={idx} className="leading-tight">
                      <span className="font-bold">{String.fromCharCode(97 + idx)}.</span> {answer}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: landscape;
            margin: 10mm;
          }
          
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:block {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizKaarten;
