export interface Recipe {
    id: number;
    title: string;
    image: string;
    instructions?: string;
    extendedIngredients?: Array<{ id: number; original: string }>;
}

export interface RecipeFilters {
    diet?: string;
    cuisine?: string;
    number?: number;
    offset?: number;
}
