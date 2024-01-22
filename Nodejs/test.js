const pessoa = {
    nome: "gabriel",
    idade: 18,
    gmail: "teste@gmail.com",
    id: 0
};

let texto = JSON.stringify(pessoa);
let obj = JSON.parse(texto)
console.log(texto);
console.log(obj.nome)

