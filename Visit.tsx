import { SEO } from "@/components/SEO";
import { MapPin, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Visit() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Plan Your Visit | Chinook Breeze Berries" 
        description="Directions, hours, and visitor guidelines for our U-pick Saskatoon berry farm near Crossfield, Alberta."
      />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Plan Your Visit
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are located near Crossfield, northwest of Calgary, with approximately 10 acres of Saskatoon berries available for U-pick.
          </p>
        </div>

        <div className="mb-14 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/orchard-rows.jpg"
            alt="Rows of Saskatoon berry bushes stretching across the orchard at Chinook Breeze Berries"
            className="w-full h-[320px] object-cover object-center"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Info Cards - Takes up 1 column */}
          <div className="space-y-6">
            <Card className="bg-card shadow-sm border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Location</h3>
                    <p className="text-muted-foreground mb-2">
                      29250 Range Rd 34<br />
                      Crossfield, AB<br />
                      T0M 0S0
                    </p>
                    <a
                      href="https://maps.google.com/?q=29250+Range+Rd+34,+Crossfield,+AB+T0M+0S0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Get directions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Typical Season Hours</h3>
                    <p className="text-sm text-foreground/80 mb-2">During the picking season (late July):</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex justify-between"><span>Monday - Friday:</span> <span>8:00 AM - 8:00 PM</span></li>
                      <li className="flex justify-between"><span>Saturday - Sunday:</span> <span>9:00 AM - 5:00 PM</span></li>
                    </ul>
                    <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-400 text-sm rounded-md border border-amber-200 dark:border-amber-800/50">
                      <AlertCircle className="w-4 h-4 inline mr-1 -mt-0.5" />
                      Always check current status before visiting. Weather may affect access.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map - Takes up 2 columns */}
          <div className="lg:col-span-2 h-[400px] lg:h-auto min-h-[400px] rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=29250+Range+Rd+34,+Crossfield,+AB+T0M+0S0&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chinook Breeze Berries location map"
            />
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-secondary/5 rounded-3xl p-8 md:p-12 border border-border">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-10">Farm Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-3 text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                Children Welcome
              </h3>
              <p className="text-muted-foreground pl-4">
                We love having families visit! We ask that children must be supervised by an adult at all times for their safety and the health of our plants.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3 text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                Respect Marked Areas
              </h3>
              <p className="text-muted-foreground pl-4">
                Please stay within designated picking areas and respect "Closed" signs. This ensures everyone gets good berries and young bushes aren't damaged.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                Facilities
              </h3>
              <p className="text-muted-foreground pl-4">
                Washroom facilities are available on site for your convenience. (Details TBD)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                Pets Policy
              </h3>
              <p className="text-muted-foreground pl-4">
                Please check with us regarding our pet policy before bringing your furry friends to the farm. (Policy TBD)
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}