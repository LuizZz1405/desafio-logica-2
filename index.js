/* Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
*/

function calcRanks(victories, defeats) {
    let status = [
        ["Mathew", 9, 1],
        ["Dexter", 15, 5],
        ["Daniel", 43, 14],
        ["Joe", 69, 15],
        ["Barry", 85, 4],
        ["Walter", 100, 1],
        ["Joker", 101, 0],
    ]

    for (let i = 0; i < status.length; i++) {
        let name = status[i][0]
        let victories = status[i][1]
        let defeats = status[i][2]
        let rank = victories - defeats
        let position

        if (rank < 10 ) {
            position = "Ferro";
        } else if (rank >= 11 && rank <= 20) {
            position = "Bronze";
        } else if (rank >= 21 && rank <= 50) {
            position = "Prata";
        } else if (rank >= 51 && rank <= 80) {
            position = "Ouro";
        } else if (rank >= 81 && rank <= 90) {
            position = "Diamante";
        } else if (rank >= 91 && rank <= 100) {
            position = "Lendário";
        } else if (rank >= 101) {
            position = "Imortal";
        } else {
            position = "Radiante";
        }

        console.log("O rank do jogador " + name + " é " + position)
    }
}


calcRanks();
