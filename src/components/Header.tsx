import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Menu, X } from "lucide-react";
import { CartDrawer } from "@/components/CartDrawer";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Experience", href: "/#experience" },
  { label: "Prices", href: "/#quote" },
  { label: "Projects", href: "/#projects" },
  { label: "Guides", href: "/#guides" },
  { label: "Freelancing", href: "/#freelancing" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Writing Expert" className="h-10 w-auto" />
          </a>
          
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="/#quote" className="hidden sm:block">
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="w-4 h-4" />
                Upload
              </Button>
            </a>
            <CartDrawer />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#quote"
                className="px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Document
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
