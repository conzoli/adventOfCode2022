import {TestInputStartingStacks, TestInputMovings} from './dataDay5.js'
import {StartingStacks, InputMovings} from './dataDay5.js'


// console.log(TestInputMovings);

const sovePuzzleDay5 = (Stacks,Movings) => {

    console.log(Stacks);

    for(let i = 0; i < Movings.length; i++){

        const rowElements = Movings[i].split(' ');

        const NumberOfCrates = rowElements[1];
        const FromStack = rowElements[3];
        const ToStack = rowElements[5];

        for (let j = 0; j < NumberOfCrates; j++){

            const currentCrate = Stacks[FromStack-1].pop();

            Stacks[ToStack-1].push(currentCrate);

        }

        console.log(Stacks);

    }
    

    // Print Msg
    for(let i= 0; i < Stacks.length; i++){
        console.log(Stacks[i][Stacks[i].length-1]);
    }

};


// sovePuzzleDay5(TestInputStartingStacks, TestInputMovings);

// sovePuzzleDay5(StartingStacks, InputMovings);


const sovePuzzleDay5PartTwo = (Stacks,Movings) => {

    for(let i = 0; i < Movings.length; i++){

        const rowElements = Movings[i].split(' ');

        const NumberOfCrates = rowElements[1];
        const FromStack = rowElements[3];
        const ToStack = rowElements[5];

        let CrateSchaufel =[];

        for (let j = 0; j < NumberOfCrates; j++){

            const currentCrate = Stacks[FromStack-1].pop();

            CrateSchaufel.push(currentCrate);

        }

        for(let k = CrateSchaufel.length -1; k >= 0 ; k--) {
            Stacks[ToStack-1].push(CrateSchaufel[k]);
        }

        console.log(Stacks);

    }
    

    // Print Msg
    for(let i= 0; i < Stacks.length; i++){
        console.log(Stacks[i][Stacks[i].length-1]);
    }

}

// sovePuzzleDay5PartTwo(TestInputStartingStacks, TestInputMovings);


sovePuzzleDay5PartTwo(StartingStacks, InputMovings);