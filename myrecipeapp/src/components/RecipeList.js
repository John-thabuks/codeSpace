import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  // Assume recipes is an array of recipe objects
  const recipes = [...];

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;