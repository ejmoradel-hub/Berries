import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="About Us | Chinook Breeze Berries" 
        description="Meet Jesse and Sarah Bydevaate, the family behind Chinook Breeze Berries."
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-center">
          Our Story
        </h1>
        
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/images/cover.jpg" 
            alt="Aerial view of the Chinook Breeze Berries orchard and surrounding prairie landscape" 
            className="w-full h-[450px] object-cover object-center"
          />
        </div>

        <div className="prose prose-lg prose-stone dark:prose-invert mx-auto">
          <p className="lead text-xl text-foreground/90 font-medium">
            Hello! We are Jesse and Sarah Bydevaate, the new owners of Chinook Breeze Berries. We're so glad you've found your way to our patch of the prairie.
          </p>
          
          <h2 className="text-2xl font-serif font-bold text-primary mt-10 mb-4">Deep Roots on the Prairie</h2>
          <p>
            Farming isn't just what we do; it's who we are. Our connection to agriculture and land stewardship runs deep. When the opportunity arose to take over this beautiful Saskatoon berry farm near Crossfield, we knew it was exactly where we were meant to be. 
          </p>
          <p>
            The western Canadian prairie has a unique beauty—vast, resilient, and deeply rewarding. We believe in working with the land, respecting the natural rhythms of the seasons, and preserving this environment for generations to come.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-10 mb-4">A Place for Family</h2>
          <p>
            As a family ourselves, we know how important it is to have places where you can unplug, connect with nature, and spend quality time together. That's exactly what we want Chinook Breeze Berries to be for you.
          </p>
          <p>
            Whether you're a grandparent teaching the grandkids how to find the ripest clusters, or a couple enjoying a quiet afternoon under the big sky, we've designed our farm to be welcoming, safe, and wholesome.
          </p>

          <h2 className="text-2xl font-serif font-bold text-primary mt-10 mb-4">Sharing the Harvest</h2>
          <p>
            There's a special kind of magic in picking your own food. Saskatoon berries are a true western Canadian treasure—tart, sweet, and perfect for pies, jams, or just eating straight from the bucket. 
          </p>
          <p>
            We take pride in keeping our orchards well-maintained so your picking experience is as enjoyable as the berries themselves. We can't wait to welcome you to our farm, share a friendly chat, and see the purple-stained smiles of a successful harvest.
          </p>
        </div>

        {/* Jesse Realtor Callout */}
        <div className="mt-16 bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row items-stretch">
          <div className="flex-shrink-0 bg-[#1a1a2e] md:w-56 flex flex-col items-center justify-center p-8 gap-3">
            <div className="text-center">
              <p className="text-white/60 text-xs tracking-widest uppercase mb-1">Jesse Real Estate</p>
              <p className="text-white font-serif font-bold text-2xl tracking-tight leading-tight">Bydevaate</p>
            </div>
            <p className="text-white/50 text-xs tracking-widest uppercase text-center">RE/MAX First</p>
          </div>
          <div className="flex flex-col justify-center px-8 py-8 gap-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Jesse is also an Alberta Realtor
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When Jesse isn't out in the berry rows, he helps Albertans find and sell the land they love — from acreages and rural properties to homes in the Calgary area. If you're looking to buy, sell, or simply explore what's out there, Jesse brings the same care and honesty to real estate that he does to farming.
              </p>
            </div>
            <a
              href="https://realtorjesseb.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group w-fit"
            >
              Visit Jesse's Real Estate Website
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-10 text-center bg-secondary/10 p-8 rounded-2xl">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Come See For Yourself</h3>
          <p className="text-muted-foreground mb-6">
            We'd love to host you this summer. Check out our picking details or plan your route to the farm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/u-pick">U-Pick Info</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/visit">Directions</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}