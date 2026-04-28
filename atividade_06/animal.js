class Animal {
    constructor(apelido) {
        this.nome = apelido;
    }
    falar(som) {
        console.log(som);
    }
}

class Gato extends Animal {
    ronronar() {
        console.log(`o ${this.nome} está ronronando`)
    }
}

class Cachorro extends Animal {
    abanarRabo() {
        console.log(`O ${this.nome} está feliz`)
    }
}

// criar uma classe de outro animal de estimação
// cobra, calopsita, ramster, etc...
// tem que estender Animal e ter um método próprio

let miya = new Gato("Miya");
let pandora = new Cachorro("Pandora");

miya.falar("Miau!");
miya.ronronar();
pandora.falar("Au Au!");
pandora.abanarRabo();