import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import RecipeList from '../components/recipes/RecipeList';
import RecipeFilters from '../components/recipes/RecipeFilters';
import { fetchRecipes } from '../utils/api';
import { RecipeFilters as RecipeFiltersType, Recipe } from '../utils/types';

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filters, setFilters] = useState<RecipeFiltersType>({});
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const [totalResults, setTotalResults] = useState<number>(0); 
  const recipesPerPage = 12;

  useEffect(() => {
    if (!query) {
      setRecipes([]);
      return;
    }

    const fetchData = async () => {
      try {
        const offset = (currentPage - 1) * recipesPerPage; 
        const results = await fetchRecipes(query as string, filters as Record<string, string>, offset);

        if (results.length === 0) {
          setError("Not Found!");
        } else {
          setError(null);
          setRecipes(results);
          setTotalResults(50); 
        }
      } catch (err: unknown) {
        setError("Something went wrong!");
        console.error(err);
      }
    };

    fetchData();
  }, [query, filters, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout title={`Search Results for "${query}"`}>
      <div className="bg-orange-50 min-h-screen p-4">
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={query || ''}
            onChange={(e) => router.push(`/search?query=${e.target.value}`)}
            placeholder="Search for recipes..."
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <RecipeFilters filters={filters} setFilters={setFilters} />
        {error ? (
          <div className="text-red-500 text-center text-2xl">{error}</div>
        ) : (
          <>
            <RecipeList recipes={recipes}
            onPageChange={handlePageChange}
            totalResults={totalResults}
            currentPage={currentPage} />
            {/* Pagination */}
            <div className="flex justify-center mt-6">
              {Array.from({ length: Math.ceil(totalResults / recipesPerPage) }, (_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-black'
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
