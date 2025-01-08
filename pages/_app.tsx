import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { FavoritesProvider } from "../context/FavoritesContext";
import { RecipesProvider } from "../context/RecipesContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <FavoritesProvider>
            <RecipesProvider>
                <Component {...pageProps} />
            </RecipesProvider>
        </FavoritesProvider>
    );
};

export default MyApp;

