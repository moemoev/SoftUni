function solve(input){
    let addressBook = {};

    for (let el of input){

        let [name, address] = el.split(':');

        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook).sort((a, b) => {

        return a[0].localeCompare(b[0]);
    })

    for (let [fullNAme, address] of entries){
        console.log(`${fullNAme} -> ${address}`);
    }
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);