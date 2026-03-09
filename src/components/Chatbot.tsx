import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
  options?: string[];
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleVisit?: (data: { name: string; phone: string; date: string }) => void;
}

export const Chatbot = ({ isOpen, onClose, onScheduleVisit }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentFlow, setCurrentFlow] = useState<string>("initial");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Olá! 👋 Sou o assistente inteligente da Inovace Construtora.\n\nPosso te ajudar a conhecer nossos empreendimentos, simular financiamento ou agendar uma visita. O que você gostaria de fazer?",
          ["Ver empreendimentos disponíveis", "Simular financiamento", "Agendar visita", "Falar com um corretor"]
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now(),
        text,
        sender: "bot",
        timestamp: new Date(),
        options,
      };
      setMessages((prev) => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);

    if (option === "Ver empreendimentos disponíveis") {
      setCurrentFlow("properties");
      addBotMessage(
        "Ótima escolha! Temos empreendimentos incríveis em Itapoá:\n\n🏢 Porto da Ilha\nLocalização privilegiada à beira-mar\n\n🌊 One Beach\nLuxo e sofisticação frente ao oceano\n\n🏛️ Bella Pietra\nElegância em pedra natural\n\nSobre qual você gostaria de saber mais?",
        ["Porto da Ilha", "One Beach", "Bella Pietra", "Falar com um corretor"]
      );
    } else if (option === "Simular financiamento") {
      setCurrentFlow("financing");
      addBotMessage(
        "Para uma simulação de financiamento personalizada, nosso time comercial pode te atender com as melhores condições.\n\nDeseja falar com um especialista?",
        ["Falar com especialista", "Ver empreendimentos", "Voltar ao início"]
      );
    } else if (option === "Agendar visita") {
      setCurrentFlow("schedule");
      addBotMessage(
        "Excelente! Vamos agendar sua visita.\n\nPor favor, me informe:\n📝 Seu nome completo\n📞 Seu telefone\n📅 Data preferida (ex: 15/02/2025)\n\nDigite as informações separadas por vírgula:"
      );
    } else if (option === "Falar com um corretor") {
      addBotMessage(
        "Um de nossos corretores especializados entrará em contato com você em breve!\n\n📞 Telefone: (47) 3443-0000\n📧 Email: contato@inovace.com.br\n⏰ Horário: Segunda a Sexta, 8h às 18h\n\nPosso ajudar com mais alguma coisa?",
        ["Ver empreendimentos", "Voltar ao início"]
      );
    } else if (["Porto da Ilha", "One Beach", "Bella Pietra"].includes(option)) {
      handlePropertyDetails(option);
    } else if (option.includes("R$")) {
      handleFinancingSimulation(option);
    } else if (option === "Voltar ao início") {
      setCurrentFlow("initial");
      addBotMessage(
        "Como posso te ajudar?",
        ["Ver empreendimentos disponíveis", "Simular financiamento", "Agendar visita", "Falar com um corretor"]
      );
    }
  };

  const handlePropertyDetails = (property: string) => {
    const details: Record<string, string> = {
      "Porto da Ilha": "🏢 Porto da Ilha\n\n✨ Apartamentos de 2 e 3 quartos\n📏 De 85m² a 125m²\n💎 A partir de R$ 550.000\n🏖️ Localização à beira-mar\n🏊 Piscina infinity\n🏋️ Academia completa\n🚗 2 vagas de garagem\n\nGostaria de agendar uma visita?",
      "One Beach": "🌊 One Beach\n\n✨ Apartamentos de alto padrão\n📏 De 110m² a 180m²\n💎 A partir de R$ 690.000\n🌅 Vista panorâmica do oceano\n🏊 Piscina aquecida\n🎾 Quadra de tênis\n🍽️ Espaço gourmet\n\nGostaria de agendar uma visita?",
      "Bella Pietra": "🏛️ Bella Pietra\n\n✨ Lançamento exclusivo\n📏 Apartamentos de 95m² a 150m²\n💎 Valores a partir de R$ 620.000\n🪨 Fachada em pedra natural\n🌳 Área verde privativa\n🛁 Spa e sauna\n👶 Espaço kids\n\nGostaria de se cadastrar para o lançamento?"
    };

    addBotMessage(details[property], ["Sim, agendar visita", "Ver outros empreendimentos", "Simular financiamento"]);
  };

  const handleFinancingSimulation = (range: string) => {
    const simulations: Record<string, string> = {
      "R$ 500k - R$ 700k": "💰 Simulação para faixa de R$ 500k - R$ 700k\n\n📊 Entrada de 20%: R$ 100k - R$ 140k\n📅 Prazo: até 360 meses\n💳 Parcelas estimadas: R$ 3.500 - R$ 4.900/mês\n🏦 Taxa aproximada: 9,5% a.a.\n\nEssa é uma simulação básica. Gostaria de falar com um especialista para uma proposta personalizada?",
      "R$ 700k - R$ 1M": "💰 Simulação para faixa de R$ 700k - R$ 1M\n\n📊 Entrada de 20%: R$ 140k - R$ 200k\n📅 Prazo: até 360 meses\n💳 Parcelas estimadas: R$ 4.900 - R$ 7.000/mês\n🏦 Taxa aproximada: 9,5% a.a.\n\nEssa é uma simulação básica. Gostaria de falar com um especialista para uma proposta personalizada?",
      "Acima de R$ 1M": "💰 Simulação para valores acima de R$ 1M\n\n📊 Entrada de 30%: a partir de R$ 300k\n📅 Prazo: até 360 meses\n💳 Parcelas estimadas: a partir de R$ 7.000/mês\n🏦 Taxa especial para alto padrão\n\nPara esta faixa, temos condições especiais. Gostaria de falar com nosso especialista em alto padrão?"
    };

    addBotMessage(simulations[range], ["Falar com especialista", "Ver empreendimentos", "Voltar ao início"]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);

    if (currentFlow === "schedule" && inputValue.includes(",")) {
      const parts = inputValue.split(",").map((p) => p.trim());
      if (parts.length >= 3) {
        const [name, phone, date] = parts;
        if (onScheduleVisit) {
          onScheduleVisit({ name, phone, date });
        }
        addBotMessage(
          `Perfeito, ${name}! ✅\n\nSeu agendamento foi registrado:\n📅 Data: ${date}\n📞 Telefone: ${phone}\n\nUm de nossos corretores entrará em contato para confirmar sua visita. Obrigado!`,
          ["Agendar outra visita", "Voltar ao início"]
        );
        setCurrentFlow("initial");
      }
    } else {
      addBotMessage(
        "Desculpe, não entendi completamente. Posso te ajudar com uma dessas opções?",
        ["Ver empreendimentos", "Simular financiamento", "Agendar visita", "Falar com corretor"]
      );
    }

    setInputValue("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in">
      <div className="fixed bottom-0 right-0 md:bottom-4 md:right-4 w-full md:w-[400px] h-full md:h-[600px] bg-card border-l md:border border-border shadow-2xl md:rounded-lg overflow-hidden animate-in slide-in-from-bottom md:slide-in-from-right">
        {/* Header */}
        <div className="bg-primary p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">Assistente Inovace</h3>
              <p className="text-xs text-primary-foreground/80">Online 24h</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="h-[calc(100%-140px)] overflow-y-auto p-4 space-y-4 bg-muted/30">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-2 animate-in slide-in-from-bottom-2",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-lg p-3 whitespace-pre-line",
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border"
                )}
              >
                <p className="text-sm">{message.text}</p>
                {message.options && (
                  <div className="mt-3 flex flex-col gap-2">
                    {message.options.map((option, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        onClick={() => handleOptionClick(option)}
                        className="justify-start text-left h-auto py-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-accent-foreground" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-2 items-center animate-in fade-in">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-background border border-border rounded-lg p-3">
                <div className="typing-indicator flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="absolute bottom-0 w-full border-t border-border bg-background p-4">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon" className="bg-primary hover:bg-primary-dark">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
