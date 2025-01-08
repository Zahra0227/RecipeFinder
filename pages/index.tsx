import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';

const Home = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Layout title="Recipe Finder - Home">
      <div className="flex flex-col items-center justify-center h-screen bg-orange-50">
        <h1 className="text-5xl font-bold text-orange-600 mb-6">Recipe Finder</h1>
        <p className="text-lg text-gray-600 mb-4">
          Find recipes by ingredients, cuisine, or keywords.
        </p>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for recipes..."
            className="px-4 py-2 border rounded w-80"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="px-6 py-2 bg-orange-500 text-white rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
