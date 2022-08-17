function crypt(msg, hash) {

    const data = Date.now();

    let frase = msg.split("");

    for (let i = 0; i < frase.length; i++) {

        frase[i] = (frase[i].charCodeAt(0) * data);

        frase[i] += hash;
    }

    frase.push(data);

    let output = "";
    
    for (let i = 0; i < frase.length; i++) {
        output += frase[i];
    }

    return output;
}

function decrypt(cypher, hash) {

    let h = String(hash)

    const msg = cypher.split(h);

    const abarece = msg.pop();

    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / abarece);
    }

    let output = "";

    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    return output;
}

const frase = "Aquele que luta contra mosntros deve acautelar-se para não tornar-se também um mostro. Quando se olha muito tempo para o abismo, o abismo olha para você.";

let escripitado = crypt(frase,"795358683013771245321485246371294866693280398211366611368");

console.log(escripitado);



let descripitado = decrypt(escripitado, "795358683013771245321485246371294866693280398211366611368")

console.log(descripitado);