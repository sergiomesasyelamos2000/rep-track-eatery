
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Apple, Target, Calendar, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="gradient-fitness rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2 text-shadow">¡Hola, Atleta! 💪</h1>
          <p className="text-blue-100">Listo para otro día de progreso</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4 text-center">
              <Dumbbell className="w-8 h-8 text-fitness-green mx-auto mb-2" />
              <p className="text-2xl font-bold text-fitness-green">12</p>
              <p className="text-sm text-green-700">Entrenamientos</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-4 text-center">
              <Apple className="w-8 h-8 text-fitness-orange mx-auto mb-2" />
              <p className="text-2xl font-bold text-fitness-orange">1,847</p>
              <p className="text-sm text-orange-700">Calorías hoy</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Workout */}
        <Card className="border-l-4 border-l-fitness-blue">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-fitness-blue" />
              Entrenamiento de Hoy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-600">Rutina: Push Day (Pecho, Hombros, Tríceps)</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Duración estimada: 75 min</span>
              <Link to="/workout">
                <Button className="gradient-fitness text-white">
                  Empezar Entreno
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-fitness-purple" />
              Acciones Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/nutrition">
              <Button variant="outline" className="w-full justify-start">
                <Apple className="w-4 h-4 mr-2" />
                Registrar Comida
              </Button>
            </Link>
            
            <Link to="/progress">
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                Ver Progreso
              </Button>
            </Link>
            
            <Button variant="outline" className="w-full justify-start">
              <Clock className="w-4 h-4 mr-2" />
              Timer Rápido
            </Button>
          </CardContent>
        </Card>

        {/* Today's Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Objetivos de Hoy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Calorías</span>
                <span className="text-sm font-medium">1,847 / 2,200</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-fitness-orange h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Proteína</span>
                <span className="text-sm font-medium">89g / 120g</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-fitness-green h-2 rounded-full" style={{ width: '74%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Agua</span>
                <span className="text-sm font-medium">1.8L / 3L</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-fitness-blue h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
