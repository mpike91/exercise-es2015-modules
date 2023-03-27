import { choice, remove } from "./helpers";
import foods from "./foods";

const chosenFood = choice(foods);
console.log(`I'd like one ${chosenFood}, please.`);
console.log(`Here you go: ${chosenFood}`);
console.log(`Delicious! May I have another?`);
remove(foods, chosenFood);
console.log(`I'm sorry, we're all out. We have ${foods.length} choices left: ${foods}`);