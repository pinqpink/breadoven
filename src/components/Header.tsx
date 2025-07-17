import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-secondary text-secondary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9ccc5ea8-9e5f-4dd2-a295-579bca72f167.png" 
              alt="Omaha Auto Glass Repair" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-secondary-foreground">
                Omaha Auto Glass Repair
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium ${
                location.pathname === '/' ? 'text-primary' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium ${
                location.pathname === '/about' ? 'text-primary' : ''
              }`}
            >
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium ${
                location.pathname === '/services' ? 'text-primary' : ''
              }`}>
                <span>Our Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="cursor-pointer">
                    Windshield Chip Repair
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#contact" className="text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:402-555-0123"
              className="flex items-center space-x-2 text-secondary-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">402-555-0123</span>
            </a>
            <Button variant="default" className="bg-primary hover:bg-primary-dark">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-secondary-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-muted">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-secondary-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-secondary-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-secondary-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <a
                href="#contact"
                className="text-secondary-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-muted">
                <a
                  href="tel:402-555-0123"
                  className="flex items-center space-x-2 text-secondary-foreground hover:text-primary mb-3"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">402-555-0123</span>
                </a>
                <Button variant="default" className="w-full bg-primary hover:bg-primary-dark">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;