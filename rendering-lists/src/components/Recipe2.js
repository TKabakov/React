
import { recipes } from "./SaladsData";


function RecipeList({ name, ingredients }){
    return (
        <div>
            <h2>{name}</h2>
                    <ul>
                        {ingredients.map(ingredient =>
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                            )}
                    </ul>
        </div>
    );
}

export default function Recipe (){
    return (
        <div>
            {recipes.map(recipe =>
                <RecipeList {...recipe} key={recipe.id} />
                )}
        </div>
    );
}