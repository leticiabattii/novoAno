//Letícia Abatti
//  Função para verificar a faixa etária
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else if (idade >= 18 && idade <= 65) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}
// Função para simular um sistema de login
function loginSistema(usuario, senha) {
    if (usuario === "admin" && senha === "1234") {
        return "Login bem-sucedido";
    } else {
        return "Usuário ou senha incorretos";
    }
}

// Função para aplicar desconto com base em código
function aplicarDesconto(valor, codigoDesconto) {
    if (codigoDesconto === "DESC10") {
        return valor * 0.9;
    } else if (codigoDesconto === "DESC20") {
        return valor * 0.8;
    } else {
        return valor;
    }
}

// Função para classificar um número
function classificarNumero(numero) {
    if (numero === 0) {
        return "Zero";
    } else if (numero > 0 && numero % 2 === 0) {
        return "Positivo e Par";
    } else if (numero > 0) {
        return "Positivo e Ímpar";
    } else {
        return "Negativo";
    }
}

// Função para classificar a nota de um aluno
function classificarNota(nota) {
    if (nota >= 9) {
        return "Excelente";
    } else if (nota >= 7) {
        return "Bom";
    } else if (nota >= 5) {
        return "Regular";
    } else {
        return "Insuficiente";
    }
}

// 6. Função para verificar se o ano é bissexto
function verificarAnoBissexto(ano) {
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é ano bissexto";
    }
}


console.log(verificarIdade(20)); // Deve imprimir: Adulto
console.log(loginSistema("admin", "1234")); // Deve imprimir: Login bem-sucedido
console.log(aplicarDesconto(100, "DESC10")); // Deve imprimir: 90
console.log(classificarNumero(-5)); // Deve imprimir: Negativo
console.log(classificarNota(8)); // Deve imprimir: Bom
console.log(verificarAnoBissexto(2024)); // Deve imprimir: Ano bissexto