import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Sun, 
  DollarSign,
  TreePine,
  Award,
  Calendar,
  Target
} from "lucide-react";

const Statistics = () => {
  const monthlyData = [
    { month: 'Jan', economia: 85, consumo: 320, solar: 180 },
    { month: 'Fev', economia: 92, consumo: 310, solar: 195 },
    { month: 'Mar', economia: 78, consumo: 340, solar: 165 },
    { month: 'Abr', economia: 105, consumo: 295, solar: 220 },
    { month: 'Mai', economia: 118, consumo: 280, solar: 245 },
    { month: 'Jun', economia: 134, consumo: 265, solar: 268 },
  ];

  const weeklyData = [
    { day: 'Seg', economia: 18 },
    { day: 'Ter', economia: 22 },
    { day: 'Qua', economia: 15 },
    { day: 'Qui', economia: 28 },
    { day: 'Sex', economia: 24 },
    { day: 'Sab', economia: 31 },
    { day: 'Dom', economia: 19 },
  ];

  const sourceData = [
    { name: 'Solar', value: 65, color: '#facc15' },
    { name: 'Rede Elétrica', value: 25, color: '#ef4444' },
    { name: 'Bateria', value: 10, color: '#3b82f6' },
  ];

  const impactData = [
    { metric: 'CO₂ Evitado', value: '245 kg', change: '+12%', trend: 'up' },
    { metric: 'Árvores Equivalentes', value: '12', change: '+8%', trend: 'up' },
    { metric: 'Economia Total', value: 'R$ 1.247', change: '+15%', trend: 'up' },
    { metric: 'kWh Economizados', value: '420 kWh', change: '+18%', trend: 'up' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-success/10 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            Estatísticas ArenaSolar
          </h1>
          <p className="text-muted-foreground">
            Acompanhe seu progresso e impacto ambiental
          </p>
        </div>

        {/* Cards de métricas principais */}
        <div className="grid md:grid-cols-4 gap-4">
          {impactData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-muted-foreground">{item.metric}</div>
                  <div className={`flex items-center gap-1 text-xs ${
                    item.trend === 'up' ? 'text-success' : 'text-destructive'
                  }`}>
                    {item.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {item.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">{item.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="consumption">Consumo</TabsTrigger>
            <TabsTrigger value="solar">Energia Solar</TabsTrigger>
            <TabsTrigger value="impact">Impacto</TabsTrigger>
          </TabsList>

          {/* Visão Geral */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              
              {/* Gráfico de tendência mensal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-primary" />
                    Tendência Mensal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Area 
                        type="monotone" 
                        dataKey="economia" 
                        stroke="hsl(var(--success))" 
                        fill="hsl(var(--success) / 0.2)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Fontes de energia */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-secondary" />
                    Fontes de Energia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({name, value}) => `${name}: ${value}%`}
                      >
                        {sourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

            </div>

            {/* Economia semanal */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  Economia Esta Semana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Bar 
                      dataKey="economia" 
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Consumo */}
          <TabsContent value="consumption" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-warning" />
                    Consumo vs Meta
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Consumo Atual: 280 kWh</span>
                      <span>Meta: 250 kWh</span>
                    </div>
                    <Progress value={88} className="h-3" />
                    <p className="text-xs text-muted-foreground mt-2">
                      Você está 30 kWh acima da meta mensal
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Pico de Consumo</span>
                      <span>18h-20h</span>
                    </div>
                    <div className="text-2xl font-bold text-warning">45 kWh</div>
                    <p className="text-xs text-muted-foreground">
                      Horário de maior consumo
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Eficiência Energética
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Eficiência Geral</span>
                      <span className="text-2xl font-bold text-success">85%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">12%</div>
                        <div className="text-xs text-muted-foreground">Redução mensal</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-success">R$ 45</div>
                        <div className="text-xs text-muted-foreground">Economia</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* Energia Solar */}
          <TabsContent value="solar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-secondary" />
                  Produção Solar vs Consumo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line 
                      type="monotone" 
                      dataKey="solar" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={3}
                      name="Produção Solar"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="consumo" 
                      stroke="hsl(var(--destructive))" 
                      strokeWidth={3}
                      name="Consumo Total"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impacto Ambiental */}
          <TabsContent value="impact" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              
              <Card className="bg-gradient-to-br from-success/10 to-success/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-success">
                    <TreePine className="w-5 h-5" />
                    CO₂ Evitado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-success mb-2">245 kg</div>
                  <p className="text-sm text-muted-foreground">
                    Equivale a plantar 12 árvores
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-warning/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary">
                    <Award className="w-5 h-5" />
                    Conquistas Verdes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary mb-2">8</div>
                  <p className="text-sm text-muted-foreground">
                    Badges ambientais desbloqueadas
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <DollarSign className="w-5 h-5" />
                    Economia Total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent mb-2">R$ 1.247</div>
                  <p className="text-sm text-muted-foreground">
                    Economizados este ano
                  </p>
                </CardContent>
              </Card>

            </div>

            {/* Projeções */}
            <Card>
              <CardHeader>
                <CardTitle>Projeções de Impacto Anual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Meta de CO₂ Evitado</h4>
                    <Progress value={68} className="h-3 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      245 kg / 360 kg (68% da meta anual)
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Meta de Economia</h4>
                    <Progress value={72} className="h-3 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      R$ 1.247 / R$ 1.800 (72% da meta anual)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

      </div>
    </div>
  );
};

export default Statistics;