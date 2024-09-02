import TabExercicios from './tabexercicios.js';

class Treino {
    // Var's objetivo: tabExercicios
    constructor(data) {
      this.data = data; // Dia, mês e ano do treino
      this.fase = null; // Fase OPT
      this.tempoTotal = null; // Tempo total somando todas as execuções de todos os exercícios mais os tempos de descanso
      this.volume = null; // Quantidade de sets total somando das seções Core e Resistência
      this.intensidade = null; // Intensidade de carga/consumo de O2 por tempo 
      this.agrupMusc = []; // Array que contém os agrupamentos musculares a serem trabalhados no treino
      this.tabExercicios = [new TabExercicios("WarmUp"), new TabExercicios("Core"), new TabExercicios("Resistência"), new TabExercicios("Cardio")]; // Seções da folha de treino
    }
}
  
export default Treino