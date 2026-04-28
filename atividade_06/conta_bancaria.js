class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    verSaldo() {
        console.log(`
            Olá ${this.titular},
            seu saldo atual  é 
            R$ ${this.saldo}`)
    }

    depositar(valor) {
        this.saldo += valor;
    }

    // criar o método sacar e sacar 100 da sua conta
    sacar(valor) {
        this.saldo -= valor;
    }
}

let contaDoJoab = new ContaBancaria("Joab", 15000)
contaDoJoab.verSaldo() // 15k
contaDoJoab.depositar(350)
contaDoJoab.verSaldo() // 15350
contaDoJoab.sacar(100)
contaDoJoab.verSaldo() // 15250

let contaDaSarah = new ContaBancaria("Sarah", 1000000)
contaDaSarah.verSaldo()