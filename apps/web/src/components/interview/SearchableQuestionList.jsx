
import React from 'react';
import { Search, X, AlertCircle, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import QuestionCard from './QuestionCard';
import { getEmptyStateMessage } from '@/lib/searchUtils';

export default function SearchableQuestionList({
  query,
  handleQueryChange,
  clearSearch,
  results,
  isLoading,
  totalItems,
  page,
  setPage,
  totalPages,
  careerSlug,
  difficulty
}) {
  const emptyState = getEmptyStateMessage(query, careerSlug, difficulty);

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative max-w-2xl w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search by keyword, topic, or career..."
          className="pl-11 pr-10 py-6 text-base bg-card border-2 border-border focus-visible:ring-primary focus-visible:border-primary shadow-sm rounded-xl"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Results Header */}
      {!isLoading && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Found <strong>{totalItems}</strong> matching questions</span>
        </div>
      )}

      {/* Results Area */}
      <div className="space-y-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
            <p>Searching database...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="bg-card border-2 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">{emptyState.title}</h3>
            <p className="text-muted-foreground max-w-md">{emptyState.description}</p>
            {query && (
              <Button variant="outline" onClick={clearSearch} className="mt-6">
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          <>
            {results.map(q => (
              <QuestionCard key={q.id} question={q} searchQuery={query} />
            ))}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 pt-8 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <span className="text-sm font-medium text-muted-foreground">
                  Page {page} of {totalPages}
                </span>
                <Button 
                  variant="outline" 
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
