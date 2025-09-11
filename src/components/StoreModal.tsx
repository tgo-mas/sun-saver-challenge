import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Lock, 
  Crown,
  Trophy,
  Target,
  Zap,
  TreePine,
  Sun,
  Leaf,
  Coins
} from "lucide-react";

// Importar todas as imagens dos níveis
import item1 from "@/assets/item1.png";
import item2 from "@/assets/item2.png";
import item3 from "@/assets/item3.png";
import item4 from "@/assets/item4.png";
import item5 from "@/assets/item5.png";
import item6 from "@/assets/item6.png";

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCoins: number;
}

const StoreModal = ({ isOpen, onClose, currentCoins }: StoreModalProps) => {
  const items = [
    {
      id: 1,
      name: "Perfil Iniciante Sustentável",
      image: item1,
      price: 30,
      requirements: ["Nível 1"]
    },
    {
      id: 2,
      name: "Perfil Entusiasta Verde",
      image: item2,
      price: 50,
      requirements: ["Nível 2"],
    },
    {
      id: 3,
      name: "Perfil Guardião Solar",
      image: item3,
      price: 120,
      requirements: ["Nível 3"],
    },
    {
      id: 4,
      name: "Perfil Amigo da Terra",
      image: item4,
      price: 250,
      requirements: ["Nível 4"],
    },
    {
      id: 5,
      name: "Perfil Gigante Renovável",
      image: item5,
      price: 450,
      requirements: ["Nível 5"],
    },
    {
      id: 6,
      name: "Perfil Campeão Solar",
      image: item6,
      price: 750,
      requirements: ["Nível 6"],
    }
  ];

  const getItemIcon = (levelId: number) => {
    const icons = [Star, Sun, TreePine, Zap, Leaf, Crown, Trophy, Target, Crown, Star];
    const IconComponent = icons[levelId - 1] || Star;
    return IconComponent;
  };

  const isitemUnlocked = (itemId: number) => {
    return items[itemId-1].price <= currentCoins;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            Loja Solar
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-4 py-4">
            {items.map((item) => {
                const IconComponent = getItemIcon(item.id);
                const isUnlocked = isitemUnlocked(item.id);

                return (
                    <div
                        key={item.id}
                        className={`lg:col-span-1 flex items-center justify-between gap-4 p-4 rounded-lg border transition-all duration-300 ${
                        isUnlocked
                            ? 'bg-card border-border hover:bg-muted/50'
                            : 'bg-muted/30 border-muted opacity-60'
                        }`}
                    >
                        {/* Imagem do nível */}
                        <div className="relative">
                        <div className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                            isUnlocked 
                            ? 'border-primary/30' 
                            : 'border-muted'
                        }`}>
                            <img 
                            src={item.image} 
                            alt={item.name}
                            className={`w-full h-full object-cover ${!isUnlocked ? 'grayscale' : ''}`}
                            />
                        </div>
                        
                        {/* Ícone do nível */}
                        <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${
                            isUnlocked
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                            {isUnlocked ? (
                            <IconComponent className="w-4 h-4" />
                            ) : (
                            <Lock className="w-4 h-4" />
                            )}
                        </div>
                        </div>

                        {/* Requisitos */}
                        <div className="gap-2 text-xs">
                            <div>
                            <p className="font-medium text-muted-foreground mb-1">Requisitos:</p>
                            <ul className="space-y-0.5">
                                {item.requirements.map((req, index) => (
                                <li key={index} className="flex items-center gap-1">
                                    <Target className="w-3 h-3 text-accent" />
                                    {req}
                                </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        <Button variant="energy" size="sm" className="bg-primary button">
                            {item.price} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </Button>
                    </div>
                )}
            )}
            </div>
        <div className="flex justify-between">
            <div className="flex font-bold text-primary">
                Suas moedas: {currentCoins} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            </div>
          <Button onClick={onClose} variant="energy">
            <Star className="w-4 h-4 mr-2" />
            Continuar Jornada
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoreModal;