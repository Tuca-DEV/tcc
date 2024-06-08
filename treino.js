import TabExercicios from './tabexercicios.js';

export default class Treino {
  constructor(id = null, data = '', fase = null, agrup_musc = [], tempototal = null, volume = null, intensidade = null) {
    this.id = id;
    this.data = data;
    this.fase = fase;
    this.agrup_musc = agrup_musc;
    this.tempototal = tempototal;
    this.volume = volume;
    this.intensidade = intensidade;
    this.tab_exercicios = new Array(4).fill(null).map(() => new TabExercicios()); // Assume que cada TabExercicios tem 5 exercícios
  }

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
}
