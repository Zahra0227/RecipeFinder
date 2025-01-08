import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../../utils/types';

interface RecipeListProps {
  recipes: Recipe[];
  onPageChange: (page: number) => void; 
  totalResults: number;
  currentPage: number;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  


  

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
