import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Maximize, Car } from "lucide-react";

interface PropertyCardProps {
  name: string;
  price: string;
  image: string;
  location: string;
  beds: string;
  area: string;
  parking: string;
  status?: string;
  onLearnMore?: () => void;
}

export const PropertyCard = ({
  name,
  price,
  image,
  location,
  beds,
  area,
  parking,
  status,
  onLearnMore,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift border-border bg-card">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {status && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-accent">
            {status}
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">{name}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{beds}</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{area}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{parking}</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-primary">{price}</div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={onLearnMore}
          className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
        >
          Saiba Mais
        </Button>
      </CardFooter>
    </Card>
  );
};
