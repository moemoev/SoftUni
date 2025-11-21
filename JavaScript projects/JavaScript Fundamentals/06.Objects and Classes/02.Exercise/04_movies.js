function movieData(input){
    let movies = []

    while (0 < input.length){
        let cmd = input.shift();

        if (cmd.includes('addMovie')){
            let name = cmd.split('addMovie ')[1];
            let movie = {
                name : name,
            }; 
            movies.push(movie);
        }else if (cmd.includes('directedBy')){
            let [name, director] = cmd.split(' directedBy ');

            for (let movie of movies){
                if (movie.name === name){
                    movie['director'] = director; 
                }
            }
        }else if (cmd.includes('onDate')){
            let [name, date] = cmd.split(' onDate ');
            for (let movie of movies){
                if (movie.name === name){
                    movie['date'] = date; 
                }
            }
        }
    }
    for (let movie of movies){
        if (Object.keys(movie).length === 3){
            console.log(JSON.stringify(movie));
        }
    }
}

movieData([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen']);

movieData([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo']);