import Layout from "@/components/layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/30 py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white p-12 shadow-2xl border-y border-border">
            <h1 className="text-4xl font-display font-black text-secondary mb-8 uppercase tracking-tighter">Privacy Policy</h1>
            
            <div className="space-y-8 text-sm text-muted-foreground uppercase font-bold tracking-widest leading-relaxed">
              <section>
                <h2 className="text-lg text-secondary mb-4">Information Collection</h2>
                <p>We collect your name and phone number solely for the purpose of scheduling and confirming your barbershop appointments.</p>
              </section>

              <section>
                <h2 className="text-lg text-secondary mb-4">SMS Consent & Opt-Out</h2>
                <p>By providing your phone number, you consent to receive SMS messages from us. You can opt-out at any time by replying STOP to any message you receive.</p>
                <p className="mt-4">Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
              </section>

              <section>
                <h2 className="text-lg text-secondary mb-4">Data Protection</h2>
                <p>Your information is kept secure and is never sold or shared with external marketing agencies.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}