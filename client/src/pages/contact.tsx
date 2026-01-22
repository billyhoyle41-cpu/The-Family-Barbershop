import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/30 pb-20">
        <div className="bg-secondary text-white py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-barber-pole opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-8xl font-display font-black mb-6 uppercase tracking-tighter leading-none text-white">Contact & Hours</h1>
            <p className="text-xs uppercase font-black tracking-[0.4em] text-primary">Visit us in Grosse Pointe Woods</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 -mt-16 relative z-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <Card className="shadow-xl border-t-4 border-t-primary h-full">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div>
                  <h2 className="text-3xl font-display text-secondary mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Address</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          19865 Mack Ave<br />
                          Grosse Pointe Woods, MI 48236
                        </p>
                        <a 
                          href="https://maps.google.com" 
                          target="_blank" 
                          className="text-primary hover:underline mt-2 inline-block font-medium"
                        >
                          Get Directions &rarr;
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                        <p className="text-muted-foreground text-lg">
                          (313) 743-5515
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Call us during business hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-lg">
                      <span className="text-muted-foreground">Tuesday - Friday</span>
                      <span className="font-bold text-secondary">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center text-lg">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-bold text-secondary">9:00 AM - 3:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center text-lg opacity-60">
                      <span className="text-muted-foreground">Sunday - Monday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <div className="h-full min-h-[400px] bg-muted rounded-none overflow-hidden border-y border-border shadow-2xl relative group">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.538183493722!2d-82.9092497234241!3d42.43756207118671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d5b999b9e6e5%3A0x9d9d9d9d9d9d9d9d!2s19865%20Mack%20Ave%2C%20Grosse%20Pointe%20Woods%2C%20MI%2048236!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              ></iframe>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=19865+Mack+Ave,Grosse+Pointe+Woods,MI+48236" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primary text-white px-6 py-3 shadow-2xl text-xs font-black uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
