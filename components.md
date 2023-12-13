# Recipe App Component Structure


## 1. App
   - **Responsibility:** The main content area of the app.
   - **Child Components:**
     - RecipeList
     - ExploreRecipes
     - MyRecipes

## 2. RecipeList
   - **Responsibility:** Displays a list of recipes.
   - **Child Components:**
     - RecipeCard (Repeating for each recipe)

## 3. RecipeCard
   - **Responsibility:** Represents an individual recipe within the list.
   - **Child Components:**
     - RecipeDetailsModal (if clicking on a recipe opens a modal with more details)

## 4. ExploreRecipes
   - **Responsibility:** Search recepies from an external api.
   - **Child Components:**
     - RecipeFilter
     - RecipeList

## 5. MyRecipes
   - **Responsibility:** Displays a section for the user's own recipes.
   - **Child Components:**
     - RecipeList

## 6. RecipeFilter
   - **Responsibility:** Allows users to filter recipes based on certain criteria.
   - **Child Components:**
     - FilterOption (Repeating for each filter option)

## 7. FilterOption
   - **Responsibility:*** Represents an individual filter option.
    - **Child Components:** None

## 8. RecipeDetailsModal
   - **Responsibility:** Displays detailed information about a specific recipe.
    - **Child Components:** None
