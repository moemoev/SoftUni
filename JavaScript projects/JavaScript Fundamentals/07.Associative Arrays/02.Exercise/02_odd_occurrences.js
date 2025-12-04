function solve(input){
    let occurrences = new Map();

    for (let word of input.split(' ')){
        word = word.toLowerCase();

        if (!occurrences.has(word)){
            occurrences.set(word, 1);
        }else{
            occurrences.set(word, occurrences.get(word) + 1);
        }
    }
    let entries = Array
                    .from(occurrences.entries())
                    .filter(a => a[1] % 2 !== 0)
                    .map(a => a[0]);

    console.log(entries.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');