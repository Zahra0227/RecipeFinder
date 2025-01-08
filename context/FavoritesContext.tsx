import { createContext, useState, useEffect } from "react";
import { Recipe } from "../types/api";

interface FavoritesContextProps {
    favorites: Recipe[];
    addFavorite: (recipe: Recipe) => void;
    removeFavorite: (id: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Recipe[]>([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(savedFavorites);
    }, []);

    const addFavorite = (recipe: Recipe) => {
        const updatedFavorites = [...favorites, recipe];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const removeFavorite = (id: number) => {
        const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
