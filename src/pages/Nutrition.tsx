
import { useState } from "react";
import Layout from "@/components/Layout";
import BarcodeScanner from "@/components/BarcodeScanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Scan, Plus, Search, Apple, Utensils, Coffee, Droplets } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Nutrition = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const todayCalories = 1847;
  const goalCalories = 2200;
  const caloriesProgress = (todayCalories / goalCalories) * 100;

  const macros = {
    protein: { current: 89, goal: 120, color: "bg-soft-emerald" },
    carbs: { current: 234, goal: 275, color: "bg-soft-blue" },
    fats: { current: 67, goal: 85, color: "bg-soft-amber" }
  };

  const meals = [
    {
      name: "Desayuno",
      icon: Coffee,
      calories: 456,
      items: ["Avena con plátano", "Café con leche", "Huevos revueltos"]
    },
    {
      name: "Almuerzo",
      icon: Utensils,
      calories: 678,
      items: ["Pollo a la plancha", "Arroz integral", "Ensalada mixta"]
    },
    {
      name: "Merienda",
      icon: Apple,
      calories: 234,
      items: ["Batido de proteínas", "Plátano"]
    },
    {
      name: "Cena",
      icon: Utensils,
      calories: 479,
      items: ["Salmón al horno", "Verduras salteadas"]
    }
  ];

  const handleBarcodeScan = (barcode: string) => {
    setShowScanner(false);
    toast({
      title: "Producto encontrado",
      description: "Yogur Griego Natural - 150g",
      action: (
        <Button size="sm" className="bg-soft-blue hover:bg-soft-blue/90">
          Añadir
        </Button>
      ),
    });
  };

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="gradient-accent rounded-2xl p-6 text-white card-shadow-lg">
          <h1 className="text-xl font-bold mb-2 text-shadow">Nutrición</h1>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-amber-100 text-sm">Calorías consumidas</p>
              <p className="text-2xl font-bold">{todayCalories} / {goalCalories}</p>
            </div>
            <div className="text-right">
              <p className="text-amber-100 text-sm">Restantes</p>
              <p className="text-xl font-bold">{goalCalories - todayCalories}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min(caloriesProgress, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Macros */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="text-lg text-soft-slate">Macronutrientes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(macros).map(([name, macro]) => (
              <div key={name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm capitalize font-medium text-soft-slate">{name}</span>
                  <span className="text-sm text-soft-slate">{macro.current}g / {macro.goal}g</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div 
                    className={`${macro.color} h-2.5 rounded-full transition-all duration-500`}
                    style={{ width: `${Math.min((macro.current / macro.goal) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Add */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="text-lg text-soft-slate">Añadir Alimento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <Input
                placeholder="Buscar alimento..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-gray-200 focus:border-soft-blue"
              />
              <Button variant="outline" size="icon" className="border-gray-200 hover:bg-soft-blue/10 hover:border-soft-blue">
                <Search className="w-4 h-4 text-soft-blue" />
              </Button>
            </div>
            
            <Button 
              onClick={() => setShowScanner(true)}
              className="w-full gradient-secondary text-white hover:opacity-90 rounded-xl"
            >
              <Scan className="w-4 h-4 mr-2" />
              Escanear Código de Barras
            </Button>
          </CardContent>
        </Card>

        {/* Meals */}
        {meals.map((meal, index) => {
          const Icon = meal.icon;
          return (
            <Card key={index} className="card-shadow border-0 hover:card-shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-soft-purple" />
                    <span className="text-lg text-soft-slate">{meal.name}</span>
                  </div>
                  <Badge variant="secondary" className="bg-soft-purple/10 text-soft-purple border-0">
                    {meal.calories} kcal
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {meal.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-sm text-soft-slate/80">• {item}</p>
                ))}
                <Button variant="ghost" className="w-full mt-3 text-soft-purple hover:bg-soft-purple/10 rounded-xl">
                  <Plus className="w-4 h-4 mr-2" />
                  Añadir alimento
                </Button>
              </CardContent>
            </Card>
          );
        })}

        {/* Water Tracking */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-soft-slate">
              <Droplets className="w-5 h-5 text-soft-cyan" />
              Hidratación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-3">
              <span className="text-soft-slate">Agua consumida</span>
              <span className="font-medium text-soft-slate">1.8L / 3L</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
              <div className="bg-soft-cyan h-3 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[250, 500, 750, 1000].map((amount) => (
                <Button 
                  key={amount} 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-200 hover:bg-soft-cyan/10 hover:border-soft-cyan text-soft-slate rounded-xl"
                >
                  +{amount}ml
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {showScanner && (
        <BarcodeScanner 
          onScan={handleBarcodeScan}
          onClose={() => setShowScanner(false)}
        />
      )}
    </Layout>
  );
};

export default Nutrition;
