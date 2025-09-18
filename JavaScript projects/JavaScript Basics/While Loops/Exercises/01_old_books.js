function oldLibrabry(input){
    let index = 1;
    let book = input[index];
    let searchedBook = input[0];
    let checkedBooks = 0;
    let bookFound = false;

    while (book != "No More Books"){
        if (book === searchedBook){
            bookFound = true;
            break;
        }else{
            checkedBooks++;
        }
        
        index ++;
        book = input[index];
    }

    if (bookFound){
        console.log(`You checked ${checkedBooks} books and found it.`);
    }else{
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    }
}
//oldLibrabry(["Troy","Stronger","Life Style","Troy"]);
oldLibrabry(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);