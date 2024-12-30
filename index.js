function verificarSala(sala, salasComTesouro, salasComMonstro) {
  if (salasComTesouro.includes(sala)) {
    return "Tesouro na sala " + sala + "!";
  } else if (salasComMonstro.includes(sala)) {
    return "Monstro na sala " + sala + "!";
  } else {
    return "Sala " + sala + " vazia.";
  }
}

function explorarMasmorra(totalSalas, salasComTesouro, salasComMonstro) {
  for (let sala = 2; sala <= totalSalas; sala++) { // Inicia o loop em 2
    console.log(verificarSala(sala, salasComTesouro, salasComMonstro));
  }
}

// Lendo a entrada do usuário
const totalSalas = parseInt(gets());

// Definindo as salas com tesouros e monstros (pode ser personalizado)
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

// Explorando a masmorra
explorarMasmorra(totalSalas, salasComTesouro, salasComMonstro);