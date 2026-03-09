export interface CompanyStat {
  icon: string;
  value: string;
  label: string;
}

export interface CompanyContact {
  address: string;
  addressLine2: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    online: string;
  };
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
  differentials: { title: string; description: string }[];
  stats: CompanyStat[];
  contact: CompanyContact;
  socialLinks: { label: string; href: string }[];
  copyright: string;
}

export const company: CompanyInfo = {
  name: "Inovace Construtora",
  slogan: "Construindo Sonhos Há 25 Anos",
  heroTitle: "Atendimento Inteligente 24h",
  heroSubtitle: "Conheça nossos empreendimentos e agende sua visita agora mesmo",
  aboutTitle: "Construindo Sonhos Há 25 Anos",
  aboutDescription:
    "A Inovace Construtora é referência em empreendimentos de qualidade em Itapoá-SC. Nossa missão é transformar sonhos em realidade, oferecendo imóveis com excelência em acabamento, localização privilegiada e atendimento diferenciado.",
  differentials: [
    { title: "Qualidade", description: "Padrão de acabamento premium em todos os nossos empreendimentos" },
    { title: "Localização", description: "Imóveis estrategicamente localizados nas melhores regiões de Itapoá" },
    { title: "Atendimento", description: "Suporte completo desde a escolha até a entrega das chaves" },
  ],
  stats: [
    { icon: "Building2", value: "15+", label: "Empreendimentos Entregues" },
    { icon: "Users", value: "2.500+", label: "Famílias Realizadas" },
    { icon: "Award", value: "25 Anos", label: "De Experiência" },
    { icon: "Clock", value: "24h", label: "Atendimento Online" },
  ],
  contact: {
    address: "Av. Principal, 1234 - Centro",
    addressLine2: "Itapoá, SC - CEP 89249-000",
    phone: "(47) 3443-0000",
    email: "contato@inovace.com.br",
    hours: {
      weekdays: "Segunda a Sexta: 8h às 18h",
      saturday: "Sábado: 9h às 13h",
      online: "Chat Online: 24 horas",
    },
  },
  socialLinks: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  copyright: "© 2025 Inovace Construtora. Todos os direitos reservados.",
};
