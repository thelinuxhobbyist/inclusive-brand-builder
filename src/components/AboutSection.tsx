import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Design Listens First",
      description: "We believe that good design listens first. Every project starts with understanding your audience's cultural context."
    },
    {
      icon: Users,
      title: "Cultural Diversity",
      description: "Our team reflects the cultural diversity of the audiences we serve — and we bring that insight into every project."
    },
    {
      icon: Target,
      title: "Language-First Strategy",
      description: "We go beyond Google Translate with consultation and content planning that truly resonates."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "We help businesses connect authentically with multicultural audiences across Britain."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                This initiative is brought to you by{" "}
                <span className="font-semibold text-primary">Enfolded Media</span>{" "}
                — a creative studio helping businesses speak with their audience, not at them.
              </p>
              <p>
                We serve the diverse tapestry of Britain's multicultural landscape, 
                creating beautiful design that connects across cultures and languages.
              </p>
              <p>
                Our approach combines cultural sensitivity with design excellence, 
                ensuring your brand resonates authentically with every community you serve.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="#contact">
                  ✨ Let's make your brand truly inclusive
                </Link>
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-primary p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <Users className="h-20 w-20 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">
                  We serve the diverse tapestry of Britain's multicultural landscape
                </h3>
                <p className="text-white/90">
                  Beautifully designed, culturally sensitive, and linguistically inclusive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Values & Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-brand hover:shadow-brand-hover transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 w-fit">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-foreground/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Connect With a Multilingual Britain?
            </h3>
            <p className="text-lg text-foreground/80 mb-8">
              Let's create something beautiful that speaks to everyone in your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="#contact">
                  📬 Book a Free Discovery Call
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://enfoldedmedia.com" target="_blank" rel="noopener noreferrer">
                  🖥 Visit enfoldedmedia.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;