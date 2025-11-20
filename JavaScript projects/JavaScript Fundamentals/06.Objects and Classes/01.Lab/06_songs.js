function playSongs(input){
    let countSongs = Number(input.shift());

    class Song{
        constructor(typelist, name, time){
            this.typelist = typelist;
            this.name = name;
            this.time = time
        }
    
    }

    let songs = [];

    for(let i = 0; i < countSongs; i++){
        let [typelist, name, time] = input
                                    .shift()
                                    .split('_');
        
        songs.push(new Song(typelist, name, time));
    }

    let typelist = input.shift();

    if (typelist === 'all'){
        for (let song of songs){
            console.log(`${song.name}`);
        }
    }else{
        for (let song of songs){
            if (song.typelist === typelist){
            console.log(`${song.name}`);
            }

        }

    }
}