function sortByTwo(strings){
    strings = strings
                .sort((a, b) => {
                let diffLength = a.length - b.length;
                if (diffLength!== 0) return diffLength;
                return a.toLowerCase().localeCompare(b.toLowerCase());
                });

    console.log(strings
                .join(`\n`)
    );
}
sortByTwo(['alpha','beta','gamma']);
sortByTwo(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);