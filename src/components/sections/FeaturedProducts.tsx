import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import canon5d from "@/assets/canon-5d-mark-iv.jpg";
import sonyA7 from "@/assets/sony-a7-iii.jpg";
import nikonZ6 from "@/assets/nikon-z6-ii.jpg";
import canon70200 from "@/assets/canon-70-200mm.jpg";

const FeaturedProducts = () => {
  // Update mock products with real images
  const productsWithImages = mockProducts.slice(0, 6).map((product, index) => {
    const images = [canon5d, sonyA7, nikonZ6, canon70200, sonyA7, nikonZ6];
    return {
      ...product,
      image: images[index] || images[0]
    };
  });

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
            <Filter className="h-4 w-4 mr-2" />
            Featured Rentals
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Premium Camera Gear
            <span className="block text-primary">Ready to Rent</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover professional photography equipment from Pakistan's most trusted vendors. 
            Quality guaranteed, competitive pricing, and instant availability.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {["All Categories", "DSLR Cameras", "Mirrorless", "Lenses", "Lighting", "Audio"].map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                index === 0 
                  ? "bg-gradient-primary text-white shadow-md" 
                  : "bg-white/80 text-foreground hover:bg-white shadow-sm border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productsWithImages.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            View All Products
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;