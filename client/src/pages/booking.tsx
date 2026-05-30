import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Booking() {
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
              <div className="w-full min-h-[700px] flex items-center justify-center p-8 text-center border-4 border-dashed border-muted m-4 bg-muted/10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-secondary uppercase tracking-tighter">Google Calendar Integration</h3>
                  <p className="text-muted-foreground font-bold max-w-md mx-auto">
                    To use Google Calendar for booking, you'll need to create an "Appointment Schedule" in your Google Calendar account.
                  </p>
                  <ol className="text-left text-sm space-y-2 mt-6 max-w-md mx-auto text-secondary/80 font-medium">
                    <li>1. Open Google Calendar</li>
                    <li>2. Click <strong>Create</strong> &gt; <strong>Appointment schedule</strong></li>
                    <li>3. Set up your availability and duration</li>
                    <li>4. Click <strong>Share</strong> on the appointment page</li>
                    <li>5. Select <strong>Website embed</strong> and copy the code</li>
                    <li>6. Paste that code here to replace this placeholder!</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 space-y-4">
            <div className="text-muted-foreground uppercase font-bold text-[10px] tracking-[0.2em]">
              Prefer to call? <a href="tel:3137435515" className="text-primary hover:underline">(313) 743-5515</a>
            </div>
            <div className="max-w-2xl mx-auto p-4 border border-border bg-white text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
              By providing your phone number, you agree to receive text messages from The Family Barbershop regarding your appointment. Message and data rates may apply. Message frequency varies. Reply STOP to opt-out. View our <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
