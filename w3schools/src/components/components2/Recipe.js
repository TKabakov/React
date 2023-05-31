import { recipes } from "./SaladsData";

export default function RecipeList(){
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe =>
                <div key={recipes.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient =>
                            <li key={ingrediant}>
                                {ingredient}
                            </li>
                            )}
                    </ul>
                    
                </div>
            )}
        </div>
    );
}