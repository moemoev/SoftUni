function evenPowersOfTwo(powers){
  for (let i = 0; i <= powers; i += 2){
      //console.log(2 ** i);
      console.log(Math.pow(2, i));
  }
}
evenPowersOfTwo(4);