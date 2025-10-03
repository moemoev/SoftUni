function rotations(bandName, albumName, songName){
    let durationSong = (bandName.length * albumName.length ) * songName.length / 2;
    let numberRotations = durationSong / 2.5

    console.log(`The plate was rotated ${Math.ceil(numberRotations)} times.`)
}