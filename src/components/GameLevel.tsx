import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Crown, 
  Trophy,
  Target,
  ChevronUp,
  Sparkles
} from "lucide-react";
import LevelModal from "./LevelModal";

// Importar imagens dos níveis
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

interface GameLevelProps {
  currentLevel: number;
  currentXP: number;
  nextLevelXP: number;
}

const GameLevel = ({ currentLevel, currentXP, nextLevelXP }: GameLevelProps) => {
  const [showLevelModal, setShowLevelModal] = useState(false);

  const levelImages = [
    level1, level2, level3, level4, level5,
    level6, level7, level8, level9, level10
  ];

  const levelNames = [
    "Iniciante Solar", "Coletor Verde", "Guardião Solar", "Eco Warrior", "Mestre Verde",
    "Solar Champion", "Energia Suprema", "Lenda Solar", "Deus Verde", "Infinity Solar"
  ];

  const currentLevelData = {
    name: levelNames[currentLevel - 1] || "Iniciante Solar",
    image: levelImages[currentLevel - 1] || level1
  };

  const nextLevelData = {
    name: levelNames[currentLevel] || "Próximo Nível",
    image: levelImages[currentLevel] || level2
  };

  const progressPercent = ((currentXP % 1000) / 1000) * 100;

  return (
    <>
      <Card 
        className="relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/20 cursor-pointer hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]"
        onClick={() => setShowLevelModal(true)}
      >
        {/* Background com imagem do nível atual */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src={currentLevelData.image} 
            alt={currentLevelData.name}
            className="w-full h-full object-cover"
          />
        </div>

        <CardContent className="relative p-6">
          {/* Header com indicador de que é clicável */}
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="bg-background/80 border-primary/30">
              <Trophy className="w-3 h-3 mr-1" />
              Nível Atual
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <ChevronUp className="w-3 h-3" />
              Toque para ver todos
            </div>
          </div>

          {/* Nível principal */}
          <div className="text-center space-y-4">
            {/* Imagem do nível atual grande */}
            <div className="relative mx-auto">
              <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden border-4 border-primary/30 shadow-lg">
                <img 
                  src={currentLevelData.image} 
                  alt={currentLevelData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badge do nível */}
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                <span className="text-sm font-bold text-primary-foreground">{currentLevel}</span>
              </div>
            </div>

            {/* Nome do nível */}
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                {currentLevelData.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {currentXP} / {nextLevelXP} XP
              </p>
            </div>

            {/* Progresso para próximo nível */}
            <div className="space-y-2">
              <Progress 
                value={progressPercent} 
                className="h-3 bg-muted/30"
              />
              <p className="text-xs text-muted-foreground">
                {nextLevelXP - currentXP} XP para <span className="font-medium text-success">{nextLevelData.name}</span>
              </p>
            </div>

            {/* Preview do próximo nível */}
            <div className="flex items-center justify-center gap-2 p-3 bg-muted/20 rounded-lg border border-muted/40">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-muted">
                <img 
                  src={nextLevelData.image} 
                  alt={nextLevelData.name}
                  className="w-full h-full object-cover grayscale opacity-60"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-medium">Próximo:</p>
                <p className="text-xs text-muted-foreground">{nextLevelData.name}</p>
              </div>
              <Star className="w-4 h-4 text-warning ml-auto" />
            </div>
          </div>
        </CardContent>
      </Card>

      <LevelModal 
        isOpen={showLevelModal}
        onClose={() => setShowLevelModal(false)}
        currentLevel={currentLevel}
        currentXP={currentXP}
      />
    </>
  );
};

export default GameLevel;