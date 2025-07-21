import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram, Twitter, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:info@enfoldedmedia.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@enfoldedmedia.com",
      link: "mailto:info@enfoldedmedia.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "07836 319 635",
      link: "tel:07836319635"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@enfoldedteam",
      link: "https://instagram.com/enfoldedteam"
    },
    {
      icon: Twitter,
      title: "X (Twitter)",
      value: "@enfoldedteam",
      link: "https://x.com/enfoldedteam"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to connect with your multicultural audience? Let's discuss how we can help your business speak to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-brand">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project and how we can help..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-brand">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <div className="text-sm text-foreground/80">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-brand">
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://enfoldedmedia.com" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Visit enfoldedmedia.com
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/packages">
                    <Clock className="mr-2 h-4 w-4" />
                    View Our Packages
                  </Link>
                </Button>
                
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2 text-accent">WhatsApp QR Code</h4>
                  <p className="text-sm text-foreground/80 mb-3">
                    Scan to chat on WhatsApp
                  </p>
                  <div className="w-32 h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;