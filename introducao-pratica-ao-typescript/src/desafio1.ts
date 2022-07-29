// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

//Resposta 1:

let employee1: {name: string, code: number} = {
    name: "John",
    code: 10
}

//Resposta 2 - Utilizando inferência:

let employee2 = {
    name: "John",
    code: 10
}

//Resposta 3 - Utilizando interface:

interface Iemployee {
    name: string,
    code: number
}

let employee3: Iemployee = {
    name: "John",
    code: 10
}