import React from 'react';
import RecipeDetailsModal from './RecipeDetailsModal';

const RecipeCard = ({ recipe }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="recipe-card" onClick={openModal}>
            <h3>{recipe.title}</h3>
            {/* Display other recipe details */}
            {isModalOpen && <RecipeDetailsModal recipe={recipe} closeModal={closeModal} />}
        </div>
    );
};

export default RecipeCard;
