
import { useState } from "react";
import Layout from "@/components/Layout";
import Timer from "@/components/Timer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, Plus, Clock, Check, MoreVertical } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Workout = () => {
  const [showTimer, setShowTimer] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const { toast } = useToast();

  const exercises = [
    {
      name: "Press Banca",
      sets: [
        { weight: 80, reps: 10, completed: true },
        { weight: 85, reps: 8, completed: true },
        { weight: 90, reps: 6, completed: false },
        { weight: 90, reps: 6, completed: false },
      ]
    },
    {
      name: "Press Inclinado con Mancuernas",
      sets: [
        { weight: 32, reps: 12, completed: false },
        { weight: 35, reps: 10, completed: false },
        { weight: 35, reps: 8, completed: false },
      ]
    },
    {
      name: "Fondos en Paralelas",
      sets: [
        { weight: 0, reps: 15, completed: false },
        { weight: 0, reps: 12, completed: false },
        { weight: 0, reps: 10, completed: false },
      ]
    }
  ];

  const startWorkout = () => {
    setWorkoutStarted(true);
    toast({
      title: "¡Entrenamiento iniciado!",
      description: "Dale todo en esta sesión 💪",
    });
  };

  const completeSet = (exerciseIndex: number, setIndex: number) => {
    toast({
      title: "Serie completada",
      description: "¡Buen trabajo! ¿Listo para el descanso?",
      action: (
        <Button size="sm" onClick={() => setShowTimer(true)}>
          Iniciar Timer
        </Button>
      ),
    });
  };

  const addSet = (exerciseIndex: number) => {
    toast({
      title: "Serie añadida",
      description: "Nueva serie agregada al ejercicio",
    });
  };

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="gradient-fitness rounded-xl p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold mb-1 text-shadow">Push Day</h1>
              <p className="text-blue-100">Pecho, Hombros, Tríceps</p>
            </div>
            {workoutStarted && (
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Clock className="w-4 h-4 mr-1" />
                45:30
              </Badge>
            )}
          </div>
          
          {!workoutStarted && (
            <Button 
              onClick={startWorkout}
              className="mt-4 bg-white text-fitness-blue hover:bg-blue-50"
            >
              <Play className="w-4 h-4 mr-2" />
              Empezar Entrenamiento
            </Button>
          )}
        </div>

        {/* Exercises */}
        {exercises.map((exercise, exerciseIndex) => (
          <Card key={exerciseIndex} className={exerciseIndex === currentExercise ? "border-fitness-blue shadow-lg" : ""}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{exercise.name}</span>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-4 gap-2 text-sm font-medium text-gray-600 px-2">
                <span>Serie</span>
                <span>Peso</span>
                <span>Reps</span>
                <span>✓</span>
              </div>
              
              {exercise.sets.map((set, setIndex) => (
                <div key={setIndex} className="grid grid-cols-4 gap-2 items-center p-2 rounded-lg bg-gray-50">
                  <span className="text-sm font-medium">{setIndex + 1}</span>
                  <Input 
                    type="number" 
                    value={set.weight} 
                    className="h-8 text-sm"
                    placeholder="kg"
                  />
                  <Input 
                    type="number" 
                    value={set.reps} 
                    className="h-8 text-sm"
                    placeholder="reps"
                  />
                  <Button
                    size="sm"
                    variant={set.completed ? "default" : "outline"}
                    className={set.completed ? "bg-fitness-green hover:bg-green-600" : ""}
                    onClick={() => completeSet(exerciseIndex, setIndex)}
                  >
                    <Check className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              
              <Button
                variant="ghost"
                className="w-full text-fitness-blue hover:bg-blue-50"
                onClick={() => addSet(exerciseIndex)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Añadir Serie
              </Button>
            </CardContent>
          </Card>
        ))}

        {/* Add Exercise */}
        <Card className="border-dashed border-2 border-gray-300">
          <CardContent className="p-6 text-center">
            <Button variant="ghost" className="w-full text-gray-600 hover:text-fitness-blue">
              <Plus className="w-5 h-5 mr-2" />
              Añadir Ejercicio
            </Button>
          </CardContent>
        </Card>

        {workoutStarted && (
          <Button className="w-full gradient-fitness text-white py-3">
            Finalizar Entrenamiento
          </Button>
        )}
      </div>

      {showTimer && (
        <Timer onClose={() => setShowTimer(false)} />
      )}
    </Layout>
  );
};

export default Workout;
