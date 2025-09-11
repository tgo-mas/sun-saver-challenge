import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Target, 
  BarChart3, 
  User,
  TreePine
} from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/challenges", icon: Target, label: "Desafios" },
    { to: "/statistics", icon: BarChart3, label: "Estatísticas" },
    { to: "/profile", icon: User, label: "Perfil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50 md:top-0 md:bottom-auto md:bg-background/95">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <TreePine className="w-8 h-8 text-success" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              ArenaSolar
            </span>
          </div>
          
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="flex md:hidden items-center justify-around h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon 
                    className={`w-5 h-5 transition-transform ${
                      isActive ? "scale-110" : ""
                    }`} 
                  />
                  <span className="text-xs font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
        
      </div>
    </nav>
  );
};

export default Navigation;