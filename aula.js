/* console.log('Fabio');
let idade = 5;
console.log(idade);
let altura = 180;
console.log(idade); */


/* quando altera os valores.
let valorIngressoAdulto = 20;

Quando os valores são fixosconst valor = valorIngressoAdulto = 30; */

/* let nome = 'Fabio'; //string literal
let idade = 20; //number literal
let estaAprovado = true;//boolean
let sobrenome = undefined; //undefined
let corSelecionada = null; //Redefinir um valor */
/* --------------------------------------------------------- */
//Objetos 
//Tipos de referencia
/* let pessoa = { 
    nome: 'Fabio', 
    idade: 20, 
    estaAprovado: true,
    sobrenome:'Salles', 
};
console.log(pessoa); */
/* -------------------------------------- */
//Arrays
/* let familia = [true,26,'Fabio' ,35];
console.log(familia.length);
console.log(familia[26]);
let nomeDoAmigo = []; */

//Functions
//Verbo + substantivo

/* let corSite = "Azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;

};
console.log(corSite);
resetaCor("vermelho"," forte");
console.log(corSite); */
/* 

*/
//Tipos de funções
//Realiza uma tarefa e não devolve nada
/* function dizerNome (){
    console.log('fabio');
}
dizerNome(); */
//faz um calculo de operação e retorna algo

/* function MultiplicarPorDois (valor){
return valor*2;
}
console.log(MultiplicarPorDois(5));
let resultado = MultiplicarPorDois(5);
console.log(resultado); */


/* ----------------------------------------------------------- */

//Operadores Atribuição
//Operadores comparação
//Operadores Lógicos
//Operadores Bitwise

/* let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5); */

//Operadores Aritmeticos
/* let idade = 45;
console.log(idade++);
console.log(idade) */

//Operadores Atribuição
/* let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);
 */
//Operadores de igualdade
//forma mais recomendada sempre que possível
/* console.log(1 === 1);
console.log('1' === 1);
//igualdade solta
console.log(2 == 2);
console.log('1' == 1); */

//operador ternario
//tem um cliente, 100 premiuim, comum
/* let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo); */

//Operadores Lógicos
//&& true se os dois forem verdadeiros
/* console.log(true && true);
console.log(false && true); */
/* 
let maiorDeIdade = true;
let possuiCtps = true;
let podeAplicar = maiorDeIdade && possuiCtps;
console.log(podeAplicar);
 */
//||true se apenas um for verdadeiros
/* let maiorDeIdade = false;
let possuiCtps = false;
let podeAplicar = maiorDeIdade || possuiCtps;
console.log('Pode aplicar', podeAplicar); */

// (!) Operador Not
/* let candidatoRecusado = !podeAplicar;
console.log('Candidato recusado', candidatoRecusado); */

//Operadores não booleanos 
//Falsy
//(Undefoned , null, 0, false, '', NaN - Not a number)
//Truthy
//()

/* let corPersonalizada = '';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil); */

/* let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;

console.log(a); 
console.log(b);
 */

//If Else - switch case -
//se a hora estiver entre as 6h ate 12h : bom dia - se estiver entre 12:01 e 18h: boa tarde
//caso contrario: boa noite!

/* let hora = 19;

if(hora > 6 && hora < 12){
    console.log('Bom dia!')
}else if(hora > 12 && hora < 18){
 console.log('Boa tarde!')
}
else{
    console.log('Boa noite!');
} */

//switch cases

/* let permissao; //comum, gerente, diretor
permissao = 'diretor';
switch (permissao) {
    case 'comum':
        console.log('Usuario comum');
        break;
        case 'gerente':
            console.log('Usuario gerente');
            break;
            case 'diretor':
                console.log('Usuario Diretor');
                break;
                default:
                    console.log('usuario não reconhecido!')

}
 */

//Loops - for, while, do while, for in, for of,

/* for(let i = 0; i < 5; i++){
    console.log('Boa tarde!', i);
} */

/* for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0){//modulos
        console.log(i);
    }
}
 */

//While loop

/* let i = 5;
while(i >= 1){
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
} */

//do while
/* let i = 0;
do{
    console.log('digitando',i);
    i++;
} while(i < 10)
 */

//Laço for in
/* const pessoa = {
    nome: 'fabio',
    idade: 45
}
for (let key in pessoa){
    console.log(key, pessoa.nome, pessoa.idade);
}

const cores = ['vermelho', 'azul', 'branco'];
for(let indice in cores ){
    console.log(indice, cores[indice])
}
 */

//Laço for-of-
/* const cores = ['vermelho', 'azul', 'branco'];
for(let cor of cores){
    console.log(cor);
}
 */

//Escreva uma fução que usa dois numeros e retorna o maior entre else

let valorMaior = max(8,9);
console.log(valorMaior);

function max (n1, n2){

return n1 > n2 ? n1 : n2;

}




