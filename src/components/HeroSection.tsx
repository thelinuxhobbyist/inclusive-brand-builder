import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium text-primary border-primary/20 bg-primary/10 mb-8 animate-fade-in">
            <Globe className="mr-2 h-4 w-4" />
            Connecting Multicultural Britain
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Modern Britain speaks more than English —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              and so should your business.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in">
            Language is more than words — it's identity, trust, and connection.
          </p>
          <p className="text-lg md:text-xl text-foreground/70 mb-12 animate-fade-in">
            We help you speak to every corner of Britain with design that reflects its diversity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button variant="hero" size="lg" asChild>
              <Link to="#services">
                🎯 See How We Can Help
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="#contact">
                📬 Book a Free Discovery Call
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">300+</div>
              <div className="text-sm text-foreground/70">Languages spoken in Britain</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary">Multicultural</div>
              <div className="text-sm text-foreground/70">Audience ready</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent">Inclusive</div>
              <div className="text-sm text-foreground/70">Design approach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;