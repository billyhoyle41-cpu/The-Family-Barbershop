import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.briancrossley.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display font-black text-secondary mb-4 uppercase tracking-tighter">Book an Appointment</h1>
            <p className="text-muted-foreground uppercase font-bold text-xs tracking-widest">Schedule your next cut with Brenda</p>
          </div>

          <Card className="border-none shadow-2xl rounded-none overflow-hidden bg-white">
            <div className="h-2 bg-barber-pole w-full" />
            <CardContent className="p-0">
              <div className="w-full min-h-[800px]">
                <iframe 
                  src="https://app.briancrossley.com/widget/booking/qyfrHvgNL27l6DS0tPsd" 
                  style={{ width: "100%", height: "800px", border: "none", overflow: "hidden" }} 
                  scrolling="no" 
                  id="qyfrHvgNL27l6DS0tPsd_1768752698600"
                  title="Brenda's Appointments"
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 text-muted-foreground uppercase font-bold text-[10px] tracking-[0.2em]">
            Prefer to call? <a href="tel:3137435515" className="text-primary hover:underline">(313) 743-5515</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
