import Treino from './treino.js';

export default class PlanoTreino {
    constructor(qtd_treinos_anual = undefined, fases = undefined) {
      this.qtd_treinos_anual = qtd_treinos_anual;
      this.datas = new Array(qtd_treinos_anual).fill(null)
      this.fases = fases;
      this.treinos = new Array(qtd_treinos_anual).fill(null).map(() => new Treino());
    }

    
  
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
}