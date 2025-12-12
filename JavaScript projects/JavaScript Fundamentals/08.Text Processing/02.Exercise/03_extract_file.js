function solve(filePath){
    let stuff = filePath.split('\\').at(-1);
    let fileExtension = stuff.split('.').at(-1);
    let fielName = stuff.replace('.'.concat(fileExtension) , '');


    console.log(`File name: ${fielName}`)
    console.log(`File extension: ${fileExtension}`);

}

solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');