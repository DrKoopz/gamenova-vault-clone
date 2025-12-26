import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="Writing Expert" className="h-12 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground">
              Professional editing, proofreading, and writing consultation services.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/refund" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Refund & Cancellation Policy
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Editing & Proofreading
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Writing Consultation
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resume & SOP Editing
                </a>
              </li>
              <li>
                <a href="/#quote" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@writtingexpert.com" className="hover:text-primary transition-colors">
                  info@writtingexpert.com
                </a>
              </li>
              <li>
                2 Sunnyvale Dr<br />
                Petal, MS 39465<br />
                USA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Writing Expert. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              <span>|</span>
              <a href="/refund" className="hover:text-primary transition-colors">Refund</a>
              <span>|</span>
              <a href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
