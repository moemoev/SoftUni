function password(input){
    let username = input[0];
    let userPassword = input[1];
    let index = 2;
    let correctPasswordSubmitted = false;

    while (!correctPasswordSubmitted){
        if (input[index] === userPassword){
            correctPasswordSubmitted = true;
            console.log(`Welcome ${username}!`);
            break;
        }
        index ++;
    }
}
password(["Nakov","1234","Pass","1324","1234"]);