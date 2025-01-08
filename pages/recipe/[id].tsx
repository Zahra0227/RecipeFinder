import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { fetchRecipeDetail } from '../../utils/api';
import { Recipe } from '../../utils/types';

const RecipeDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const fetchedRecipe = await fetchRecipeDetail(id as string);
                    setRecipe(fetchedRecipe);

                    
                    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as Recipe[];
                    const isAlreadyFavorite = favorites.some((fav) => fav.id === parseInt(id as string, 10));
                    setIsFavorite(isAlreadyFavorite);
                } catch (err) {
                    console.error('Error fetching recipe detail:', err);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [id]);

    const handleAddToFavorites = () => {
        if (recipe) {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as Recipe[];
            const isAlreadyFavorite = favorites.some((fav) => fav.id === recipe.id);

            if (!isAlreadyFavorite) {
                favorites.push(recipe);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                setIsFavorite(true); 
                alert(`${recipe.title} has been added to favorites!`);
            }
        }
    };

    if (loading) {
        return <Layout title="Loading...">Loading...</Layout>;
    }

    if (!recipe) {
        return <Layout title="Not Found">Recipe not found.</Layout>;
    }

    return (
        <Layout title={recipe.title}>
            <div className="p-4">
                <h1 className="text-2xl font-bold">{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title} className="w-2xl h-auto mt-4" />
                <p className="mt-4">{recipe.summary}</p>
                <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
                <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h2 className="text-xl font-semibold mt-6">Instructions</h2>
                <p>{recipe.instructions}</p>
                {!isFavorite && (
                    <button
                        onClick={handleAddToFavorites}
                        className="bg-orange-500 text-white px-4 py-2 rounded mt-6 hover:bg-orange-600"
                    >
                        Add to Favorites
                    </button>
                )}
            </div>
        </Layout>
    );
};

export default RecipeDetailPage;
