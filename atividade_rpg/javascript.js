// Classes
class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}
class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}
// Instancia Classes - Criar Objetos
let hero = new Personagem("R-01","🤖 Robô",100,100,0);
let boss = new Personagem("Chefe Final","👾 Humano",100,0,50);
// Preencher os Status
document
    .getElementById("nome-hero")
    .textContent = hero.nome;
document
    .getElementById("titulo-hero")
    .textContent = hero.titulo;
document
    .getElementById("nome-boss")
    .textContent = boss.nome;
document
    .getElementById("titulo-boss")
    .textContent = boss.titulo;
// Criar habilidades
let containerBtn = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🪙 skill", 8, 10, 0),
    new Habilidade(3, "💥 supremo", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");//<buton>
    btn.innerText = hab.nome;
    containerBtn.appendChild(btn);
}) ;
