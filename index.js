/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
  // set total to 0 so we can add to it 
  let totalCount = 0   // step 1 inputs

  for(let i = 0; i < animals.length; i++) {    // step 2 define my loop
    // add the animal count being looked at to total 
      totalCount += animals[i].count      // step 3 accum
  }
  // return total
  return totalCount // step 1 outputs
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
  // set to empty array to add to it
  let allAnimals = []    // step 1 inputs
  for(let i = 0; i < animals.length; i++) {    // step 2 define my loop
    // push each "kind" of animal to the array
    allAnimals.push(animals[i].kind)           // step 3 acc
  }
  // return all animal kinds pushed
  return allAnimals // step 1 outputs
}

console.log(getAllKinds(animals))
/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
  // set new array so that you can add to it
  let newArr = []       // step 1  inputs
  for(let i = 0; i < animals.length; i++) {  // define my loop
    // if the count of animal is greater or the same as the input
    //push that animal object into the array
    if(animals[i].count >= minimum) {    // accum
      newArr.push(animals[i]);
    }
  }
  return newArr // step 1 outputs
}
console.log(filterByCountMinimum(animals, 5))
/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
  // step 1 inputs
  if(animals.length === 0) {     // accomodates for if nothing is input
    return null
  }

  let highestCount = animals[0]        // declare the first animal in the array to compare and set as highest

  for(let i = 1; i < animals.length; i++) {    // define my loop
    // seting animal variable to the animal object 
    let animal = animals[i]
    // if the current count of animal being compared is larger than the current highest
    // highest count take the the animal that it was compared to
    if(animal.count > highestCount.count) {
      highestCount = animal
    }
  }
  return highestCount
}


console.log(getMostCommonAnimal(animals))
// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
