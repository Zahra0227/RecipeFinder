import { createContext, useState, ReactNode, useContext } from "react";
import { Recipe } from "../types/api";

interface RecipesContextProps {
    recipes: Recipe[];
    setRecipes: (recipes: Recipe[]) => void;
    filters: { diet?: string; cuisine?: string };
    setFilters: React.Dispatch<React.SetStateAction<{ diet?: string; cuisine?: string }>>;
}

const RecipesContext = createContext<RecipesContextProps | undefined>(undefined);

export const RecipesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [filters, setFilters] = useState<{ diet?: string; cuisine?: string }>({});

    return (
        <RecipesContext.Provider value={{ recipes, setRecipes, filters, setFilters }}>
            {children}
        </RecipesContext.Provider>
    );
};

export const useRecipes = () => {
    const context = useContext(RecipesContext);
    if (!context) {
        throw new Error("useRecipes must be used within a RecipesProvider");
    }
    return context;
};
