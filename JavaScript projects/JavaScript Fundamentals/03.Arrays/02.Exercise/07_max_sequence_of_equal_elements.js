function sequenceOfEquals(sequence){

        let maxSequence = [];
        let subSequence = [];

        for (let i = 0; i < sequence.length; i++){
            let element = sequence[i];
            if (subSequence.length === 0){subSequence.push(element);}

            if (sequence[i + 1] === element){
                subSequence.push(element);
            }else{
                if (maxSequence.length < subSequence.length){
                    maxSequence = subSequence.splice(0, subSequence.length);
                }
                subSequence = [];
            }

        }
        console.log(maxSequence.join(" "));
}

sequenceOfEquals([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
sequenceOfEquals([1, 1, 1, 2, 3, 1, 3, 3]);
sequenceOfEquals([4, 4, 4, 4]);
sequenceOfEquals([0, 1, 1, 5, 2, 2, 6, 3, 3]);