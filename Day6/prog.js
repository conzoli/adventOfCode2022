import {
  example1,
  example2,
  example3,
  example4,
  example5,
  realInput,
} from "./dataDay6.js";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const processStream = (stream) => {
  const sequenceLength = 14;

//   console.log(stream);

  for (let i = 0; i < stream.length; i++) {
    const subStream = stream.slice(i, i + sequenceLength);

    let unique = [...new Set(subStream)];

    if (unique.length == sequenceLength) {
      console.log(i + sequenceLength);

      return;
    }
  }

  console.log(stream);
};

// processStream(example1);
// processStream(example2);
// processStream(example3);
// processStream(example4);

// processStream(example5);

processStream(realInput);
