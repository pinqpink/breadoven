import { Button } from '@/components/ui/button';
import { Phone, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M30%2030l15-15v30l-15-15zm-15%2015l15-15v30l-15-15z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-light/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
                Professional Auto Glass Services in Omaha
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Excellence in Auto Glass Repair in 
                <span className="text-primary-light"> Omaha, Nebraska</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
                Honest, Quick & Precise.
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Welcome to Omaha Auto Glass Repair – where we're not just a business; 
                we're your go-to mobile repair team based right here in Omaha, Nebraska. 
                We're all about fixing those pesky rock chips and long cracks with a touch of personal care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold"
              >
                Get an Awesome Quote or Call Us!
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="tel:402-555-0123" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Us Today!</span>
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-primary-foreground/80">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary-light text-primary-light" />
                ))}
              </div>
              <span className="text-sm">Trusted by 500+ Omaha Drivers</span>
            </div>
          </div>

          {/* Right Content - Service Image */}
          <div className="relative">
            <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-primary-light/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">OAG</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Mobile Auto Glass Repair
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  We come to you! Professional windshield repair and replacement services 
                  across Omaha and surrounding areas.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3 text-primary-foreground">
                    <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                    <span>Rock Chip Repair</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-primary-foreground">
                    <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                    <span>Windshield Replacement</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-primary-foreground">
                    <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                    <span>Side Window Repair</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-primary-foreground">
                    <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                    <span>Back Glass Replacement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary-light/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-primary-foreground/20 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
    </section>
  );
};

export default Hero;