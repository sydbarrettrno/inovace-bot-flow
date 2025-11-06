import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, MessageSquare, Calendar, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logoInovace from "@/assets/logo-inovace.png";

interface Lead {
  id: number;
  name: string;
  phone: string;
  date: string;
  interest: string;
  status: "novo" | "qualificado" | "agendado";
}

const Dashboard = () => {
  const [leads] = useState<Lead[]>([
    { id: 1, name: "João Silva", phone: "(47) 99999-1111", date: "12/01/2025", interest: "Porto da Ilha", status: "agendado" },
    { id: 2, name: "Maria Santos", phone: "(47) 99999-2222", date: "12/01/2025", interest: "One Beach", status: "qualificado" },
    { id: 3, name: "Pedro Costa", phone: "(47) 99999-3333", date: "11/01/2025", interest: "Simulação", status: "novo" },
    { id: 4, name: "Ana Oliveira", phone: "(47) 99999-4444", date: "11/01/2025", interest: "Bella Pietra", status: "agendado" },
    { id: 5, name: "Carlos Souza", phone: "(47) 99999-5555", date: "10/01/2025", interest: "Porto da Ilha", status: "qualificado" },
  ]);

  const stats = [
    { title: "Total de Conversas", value: "324", icon: MessageSquare, trend: "+12%" },
    { title: "Leads Qualificados", value: "87", icon: Users, trend: "+8%" },
    { title: "Visitas Agendadas", value: "23", icon: Calendar, trend: "+15%" },
    { title: "Taxa de Conversão", value: "26.8%", icon: TrendingUp, trend: "+3.2%" },
  ];

  const getStatusBadge = (status: Lead["status"]) => {
    const variants: Record<Lead["status"], { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
      novo: { variant: "default", label: "Novo" },
      qualificado: { variant: "secondary", label: "Qualificado" },
      agendado: { variant: "outline", label: "Agendado" },
    };
    return variants[status];
  };

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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className="w-5 h-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-accent-foreground mt-1">
                  <span className="text-accent font-semibold">{stat.trend}</span> vs mês anterior
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leads Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Leads Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Interesse</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => {
                  const statusInfo = getStatusBadge(lead.status);
                  return (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.phone}</TableCell>
                      <TableCell>{lead.date}</TableCell>
                      <TableCell>{lead.interest}</TableCell>
                      <TableCell>
                        <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Empreendimentos Mais Consultados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Porto da Ilha", percentage: 45 },
                  { name: "One Beach", percentage: 32 },
                  { name: "Bella Pietra", percentage: 23 },
                ].map((property) => (
                  <div key={property.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{property.name}</span>
                      <span className="text-sm text-muted-foreground">{property.percentage}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${property.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horários de Maior Atividade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { time: "18h - 21h", label: "Horário de pico", count: 124 },
                  { time: "12h - 14h", label: "Horário de almoço", count: 89 },
                  { time: "21h - 23h", label: "Período noturno", count: 67 },
                  { time: "14h - 18h", label: "Tarde", count: 44 },
                ].map((slot) => (
                  <div key={slot.time} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">{slot.time}</div>
                      <div className="text-sm text-muted-foreground">{slot.label}</div>
                    </div>
                    <Badge variant="secondary">{slot.count} conversas</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
