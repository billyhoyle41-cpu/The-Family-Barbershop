import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Phone } from "lucide-react";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  time: z.string().min(1, "Please select a preferred time"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function Booking() {
  const { toast } = useToast();
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      time: "",
      notes: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    console.log(data);
    toast({
      title: "Request Received!",
      description: `Thanks ${data.name}! We'll call you shortly at ${data.phone} to confirm your appointment.`,
      duration: 5000,
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="min-h-screen bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-lg">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display text-secondary mb-4">Book an Appointment</h1>
            <p className="text-muted-foreground">Simple and old-school. Fill out the form below and we'll confirm with you directly.</p>
          </div>

          <Card className="border-t-4 border-t-primary shadow-xl">
            <CardHeader className="text-center border-b border-border bg-white pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <Calendar className="h-8 w-8" />
              </div>
              <CardTitle className="font-serif text-2xl">Request a Time</CardTitle>
              <CardDescription>
                We'll call you to confirm the exact time slot.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="h-12 bg-muted/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 555-5555" {...field} className="h-12 bg-muted/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time (Morning/Afternoon)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Tuesday Morning around 10am" {...field} className="h-12 bg-muted/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-blue-50 p-4 rounded-md flex gap-3 text-blue-800 text-sm border border-blue-100">
                    <Phone className="h-5 w-5 flex-shrink-0" />
                    <p>
                      <strong>Note:</strong> This form requests an appointment. We will call you to confirm availability.
                    </p>
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg font-bold bg-secondary hover:bg-secondary/90">
                    Submit Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="text-center mt-8 text-muted-foreground text-sm">
            Prefer to call? <a href="tel:3137435515" className="text-primary font-bold underline hover:no-underline">(313) 743-5515</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
