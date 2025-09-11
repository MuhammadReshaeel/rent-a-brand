import { Heart, Star, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  title: string;
  vendor: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerDay: number;
  pricePerWeek?: number;
  image: string;
  isAvailable: boolean;
  tags: string[];
  className?: string;
}

const ProductCard = ({
  id,
  title,
  vendor,
  location,
  rating,
  reviews,
  pricePerDay,
  pricePerWeek,
  image,
  isAvailable,
  tags,
  className,
}: ProductCardProps) => {
  return (
    <div className={cn(
      "group bg-gradient-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/50",
      className
    )}>
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Elements */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="flex gap-2">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/90 text-primary text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <button className="p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-200 hover:scale-110">
            <Heart className="h-4 w-4 text-muted-foreground hover:text-destructive transition-colors" />
          </button>
        </div>

        {/* Availability Status */}
        <div className="absolute bottom-4 left-4">
          <Badge 
            variant={isAvailable ? "default" : "destructive"}
            className={cn(
              "bg-white/90 text-primary",
              isAvailable ? "bg-accent/90 text-white" : "bg-destructive/90 text-white"
            )}
          >
            {isAvailable ? "Available" : "Booked"}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">{vendor}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="font-medium">{rating}</span>
              <span>({reviews})</span>
            </div>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-primary">₨{pricePerDay.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground">/day</span>
          </div>
          
          {pricePerWeek && (
            <div className="text-sm text-accent font-medium">
              ₨{pricePerWeek.toLocaleString()}/week (Save 15%)
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-primary/20 hover:border-primary hover:bg-primary/5"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Quick View
          </Button>
          
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-200"
            disabled={!isAvailable}
          >
            {isAvailable ? "Rent Now" : "Unavailable"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;