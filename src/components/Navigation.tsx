
import { Link, useLocation } from "react-router-dom";
import { Home, Dumbbell, Apple, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Inicio" },
    { path: "/workout", icon: Dumbbell, label: "Entreno" },
    { path: "/nutrition", icon: Apple, label: "Nutrición" },
    { path: "/progress", icon: TrendingUp, label: "Progreso" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-all duration-200",
                isActive 
                  ? "text-fitness-blue bg-blue-50" 
                  : "text-gray-600 hover:text-fitness-blue hover:bg-gray-50"
              )}
            >
              <Icon className={cn("w-6 h-6 mb-1", isActive && "animate-pulse-strong")} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
