import { useState } from 'react';
import { X } from 'lucide-react';

interface MapPoint {
  id: number;
  x: number;
  y: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
}

const mapPoints: MapPoint[] = [
  {
    id: 1,
    x: 30,
    y: 58,
    title: "De Flats",
    description: "Dit is een ingezoomd beeld van de flats. Deze flats dienen als: woning, hotels, activiteitencentra en kantoren. Er is een voetbalveld in de buurt voor de kinderen die in de buurt wonen. In de buurt is ook het stadspark.",
    image: "/droomstad/punten/1.png"
  },
  {
    id: 2,
    x: 82,
    y: 82,
    title: "Industrieterrein",
    description: "Dit is een ingezoomd beeld van het industrieterrein. Hier worden verschillende goederen gemaakt, maar er zijn strikte regels voor geluid en uitstoot. Het ligt vlak bij de haven en luchthaven voor makkelijke verbinding met de rest van de wereld.",
    image: "/droomstad/punten/2.png"
  },
  {
    id: 3,
    x: 88,
    y: 22,
    title: "Het Bos",
    description: "Dit is een ingezoomd beeld van het bos naast de stad. Dit is een beschermd gebied dat niet omgekapt mag worden.",
    image: "/droomstad/punten/3.png"
  },
  {
    id: 4,
    x: 68,
    y: 25,
    title: "Het Meer",
    description: "Dit is een ingezoomd beeld van het meer. Hier staan wat tenten waar je kan verblijven en soms ook activiteiten georganiseerd worden. Het water wordt schoongehouden om de dieren gezond te houden.",
    image: "/droomstad/punten/4.png"
  },
  {
    id: 5,
    x: 12,
    y: 35,
    title: "De Legenda",
    description: "Dit is een ingezoomd beeld van de legenda. Elk gebouw van de stad staat in de legenda en dus nu ook hier.",
    image: "/droomstad/punten/5.png"
  },
  {
    id: 6,
    x: 38,
    y: 62,
    title: "Stadspark & Eerste Ring",
    description: "Dit is een ingezoomd beeld van het stadspark en de eerste ring. Hier is een groot winkelcentrum te zien en 2 grote flats. Deze zitten vol activiteiten en hotels en soms ook inwoners. Het stadspark is nog niet volledig gevuld omdat mensen zelf de vrijheid hebben om het mooier te maken, dus is er veel plek overgehouden hiervoor.",
    image: "/droomstad/punten/6.png"
  },
  {
    id: 7,
    x: 30,
    y: 48,
    title: "De Huizen",
    description: "Dit is een ingezoomd beeld van de huizen. De huizen in rijen zijn kleiner dan de vrijstaande huizen.",
    image: "/droomstad/punten/7.png"
  },
  {
    id: 8,
    x: 82,
    y: 56,
    title: "Haven & Luchthaven",
    description: "Dit is een ingezoomd beeld van de industriële haven en de luchthaven. De stad is niet heel gefocust op tourisme maar meer op industrie. De haven is een internationaal punt door de centrale ligging van de stad. De luchthaven zal uitbreiden door bruggen over de rivier heen.",
    image: "/droomstad/punten/8.png"
  },
  {
    id: 9,
    x: 38,
    y: 84,
    title: "De Villa's",
    description: "Dit is een ingezoomd beeld van de villa's uit de stad. Deze villa's hebben een goed uitzicht op de stad of op het water. Meer villa's mogen er niet komen om de vraag en waarde hoog te houden. Dit heeft voordelen voor de huizenwaarde van de stad.",
    image: "/droomstad/punten/9.png"
  },
  {
    id: 10,
    x: 73,
    y: 58,
    title: "De Rivier",
    description: "Dit is een ingezoomd beeld van de rivier. De twee smalle stukken gaan samen over naar het grote stuk. Dit is aangelegd zodat het vaarverkeer een betere doorgang heeft naar de rest van het land.",
    image: "/droomstad/punten/10.png"
  },
  {
    id: 11,
    x: 58,
    y: 42,
    title: "De Jachthaven",
    description: "Dit is een ingezoomd beeld van de jachthaven. Hier is nog niet veel gebouwd omdat er nog plannen worden gemaakt voor verdere faciliteiten zoals docks en restaurants.",
    image: "/droomstad/punten/11.png"
  },
  {
    id: 12,
    x: 35,
    y: 25,
    title: "Landschap & Duurzame Architectuur",
    description: "Het gebied waar deze stad zich in bevindt is in de benedenloop, bij de kust. Het landschap waar de stad in ligt lijkt op het landschap van Nederland. De bijgevoegde foto's zijn voorbeelden van hoe de gebouwen in de stad er uit zouden kunnen zien. De hele stad is ingericht zodat er zo min mogelijk uitstoot is en dat daar voor gecompenseerd wordt door de wolkenkrabbers met planten om de CO2 de lucht uit te krijgen en een rustigere/koelere stad te krijgen.",
    images: [
      "/droomstad/punten/12-1.png",
      "/droomstad/punten/12-2.png",
      "/droomstad/punten/12-3.png",
      "/droomstad/punten/12-4.png",
      "/droomstad/punten/12-5.png",
      "/droomstad/punten/12-6.png",
      "/droomstad/punten/12-7.png"
    ]
  }
];

const InteractiveMap = () => {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="relative w-full">
        <img 
          src="/droomstad/stad-kaart.png" 
          alt="Plattegrond van de droomstad"
          className="w-full h-auto rounded-lg border border-border"
        />
        
        {mapPoints.map((point) => (
          <button
            key={point.id}
            onClick={() => setSelectedPoint(point)}
            className={`absolute w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/80 hover:bg-primary border-2 border-background shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              selectedPoint?.id === point.id ? 'bg-primary scale-125 ring-2 ring-primary ring-offset-2' : ''
            }`}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            aria-label={`Bekijk informatie over ${point.title}`}
          >
            <span className="sr-only">{point.title}</span>
          </button>
        ))}
      </div>

      {selectedPoint && (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-lg animate-fade-in">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">
                {selectedPoint.id}. {selectedPoint.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {selectedPoint.description}
              </p>
              {selectedPoint.image && (
                <img 
                  src={selectedPoint.image} 
                  alt={selectedPoint.title}
                  className="mt-4 rounded-lg border border-border max-h-64 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setEnlargedImage(selectedPoint.image!)}
                />
              )}
              {selectedPoint.images && selectedPoint.images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {selectedPoint.images.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`${selectedPoint.title} - voorbeeld ${idx + 1}`}
                      className="rounded-lg border border-border h-32 w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setEnlargedImage(img)}
                    />
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setSelectedPoint(null)}
              className="p-1 hover:bg-muted rounded-full transition-colors"
              aria-label="Sluit informatie"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      )}

      {/* Enlarged image modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-4 right-4 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors"
            aria-label="Sluit afbeelding"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <img 
            src={enlargedImage} 
            alt="Vergrote afbeelding"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <p className="text-center text-sm text-muted-foreground mt-3">
        Klik op een punt om meer informatie te zien
      </p>
    </div>
  );
};

export default InteractiveMap;
