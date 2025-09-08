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
  Leaf
} from "lucide-react";

// Importar todas as imagens dos níveis
import level1 from "@/assets/level-1-iniciante.jpg";
import level2 from "@/assets/level-2-coletor.jpg";
import level3 from "@/assets/level-3-guardiao.jpg";
import level4 from "@/assets/level-4-warrior.jpg";
import level5 from "@/assets/level-5-mestre.jpg";
import level6 from "@/assets/level-6-champion.jpg";
import level7 from "@/assets/level-7-suprema.jpg";
import level8 from "@/assets/level-8-lenda.jpg";
import level9 from "@/assets/level-9-deus.jpg";
import level10 from "@/assets/level-10-infinity.jpg";

interface LevelModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: number;
  currentXP: number;
}

const LevelModal = ({ isOpen, onClose, currentLevel, currentXP }: LevelModalProps) => {
  const levels = [
    {
      id: 1,
      name: "Iniciante Solar",
      image: level1,
      xpRequired: 0,
      xpNext: 500,
      requirements: ["Primeiro login", "Completar tutorial"],
      rewards: ["Badge Primeiro Passo", "50 XP bônus"],
      description: "Seus primeiros passos na jornada solar!"
    },
    {
      id: 2,
      name: "Coletor Verde",
      image: level2,
      xpRequired: 500,
      xpNext: 1200,
      requirements: ["Economizar 25kWh", "5 dias consecutivos"],
      rewards: ["Badge Coletor", "100 XP bônus", "Desafio especial"],
      description: "Coletando energia do sol com eficiência!"
    },
    {
      id: 3,
      name: "Guardião Solar",
      image: level3,
      xpRequired: 1200,
      xpNext: 2500,
      requirements: ["Economizar 100kWh", "15 desafios concluídos"],
      rewards: ["Badge Guardião", "200 XP bônus", "Avatar especial"],
      description: "Protegendo o futuro com energia limpa!"
    },
    {
      id: 4,
      name: "Eco Warrior",
      image: level4,
      xpRequired: 2500,
      xpNext: 4500,
      requirements: ["Economizar 300kWh", "30 dias de streak"],
      rewards: ["Badge Warrior", "350 XP bônus", "Theme exclusivo"],
      description: "Guerreiro da sustentabilidade!"
    },
    {
      id: 5,
      name: "Mestre Verde",
      image: level5,
      xpRequired: 4500,
      xpNext: 7500,
      requirements: ["Economizar 750kWh", "50 desafios concluídos"],
      rewards: ["Badge Mestre", "500 XP bônus", "Título especial"],
      description: "Mestre da energia renovável!"
    },
    {
      id: 6,
      name: "Solar Champion",
      image: level6,
      xpRequired: 7500,
      xpNext: 12000,
      requirements: ["Economizar 1500kWh", "100 dias de streak"],
      rewards: ["Badge Champion", "750 XP bônus", "Efeitos visuais"],
      description: "Campeão da energia solar!"
    },
    {
      id: 7,
      name: "Energia Suprema",
      image: level7,
      xpRequired: 12000,
      xpNext: 20000,
      requirements: ["Economizar 3000kWh", "200 desafios concluídos"],
      rewards: ["Badge Supremo", "1000 XP bônus", "Conquista rara"],
      description: "Supremacia em eficiência energética!"
    },
    {
      id: 8,
      name: "Lenda Solar",
      image: level8,
      xpRequired: 20000,
      xpNext: 35000,
      requirements: ["Economizar 7500kWh", "365 dias de streak"],
      rewards: ["Badge Lenda", "1500 XP bônus", "Frame dourado"],
      description: "Uma verdadeira lenda da sustentabilidade!"
    },
    {
      id: 9,
      name: "Deus Verde",
      image: level9,
      xpRequired: 35000,
      xpNext: 60000,
      requirements: ["Economizar 20000kWh", "500 desafios concluídos"],
      rewards: ["Badge Divino", "2500 XP bônus", "Aura especial"],
      description: "Ascendeu a um nível divino de sustentabilidade!"
    },
    {
      id: 10,
      name: "Infinity Solar",
      image: level10,
      xpRequired: 60000,
      xpNext: 100000,
      requirements: ["Economizar 50000kWh", "1000 desafios concluídos"],
      rewards: ["Badge Infinito", "5000 XP bônus", "Status Lendário"],
      description: "Poder infinito da energia solar!"
    }
  ];

  const getLevelIcon = (levelId: number) => {
    const icons = [Star, Sun, TreePine, Zap, Leaf, Crown, Trophy, Target, Crown, Star];
    const IconComponent = icons[levelId - 1] || Star;
    return IconComponent;
  };

  const isLevelUnlocked = (levelId: number) => {
    return levelId <= currentLevel;
  };

  const getLevelProgress = (level: any) => {
    if (level.id < currentLevel) return 100;
    if (level.id === currentLevel) {
      const progress = ((currentXP - level.xpRequired) / (level.xpNext - level.xpRequired)) * 100;
      return Math.max(0, Math.min(100, progress));
    }
    return 0;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            Árvore de Níveis Solar
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {levels.map((level) => {
            const IconComponent = getLevelIcon(level.id);
            const isUnlocked = isLevelUnlocked(level.id);
            const progress = getLevelProgress(level);
            const isCurrent = level.id === currentLevel;

            return (
              <div
                key={level.id}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-gradient-to-r from-success/20 to-primary/20 border-success/40 ring-2 ring-success/30'
                    : isUnlocked
                    ? 'bg-card border-border hover:bg-muted/50'
                    : 'bg-muted/30 border-muted opacity-60'
                }`}
              >
                {/* Imagem do nível */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    isCurrent 
                      ? 'border-success animate-pulse-glow' 
                      : isUnlocked 
                      ? 'border-primary/30' 
                      : 'border-muted'
                  }`}>
                    <img 
                      src={level.image} 
                      alt={level.name}
                      className={`w-full h-full object-cover ${!isUnlocked ? 'grayscale' : ''}`}
                    />
                  </div>
                  
                  {/* Ícone do nível */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${
                    isCurrent
                      ? 'bg-success text-success-foreground'
                      : isUnlocked
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

                {/* Informações do nível */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{level.name}</h3>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                    </div>
                    <Badge variant={isCurrent ? "default" : isUnlocked ? "secondary" : "outline"}>
                      Nível {level.id}
                    </Badge>
                  </div>

                  {/* Progresso do nível */}
                  {isUnlocked && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{level.xpRequired} XP</span>
                        <span>{Math.round(progress)}%</span>
                        <span>{level.xpNext} XP</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}

                  {/* Requisitos */}
                  <div className="grid md:grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">Requisitos:</p>
                      <ul className="space-y-0.5">
                        {level.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <Target className="w-3 h-3 text-accent" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">Recompensas:</p>
                      <ul className="space-y-0.5">
                        {level.rewards.map((reward, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <Trophy className="w-3 h-3 text-warning" />
                            {reward}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button onClick={onClose} variant="energy">
            <Star className="w-4 h-4 mr-2" />
            Continuar Jornada
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LevelModal;