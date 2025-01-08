import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import RecipeCard from '../components/recipes/RecipeCard';
import { Recipe } from '../utils/types';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState<Recipe[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const handleRemoveFromFavorites = (id: number) => {
        const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <Layout title="Favorites">
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6">Your Favorites</h1>
                {favorites.length === 0 ? (
                    <p>No favorites yet!</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {favorites.map((recipe) => (
                            <div key={recipe.id} className="relative">
                                <RecipeCard recipe={recipe} />
                                <button
                                    onClick={() => handleRemoveFromFavorites(recipe.id)}
                                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default FavoritesPage;
