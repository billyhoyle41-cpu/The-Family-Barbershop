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
              <div className="w-full min-h-[600px]">
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0LPdjBIsZ8QYEyq837l0Rquq4q5RvdOz0x2OD1Wa-efGF1dwlnbYOx3pvyl31SUyGk0em6IgIz?gv=true" 
                  style={{ border: 0 }} 
                  width="100%" 
                  height="600" 
                  frameBorder="0"
                  title="Google Calendar Appointment Scheduling"
                ></iframe>
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
