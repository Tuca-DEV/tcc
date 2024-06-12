import TabExercicios from './tabexercicios.js';

class Treino {
    // Var's objetivo: tabExercicios
    constructor() {
      this.data = null;
      this.fase = null;
      this.tempoTotal = null;
      this.volume = null;
      this.intensidade = null;
      this.agrupMusc = [];
      this.tabExercicios = [new TabExercicios("WarmUp"), new TabExercicios("Core"), new TabExercicios("Resistência"), new TabExercicios("Core")]; 
    }
  
    /*
    // Método para adicionar um TabExercicios
    adicionarTabExercicios(index, tabExercicios) {
      if (index >= 0 && index < this.tab_exercicios.length) {
        this.tab_exercicios[index] = tabExercicios;
      } else {
        console.error("Índice fora do intervalo");
      }
    }
  
    // Método para obter um TabExercicios
    obterTabExercicios(index) {
      if (index >= 0 && index < this.tab_exercicios.length) {
        return this.tab_exercicios[index];
      } else {
        console.error("Índice fora do intervalo");
        return null;
      }
    }
  
    // Método para listar todos os TabExercicios
    listarTodosTabExercicios() {
      return this.tab_exercicios;
    }
      */
  }
  
export default Treino