
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
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-warm-earth-light px-4 py-2 z-50 card-shadow-lg">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 rounded-xl transition-all duration-200",
                isActive 
                  ? "text-warm-sage bg-warm-sage/10 scale-105" 
                  : "text-warm-earth hover:text-warm-sage hover:bg-warm-sage/5"
              )}
            >
              <Icon className={cn("w-6 h-6 mb-1", isActive && "animate-pulse-soft")} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
