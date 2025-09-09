import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Users, Globe,Zap } from 'lucide-react';
import { articles } from '@/data/mockData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on selected category and search query
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = !selectedCategory || article.category.toLowerCase() === selectedCategory;
      const matchesSearch = !searchQuery || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="h-12 w-12 rounded-full gradient-secondary flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">News Updates</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="h-12 w-12 rounded-full gradient-accent flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent">25K+</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-primary">54</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Featured Stories</h2>
              <div className="h-1 flex-1 ml-6 gradient-primary rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article) => (
                <ArticleCard key={article.id} article={article} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Button variant="outline" className="hover:border-primary hover:text-primary">
              View All Articles
            </Button>
          </div>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">No articles found matching your criteria.</div>
              <Button 
                onClick={() => {
                  setSelectedCategory('');
                  setSearchQuery('');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.slice(0, 6).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {regularArticles.length > 6 && (
            <div className="text-center mt-12">
              <Button className="gradient-primary text-white px-8">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <Zap className="h-6 w-6 text-white" />
            </div>
              <span className="text-xl font-bold text-gradient">TechPulse</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Connecting you to the future of technology, one story at a time.
            </p>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} TechPulse. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
