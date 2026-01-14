import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="bg-secondary text-white py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-barber-pole opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-display mb-4">Contact & Location</h1>
            <p className="text-xl text-white/80 font-serif">Visit us in Grosse Pointe Woods</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
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

            {/* Map Placeholder - In a real app, embed Google Maps iframe */}
            <div className="h-full min-h-[400px] bg-muted rounded-lg overflow-hidden border border-border shadow-lg relative group">
              {/* Using a static map image or placeholder since we can't embed actual interactive maps without API keys sometimes, but styling it to look like a map area */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4 animate-bounce" />
                  <h3 className="font-display text-2xl text-secondary mb-2">19865 Mack Ave</h3>
                  <p className="text-muted-foreground">Grosse Pointe Woods, MI</p>
                </div>
              </div>
              
              {/* Simulated Map UI Elements */}
              <div className="absolute top-4 right-4 bg-white p-2 rounded shadow text-xs font-bold text-gray-500">Map Data &copy; 2025</div>
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded shadow text-sm font-bold text-primary hover:bg-gray-50 cursor-pointer">
                Open in Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
