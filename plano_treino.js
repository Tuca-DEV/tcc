import Treino from './treino.js';

class PlanoTreino {
    // Var's objetivo: treinos
    constructor() {
      this.qtTreinosAnual = undefined;
      this.datas = []
      this.fases = []
      this.treinos = [new Treino];
    }
    
  /*
    adicionarTreino(index, treino) {
      if (index >= 0 && index < this.treinos.length) {
        this.treinos[index].push(treino);
      } else {
        console.error("Índice fora do intervalo");
      }
    }
  
    obterTreinos(index) {
      if (index >= 0 && index < this.treinos.length) {
        return this.treinos[index];
      } else {
        console.error("Índice fora do intervalo");
        return null;
      }
    }
  
    listarTodosTreinos() {
      return this.treinos;
    }
      */
}

export default PlanoTreino