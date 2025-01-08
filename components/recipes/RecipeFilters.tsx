import React from 'react';
import { RecipeFilters } from '../../utils/types';

interface RecipeFiltersProps {
    filters: RecipeFilters;
    setFilters: React.Dispatch<React.SetStateAction<RecipeFilters>>;
}

const RecipeFiltersComponent: React.FC<RecipeFiltersProps> = ({ filters, setFilters }) => {
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFilters({
            ...filters,
            [field]: e.target.value,
        });
    };

    return (
        <div className="flex space-x-4 mb-6">
            <input
                type="text"
                placeholder="Diet"
                value={filters.diet || ''}
                onChange={(e) => handleFilterChange(e, 'diet')}
                className="px-4 py-2 border rounded"
            />
            <input
                type="text"
                placeholder="Cuisine"
                value={filters.cuisine || ''}
                onChange={(e) => handleFilterChange(e, 'cuisine')}
                className="px-4 py-2 border rounded"
            />
        </div>
    );
};

export default RecipeFiltersComponent;
