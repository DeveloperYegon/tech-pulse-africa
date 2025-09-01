import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, Share, Bookmark, ArrowRight } from 'lucide-react';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

const ArticleCard = ({ article, variant = 'default' }: ArticleCardProps) => {
  const cardClasses = {
    default: "group hover:shadow-glow transition-all duration-300 hover:-translate-y-1",
    featured: "group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary",
    compact: "group hover:shadow-glow transition-all duration-300"
  };

  const imageClasses = {
    default: "h-48",
    featured: "h-56",
    compact: "h-32"
  };

  return (
    <Card className={cardClasses[variant]}>
      <CardHeader className="p-0">
        <div className={`${imageClasses[variant]} overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-secondary/20 relative`}>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {article.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="gradient-accent text-accent-foreground font-semibold">
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-black/50 text-white border-0">
              {article.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Article Meta */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
          </div>

          {/* Title */}
          <Link to={`/article/${article.slug}`}>
            <h3 className={`font-bold group-hover:text-primary transition-colors line-clamp-2 ${
              variant === 'featured' ? 'text-xl' : variant === 'compact' ? 'text-base' : 'text-lg'
            }`}>
              {article.title}
            </h3>
          </Link>

          {/* Excerpt */}
          {variant !== 'compact' && (
            <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
              {article.excerpt}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Share className="h-4 w-4" />
              </Button>
            </div>
            <Link to={`/article/${article.slug}`}>
              <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                Read More
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;