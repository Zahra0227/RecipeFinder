import { RecipeFilters, Recipe, Ingredient } from "./types";


export const fetchRecipes = async (
  query: string,
  filters: RecipeFilters,
  offset: number = 0 
): Promise<Recipe[]> => {
  try {
    const params = new URLSearchParams({
      apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY || '',
      query,
      ...filters,
      number: '12', 
      offset: offset.toString(), 
    });

    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error (${response.status}): ${errorText}`);
    }

    const data = await response.json();

    return data.results.map((recipe: Recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary || '', 
      ingredients: recipe.ingredients || [],
      instructions: recipe.instructions || '',
    }));
  } catch (err) {
    console.error('Error fetching recipes:', err);
    throw err;
  }
};


export const fetchRecipeDetail = async (id: string): Promise<Recipe | null> => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`);
  if (!response.ok) {
      throw new Error('Failed to fetch recipe detail');
  }
  const data = await response.json();

  const recipe: Recipe = {
      id: data.id,
      title: data.title,
      image: data.image,
      summary: data.summary,
      ingredients: data.extendedIngredients?.map((ing: Ingredient) => ing.original) || [],
      instructions: data.instructions || 'No instructions provided.',
  };

  return recipe;
};

