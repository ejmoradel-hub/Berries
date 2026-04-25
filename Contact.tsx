import { SEO } from "@/components/SEO";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Contact Us | Chinook Breeze Berries" 
        description="Get in touch with Jesse and Sarah at Chinook Breeze Berries. Questions about U-pick, pre-orders, or farm location."
      />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question about our season, want to place a pre-order, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Contact Information</h2>
            
            <Card className="bg-card border-none shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone</h3>
                  <a href="tel:4036510284" className="text-muted-foreground hover:text-primary transition-colors">
                    403-651-0284
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <a href="mailto:info@chinookbreezeberries.ca" className="text-muted-foreground hover:text-primary transition-colors">
                    info@chinookbreezeberries.ca
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">(Placeholder)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    29250 Range Rd 34<br />
                    Crossfield, AB T0M 0S0
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <Instagram className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Instagram</h3>
                  <a
                    href="https://www.instagram.com/jesse_bydevaate_realtor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @jesse_bydevaate_realtor
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Follow for farm and real estate updates</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="bg-card border-border shadow-lg h-full">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required className="bg-background" />
                    </div>
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required className="bg-background" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required className="bg-background" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" required className="bg-background" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      required 
                      className="min-h-[150px] bg-background resize-y" 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto px-8" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}