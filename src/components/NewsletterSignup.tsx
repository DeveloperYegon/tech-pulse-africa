import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to TechPulse Africa. Check your email for confirmation.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="p-8 sm:p-12">
              {!isSubscribed ? (
                <>
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Stay Ahead of the Tech Curve
                  </h2>
                  
                  <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                    Join 25,000+ tech professionals and entrepreneurs who rely on our daily digest 
                    for the latest breakthroughs in technology and global innovation.
                  </p>

                  {/* Benefits */}
                  <div className="grid sm:grid-cols-3 gap-6 mb-10">
                    <div className="flex flex-col items-center space-y-2">
                      <Sparkles className="h-6 w-6 text-accent" />
                      <span className="text-white font-medium">Daily Insights</span>
                      <span className="text-white/70 text-sm">Curated tech news every morning</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Sparkles className="h-6 w-6 text-accent" />
                      <span className="text-white font-medium">Exclusive Content</span>
                      <span className="text-white/70 text-sm">Subscriber-only deep dives</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Sparkles className="h-6 w-6 text-accent" />
                      <span className="text-white font-medium">Early Access</span>
                      <span className="text-white/70 text-sm">Breaking news before it trends</span>
                    </div>
                  </div>

                  {/* Newsletter Form */}
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/20 backdrop-blur-md border-white/30 text-white placeholder:text-white/70 flex-1"
                        required
                      />
                      <Button 
                        type="submit"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6"
                      >
                        Subscribe Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-white/70">
                      Free forever. No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              ) : (
                <>
                  {/* Success State */}
                  <div className="flex justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 backdrop-blur-md">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">
                    Welcome to the Community!
                  </h2>
                  
                  <p className="text-lg text-white/90 mb-8">
                    Thank you for subscribing! Keep an Eye on your email and get ready 
                    to stay ahead of world's tech revolution.
                  </p>

                  <Button 
                    onClick={() => setIsSubscribed(false)}
                    variant="outline"
                    className="border-white/30 text-black hover:bg-black/10"
                  >
                    Subscribe Another Email
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;