import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Writing Expert's services, you accept and agree to be bound by 
                these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Services Description</h2>
              <p>Writing Expert provides the following professional services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy editing and proofreading services</li>
                <li>Academic formatting and structure consultation</li>
                <li>Writing consultation and guidance</li>
                <li>Resume, SOP, and cover letter editing</li>
                <li>Business and technical document editing</li>
                <li>Website content editing and localization</li>
              </ul>
              <p className="font-medium text-foreground mt-4">
                Important: We provide editing, proofreading, and consultation services only. 
                We do not write content on behalf of clients or provide services that would 
                constitute academic dishonesty.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information when placing orders</li>
                <li>Ensure you have the rights to submit content for editing</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not use our services for any illegal or unethical purposes</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Payment Terms</h2>
              <p>
                Payment is required before work begins on your project. We accept major credit cards 
                and other payment methods as displayed on our website. All prices are in USD unless 
                otherwise specified.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Delivery and Turnaround</h2>
              <p>
                We strive to deliver all projects within the agreed timeframe. Delivery times depend 
                on the length and complexity of the document. Rush services are available for an 
                additional fee.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Revisions</h2>
              <p>
                We offer free revisions within 7 days of delivery if the original instructions 
                were not fully addressed. Additional revisions or changes to original requirements 
                may incur extra charges.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Intellectual Property</h2>
              <p>
                You retain all rights to your original content. We do not claim any ownership 
                of documents submitted for editing. All editing work becomes your property 
                upon full payment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Limitation of Liability</h2>
              <p>
                Writing Expert's liability is limited to the amount paid for the specific service. 
                We are not liable for any indirect, incidental, or consequential damages arising 
                from the use of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Continued use of our services constitutes 
                acceptance of modified terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">10. Contact Information</h2>
              <p>
                For questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="font-medium text-foreground">
                Email: info@writtingexpert.com<br />
                Address: 2 Sunnyvale Dr, Petal, MS, 39465, USA
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
