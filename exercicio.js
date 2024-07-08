class Exercicio {
    constructor() {
      this.idExerc = null;
      this.nome = null;
      this.nivelOpt = null; // Fase OPT mais recomendada para o exercício ser utilizado
      this.dificuldade = null; // 1 a 3 (iniciante, intermediário, avançado)
      this.tipo = null; // (Máquina, PesoLivre, Bola, Kettlebell, BodyWeight)
      this.tipoSubTreino = null; // Cardio - WarmUp - Core - Resistência
      this.agrupMusc = []; // Agrupamentos musculares recrutados

      //this.tempExecMedio = null; // LentoExcêntrico - Controlado - Rápido
      //this.repeticoes = null; // Quantidade de repetições por série
    }
  }
  
  export default Exercicio