import { Link } from "react-router-dom";
import { ArrowLeft, Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MonopolyOnderzoek = () => {
  const pdfUrl = "/monopoly-onderzoek.pdf";
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.5));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.6));
  };

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
          <h1 className="text-3xl font-bold text-primary">Monopoly Onderzoek</h1>
          <p className="text-muted-foreground mt-1">Bekijk en download het onderzoek</p>
        </div>
      </header>

      {/* Controls */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground min-w-[100px] text-center">
              Pagina {pageNumber} van {numPages || "..."}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={zoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground min-w-[60px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <Button variant="outline" size="icon" onClick={zoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              asChild
            >
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => {
                e.preventDefault();
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = pdfUrl;
                document.body.appendChild(iframe);
                iframe.onload = () => {
                  setTimeout(() => {
                    iframe.contentWindow?.print();
                  }, 500);
                };
              }}>
                <Printer className="h-4 w-4 mr-2" />
                Printen
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={pdfUrl} download="monopoly-onderzoek.pdf">
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <main className="container mx-auto px-4 pb-12">
        <Card className="overflow-hidden">
          <CardContent className="p-4 flex justify-center bg-muted/30 min-h-[70vh]">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center h-[60vh]">
                  <div className="text-muted-foreground">PDF laden...</div>
                </div>
              }
              error={
                <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8">
                  <p className="text-muted-foreground mb-4">
                    Kon PDF niet laden. Download het bestand om te bekijken.
                  </p>
                  <Button asChild>
                    <a href={pdfUrl} download="monopoly-onderzoek.pdf">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default MonopolyOnderzoek;
