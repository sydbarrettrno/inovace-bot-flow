import portoIlha from "@/assets/porto-ilha.jpg";
import oneBeach from "@/assets/one-beach.jpg";
import bellaPietra from "@/assets/bella-pietra.jpg";

export interface Property {
  name: string;
  price: string;
  image: string;
  location: string;
  beds: string;
  area: string;
  parking: string;
  status: string;
}

export const properties: Property[] = [
  {
    name: "Porto da Ilha",
    price: "A partir de R$ 550 mil",
    image: portoIlha,
    location: "Itapoá, SC - Beira-mar",
    beds: "2-3 qts",
    area: "85-125m²",
    parking: "2 vagas",
    status: "Disponível",
  },
  {
    name: "One Beach",
    price: "A partir de R$ 690 mil",
    image: oneBeach,
    location: "Itapoá, SC - Frente ao Mar",
    beds: "3-4 qts",
    area: "110-180m²",
    parking: "2-3 vagas",
    status: "Alto Padrão",
  },
  {
    name: "Bella Pietra",
    price: "Lançamento em breve",
    image: bellaPietra,
    location: "Itapoá, SC - Vista Mar",
    beds: "2-3 qts",
    area: "95-150m²",
    parking: "2 vagas",
    status: "Lançamento",
  },
];
