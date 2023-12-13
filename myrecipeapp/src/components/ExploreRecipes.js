import React from 'react';
import RecipeFilter from './RecipeFilter';
import RecipeList from './RecipeList';

const ExploreRecipes = () => {
  return (
    <div className="explore-recipes">
      <RecipeFilter test={test}/>
      <RecipeList test={test}/>
    </div>
  );
};

export default ExploreRecipes;
