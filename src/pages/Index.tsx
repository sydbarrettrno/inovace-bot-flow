import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Chatbot } from "@/components/Chatbot";
import { PropertyCard } from "@/components/PropertyCard";
import { MessageSquare, Phone, Mail, MapPin, Clock, Building2, Users, Award } from "lucide-react";
import { toast } from "sonner";
import logoInovace from "@/assets/logo-inovace.png";
import heroBuilding from "@/assets/hero-building.jpg";
import { company } from "@/data/company";
import { properties } from "@/data/properties";

const iconMap = { Building2, Users, Award, Clock } as Record<string, typeof Building2>;

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
          <img src={logoInovace} alt={company.name} className="h-12" />
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
            {company.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto slide-up">
            {company.heroSubtitle}
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
            {company.stats.map((stat, idx) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={idx} className="text-center fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
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
            {properties.map((property) => (
              <PropertyCard
                key={property.name}
                name={property.name}
                price={property.price}
                image={property.image}
                location={property.location}
                beds={property.beds}
                area={property.area}
                parking={property.parking}
                status={property.status}
                onLearnMore={() => handleLearnMore(property.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {company.aboutTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {company.aboutDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {company.differentials.map((diff) => (
                <div key={diff.title} className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{diff.title}</h3>
                  <p className="text-muted-foreground">{diff.description}</p>
                </div>
              ))}
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
                      {company.contact.address}
                      <br />
                      {company.contact.addressLine2}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-primary-foreground/80">{company.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-primary-foreground/80">{company.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Horário</h3>
                    <p className="text-primary-foreground/80">
                      {company.contact.hours.weekdays}
                      <br />
                      {company.contact.hours.saturday}
                      <br />
                      <span className="text-accent font-semibold">{company.contact.hours.online}</span>
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
            <img src={logoInovace} alt={company.name} className="h-10" />
            <p className="text-sm text-primary-foreground/70">
              {company.copyright}
            </p>
            <div className="flex gap-4">
              {company.socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {link.label}
                </a>
              ))}
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
