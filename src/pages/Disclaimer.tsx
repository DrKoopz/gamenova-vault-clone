import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <p className="text-foreground font-medium">
                Please read this disclaimer carefully before using Writing Expert's services.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Nature of Our Services</h2>
              <p>
                Writing Expert provides professional editing, proofreading, and writing consultation 
                services. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy editing and proofreading</li>
                <li>Grammar, spelling, and punctuation correction</li>
                <li>Style and clarity improvements</li>
                <li>Formatting assistance and guidance</li>
                <li>Writing consultation and feedback</li>
                <li>Resume, SOP, and professional document editing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">What We Do NOT Provide</h2>
              <p className="font-medium text-foreground">
                To be clear, Writing Expert does NOT:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Write original content, essays, or papers on behalf of clients</li>
                <li>Complete homework or coursework for students</li>
                <li>Provide services intended to facilitate academic dishonesty</li>
                <li>Guarantee specific grades or outcomes</li>
                <li>Offer plagiarism services of any kind</li>
              </ul>
              <p className="mt-4">
                Our role is strictly to help improve existing work that has been written by the client.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Academic Integrity</h2>
              <p>
                We strongly support academic integrity and ethical writing practices. Clients who 
                submit academic documents for editing are responsible for ensuring their use of our 
                services complies with their institution's policies regarding external editing assistance.
              </p>
              <p>
                Many academic institutions permit professional proofreading and editing services. 
                However, policies vary, and it is the client's responsibility to verify compliance 
                with their specific institution's guidelines.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">No Guarantee of Outcomes</h2>
              <p>
                While we strive to provide high-quality editing services, we cannot guarantee 
                specific outcomes such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publication acceptance</li>
                <li>Academic grades or scores</li>
                <li>Job or admission offers</li>
                <li>Any other specific result from using our services</li>
              </ul>
              <p className="mt-4">
                Our editing improves the quality of your writing, but final outcomes depend on 
                many factors beyond the scope of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Client Responsibility</h2>
              <p>
                By using our services, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are the original author of the content submitted for editing</li>
                <li>You have the right to submit the content for editing services</li>
                <li>You will use our services ethically and in compliance with applicable rules</li>
                <li>You are responsible for the final version of any document you submit to third parties</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p>
                Writing Expert and its editors shall not be liable for any damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Misuse of our editing services</li>
                <li>Violation of academic integrity policies</li>
                <li>Any negative outcomes related to edited documents</li>
                <li>Decisions made based on edited content</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Website Information</h2>
              <p>
                The information provided on this website is for general informational purposes only. 
                While we strive to keep information accurate and up-to-date, we make no representations 
                or warranties about the completeness, accuracy, or reliability of any information 
                on this site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, please contact us at:
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
