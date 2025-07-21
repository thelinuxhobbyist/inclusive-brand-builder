import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Star, Calendar, Users, Clock, FileText, Globe, Megaphone } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Details = () => {
  const { packageId } = useParams();
  const { toast } = useToast();

  const packageDetails = {
    starter: {
      name: "Starter Package",
      description: "Perfect for small businesses getting started with multilingual design",
      price: "£299",
      originalPrice: "£399",
      savings: "£100",
      icon: FileText,
      timeline: "5-7 business days",
      revisions: "3 included",
      languages: "2 languages",
      overview: "Our Starter Package is designed for small businesses taking their first steps into multicultural marketing. We'll create a professional flyer and basic webpage that speaks to your diverse audience with cultural sensitivity and linguistic accuracy.",
      features: [
        "1-page flyer design with cultural adaptation",
        "Basic single-page responsive website",
        "Logo optimization for multilingual use",
        "2 language versions (English + 1 other)",
        "Basic cultural color and imagery consultation",
        "Print-ready files (PDF, PNG, JPEG)",
        "Web-ready files (PNG, WebP)",
        "3 rounds of revisions",
        "Basic SEO setup",
        "Mobile-responsive design"
      ],
      process: [
        "Initial consultation (30 minutes)",
        "Cultural research and planning",
        "Design concept creation",
        "Client review and feedback",
        "Revisions and refinements",
        "Final delivery with all assets"
      ],
      ideal: [
        "Small businesses or startups",
        "Local community organizations",
        "Service providers targeting specific communities",
        "Businesses with limited marketing budget",
        "Those new to multicultural marketing"
      ]
    },
    professional: {
      name: "Professional Package",
      description: "Comprehensive solution for established businesses",
      price: "£799",
      originalPrice: "£999",
      savings: "£200",
      icon: Globe,
      timeline: "2-3 weeks",
      revisions: "5 included",
      languages: "4 languages",
      overview: "Our Professional Package provides a complete digital presence transformation. Perfect for established businesses ready to seriously engage with Britain's multicultural market through professional, culturally-aware design.",
      features: [
        "Multi-page website (up to 5 pages)",
        "Complete brand identity package",
        "Marketing materials suite (flyers, brochures, business cards)",
        "4 language versions included",
        "Advanced cultural adaptation and research",
        "Professional SEO optimization",
        "Social media template pack (10 templates)",
        "Mobile app UI guidelines",
        "Email signature designs",
        "5 rounds of revisions",
        "Priority support",
        "Basic analytics setup"
      ],
      process: [
        "Comprehensive consultation (1 hour)",
        "Cultural research and audience analysis",
        "Brand strategy development",
        "Website architecture planning",
        "Design and development phase",
        "Content creation and optimization",
        "Testing across devices and languages",
        "Training and handover session"
      ],
      ideal: [
        "Established businesses expanding reach",
        "Companies with diverse customer base",
        "Professional services firms",
        "Retail businesses",
        "Organizations serious about inclusion"
      ]
    },
    enterprise: {
      name: "Enterprise Package",
      description: "Complete multicultural transformation for large organizations",
      price: "£1,999",
      originalPrice: "£2,499",
      savings: "£500",
      icon: Users,
      timeline: "6-8 weeks",
      revisions: "Unlimited",
      languages: "8+ languages",
      overview: "Our Enterprise Package offers a complete multicultural transformation for large organizations. This comprehensive solution includes deep cultural research, extensive multilingual content, and a complete digital ecosystem designed for maximum inclusivity and engagement.",
      features: [
        "Complete website redesign (unlimited pages)",
        "Full rebrand for multicultural market",
        "Comprehensive marketing campaign materials",
        "8+ language versions with cultural adaptation",
        "Deep cultural research and community insights",
        "Advanced SEO and analytics implementation",
        "Staff training materials and workshops",
        "Community engagement strategy",
        "Social media management templates",
        "Email marketing campaign templates",
        "Unlimited revisions during project",
        "Dedicated project manager",
        "12 months of ongoing support",
        "Quarterly strategy reviews"
      ],
      process: [
        "Strategic planning workshop (full day)",
        "Comprehensive cultural research phase",
        "Stakeholder interviews and analysis",
        "Brand strategy and positioning",
        "Complete design system creation",
        "Website development and optimization",
        "Content creation across all languages",
        "Staff training and onboarding",
        "Launch campaign planning",
        "Post-launch support and optimization"
      ],
      ideal: [
        "Large corporations and institutions",
        "Government organizations",
        "Healthcare systems",
        "Educational institutions",
        "Major retail chains",
        "Organizations serving diverse populations"
      ]
    },
    custom: {
      name: "Custom Solution",
      description: "Tailored specifically to your unique requirements",
      price: "From £500",
      originalPrice: null,
      savings: null,
      icon: Megaphone,
      timeline: "Varies based on scope",
      revisions: "Unlimited within scope",
      languages: "As needed",
      overview: "Every business is unique, and sometimes you need a solution that's tailored specifically to your requirements. Our Custom Solution allows you to pick and choose exactly what you need, creating a package that fits your budget and goals perfectly.",
      features: [
        "Completely customized project scope",
        "Choose your specific deliverables",
        "Flexible language requirements",
        "Tailored cultural adaptation approach",
        "Custom timeline to fit your schedule",
        "Bespoke pricing structure",
        "Personal consultation and planning",
        "Unlimited revisions within agreed scope",
        "Flexible payment terms",
        "Modular approach for future additions"
      ],
      process: [
        "Initial consultation to understand needs",
        "Custom proposal and quote creation",
        "Scope agreement and timeline planning",
        "Tailored project execution",
        "Regular check-ins and adjustments",
        "Delivery according to custom timeline"
      ],
      ideal: [
        "Businesses with specific requirements",
        "Organizations with unique constraints",
        "Projects requiring specialized expertise",
        "Businesses wanting to start small and scale",
        "Those needing ongoing partnership"
      ]
    }
  };

  const currentPackage = packageId ? packageDetails[packageId as keyof typeof packageDetails] : null;

  if (!currentPackage) {
    return <Navigate to="/packages" replace />;
  }

  const handleBuyNow = () => {
    const subject = encodeURIComponent(`Interest in ${currentPackage.name}`);
    const body = encodeURIComponent(
      `Hi Enfolded Media,\n\nI'm interested in purchasing the ${currentPackage.name} (${currentPackage.price}).\n\nPlease provide me with:\n- Payment options\n- Next steps to get started\n- Estimated start date\n\nBusiness details:\nBusiness Name: [Please fill]\nContact Person: [Please fill]\nPhone: [Please fill]\nCurrent website (if any): [Please fill]\nTarget languages: [Please fill]\n\nBrief project description:\n[Please describe your business and what you hope to achieve]\n\nThank you!`
    );
    const mailtoLink = `mailto:info@enfoldedmedia.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your email client will open with a pre-filled message to get started.",
    });
  };

  const IconComponent = currentPackage.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Back Navigation */}
        <div className="border-b bg-muted/30">
          <div className="container px-4 py-4">
            <Button variant="ghost" asChild>
              <Link to="/packages">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Packages
              </Link>
            </Button>
          </div>
        </div>

        {/* Package Header */}
        <section className="py-12 bg-gradient-to-br from-background via-background to-accent/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start space-x-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {currentPackage.name}
                  </h1>
                  <p className="text-xl text-foreground/80 mb-6">
                    {currentPackage.description}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-foreground/70">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{currentPackage.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{currentPackage.languages}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>{currentPackage.revisions}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <Card className="border-2 border-primary/20 shadow-brand">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-baseline space-x-3 mb-2">
                        <span className="text-4xl font-bold text-primary">
                          {currentPackage.price}
                        </span>
                        {currentPackage.originalPrice && (
                          <>
                            <span className="text-xl text-foreground/50 line-through">
                              {currentPackage.originalPrice}
                            </span>
                            <Badge variant="secondary">
                              Save {currentPackage.savings}
                            </Badge>
                          </>
                        )}
                      </div>
                      <p className="text-foreground/70">
                        Complete package • All files included • {currentPackage.revisions}
                      </p>
                    </div>
                    <div className="w-full md:w-auto">
                      <Button 
                        variant="hero" 
                        size="lg" 
                        onClick={handleBuyNow}
                        className="w-full md:w-auto"
                      >
                        💳 Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Package Details */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Overview */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Package Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 leading-relaxed">
                        {currentPackage.overview}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Features */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {currentPackage.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Process */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Our Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentPackage.process.map((step, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <div>
                              <p className="text-foreground/80">{step}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Package Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Timeline:</span>
                        <span className="font-medium">{currentPackage.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Languages:</span>
                        <span className="font-medium">{currentPackage.languages}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Revisions:</span>
                        <span className="font-medium">{currentPackage.revisions}</span>
                      </div>
                      <div className="pt-4 border-t">
                        <Button 
                          variant="hero" 
                          className="w-full" 
                          onClick={handleBuyNow}
                        >
                          💳 Buy This Package
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Ideal For */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Ideal For</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {currentPackage.ideal.map((item, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Contact */}
                  <Card className="bg-accent/10">
                    <CardHeader>
                      <CardTitle>Have Questions?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-foreground/80">
                        Not sure if this package is right for you? We're here to help!
                      </p>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link to="/#contact">
                            <Calendar className="mr-2 h-4 w-4" />
                            Book Free Consultation
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href="mailto:info@enfoldedmedia.com">
                            <Star className="mr-2 h-4 w-4" />
                            Email Us
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Details;