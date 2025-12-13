function solve(input){

        let parts = [];

        parts.push(input.slice(0, input.length / 2));
        parts.push(input.slice(input.length / 2, input.length ))

        for (let sentence of parts){ 
            console.log(sentence.split('').reverse().join(''));
        }
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');