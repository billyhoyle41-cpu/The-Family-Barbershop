import { Link, useLocation } from "wouter";
import { Scissors, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/booking", label: "Book Appointment" },
    { href: "/contact", label: "Contact & Hours" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Barber Pole Strip */}
      <div className="h-2 w-full bg-barber-pole" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-primary/10 p-2 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Scissors className="h-6 w-6 text-primary rotate-[-45deg]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl leading-none text-secondary tracking-tight font-bold">The Family Barbershop</span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Grosse Pointe Woods</span>
              </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn(
                  "text-sm font-medium transition-colors hover:text-primary uppercase tracking-wide cursor-pointer",
                  location === link.href ? "text-primary font-bold" : "text-muted-foreground"
                )}>
                  {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              <Link href="/booking">
                Book Now
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white absolute w-full shadow-lg slide-in-from-top-2 animate-in fade-in duration-200">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={cn(
                      "text-lg font-medium py-2 border-b border-border/50 block",
                      location === link.href ? "text-primary" : "text-secondary"
                    )}
                    onClick={() => setIsOpen(false)}>
                    {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-primary text-lg h-12" onClick={() => setIsOpen(false)}>
                  <Link href="/booking">
                    Book an Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-primary-foreground pt-16 pb-8 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl mb-6 text-white">The Family Barbershop</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                A Grosse Pointe tradition serving generations with classic cuts, honest prices, and a friendly atmosphere.
              </p>
              <div className="flex items-center gap-2 text-white/90">
                <Phone className="h-4 w-4" />
                <span>(313) 743-5515</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-white/60 mb-6 text-sm">Location</h4>
              <address className="not-italic text-white/90 leading-relaxed">
                19865 Mack Ave<br />
                Grosse Pointe Woods, MI 48236<br />
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-primary hover:text-white mt-2 inline-block underline underline-offset-4 decoration-primary/50 hover:decoration-white">
                  Get Directions &rarr;
                </a>
              </address>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-white/60 mb-6 text-sm">Hours</h4>
              <ul className="space-y-2 text-white/90">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Fri</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-white/50">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} The Family Barbershop. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-primary rounded-full animate-pulse" />
              <span>Walk-ins always welcome</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
