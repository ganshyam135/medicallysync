import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { scrollToElement } from "@/utils/scrollUtils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Interior Design Work", path: "/#interior-gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/#footer" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isMobile = useMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-2 bg-cream dark:bg-cream-dark bg-opacity-95 dark:bg-opacity-95 shadow-md" : "py-4 bg-cream dark:bg-cream-dark bg-opacity-80 dark:bg-opacity-80"}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => {
              if (location === "/") {
                // If already on home page, scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                // If on different page, navigate to home
                window.location.href = "/";
              }
            }}
            className="flex items-center cursor-pointer"
          >
            <span className="text-2xl md:text-3xl font-bold font-serif text-charcoal dark:text-charcoal-light">
              R.R <span className="text-gold">Interiors</span>
            </span>
          </button>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <nav className="flex space-x-8">
              {navLinks.map((link) => {
                // Check if this is the Home link
                if (link.path === "/") {
                  return (
                    <button
                      key={link.path}
                      onClick={() => {
                        if (location === "/") {
                          // If already on home page, scroll to top
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          // If on different page, navigate to home
                          window.location.href = "/";
                        }
                      }}
                      className={`text-charcoal dark:text-charcoal-light hover:text-gold font-medium transition-all ${location === link.path ? "text-gold" : ""}`}
                    >
                      {link.name}
                    </button>
                  );
                }
                
                // Check if this is the Interior Design Work link
                 if (link.path === "/#interior-gallery") {
                   return (
                     <button
                       key={link.path}
                       onClick={() => scrollToElement('interior-gallery')}
                       className={`text-charcoal hover:text-gold font-medium transition-all ${location === link.path ? "text-gold" : ""}`}
                     >
                       {link.name}
                     </button>
                   );
                 }
                
                // Check if this is the Contact link
                if (link.path === "/#footer") {
                  return (
                    <button
                      key={link.path}
                      onClick={() => scrollToElement('footer')}
                      className={`text-charcoal dark:text-charcoal-light hover:text-gold font-medium transition-all ${location === link.path ? "text-gold" : ""}`}
                    >
                      {link.name}
                    </button>
                  );
                }
                
                // Return regular link for other nav items
                return (
                  <Link 
                    key={link.path} 
                    href={link.path}
                    className={`text-charcoal hover:text-gold font-medium transition-all ${location === link.path ? "text-gold" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              </nav>
              <ThemeToggle />
            </div>
          )}
          
          {/* Mobile Navigation */}
          {isMobile && (
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6 text-charcoal" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-cream">
                <nav className="flex flex-col space-y-4 mt-10">
                  {navLinks.map((link) => {
                    // Check if this is the Home link
                    if (link.path === "/") {
                      return (
                        <button
                          key={link.path}
                          onClick={() => {
                            // Close the sheet menu
                            document.body.click();
                            
                            if (location === "/") {
                              // If already on home page, scroll to top
                              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                            } else {
                              // If on different page, navigate to home
                              setTimeout(() => window.location.href = "/", 100);
                            }
                          }}
                          className={`text-left text-charcoal hover:text-gold text-lg font-medium transition-all ${location === link.path ? "text-gold" : ""}`}
                        >
                          {link.name}
                        </button>
                      );
                    }
                    
                    // Check if this is the Interior Design Work link
                     if (link.path === "/#interior-gallery") {
                       return (
                         <button
                           key={link.path}
                           onClick={() => {
                             // Close the sheet menu
                             document.body.click();
                             // Scroll to the interior gallery section
                             setTimeout(() => scrollToElement('interior-gallery'), 100);
                           }}
                           className={`text-left text-charcoal hover:text-gold text-lg font-medium transition-all ${location === link.path ? "text-gold" : ""}`}
                         >
                           {link.name}
                         </button>
                       );
                     }
                    
                    // Check if this is the Contact link
                    if (link.path === "/#footer") {
                      return (
                        <button
                          key={link.path}
                          onClick={() => {
                            // Close the sheet menu
                            document.body.click();
                            // Scroll to the footer section
                            setTimeout(() => scrollToElement('footer'), 100);
                          }}
                          className={`text-left text-charcoal hover:text-gold text-lg font-medium transition-all ${location === link.path ? "text-gold" : ""}`}
                        >
                          {link.name}
                        </button>
                      );
                    }
                    
                    // Return regular link for other nav items
                    return (
                      <Link 
                        key={link.path} 
                        href={link.path}
                        className={`text-charcoal hover:text-gold text-lg font-medium transition-all ${location === link.path ? "text-gold" : ""}`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
