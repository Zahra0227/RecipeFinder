// تایپ اصلی برای هر دستور غذا
export interface Recipe {
    id: number;
    title: string;
    summary: string;
    image: string;
    ingredients:string[]; 
    instructions: string; 
}

// تایپ برای مواد اولیه هر دستور غذا
export interface Ingredient {
    id: number;
    name: string;
    original: string;
}

// تایپ برای فیلترهای جستجو
export interface RecipeFilters {
    diet?: string;
    cuisine?: string;
    number?:string;
}
