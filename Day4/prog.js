import { TestInput } from "./dataDay4.js";
import { Input } from "./dataDay4.js";



const checkContaining = (start1,end1,start2,end2) => 
    (start1 >= start2 && end1 <= end2 ) || (start1 <= start2 && end1 >= end2 );


const checkOverlapping = (start1,end1,start2,end2) => 
    start1 <= end2 && start2 <= end1;



const FindOverlappingEleves = (inputs) => {

    let ContainingCounter = 0;
    let OverpallingCounter = 0;

    for(let i = 0; i < inputs.length; i++){

        const splitValuesA = inputs[i][0].split("-");

        const IndexAVon = splitValuesA[0];
        const IndexABis = splitValuesA[1];

        const splitValuesB = inputs[i][1].split("-");

        const IndexBVon = splitValuesB[0];
        const IndexBBis = splitValuesB[1];
      
        let checkResult = checkContaining(parseInt(IndexAVon), parseInt(IndexABis),
                                          parseInt(IndexBVon), parseInt(IndexBBis)     );

        //console.log(checkResult);

        let checkOverpallingResult = checkOverlapping(parseInt(IndexAVon), parseInt(IndexABis),
                                        parseInt(IndexBVon), parseInt(IndexBBis)     );

        if(checkResult === true){
            ContainingCounter += 1;
        }

        if(checkOverpallingResult) {
            OverpallingCounter += 1;
        }

    }

    console.log(ContainingCounter);
    console.log(OverpallingCounter);

}

FindOverlappingEleves(Input);