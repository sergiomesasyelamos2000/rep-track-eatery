
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, Calendar, Weight, Ruler } from "lucide-react";

const Progress = () => {
  const stats = {
    currentWeight: 75.2,
    goalWeight: 80,
    startWeight: 70,
    bodyFat: 12.8,
    muscleGain: 4.2
  };

  const workoutStats = [
    { exercise: "Press Banca", current: "90kg x 6", best: "95kg x 4", trend: "up" },
    { exercise: "Sentadilla", current: "110kg x 8", best: "115kg x 6", trend: "up" },
    { exercise: "Peso Muerto", current: "130kg x 5", best: "135kg x 3", trend: "up" },
    { exercise: "Press Militar", current: "55kg x 8", best: "60kg x 6", trend: "down" }
  ];

  const weeklyGoals = [
    { goal: "3 entrenamientos de fuerza", completed: 2, total: 3 },
    { goal: "Consumir 2200 kcal diarias", completed: 5, total: 7 },
    { goal: "Beber 3L de agua", completed: 4, total: 7 },
    { goal: "Dormir 8 horas", completed: 6, total: 7 }
  ];

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="gradient-fitness rounded-xl p-6 text-white">
          <h1 className="text-xl font-bold mb-2 text-shadow">Tu Progreso</h1>
          <p className="text-blue-100">Mantén el rumbo hacia tus objetivos</p>
        </div>

        {/* Body Composition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Weight className="w-5 h-5 text-fitness-green" />
              Composición Corporal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Peso Actual</p>
                <p className="text-2xl font-bold text-fitness-green">{stats.currentWeight}kg</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+2.1kg</span>
                </div>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Grasa Corporal</p>
                <p className="text-2xl font-bold text-fitness-blue">{stats.bodyFat}%</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">-1.2%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Progreso hacia objetivo</span>
                <span className="text-sm font-medium">{stats.currentWeight}kg / {stats.goalWeight}kg</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-fitness-green h-3 rounded-full transition-all duration-500" 
                  style={{ width: `${((stats.currentWeight - stats.startWeight) / (stats.goalWeight - stats.startWeight)) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workout Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-fitness-blue" />
              Progreso en Ejercicios
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {workoutStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{stat.exercise}</p>
                  <p className="text-sm text-gray-600">Actual: {stat.current}</p>
                </div>
                <div className="text-right">
                  <Badge variant={stat.trend === "up" ? "default" : "secondary"}>
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {stat.best}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-fitness-purple" />
              Objetivos Semanales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{goal.goal}</span>
                  <span className="text-sm font-medium">{goal.completed}/{goal.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-fitness-purple h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${(goal.completed / goal.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-fitness-orange" />
              Logros Recientes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-fitness-orange rounded-full"></div>
              <div>
                <p className="font-medium text-sm">Nuevo récord en Press Banca</p>
                <p className="text-xs text-gray-600">Hace 2 días - 95kg x 4 reps</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-fitness-green rounded-full"></div>
              <div>
                <p className="font-medium text-sm">Meta semanal completada</p>
                <p className="text-xs text-gray-600">Hace 1 día - 3 entrenamientos</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-fitness-blue rounded-full"></div>
              <div>
                <p className="font-medium text-sm">Consistencia en nutrición</p>
                <p className="text-xs text-gray-600">Hace 3 días - 7 días seguidos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-12">
            <Ruler className="w-4 h-4 mr-2" />
            Medidas
          </Button>
          <Button variant="outline" className="h-12">
            <Calendar className="w-4 h-4 mr-2" />
            Historial
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Progress;
