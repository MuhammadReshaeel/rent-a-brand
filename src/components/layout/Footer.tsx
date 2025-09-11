import { Camera, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "Browse Equipment", href: "/browse" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Pricing", href: "/pricing" },
      { name: "Vendors", href: "/vendors" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Safety", href: "/safety" },
      { name: "Insurance", href: "/insurance" },
      { name: "Terms of Service", href: "/terms" },
    ],
    vendors: [
      { name: "List Your Equipment", href: "/vendor/signup" },
      { name: "Vendor Dashboard", href: "/vendor/dashboard" },
      { name: "White Label Solution", href: "/white-label" },
      { name: "API Documentation", href: "/api-docs" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2.5 rounded-xl bg-gradient-primary transition-all duration-300 group-hover:shadow-glow group-hover:scale-105">
                <Camera className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-primary">
                RentHub
              </span>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm font-light">
              Pakistan's premier camera rental marketplace. Connecting creators with 
              professional equipment from trusted vendors nationwide.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@renthub.pk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+92 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Karachi, Lahore, Islamabad</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Vendors</h3>
            <ul className="space-y-2">
              {footerLinks.vendors.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground font-light">
            © 2024 RentHub. All rights reserved. Made with ❤️ in Pakistan.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;