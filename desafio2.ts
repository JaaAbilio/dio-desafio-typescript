// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

// Resosta

enum Trabalho {
    Programadora,
    Padeiro,
    Jornalista,
    Marcineiro,
    Atriz
};

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
};

let people_3: Humano = {
    nome: 'Raquel',
    idade: 31,
    profissao: Trabalho.Jornalista
};

let people_2: Humano = {
    nome: 'Roberta',
    idade: 19,
    profissao: Trabalho.Programadora
};

let people_1: Humano = {
    nome: 'Laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let people: Humano = {
    nome: "Jonas",
    idade: 33,
    profissao: Trabalho.Padeiro
}