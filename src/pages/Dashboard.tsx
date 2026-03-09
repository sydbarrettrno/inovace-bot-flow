import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Calendar, TrendingUp, ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";
import logoInovace from "@/assets/logo-inovace.png";

const Dashboard = () => {
  const statPlaceholders = [
    { title: "Total de Conversas", icon: MessageSquare },
    { title: "Leads Qualificados", icon: Users },
    { title: "Visitas Agendadas", icon: Calendar },
    { title: "Taxa de Conversão", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <img src={logoInovace} alt="Inovace Construtora" className="h-10" />
          </div>
          <h1 className="text-xl font-semibold text-foreground">Dashboard Administrativo</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Status Banner */}
        <div className="mb-8 rounded-lg border border-border bg-muted/50 p-6 flex items-start gap-4">
          <Info className="w-6 h-6 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-foreground">Painel em configuração</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Os dados reais aparecerão aqui após a integração com o sistema de atendimento.
            </p>
          </div>
        </div>

        {/* Stats Cards - empty state */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statPlaceholders.map((stat, idx) => (
            <Card key={idx} className="opacity-60">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className="w-5 h-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-muted-foreground">—</div>
                <p className="text-xs text-muted-foreground mt-1">Aguardando integração</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leads Table - empty state */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Leads Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-muted-foreground">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <p className="text-lg font-medium">Nenhum lead registrado</p>
              <p className="text-sm mt-1">Os leads reais aparecerão aqui após a integração.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
