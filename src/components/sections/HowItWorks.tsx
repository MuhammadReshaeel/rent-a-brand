import { Search, Calendar, CreditCard, Camera } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Your Gear",
      description: "Browse thousands of cameras, lenses, and equipment from verified vendors across Pakistan.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Calendar,
      title: "Book Instantly",
      description: "Select your rental dates, choose pickup or delivery, and confirm your booking in seconds.",
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay safely with our secure payment system. Full insurance coverage for your peace of mind.",
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      icon: Camera,
      title: "Create Magic",
      description: "Get your equipment and start creating amazing content. Return when you're done - it's that simple!",
      color: "text-success",
      bg: "bg-success/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm">
            How It Works
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">
            Rent Equipment in
            <span className="block text-secondary">4 Simple Steps</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From browsing to creating, we've made equipment rental simple, secure, and seamless. 
            Get professional gear in your hands faster than ever.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-border to-transparent transform translate-x-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
              )}

              {/* Step Content */}
              <div className="relative z-10 space-y-6">
                {/* Step Number & Icon */}
                <div className="relative inline-flex items-center justify-center">
                  <div className={`w-20 h-20 ${step.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <step.icon className={`h-10 w-10 ${step.color}`} />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-card rounded-2xl p-8 border border-white/50 shadow-md animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary font-display">5 Minutes</div>
              <div className="text-sm text-muted-foreground font-medium">Average Booking Time</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary font-display">₨500</div>
              <div className="text-sm text-muted-foreground font-medium">Minimum Security Deposit</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent font-display">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;