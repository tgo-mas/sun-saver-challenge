import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  TreePine, 
  Trophy, 
  Target, 
  Leaf, 
  Sun,
  TrendingUp,
  Star,
  Crown,
  Award,
  Flame
} from "lucide-react";
import GameLevel from "@/components/GameLevel";
import heroImage from "@/assets/hero-solar-tree.jpg";

const Dashboard = () => {
  const [userLevel] = useState(7);
  const [userXP] = useState(2450);
  const [nextLevelXP] = useState(3000);
  const [totalSaved] = useState(1247.50);
  const [currentStreak] = useState(12);

  const challenges = [
    { 
      id: 1, 
      title: "Economize 50kWh esta semana", 
      progress: 75, 
      reward: 100,
      type: "weekly"
    },
    { 
      id: 2, 
      title: "Use energia solar por 5 dias consecutivos", 
      progress: 40, 
      reward: 200,
      type: "streak"
    },
    { 
      id: 3, 
      title: "Reduza consumo em 20%", 
      progress: 90, 
      reward: 150,
      type: "efficiency"
    }
  ];

  const achievements = [
    { name: "Primeiro Passo Verde", icon: Leaf, unlocked: true },
    { name: "Economia Solar", icon: Sun, unlocked: true },
    { name: "Eco Warrior", icon: TreePine, unlocked: true },
    { name: "Energia Master", icon: Zap, unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-success/10 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header gamificado */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-success to-warning bg-clip-text text-transparent">
            ⚡ ArenaSolar ⚡
          </h1>
          <p className="text-lg text-muted-foreground">Sua jornada épica pela energia sustentável!</p>
        </div>

        {/* Layout principal - Nível em destaque */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Coluna principal - Nível */}
          <div className="lg:col-span-3">
            <GameLevel 
              currentLevel={userLevel}
              currentXP={userXP}
              nextLevelXP={nextLevelXP}
            />
          </div>

          {/* Stats principais em destaque */}
          <div className="lg:col-span-1 grid md:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-success/20 to-primary/10 border-success/30 hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Flame className="w-5 h-5 text-warning animate-pulse" />
                  Sequência de Fogo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning mb-2">
                  {currentStreak} dias
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(Math.min(currentStreak, 7))].map((_, i) => (
                      <Flame key={i} className="w-4 h-4 text-warning" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Recorde: 18 dias
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/20 to-warning/10 border-secondary/30 hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Crown className="w-5 h-5 text-secondary animate-bounce" />
                  Tesouro Acumulado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">
                  R$ {totalSaved.toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +R$ 45,20 esta semana
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Conquistas em destaque */}
          <Card className="bg-gradient-to-br from-warning/10 to-secondary/10 border-warning/20 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-warning animate-bounce" />
                Hall da Fama
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Conquistas desbloqueadas */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Conquistas Desbloqueadas</h4>
                  <div className="flex gap-2 flex-wrap">
                    {achievements.filter(a => a.unlocked).map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-success/20 border border-success/30 text-success hover:scale-105 transition-transform"
                      >
                        <achievement.icon className="w-4 h-4" />
                        <span className="text-xs font-medium">{achievement.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Próximas conquistas */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Próximas Conquistas</h4>
                  <div className="flex gap-2 flex-wrap">
                    {achievements.filter(a => !a.unlocked).map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 border border-muted text-muted-foreground opacity-60"
                      >
                        <achievement.icon className="w-4 h-4" />
                        <span className="text-xs font-medium">{achievement.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
        </div>

        {/* Missões e conquistas em destaque */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Missões ativas estilo RPG */}
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-accent animate-pulse" />
                Missões Ativas
                <Badge variant="outline" className="ml-auto">
                  {challenges.length} ativas
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-muted/40 hover:bg-muted/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{challenge.title}</h4>
                      <div className="flex items-center gap-2 mb-1">
                        <Progress value={challenge.progress} className="h-1.5 flex-1" />
                        <span className="text-xs text-muted-foreground w-10">{challenge.progress}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          +{challenge.reward} XP
                        </Badge>
                        <span className="text-xs text-warning font-medium">
                          {challenge.progress >= 100 ? "✅ Completa!" : "🎯 Em progresso"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Árvore de progresso minimalista */}
          <Card className="lg:col-span-1 bg-gradient-to-br from-primary/10 to-success/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TreePine className="w-6 h-6 text-success animate-float" />
                Progressão de Poder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-center space-x-1 h-24">
                {[1,2,3,4,5,6,7,8,9,10].map((level) => (
                  <div 
                    key={level}
                    className={`w-6 transition-all duration-1000 rounded-t-lg flex items-end justify-center ${
                      level <= userLevel 
                        ? level === userLevel
                          ? 'bg-gradient-to-t from-warning to-secondary animate-pulse-glow' 
                          : 'bg-gradient-to-t from-success to-primary'
                        : 'bg-muted/40 hover:bg-muted/60'
                    }`}
                    style={{ height: `${Math.min(level * 8 + 16, 80)}px` }}
                  >
                    {level <= userLevel && (
                      <Star className="w-3 h-3 text-white mb-1" />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-4 space-y-1">
                <p className="text-sm">
                  <span className="font-bold text-success">Nível {userLevel}</span> 
                  <span className="text-muted-foreground"> de 10</span>
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline">
                    <Award className="w-3 h-3 mr-1" />
                    {achievements.filter(a => a.unlocked).length}/{achievements.length} conquistas
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA para explorar */}
        <div className="text-center space-y-4">
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Button variant="energy" className="animate-bounce-in">
              <Target className="w-4 h-4 mr-2" />
              Novas Missões
            </Button>
            <Button variant="solar" className="animate-bounce-in">
              <Trophy className="w-4 h-4 mr-2" />
              Ranking Global
            </Button>
            <Button variant="eco" className="animate-bounce-in">
              <Star className="w-4 h-4 mr-2" />
              Loja de Itens
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;