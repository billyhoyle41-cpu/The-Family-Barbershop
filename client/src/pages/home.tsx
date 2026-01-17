import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Clock, MapPin, Star, User } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Assets
import heroBg from "@assets/generated_images/vintage_barber_pole_stripes_texture.png";
import brendaImg from "@assets/generated_images/friendly_senior_female_barber_portrait.png";
import storefrontImg from "@assets/Outside_1_1768358296452.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Background Image - Storefront */}
        <div 
          className="absolute inset-0 z-0 scale-105"
          style={{ 
            backgroundImage: `url(${storefrontImg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            filter: 'brightness(0.3) contrast(1.1)'
          }}
        />
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none z-10"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: '400px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-20" />
        
        {/* Content */}
        <div className="container relative z-30 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Badge variant="outline" className="border-primary text-primary bg-primary/10 px-6 py-2 text-xs uppercase font-black tracking-[0.3em] mb-4 rounded-none">
              Grosse Pointe Tradition
            </Badge>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white mb-6 tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
              <span className="font-black">The Family</span><br />
              <span className="text-primary italic font-black">Barbershop.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-bold tracking-wide leading-relaxed mb-10 uppercase drop-shadow-md">
              Experience the neighborhood atmosphere where every haircut comes with a smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-8 rounded-none shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto font-black uppercase tracking-widest">
                <Link href="/booking">
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 text-lg px-12 py-8 backdrop-blur-md w-full sm:w-auto rounded-none font-black uppercase tracking-widest">
                <Link href="/contact">
                  View Location
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white relative z-30 -mt-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-0 shadow-2xl border border-border">
          <div className="bg-background p-10 text-center border-b md:border-b-0 md:border-r border-border group hover:bg-primary transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-white group-hover:text-primary transition-colors">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-display font-black uppercase tracking-tighter text-2xl mb-3 group-hover:text-white transition-colors">Walk-ins</h3>
            <p className="text-muted-foreground font-bold tracking-tight group-hover:text-white/80 transition-colors uppercase text-xs">No appointment? No problem. We always make room.</p>
          </div>
          <div className="bg-background p-10 text-center border-b md:border-b-0 md:border-r border-border group hover:bg-secondary transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-white group-hover:text-primary transition-colors">
              <Scissors className="h-8 w-8" />
            </div>
            <h3 className="font-display font-black uppercase tracking-tighter text-2xl mb-3 group-hover:text-white transition-colors">All Ages</h3>
            <p className="text-muted-foreground font-bold tracking-tight group-hover:text-white/80 transition-colors uppercase text-xs">From first haircuts to weekly trims. We serve the family.</p>
          </div>
          <div className="bg-background p-10 text-center group hover:bg-primary transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-white group-hover:text-primary transition-colors">
              <Star className="h-8 w-8" />
            </div>
            <h3 className="font-display font-black uppercase tracking-tighter text-2xl mb-3 group-hover:text-white transition-colors">Trusted</h3>
            <p className="text-muted-foreground font-bold tracking-tight group-hover:text-white/80 transition-colors uppercase text-xs">Grosse Pointe favorite for consistent, high-quality cuts.</p>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-black text-secondary mb-6 uppercase tracking-tighter">Pricing</h2>
            <div className="h-2 w-32 bg-primary mx-auto mb-8" />
            <p className="text-xs uppercase font-black tracking-[0.3em] text-muted-foreground">Clean, professional cuts at fair prices.</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
            <Card className="border-none shadow-2xl rounded-none group hover:-translate-y-2 transition-transform duration-300 overflow-hidden flex flex-col">
              <div className="h-2 bg-barber-pole w-full" />
              <CardContent className="p-10 flex flex-col items-center text-center flex-grow">
                <div className="min-h-[12rem] flex flex-col items-center justify-center w-full">
                  <h3 className="font-display font-black text-3xl mb-4 text-secondary uppercase tracking-tighter">Adults</h3>
                  <div className="text-6xl font-black text-primary tracking-tighter">$21</div>
                </div>
                <p className="text-muted-foreground font-bold uppercase text-[10px] tracking-widest mt-auto pt-4">Precision cut & neck shave</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl rounded-none group hover:-translate-y-2 transition-transform duration-300 overflow-hidden flex flex-col">
              <div className="h-2 bg-barber-pole w-full" />
              <CardContent className="p-10 flex flex-col items-center text-center flex-grow">
                <div className="min-h-[12rem] flex flex-col items-center justify-center w-full">
                  <h3 className="font-display font-black text-3xl mb-4 text-secondary uppercase tracking-tighter">Children</h3>
                  <div className="text-6xl font-black text-primary tracking-tighter">$17</div>
                </div>
                <p className="text-muted-foreground font-bold uppercase text-[10px] tracking-widest mt-auto pt-4">8th Grade and Under</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl rounded-none group hover:-translate-y-2 transition-transform duration-300 overflow-hidden flex flex-col">
              <div className="h-2 bg-barber-pole w-full" />
              <CardContent className="p-10 flex flex-col items-center text-center flex-grow">
                <div className="min-h-[12rem] flex flex-col items-center justify-center w-full">
                  <h3 className="font-display font-black text-3xl mb-4 text-secondary uppercase tracking-tighter">Senior Special</h3>
                  <div className="text-6xl font-black text-primary tracking-tighter">$17</div>
                </div>
                <p className="text-muted-foreground font-bold uppercase text-[10px] tracking-widest leading-tight mt-auto pt-4">Tue / Wed / Thu (10a - 2p)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Brenda Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border-8 border-primary rounded-none z-0" />
              <img 
                src={brendaImg} 
                alt="Brenda, Owner of The Family Barbershop" 
                className="relative z-10 w-full h-auto object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
            </motion.div>

            <div className="space-y-8">
              <div className="inline-block bg-primary text-white px-6 py-2 rounded-none font-black uppercase tracking-[0.3em] text-xs">
                The Legend
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-black text-secondary uppercase tracking-tighter leading-none">Brenda</h2>
              <h3 className="text-2xl font-bold text-primary uppercase tracking-widest italic">A Grosse Pointe Icon</h3>
              
              <div className="space-y-6 text-lg text-muted-foreground font-medium leading-relaxed uppercase text-xs tracking-widest">
                <p>
                  Brenda is the owner and head barber of The Family Barbershop. Known for her skill, consistency, and friendly personality, she has been serving generations of local families.
                </p>
                <p>
                  For many customers, a visit isn’t complete without sitting in Brenda’s chair. You're not just a customer; you're family.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap gap-8">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-white p-3 rounded-none">
                    <User className="h-6 w-6" />
                  </div>
                  <span className="font-black uppercase tracking-widest text-xs">Owner Operated</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-white p-3 rounded-none">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <span className="font-black uppercase tracking-widest text-xs">Local Staple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-barber-pole opacity-20 scale-150 animate-pulse" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-12 uppercase tracking-tighter">Fresh Cut?</h2>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-black text-2xl px-16 py-10 shadow-2xl rounded-none uppercase tracking-widest">
            <Link href="/booking">
              Book Appointment Now
            </Link>
          </Button>
          <p className="mt-10 text-white/80 font-black uppercase tracking-[0.3em] text-sm">Walk-ins always welcome</p>
        </div>
      </section>
    </Layout>
  );
}
