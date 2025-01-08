import Link from 'next/link';
import { Recipe } from '../../utils/types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const truncateText = (text:string, maxLength:number)=>{
    if(text.length > maxLength){
      return text.slice(0, maxLength)+ '...';
    }
    return text;
  }
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col justify-between">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-full object-cover rounded-t-lg shadow-md	"
      />
      <h2 className="text-l font-bold mt-2">{recipe.title}</h2>
      <p className='text-sm text-gray-600 mt-1 line-camp-2 '>{truncateText(recipe.summary , 120)}</p>
      <Link href={`/recipe/${recipe.id}`}>
        <button className="bg-orange-500 text-white px-4 py-2 rounded mt-6 hover:bg-orange-600">
          View Recipe
        </button>
      </Link>
    </div>
  );
};

export default RecipeCard;
