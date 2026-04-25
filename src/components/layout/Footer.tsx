import { Link } from "wouter";
import { Facebook, Instagram, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Chinook Breeze Berries</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              A family-run U-pick Saskatoon berry farm near Crossfield, Alberta. 
              Experience the prairie harvest with us.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/u-pick" className="hover:text-primary transition-colors">U-Pick Info</Link></li>
              <li><Link href="/visit" className="hover:text-primary transition-colors">Plan Your Visit</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">Connect</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Follow us for picking updates, season announcements, and farm life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/jesse_bydevaate_realtor/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">Jesse Bydevaate, Realtor</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Looking for Alberta acreage or rural property? Jesse also works as a licensed realtor with RE/MAX First.
            </p>
            <a
              href="https://realtorjesseb.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              realtorjesseb.ca
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Chinook Breeze Berries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}