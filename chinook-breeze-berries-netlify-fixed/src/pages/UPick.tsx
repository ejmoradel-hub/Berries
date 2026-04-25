import { SEO } from "@/components/SEO";
import { PickingStatusCard } from "@/components/PickingStatusCard";
import { Info, Sun, CheckSquare, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UPick() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="U-Pick Saskatoon Berries | Chinook Breeze Berries" 
        description="Everything you need to know about picking Saskatoon berries at our farm. Pricing, what to bring, and picking tips."
      />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            The U-Pick Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the simple joy of the summer harvest. Saskatoon berry season typically begins in late July, weather dependent.
          </p>
        </div>

        <div className="mb-16">
          <PickingStatusCard />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Check the Status</h3>
                  <p className="text-muted-foreground">Always check our current picking status before heading out. Berry ripening is highly weather dependent.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Check In</h3>
                  <p className="text-muted-foreground">When you arrive, stop by the main stand. We'll weigh your empty containers or provide you with picking buckets.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Head to the Field</h3>
                  <p className="text-muted-foreground">We'll direct you to the rows with the best picking for the day. Take your time and enjoy the sunshine.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Weigh & Pay</h3>
                  <p className="text-muted-foreground">Bring your full containers back to the stand. We weigh your berries and you're ready to head home!</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full">
              <img 
                src="/images/berries-bucket.jpg" 
                alt="Fresh Saskatoon berries in a picking bucket" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>

        <div className="bg-secondary/5 rounded-3xl p-8 md:p-12 mb-16 border border-border">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">What to Bring</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-card border-none shadow-sm">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="font-medium mb-2">Containers</h3>
                <p className="text-sm text-muted-foreground">Bring your own clean pails or ice cream buckets. (We have some available if you forget!)</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-none shadow-sm">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="font-medium mb-2">Sun Protection</h3>
                <p className="text-sm text-muted-foreground">The prairie sun is hot. Hats, sunscreen, and light long sleeves are highly recommended.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-none shadow-sm">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="font-medium mb-2">Water</h3>
                <p className="text-sm text-muted-foreground">Stay hydrated while picking. Bring a reusable water bottle for everyone in your group.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-none shadow-sm">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mb-4">
                  <Info className="w-6 h-6" />
                </div>
                <h3 className="font-medium mb-2">Proper Footwear</h3>
                <p className="text-sm text-muted-foreground">The ground can be uneven. Closed-toe walking shoes or boots are required for safety.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-8">Pricing</h2>
          <Card className="bg-card border-border shadow-sm">
            <CardContent className="p-0">
              <div className="flex justify-between items-center p-6 border-b border-border">
                <span className="text-lg font-medium">U-Pick Saskatoon Berries</span>
                <span className="text-xl font-bold text-primary">$X.XX / lb <span className="text-sm font-normal text-muted-foreground block text-right">(Placeholder)</span></span>
              </div>
              <div className="flex justify-between items-center p-6 border-b border-border bg-muted/20">
                <span className="text-lg font-medium">Pre-Picked Berries <span className="text-sm font-normal text-muted-foreground block">(Call ahead to order)</span></span>
                <span className="text-xl font-bold text-primary">$XX.XX / bucket <span className="text-sm font-normal text-muted-foreground block text-right">(Placeholder)</span></span>
              </div>
              <div className="p-6 text-center text-sm text-muted-foreground">
                We accept Cash, Debit, and Credit. <br/>Prices are subject to change.
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}