import { inputs } from "./dataDayOne.js";
import { testInputs } from "./dataDayOne.js";

const calcMostCalories = (input) => {
  let MostCalories = 0;
  let NumberElfWithMostCalories = 0;
  let currentCaloriesSum = 0;
  let ElfCounter = 1;

  let CaloriesResult = [];

  for (let i = 0; i <= input.length; i++) {
    if (input[i] != undefined) {
      currentCaloriesSum += input[i];
    } else {
      // console.log(currentCaloriesSum);

      if (currentCaloriesSum > MostCalories) {
        MostCalories = currentCaloriesSum;
        NumberElfWithMostCalories = ElfCounter;
      }

      CaloriesResult.push(currentCaloriesSum);

      currentCaloriesSum = 0;
      ElfCounter = ElfCounter + 1;
    }
  }

  console.log(`MostCalories: ${MostCalories}`);
  console.log(`Number of that Elf: ${NumberElfWithMostCalories}`);

  CaloriesResult.sort((a, b) => b - a);

  let sumOfBestThree = 0;

  for (let i = 0; i < 3; i++) {
    sumOfBestThree += CaloriesResult[i];
  }

  console.log(`Sum Best 3: ${sumOfBestThree}`);
};

calcMostCalories(inputs);
