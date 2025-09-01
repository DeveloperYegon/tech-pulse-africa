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
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Latest Tech News from Africa & Beyond</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover the
            <span className="block text-gradient bg-gradient-to-r from-accent via-white to-primary-glow bg-clip-text text-transparent">
              Future of Tech
            </span>
            in Africa
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Stay ahead with cutting-edge technology news, emerging trends, and innovation stories 
            shaping Africa's digital transformation.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">10K+ Daily Readers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">54 African Countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Breaking Tech Stories</span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email for daily updates"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/70 flex-1"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6">
                Get Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-white/70 mt-2">Join 25,000+ tech professionals. Unsubscribe anytime.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white font-semibold px-8">
              Explore Latest News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md"
            >
              Learn About Us
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