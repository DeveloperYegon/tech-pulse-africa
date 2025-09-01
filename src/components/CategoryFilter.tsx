import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, X } from 'lucide-react';
import { categories } from '@/data/mockData';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CategoryFilter = ({ 
  selectedCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange 
}: CategoryFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCategorySelect = (categorySlug: string) => {
    onCategoryChange(categorySlug === selectedCategory ? '' : categorySlug);
  };

  const clearFilters = () => {
    onCategoryChange('');
    onSearchChange('');
  };

  const hasActiveFilters = selectedCategory || searchQuery;

  return (
    <section className="py-8 border-b">
      <div className="container mx-auto px-4">
        {/* Mobile Filter Toggle */}
        <div className="flex sm:hidden items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Filter Articles</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Search Bar */}
        <div className={`${isFilterOpen || 'hidden sm:block'} mb-6`}>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles by title, author, or tags..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className={`${isFilterOpen || 'hidden sm:block'} space-y-4`}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Categories:</span>
            
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange('')}
              className={selectedCategory === '' ? 'gradient-primary text-white' : ''}
            >
              All Articles
            </Button>

            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.slug ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategorySelect(category.slug)}
                className={`${
                  selectedCategory === category.slug 
                    ? 'gradient-primary text-white' 
                    : 'hover:border-primary hover:text-primary'
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Active Filters & Clear */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-muted-foreground">Active filters:</span>
              
              {searchQuery && (
                <Badge variant="secondary" className="text-xs">
                  Search: "{searchQuery}"
                  <X 
                    className="ml-1 h-3 w-3 cursor-pointer" 
                    onClick={() => onSearchChange('')}
                  />
                </Badge>
              )}
              
              {selectedCategory && (
                <Badge variant="secondary" className="text-xs">
                  Category: {categories.find(c => c.slug === selectedCategory)?.name}
                  <X 
                    className="ml-1 h-3 w-3 cursor-pointer" 
                    onClick={() => onCategoryChange('')}
                  />
                </Badge>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs h-6 px-2"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-muted-foreground">
          {hasActiveFilters && (
            <span>
              Showing filtered results
              {selectedCategory && ` in ${categories.find(c => c.slug === selectedCategory)?.name}`}
              {searchQuery && ` for "${searchQuery}"`}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;