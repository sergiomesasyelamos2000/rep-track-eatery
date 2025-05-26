
import { useState } from "react";
import { Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
  onClose: () => void;
}

const BarcodeScanner = ({ onScan, onClose }: BarcodeScannerProps) => {
  const [manualBarcode, setManualBarcode] = useState("");
  const { toast } = useToast();

  const handleManualSubmit = () => {
    if (manualBarcode.trim()) {
      onScan(manualBarcode.trim());
      toast({
        title: "Código introducido",
        description: "Buscando producto...",
      });
    }
  };

  const simulateScan = () => {
    // Simular un código de barras para demo
    const demoBarcode = "8410076472601"; // Código de ejemplo
    onScan(demoBarcode);
    toast({
      title: "Producto escaneado",
      description: "Producto encontrado en la base de datos",
    });
  };

  return (
    <Card className="fixed inset-4 z-50 p-6 bg-white/95 backdrop-blur-sm animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Escanear Código</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="space-y-6">
        {/* Área de cámara simulada */}
        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Cámara para escaneo</p>
            <Button onClick={simulateScan} className="gradient-fitness text-white">
              Simular Escaneo
            </Button>
          </div>
        </div>
        
        {/* Introducción manual */}
        <div className="space-y-3">
          <p className="text-sm text-gray-600">O introduce el código manualmente:</p>
          <div className="flex gap-2">
            <Input
              placeholder="Código de barras"
              value={manualBarcode}
              onChange={(e) => setManualBarcode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleManualSubmit()}
            />
            <Button onClick={handleManualSubmit} disabled={!manualBarcode.trim()}>
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BarcodeScanner;
