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
  Star
} from "lucide-react";
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
        
        {/* Header com perfil */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              EcoEnergy
            </h1>
            <p className="text-muted-foreground">Economize energia, salve o planeta!</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="px-3 py-1">
              <Star className="w-4 h-4 mr-1" />
              Nível {userLevel}
            </Badge>
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center text-white font-bold">
              EC
            </div>
          </div>
        </div>

        {/* Stats principais */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TreePine className="w-4 h-4 text-success" />
                Progresso do Nível
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success mb-2">
                {userXP} / {nextLevelXP} XP
              </div>
              <Progress 
                value={(userXP / nextLevelXP) * 100} 
                className="h-2 bg-success/20"
              />
              <p className="text-xs text-muted-foreground mt-2">
                {nextLevelXP - userXP} XP para próximo nível
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-warning/5 border-secondary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Sun className="w-4 h-4 text-secondary" />
                Economia Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">
                R$ {totalSaved.toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 inline mr-1" />
                +R$ 45,20 esta semana
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Sequência Atual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {currentStreak} dias
              </div>
              <p className="text-xs text-muted-foreground">
                Seu melhor: 18 dias
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Desafios ativos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Desafios Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{challenge.title}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Progress value={challenge.progress} className="h-2 flex-1" />
                      <span className="text-sm text-muted-foreground">{challenge.progress}%</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      +{challenge.reward} XP
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conquistas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-warning" />
              Conquistas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 flex-wrap">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                    achievement.unlocked 
                      ? 'bg-success/10 border-success/20 text-success' 
                      : 'bg-muted/50 border-muted text-muted-foreground'
                  }`}
                >
                  <achievement.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{achievement.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Árvore de progresso visual */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TreePine className="w-5 h-5 text-success" />
              Sua Árvore de Progresso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-center space-x-2 h-32">
              {[1,2,3,4,5,6,7,8,9,10].map((level) => (
                <div 
                  key={level}
                  className={`w-8 transition-all duration-500 rounded-t-lg ${
                    level <= userLevel 
                      ? 'bg-gradient-to-t from-success to-primary' 
                      : 'bg-muted/30'
                  }`}
                  style={{ height: `${Math.min(level * 12, 100)}px` }}
                >
                  <div className="text-xs text-center text-white font-medium pt-1">
                    {level}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                Nível atual: <span className="font-bold text-success">{userLevel}</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA para mais desafios */}
        <div className="text-center">
          <Button size="lg" variant="energy" className="animate-pulse-glow">
            <Target className="w-4 h-4 mr-2" />
            Ver Todos os Desafios
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;