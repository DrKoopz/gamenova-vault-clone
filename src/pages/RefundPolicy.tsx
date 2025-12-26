import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Refund & Cancellation Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <p className="text-foreground font-medium">
                At Writing Expert, customer satisfaction is our priority. We offer a fair and 
                transparent refund policy to ensure you feel confident using our services.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">When Refunds Apply (Full or Partial)</h2>
              <p>You are eligible for a refund in the following cases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Order not started:</strong> Full refund if you cancel before work begins on your project
                </li>
                <li>
                  <strong>Service not delivered:</strong> Full refund if we fail to deliver within the agreed timeframe 
                  (excluding delays caused by incomplete information from the client)
                </li>
                <li>
                  <strong>Quality issues:</strong> Partial or full refund if the delivered work does not meet the 
                  specifications outlined in your order and cannot be corrected through revisions
                </li>
                <li>
                  <strong>Duplicate payment:</strong> Full refund for accidental duplicate charges
                </li>
                <li>
                  <strong>Technical errors:</strong> Full refund if payment was processed but order was not received 
                  by our system
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">When Refunds Do NOT Apply</h2>
              <p>Refunds will not be issued in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Work completed satisfactorily:</strong> If the work was delivered according to your 
                  instructions and meets quality standards
                </li>
                <li>
                  <strong>Change of mind:</strong> If you no longer need the service after work has begun
                </li>
                <li>
                  <strong>Unclear instructions:</strong> If the delivered work matches the instructions provided, 
                  even if they differ from what you intended
                </li>
                <li>
                  <strong>Late submission by client:</strong> If delays were caused by late submission of 
                  documents or information from your side
                </li>
                <li>
                  <strong>Request after 14 days:</strong> Refund requests made more than 14 days after delivery
                </li>
                <li>
                  <strong>Misuse of service:</strong> If the service was used in violation of our Terms & Conditions
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Refund Timeline</h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground min-w-[140px]">Request Window:</span>
                    <span>Within 14 days of delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground min-w-[140px]">Review Period:</span>
                    <span>3-5 business days to review your request</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground min-w-[140px]">Processing Time:</span>
                    <span>5-10 business days after approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground min-w-[140px]">Bank Processing:</span>
                    <span>Additional 3-7 business days depending on your bank</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Refund Method</h2>
              <p>
                Refunds will be issued to the original payment method used for the purchase:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Credit/Debit card payments will be refunded to the same card</li>
                <li>PayPal payments will be refunded to your PayPal account</li>
                <li>Bank transfers may be refunded via bank transfer or PayPal (at our discretion)</li>
              </ul>
              <p className="text-sm mt-4">
                Note: Any transaction fees charged by payment processors may be non-refundable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Before work starts:</strong> Full refund, no cancellation fee
                </li>
                <li>
                  <strong>Work in progress (less than 50% complete):</strong> 50% refund
                </li>
                <li>
                  <strong>Work in progress (50% or more complete):</strong> No refund, but you will 
                  receive completed work up to the cancellation point
                </li>
                <li>
                  <strong>After delivery:</strong> Subject to refund eligibility criteria above
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">How to Request a Refund</h2>
              <p>To request a refund, please:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Email us at <strong>info@writtingexpert.com</strong> with subject line "Refund Request"</li>
                <li>Include your order number and date of purchase</li>
                <li>Provide a detailed explanation of why you are requesting a refund</li>
                <li>Attach any relevant documentation or screenshots</li>
              </ol>
              <p className="mt-4">
                Our team will review your request and respond within 3-5 business days.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p>
                For questions about our Refund & Cancellation Policy, please contact us at:
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
