import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, FileText, Globe, Megaphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Packages = () => {
  const packages = [
    {
      id: "starter",
      name: "Starter Package",
      description: "Perfect for small businesses getting started with multilingual design",
      price: "£299",
      originalPrice: "£399",
      popular: false,
      icon: FileText,
      features: [
        "1-page flyer design",
        "Basic webpage (single page)",
        "Logo optimization for multilingual use",
        "2 language versions included",
        "Basic cultural adaptation",
        "Print-ready files",
        "3 revisions included"
      ],
      deliverables: [
        "High-resolution flyer (PDF & PNG)",
        "Responsive single-page website",
        "Logo files in multiple formats",
        "Basic brand guidelines"
      ]
    },
    {
      id: "professional",
      name: "Professional Package",
      description: "Comprehensive solution for established businesses",
      price: "£799",
      originalPrice: "£999",
      popular: true,
      icon: Globe,
      features: [
        "Multi-page website (up to 5 pages)",
        "Complete brand identity package",
        "Marketing materials suite",
        "4 language versions included",
        "Advanced cultural adaptation",
        "SEO optimization",
        "Social media templates",
        "Mobile app UI guidelines",
        "5 revisions included",
        "Priority support"
      ],
      deliverables: [
        "Fully responsive website",
        "Complete brand guidelines",
        "Marketing materials pack",
        "Social media templates",
        "Mobile optimization"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise Package",
      description: "Complete multicultural transformation for large organizations",
      price: "£1,999",
      originalPrice: "£2,499",
      popular: false,
      icon: Users,
      features: [
        "Complete website redesign (unlimited pages)",
        "Full rebrand for multicultural market",
        "Comprehensive marketing campaign",
        "8+ language versions",
        "Deep cultural research & insights",
        "Advanced SEO & analytics",
        "Staff training materials",
        "Community engagement strategy",
        "Unlimited revisions",
        "Dedicated project manager",
        "12 months support"
      ],
      deliverables: [
        "Enterprise-grade website",
        "Complete brand transformation",
        "Marketing campaign materials",
        "Staff training resources",
        "Cultural insights report",
        "Ongoing support package"
      ]
    },
    {
      id: "custom",
      name: "Custom Solution",
      description: "Tailored specifically to your unique requirements",
      price: "From £500",
      originalPrice: null,
      popular: false,
      icon: Megaphone,
      features: [
        "Completely customized scope",
        "Choose your specific deliverables",
        "Flexible language requirements",
        "Tailored cultural adaptation",
        "Custom timeline",
        "Bespoke pricing",
        "Personal consultation",
        "Unlimited revisions (within scope)"
      ],
      deliverables: [
        "Defined during consultation",
        "Based on your specific needs",
        "Flexible scope and timeline"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
          <div className="container px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 text-sm font-medium px-4 py-2">
                Choose Your Package
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Design Packages for Every{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary">
                  Business Size
                </span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                From single flyers to complete brand transformations, we have a package that fits your needs and budget.
              </p>
              <p className="text-lg text-foreground/70">
                All packages include our signature multicultural approach and cultural sensitivity.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`relative border-2 shadow-brand hover:shadow-brand-hover transition-all duration-300 ${
                    pkg.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <pkg.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{pkg.name}</CardTitle>
                          <CardDescription className="mt-1">
                            {pkg.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-baseline space-x-2 mt-4">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-foreground/50 line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold mb-3">You'll Receive:</h4>
                      <ul className="space-y-1">
                        {pkg.deliverables.map((deliverable, index) => (
                          <li key={index} className="text-sm text-foreground/80">
                            • {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      variant={pkg.popular ? "hero" : "default"} 
                      className="w-full" 
                      asChild
                    >
                      <Link to={`/details/${pkg.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Information */}
            <div className="text-center mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Not sure which package is right for you?
              </h3>
              <p className="text-lg text-foreground/80 mb-8">
                Every business is unique. Let's discuss your specific needs and find the perfect solution for your multicultural audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/#contact">
                    📬 Book a Free Discovery Call
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:info@enfoldedmedia.com">
                    ✉️ Email Us Directly
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Packages;