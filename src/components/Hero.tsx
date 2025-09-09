import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, TrendingUp, Globe, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-tech-africa.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/70" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary-glow rounded-full animate-float" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-accent rounded-full animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
    

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover the Future of Technology
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Stay ahead with cutting-edge technology news, emerging trends, and innovation stories 
            shaping the world's digital transformation.
          </p>

      
    

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white font-bold px-8">
              Explore Latest News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-black hover:bg-white/10 backdrop-blur-md"
            >
              <span className="font-bold">Learn About Us</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;