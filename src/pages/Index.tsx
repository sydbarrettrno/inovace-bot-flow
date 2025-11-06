import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Chatbot } from "@/components/Chatbot";
import { PropertyCard } from "@/components/PropertyCard";
import { MessageSquare, Phone, Mail, MapPin, Clock, Building2, Users, Award } from "lucide-react";
import { toast } from "sonner";
import logoInovace from "@/assets/logo-inovace.png";
import heroBuilding from "@/assets/hero-building.jpg";
import portoIlha from "@/assets/porto-ilha.jpg";
import oneBeach from "@/assets/one-beach.jpg";
import bellaPietra from "@/assets/bella-pietra.jpg";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleScheduleVisit = (data: { name: string; phone: string; date: string }) => {
    toast.success("Agendamento realizado com sucesso!", {
      description: `${data.name}, entraremos em contato no telefone ${data.phone}`,
    });
  };

  const handleLearnMore = (propertyName: string) => {
    setIsChatOpen(true);
    toast.info(`Abrindo chat sobre ${propertyName}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <img src={logoInovace} alt="Inovace Construtora" className="h-12" />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#empreendimentos" className="text-foreground hover:text-primary transition-colors">
              Empreendimentos
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          <Button
            onClick={() => setIsChatOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat 24h
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBuilding})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/60 to-background/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 fade-in">
            Atendimento Inteligente 24h
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto slide-up">
            Conheça nossos empreendimentos e agende sua visita agora mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scale-in">
            <Button
              size="lg"
              onClick={() => setIsChatOpen(true)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-accent"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Iniciar Conversa com a Inovace
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              Ver Empreendimentos
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Building2, value: "15+", label: "Empreendimentos Entregues" },
              { icon: Users, value: "2.500+", label: "Famílias Realizadas" },
              { icon: Award, value: "25 Anos", label: "De Experiência" },
              { icon: Clock, value: "24h", label: "Atendimento Online" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="empreendimentos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nossos Empreendimentos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça as melhores opções de moradia em Itapoá-SC
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              name="Porto da Ilha"
              price="A partir de R$ 550 mil"
              image={portoIlha}
              location="Itapoá, SC - Beira-mar"
              beds="2-3 qts"
              area="85-125m²"
              parking="2 vagas"
              status="Disponível"
              onLearnMore={() => handleLearnMore("Porto da Ilha")}
            />
            <PropertyCard
              name="One Beach"
              price="A partir de R$ 690 mil"
              image={oneBeach}
              location="Itapoá, SC - Frente ao Mar"
              beds="3-4 qts"
              area="110-180m²"
              parking="2-3 vagas"
              status="Alto Padrão"
              onLearnMore={() => handleLearnMore("One Beach")}
            />
            <PropertyCard
              name="Bella Pietra"
              price="Lançamento em breve"
              image={bellaPietra}
              location="Itapoá, SC - Vista Mar"
              beds="2-3 qts"
              area="95-150m²"
              parking="2 vagas"
              status="Lançamento"
              onLearnMore={() => handleLearnMore("Bella Pietra")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Construindo Sonhos Há 25 Anos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A Inovace Construtora é referência em empreendimentos de qualidade em Itapoá-SC. Nossa missão é
              transformar sonhos em realidade, oferecendo imóveis com excelência em acabamento, localização
              privilegiada e atendimento diferenciado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Qualidade</h3>
                <p className="text-muted-foreground">
                  Padrão de acabamento premium em todos os nossos empreendimentos
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Localização</h3>
                <p className="text-muted-foreground">
                  Imóveis estrategicamente localizados nas melhores regiões de Itapoá
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Atendimento</h3>
                <p className="text-muted-foreground">
                  Suporte completo desde a escolha até a entrega das chaves
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Entre em Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-primary-foreground/80">
                      Av. Principal, 1234 - Centro
                      <br />
                      Itapoá, SC - CEP 89249-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-primary-foreground/80">(47) 3443-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-primary-foreground/80">contato@inovace.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Horário</h3>
                    <p className="text-primary-foreground/80">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 9h às 13h
                      <br />
                      <span className="text-accent font-semibold">Chat Online: 24 horas</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4">Atendimento Imediato</h3>
                <p className="mb-6 text-primary-foreground/80">
                  Nosso assistente inteligente está disponível 24 horas por dia para tirar suas dúvidas e agendar
                  visitas.
                </p>
                <Button
                  size="lg"
                  onClick={() => setIsChatOpen(true)}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Iniciar Conversa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src={logoInovace} alt="Inovace Construtora" className="h-10" />
            <p className="text-sm text-primary-foreground/70">
              © 2025 Inovace Construtora. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <Button
          size="lg"
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent animate-bounce z-40"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      )}

      {/* Chatbot */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} onScheduleVisit={handleScheduleVisit} />
    </div>
  );
};

export default Index;
