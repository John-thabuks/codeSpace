import React from 'react';
import RecipeFilter from './RecipeFilter';
import RecipeList from './RecipeList';

const ExploreRecipes = () => {
  return (
    <div className="explore-recipes">
      <RecipeFilter />
      <RecipeList />
    </div>
  );
};

export default ExploreRecipes;
