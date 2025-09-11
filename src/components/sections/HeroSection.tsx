import { useState } from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroCamera from "@/assets/hero-camera.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Rent Premium
                <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Camera Gear
                </span>
                Near You
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Access professional photography equipment from trusted local vendors. 
                Perfect gear for your creative projects, events, and professional shoots.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 space-y-4 shadow-xl border border-white/20">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <Input
                    placeholder="Search cameras, lenses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/60"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <Input
                    placeholder="Karachi, Lahore, Islamabad..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/60"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary-hover text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Find Gear
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Canon 5D", "Sony A7", "Nikon Z6", "Fujifilm X-T4", "24-70mm"].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-105"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2,500+</div>
                <div className="text-white/60 text-sm">Available Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-white/60 text-sm">Trusted Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+ Cities</div>
                <div className="text-white/60 text-sm">Across Pakistan</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <img
                src={heroCamera}
                alt="Professional Camera for Rent"
                className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Available Today</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-secondary/90 backdrop-blur-sm rounded-xl p-4 shadow-lg text-white animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-sm font-medium">From ₨2,500/day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;