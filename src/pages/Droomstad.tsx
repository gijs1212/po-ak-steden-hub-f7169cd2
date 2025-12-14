import { Link } from "react-router-dom";
import { ArrowLeft, Box, MapPin } from "lucide-react";
import { Suspense, lazy } from "react";
import InteractiveMap from "@/components/InteractiveMap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StlViewer = lazy(() => import("@/components/StlViewer"));

const Droomstad = () => {
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
          <h1 className="text-3xl font-bold text-primary">Droomstad</h1>
          <p className="text-muted-foreground mt-1">Ontdek onze droomstad in 3D en bekijk de verschillende onderdelen</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="3d-model" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md">
            <TabsTrigger value="3d-model" className="flex items-center gap-2">
              <Box className="h-4 w-4" />
              3D Model
            </TabsTrigger>
            <TabsTrigger value="kaart" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Kaart
            </TabsTrigger>
          </TabsList>

          {/* 3D Model Tab */}
          <TabsContent value="3d-model" className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Box className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">3D Model</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Bekijk het 3D model van onze droomstad. Je kunt draaien, zoomen en rondkijken.
            </p>
            <Suspense fallback={
              <div className="w-full h-[400px] bg-muted rounded-lg flex items-center justify-center border border-border">
                <p className="text-muted-foreground">3D model laden...</p>
              </div>
            }>
              <StlViewer url="/droomstad/stad.stl" />
            </Suspense>
          </TabsContent>

          {/* Interactive Map Tab */}
          <TabsContent value="kaart" className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Interactieve Kaart</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Klik op de punten op de kaart om meer te leren over de verschillende gebieden van de stad.
            </p>
            <InteractiveMap />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Droomstad;
