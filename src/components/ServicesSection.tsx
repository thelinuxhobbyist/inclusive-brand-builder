import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Globe, Megaphone, Languages, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Logos, colour palettes, typography & brand guidelines",
      features: [
        "Cultural awareness in design",
        "Inclusive color symbolism",
        "Typography for multiple languages",
        "Brand guidelines that scale"
      ],
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Online Presence",
      description: "Web design, social media visuals, UX/UI & SEO",
      features: [
        "Multilingual UI/UX design",
        "Translation-ready infrastructure",
        "Cultural user experience",
        "SEO for multiple languages"
      ],
      color: "text-accent"
    },
    {
      icon: Megaphone,
      title: "Promotional Design",
      description: "Posters, flyers, menus, business cards & packaging",
      features: [
        "Culturally relevant campaigns",
        "Print design excellence",
        "Digital marketing materials",
        "Packaging that resonates"
      ],
      color: "text-secondary"
    },
    {
      icon: Languages,
      title: "Multilingual Media",
      description: "Translation, bilingual design & culturally adapted campaigns",
      features: [
        "Professional translation",
        "Cultural adaptation",
        "Bilingual design layouts",
        "Community engagement"
      ],
      color: "text-primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            In Britain today, more than 300 languages are spoken. Your audience is already multicultural — is your brand?
          </p>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We help businesses design websites, brands, and campaigns that go beyond translation. 
            We build experiences that resonate with your audience's language and culture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-brand hover:shadow-brand-hover transition-all duration-300 group hover:-translate-y-2 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-primary shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to make your brand truly inclusive?
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            We turn your message into something people can feel, not just read.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/packages">
                View Our Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="#contact">
                📬 Book a Free Discovery Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;