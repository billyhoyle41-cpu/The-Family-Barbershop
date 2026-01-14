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
import interiorImg from "@assets/generated_images/classic_warm_barbershop_interior.png";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: '300px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent z-10" />
        
        {/* Content */}
        <div className="container relative z-20 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 px-4 py-1 text-sm uppercase tracking-widest mb-4">
              Established in Grosse Pointe
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6 drop-shadow-lg">
              Classic Cuts.<br />
              <span className="text-primary">Family Friendly.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              A Grosse Pointe tradition. Experience the warm, neighborhood atmosphere where every haircut comes with a smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-md shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto">
                <Link href="/booking">
                  Book an Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm w-full sm:w-auto">
                <Link href="/contact">
                  View Location & Hours
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white relative z-30 -mt-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 shadow-xl rounded-lg overflow-hidden border border-border">
          <div className="bg-background p-8 text-center border-b md:border-b-0 md:border-r border-border hover:bg-muted/30 transition-colors">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl mb-2">Walk-ins Welcome</h3>
            <p className="text-muted-foreground">No appointment? No problem. We always make room for our neighbors.</p>
          </div>
          <div className="bg-background p-8 text-center border-b md:border-b-0 md:border-r border-border hover:bg-muted/30 transition-colors">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Scissors className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl mb-2">All Ages</h3>
            <p className="text-muted-foreground">From a child's first haircut to grandpa's weekly trim. We serve the whole family.</p>
          </div>
          <div className="bg-background p-8 text-center hover:bg-muted/30 transition-colors">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl mb-2">Local Favorite</h3>
            <p className="text-muted-foreground">Trusted by Grosse Pointe families for consistent, high-quality cuts.</p>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-secondary mb-4">Services & Pricing</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">Simple, honest pricing for professional cuts. No hidden fees, just great service.</p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/10 shadow-lg hover:border-primary/30 transition-colors">
              <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
                <h3 className="font-serif text-3xl mb-2 text-secondary">Adult Haircut</h3>
                <div className="text-5xl font-bold text-primary my-4">$21</div>
                <p className="text-muted-foreground">Precision cut, neck shave, and style.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 shadow-lg hover:border-primary/30 transition-colors">
              <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
                <h3 className="font-serif text-3xl mb-2 text-secondary">Kids Haircut</h3>
                <div className="text-5xl font-bold text-primary my-4">$16</div>
                <p className="text-muted-foreground">Gentle, patient service for the little ones.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Brenda Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -skew-x-12 transform translate-x-20 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 border-4 border-primary transform translate-x-4 translate-y-4 rounded-lg" />
              <img 
                src={brendaImg} 
                alt="Brenda, Owner of The Family Barbershop" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
                Meet the Owner
              </div>
              <h2 className="text-4xl md:text-6xl font-display text-secondary">Brenda</h2>
              <h3 className="text-2xl font-serif text-muted-foreground italic">A Grosse Pointe Icon</h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Brenda is the owner and head barber of The Family Barbershop. Known for her skill, consistency, and friendly personality, Brenda has been serving generations of local families with classic barbering and personal care you won’t find at chain shops.
                </p>
                <p>
                  For many customers, a visit to the barbershop isn’t complete without sitting in Brenda’s chair. Whether it's your first visit or your hundredth, you'll be treated like family.
                </p>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary text-white p-2 rounded-full">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-secondary">Owner Operated</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary text-white p-2 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-secondary">Community Staple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-secondary text-white relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display mb-16">Trusted by Neighbors</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Best haircut in Grosse Pointe. Brenda is amazing and always remembers exactly how I like it.",
                author: "Michael R."
              },
              {
                text: "I've been bringing my boys here for years. It's the only place they actually enjoy getting a haircut.",
                author: "Sarah T."
              },
              {
                text: "Old school vibe, great prices, and friendly conversation. Can't beat it.",
                author: "David L."
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <div className="flex justify-center gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 leading-relaxed opacity-90">"{review.text}"</p>
                <div className="font-bold font-serif text-primary uppercase tracking-widest">{review.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-barber-pole opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Ready for a fresh cut?</h2>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-xl px-12 py-8 shadow-xl rounded-md">
            <Link href="/booking">
              Book Your Appointment
            </Link>
          </Button>
          <p className="mt-6 text-white/80 font-medium">Walk-ins also welcome!</p>
        </div>
      </section>
    </Layout>
  );
}
