import { recipes } from "./SaladsData";

export default function RecipeList(){
    return (
        <div>
            {recipes.map(recipe =>
                <div key={recipes.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient =>
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                            )}
                    </ul>
                </div>
            )}
        </div>
    );
}