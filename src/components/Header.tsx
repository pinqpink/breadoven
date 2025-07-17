import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
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
    <header className="bg-white text-foreground sticky top-0 z-50 shadow-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9ccc5ea8-9e5f-4dd2-a295-579bca72f167.png" 
              alt="Omaha Auto Glass Repair" 
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">
                Omaha Auto Glass Repair
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                location.pathname === '/' ? 'text-primary' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                location.pathname === '/about' ? 'text-primary' : ''
              }`}
            >
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                location.pathname === '/services' ? 'text-primary' : ''
              }`}>
                <span>Our Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg rounded-lg p-2 min-w-[280px]">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="cursor-pointer flex items-center justify-between p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <div>
                      <div className="font-semibold text-foreground">Windshield Chip Repair</div>
                      <div className="text-sm text-muted-foreground">Mobile rock chip repair service</div>
                    </div>
                    <Badge className="bg-primary/10 text-primary text-xs">Most Popular</Badge>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dealership-services" className="cursor-pointer flex items-center justify-between p-3 rounded-md hover:bg-accent transition-colors">
                    <div>
                      <div className="font-medium text-foreground">On-Lot Chip Repair for Dealers</div>
                      <div className="text-sm text-muted-foreground">Scheduled lot maintenance service</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/fleet-services" className="cursor-pointer flex items-center justify-between p-3 rounded-md hover:bg-accent transition-colors">
                    <div>
                      <div className="font-medium text-foreground">Fleet Windshield Chip Repair</div>
                      <div className="text-sm text-muted-foreground">Commercial fleet maintenance</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1">
              Contact
            </a>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:402-555-0123"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">402-555-0123</span>
            </a>
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors px-2 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors px-2 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-primary transition-colors px-2 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors px-2 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:402-555-0123"
                  className="flex items-center space-x-2 text-foreground hover:text-primary mb-3 px-2 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">402-555-0123</span>
                </a>
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mx-2 rounded-full font-medium">
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