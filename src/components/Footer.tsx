import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/c4ea7675-e7f1-4a09-a335-9b1fd5271613.png" 
              alt="Enfolded Media" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-secondary-foreground/90 mb-4 max-w-md">
              We help businesses speak to every corner of Britain with design that reflects its diversity.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-secondary-foreground/20" asChild>
                <a href="https://instagram.com/enfoldedteam" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-secondary-foreground/20" asChild>
                <a href="https://x.com/enfoldedteam" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">X (Twitter)</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-secondary-foreground/20" asChild>
                <a href="mailto:info@enfoldedmedia.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-secondary-foreground/20" asChild>
                <a href="tel:07836319635">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Home</Link></li>
              <li><Link to="/packages" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Packages</Link></li>
              <li><Link to="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Services</Link></li>
              <li><Link to="#contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-secondary-foreground/80">
                <a href="mailto:info@enfoldedmedia.com" className="hover:text-secondary-foreground transition-colors">
                  info@enfoldedmedia.com
                </a>
              </li>
              <li className="text-secondary-foreground/80">
                <a href="tel:07836319635" className="hover:text-secondary-foreground transition-colors">
                  07836 319 635
                </a>
              </li>
              <li className="text-secondary-foreground/80">
                <a href="https://enfoldedmedia.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition-colors">
                  enfoldedmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xl font-bold mb-1">Multilingual. Impactful. Designed for your Audience.</p>
              <p className="text-secondary-foreground/80">© 2025 Enfolded Media. All rights reserved.</p>
            </div>
            <div className="text-secondary-foreground/80">
              <p className="text-lg font-bold text-red-400">Multilingual. Impactful. Designed for your Audience.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;