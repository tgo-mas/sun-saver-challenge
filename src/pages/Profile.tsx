import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Settings, 
  Trophy, 
  Star, 
  Edit,
  TreePine,
  Zap,
  Sun,
  Award,
  Target,
  Calendar,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "EcoUser",
    email: "ecouser@example.com",
    phone: "+55 11 99999-9999",
    location: "São Paulo, SP"
  });

  const userStats = {
    level: 7,
    xp: 2450,
    nextLevelXP: 3000,
    totalSaved: 1247.50,
    co2Avoided: 245,
    daysActive: 89,
    challengesCompleted: 23
  };

  const achievements = [
    { 
      id: 1, 
      name: "Primeiro Passo Verde", 
      description: "Complete seu primeiro desafio",
      icon: TreePine, 
      unlocked: true,
      date: "Há 2 meses"
    },
    { 
      id: 2, 
      name: "Economia Solar", 
      description: "Economize 100kWh usando energia solar",
      icon: Sun, 
      unlocked: true,
      date: "Há 1 mês"
    },
    { 
      id: 3, 
      name: "Eco Warrior", 
      description: "Mantenha uma sequência de 30 dias",
      icon: Award, 
      unlocked: true,
      date: "Há 2 semanas"
    },
    { 
      id: 4, 
      name: "Energia Master", 
      description: "Alcance o nível 10",
      icon: Zap, 
      unlocked: false,
      date: null
    },
    { 
      id: 5, 
      name: "Guardião Verde", 
      description: "Evite 500kg de CO₂",
      icon: TreePine, 
      unlocked: false,
      date: null
    },
  ];

  const monthlyProgress = [
    { month: "Jan", xp: 180 },
    { month: "Fev", xp: 220 },
    { month: "Mar", xp: 156 },
    { month: "Abr", xp: 290 },
    { month: "Mai", xp: 340 },
    { month: "Jun", xp: 420 },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você salvaria os dados no banco
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-success/10 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header do perfil */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {userInfo.name.charAt(0)}
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <Badge className="bg-success text-success-foreground px-2 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Nível {userStats.level}
                  </Badge>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold">{userInfo.name}</h1>
                    <p className="text-muted-foreground">Eco Warrior desde março 2024</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    {isEditing ? 'Cancelar' : 'Editar'}
                  </Button>
                </div>
                
                {/* Barra de progresso do nível */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso do Nível</span>
                    <span>{userStats.xp} / {userStats.nextLevelXP} XP</span>
                  </div>
                  <Progress 
                    value={(userStats.xp / userStats.nextLevelXP) * 100} 
                    className="h-3"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="stats" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="stats">Estatísticas</TabsTrigger>
            <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          {/* Estatísticas */}
          <TabsContent value="stats" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TreePine className="w-6 h-6 text-success" />
                  </div>
                  <div className="text-2xl font-bold text-success">{userStats.co2Avoided} kg</div>
                  <div className="text-xs text-muted-foreground">CO₂ Evitado</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-warning/5 border-secondary/20">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sun className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-secondary">R$ {userStats.totalSaved.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">Economia Total</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent">{userStats.daysActive}</div>
                  <div className="text-xs text-muted-foreground">Dias Ativos</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-warning/10 to-secondary/5 border-warning/20">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-warning" />
                  </div>
                  <div className="text-2xl font-bold text-warning">{userStats.challengesCompleted}</div>
                  <div className="text-xs text-muted-foreground">Desafios Concluídos</div>
                </CardContent>
              </Card>

            </div>

            {/* Progresso mensal */}
            <Card>
              <CardHeader>
                <CardTitle>Evolução de XP</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end space-x-2 h-32">
                  {monthlyProgress.map((month, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-primary to-success rounded-t-lg transition-all duration-500"
                        style={{ height: `${(month.xp / 450) * 100}px` }}
                      />
                      <div className="text-xs text-muted-foreground mt-2">{month.month}</div>
                      <div className="text-xs font-medium">{month.xp}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conquistas */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id}
                  className={`transition-all duration-300 ${
                    achievement.unlocked 
                      ? 'bg-success/5 border-success/20 hover:shadow-lg' 
                      : 'bg-muted/30 border-muted/20 opacity-60'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        achievement.unlocked 
                          ? 'bg-success/20' 
                          : 'bg-muted/20'
                      }`}>
                        <achievement.icon className={`w-6 h-6 ${
                          achievement.unlocked ? 'text-success' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{achievement.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {achievement.description}
                        </p>
                        {achievement.unlocked ? (
                          <Badge variant="secondary" className="text-success">
                            ✓ Desbloqueado {achievement.date}
                          </Badge>
                        ) : (
                          <Badge variant="outline">
                            🔒 Bloqueado
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Informações */}
          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome</Label>
                      <Input 
                        id="name"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input 
                        id="phone"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Localização</Label>
                      <Input 
                        id="location"
                        value={userInfo.location}
                        onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm text-muted-foreground">Nome</div>
                          <div className="font-medium">{userInfo.name}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm text-muted-foreground">E-mail</div>
                          <div className="font-medium">{userInfo.email}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm text-muted-foreground">Telefone</div>
                          <div className="font-medium">{userInfo.phone}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm text-muted-foreground">Localização</div>
                          <div className="font-medium">{userInfo.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {isEditing && (
                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleSave}>Salvar</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancelar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configurações da Conta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-muted-foreground">
                  <p className="mb-4">
                    Para acessar configurações avançadas e salvar seus dados na nuvem, 
                    conecte-se ao Supabase.
                  </p>
                  <Button variant="outline">
                    Conectar ao Supabase
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

      </div>
    </div>
  );
};

export default Profile;