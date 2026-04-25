import { Link } from "wouter";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { PickingStatusCard } from "@/components/PickingStatusCard";
import { useState } from "react";

const galleryImages = [
  { src: "/images/hero-aerial-2.jpg", alt: "Aerial view of the Saskatoon berry orchard" },
  { src: "/images/orchard-rows.jpg", alt: "Rows of Saskatoon berry bushes" },
  { src: "/images/berry-picking.jpg", alt: "Berry bushes ready for picking" },
  { src: "/images/berries-hand.jpg", alt: "Fresh Saskatoon berries in hand" },
  { src: "/images/orchard-wide.jpg", alt: "Wide view of the berry orchard" },
  { src: "/images/farm-field.jpg", alt: "Farm field at Chinook Breeze Berries" },
];

export default function Home() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Prairie-grown Saskatoon berries under a Chinook sky" 
        description="Chinook Breeze Berries is a family-run U-pick Saskatoon berry farm near Crossfield, Alberta."
      />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-aerial.jpg" 
            alt="Aerial view of the Chinook Breeze Berries Saskatoon berry orchard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 text-white drop-shadow-md">
            Prairie-grown Saskatoon berries under a Chinook sky.
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-10 text-white/90 drop-shadow max-w-2xl mx-auto">
            Chinook Breeze Berries is a family-run U-pick Saskatoon berry farm near Crossfield, Alberta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg">
              <a href="#status">Check Picking Status</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm shadow-lg">
              <Link href="/visit">Plan Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section id="status" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Current Farm Status</h2>
            <p className="text-muted-foreground text-lg">Check here before heading out to the farm.</p>
          </div>
          <PickingStatusCard />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/images/orchard-rows.jpg" 
                alt="Rows of Saskatoon berry bushes at Chinook Breeze Berries" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Welcome to our family farm
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                There's nothing quite like the taste of a sun-warmed Saskatoon berry picked fresh from the branch. At Chinook Breeze Berries, we invite you to slow down, breathe in the prairie air, and experience the simple joy of the summer harvest.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Whether you're making a quick trip from Calgary or spending a leisurely afternoon in the country, our fields are open to you.
              </p>
              <Button asChild variant="link" className="px-0 text-primary hover:text-primary/80 text-lg group">
                <Link href="/about">
                  Meet the family <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">The Farm in Photos</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">A glimpse of the orchard, the harvest, and the land we call home.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightboxSrc(img.src)}
                className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 flex items-center justify-center text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close photo"
          >
            &times;
          </button>
          <img
            src={lightboxSrc}
            alt="Farm photo enlarged"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Teasers Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">U-Pick Experience</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Everything you need to know about picking with us. Learn what to bring, how to pick the best berries, and our current pricing for the season.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/u-pick">U-Pick Details</Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Plan Your Visit</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Find our location near Crossfield, check our hours, and review our visitor guidelines to ensure a great time for the whole family.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/visit">Directions & Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}