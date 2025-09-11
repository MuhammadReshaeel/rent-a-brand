import { Store, TrendingUp, Shield, Palette, BarChart3, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const VendorBenefits = () => {
  const benefits = [
    {
      icon: Store,
      title: "Your Own Storefront",
      description: "Get a fully branded rental platform with your logo, colors, and business identity.",
      gradient: "from-primary to-accent"
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Maximize your equipment utilization and generate passive income from idle gear.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Built-in insurance, deposit management, and secure payment processing.",
      gradient: "from-accent to-secondary"
    },
    {
      icon: Palette,
      title: "Full Customization",
      description: "White-label solution that matches your brand perfectly. Your business, your way.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track your rental performance, revenue, and customer insights with detailed reports.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support team to help you grow your rental business successfully.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm">
            <Store className="h-4 w-4 mr-2" />
            For Vendors & Businesses
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">
            Turn Your Equipment Into
            <span className="block text-secondary">
              Passive Income
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join Pakistan's leading rental marketplace platform. Get your own white-labeled storefront 
            and start earning from your camera gear, equipment, and inventory today.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-gradient-card rounded-2xl p-8 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white shadow-elegant animate-slide-up">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-5xl font-display font-bold">
              Ready to Start Your Rental Business?
            </h3>
            
            <p className="text-xl text-white/90 font-light leading-relaxed">
              Join over 150+ successful vendors across Pakistan. Set up your branded rental platform in minutes 
              and start earning from your equipment today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-hover text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold"
              >
                Start Free Trial
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 shadow-lg transition-all duration-200 hover:scale-105 font-medium"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 pt-6 text-sm text-white/80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                No Setup Fees
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                30-Day Free Trial
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorBenefits;