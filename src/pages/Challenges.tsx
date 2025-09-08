import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Target, 
  Zap, 
  Calendar, 
  Trophy, 
  Clock, 
  Sun,
  TreePine,
  Leaf,
  Award,
  CheckCircle
} from "lucide-react";

const Challenges = () => {
  const [activeTab, setActiveTab] = useState("active");

  const activeChallenges = [
    {
      id: 1,
      title: "Economize 50kWh esta semana",
      description: "Reduza seu consumo de energia em 50kWh comparado à semana passada",
      progress: 75,
      current: 37.5,
      target: 50,
      reward: 100,
      timeLeft: "2 dias",
      type: "weekly",
      icon: Zap,
      difficulty: "Médio"
    },
    {
      id: 2,
      title: "Sequência Solar",
      description: "Use energia solar por 5 dias consecutivos",
      progress: 60,
      current: 3,
      target: 5,
      reward: 200,
      timeLeft: "4 dias",
      type: "streak",
      icon: Sun,
      difficulty: "Fácil"
    },
    {
      id: 3,
      title: "Eficiência Verde",
      description: "Reduza consumo em 20% comparado ao mês passado",
      progress: 85,
      current: 17,
      target: 20,
      reward: 300,
      timeLeft: "8 dias",
      type: "efficiency",
      icon: Leaf,
      difficulty: "Difícil"
    }
  ];

  const dailyChallenges = [
    {
      id: 4,
      title: "Pico Solar",
      description: "Use apenas energia solar entre 12h-15h",
      reward: 50,
      completed: true,
      icon: Sun
    },
    {
      id: 5,
      title: "Economia Noturna",
      description: "Reduza consumo em 30% após 22h",
      reward: 40,
      completed: false,
      icon: Zap
    },
    {
      id: 6,
      title: "Monitor Verde",
      description: "Verifique seu consumo 3 vezes hoje",
      reward: 25,
      completed: false,
      icon: TreePine
    }
  ];

  const completedChallenges = [
    {
      id: 7,
      title: "Primeira Economia",
      description: "Complete seu primeiro dia de economia",
      reward: 75,
      completedDate: "Há 3 dias",
      icon: Trophy
    },
    {
      id: 8,
      title: "Eco Warrior",
      description: "Economize energia por 7 dias consecutivos",
      reward: 500,
      completedDate: "Há 1 semana",
      icon: Award
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Fácil": return "text-success bg-success/10 border-success/20";
      case "Médio": return "text-warning bg-warning/10 border-warning/20";
      case "Difícil": return "text-destructive bg-destructive/10 border-destructive/20";
      default: return "text-muted-foreground bg-muted/10 border-muted/20";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-success/10 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            Desafios EcoEnergy
          </h1>
          <p className="text-muted-foreground">
            Complete desafios e ganhe XP para evoluir sua jornada sustentável
          </p>
        </div>

        {/* Tabs de desafios */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Ativos
            </TabsTrigger>
            <TabsTrigger value="daily" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Diários
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Concluídos
            </TabsTrigger>
          </TabsList>

          {/* Desafios Ativos */}
          <TabsContent value="active" className="space-y-4">
            {activeChallenges.map((challenge) => (
              <Card key={challenge.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <challenge.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getDifficultyColor(challenge.difficulty)}>
                        {challenge.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {challenge.timeLeft}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progresso: {challenge.current} / {challenge.target}</span>
                        <span className="font-medium">{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-3" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-warning">
                        <Trophy className="w-4 h-4" />
                        <span className="font-medium">+{challenge.reward} XP</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Desafios Diários */}
          <TabsContent value="daily" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {dailyChallenges.map((challenge) => (
                <Card 
                  key={challenge.id} 
                  className={`transition-all duration-300 ${
                    challenge.completed 
                      ? 'bg-success/5 border-success/20' 
                      : 'hover:shadow-md'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        challenge.completed 
                          ? 'bg-success/20' 
                          : 'bg-primary/10'
                      }`}>
                        {challenge.completed ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <challenge.icon className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {challenge.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-warning">
                            <Trophy className="w-3 h-3" />
                            <span className="text-sm">+{challenge.reward} XP</span>
                          </div>
                          {challenge.completed ? (
                            <Badge variant="secondary" className="text-success">
                              ✓ Concluído
                            </Badge>
                          ) : (
                            <Button size="sm" variant="outline">
                              Iniciar
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Desafios Concluídos */}
          <TabsContent value="completed" className="space-y-4">
            {completedChallenges.map((challenge) => (
              <Card key={challenge.id} className="bg-success/5 border-success/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-success/20">
                      <challenge.icon className="w-6 h-6 text-success" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {challenge.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-success">
                          <Trophy className="w-4 h-4" />
                          <span className="font-medium">+{challenge.reward} XP</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Concluído {challenge.completedDate}
                        </span>
                      </div>
                    </div>
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
};

export default Challenges;