import React from "react";

interface FavoriteCardProps {
    id: number;
    title: string;
    image: string;
    onRemove: (id: number) => void;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ id, title, image, onRemove }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center justify-between p-4">
            <div className="flex items-center">
                <img
                    src={image}
                    alt={title}
                    className="w-16 h-16 rounded object-cover mr-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <button
                onClick={() => onRemove(id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Remove
            </button>
        </div>
    );
};

export default FavoriteCard;
