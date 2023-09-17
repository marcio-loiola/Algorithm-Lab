import measureComplexity from "./modules/measureIt.mjs";
import loadData from "./modules/loadData.mjs";
import {
  generateOrderedNumbers,
  generateUnorderedNumbers,
} from "./modules/dataGenerator.mjs";
import maxValue2 from "./src/maxValue2.mjs";
import maxValue from "./src/maxValue.mjs";

/* 
    100 
    200 
    1000 
    2000  
    5000 
    10000 
    50000 
    100000 
    500000 
    1000000  <-
    5000000   
*/

const sizeInstance = 100000;

const generateRandomNumber = () => Math.floor(Math.random() * sizeInstance);

const randomValue = generateRandomNumber(sizeInstance);

const targetValue = randomValue;
const iterations = 10;
const note = `maxValue1_instância_${sizeInstance}_alvo_${targetValue}`;

const data = generateUnorderedNumbers(sizeInstance);
console.log(data);

function algorithm() {
  console.log("\n maxValue1____________");
  console.log(maxValue(targetValue, data));
}

measureComplexity(algorithm, iterations, `${note}`);
