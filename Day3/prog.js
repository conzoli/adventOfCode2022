import { TestInputs } from "./dataDay3.js";
import { Inputs } from "./dataDay3.js";

const GetItemPriority = (char) => {
  let returnValue = 0;

  if (char == char.toUpperCase()) {
    returnValue = char.charCodeAt(0) - 38;
  }
  if (char == char.toLowerCase()) {
    returnValue = char.charCodeAt(0) - 96;
  }

  return returnValue;
};

const calcSumOfRucksack = (inputs) => {
  let prioritySum = 0;

  for (let i = 0; i < inputs.length; i++) {
    var half_length = Math.ceil(inputs[i].length / 2);

    var leftSide = inputs[i].slice(0, half_length);

    var rightSide = inputs[i].slice(half_length, inputs[i].length);

    var commonItem = "";

    for (let item of leftSide) {
      for (let item2 of rightSide) {
        if (item === item2) {
          commonItem = item;
        }
      }
    }

    prioritySum += GetItemPriority(commonItem);
  }

  console.log(prioritySum);
};

calcSumOfRucksack(Inputs);

// PART 2

const calcSumPart2 = (inputs) => {
  let prioritySum = 0;

  for (let i = 0; i < inputs.length; i += 3) {
    var commonItem = "";

    for (let item1 of inputs[i]) {
      for (let item2 of inputs[i + 1]) {
        for (let item3 of inputs[i + 2]) {
          if (item1 === item2 && item1 === item3) {
            commonItem = item1;
          }
        }
      }
    }

    prioritySum += GetItemPriority(commonItem);
  }

  console.log(prioritySum);
};

calcSumPart2(Inputs);
