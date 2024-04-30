
function calcularMedia(avaliacoes) {
    for(let i = 0; i < avaliacoes.length; i++){// Loop sobre todas as avaliações no array
        soma += avaliacoes[i]; //Adiciona cada avaliação à soma total
    }
    return soma / avaliacoes.length;//Retorna a média dividindo a soma pelo número total de avali
}

//Avaliações do curso
let avaliacoes = [7.8, 9.2, 6.5, 8.1, 7.3];
//Calcule a média arredondada para o número inteiro mais próximo 