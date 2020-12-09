import IngredientList from './IngredientList';
import Instruction from './Instructions';

const Recipe = ({name, ingredients, steps}) => (
   <section id={name.toLowerCase().replace(/ /g, "-")}>
     <h1>{name}</h1>
     <IngredientList list={ingredients}/>
     <Instruction title="Cooking Instructions" step={steps}/>
  </section>
 )

export default Recipe;