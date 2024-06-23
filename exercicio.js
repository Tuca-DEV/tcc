class Exercicio {
    constructor() {
      this.idExerc = null;
      this.nome = null;
      this.nivelOpt = null; // Fase OPT mais recomendada para o exercício ser utilizado
      this.dificuldade = null; // 1 a 3 (iniciante, intermediário, avançado)
      this.tipoSubTreino = null; // Cardio - WarmUp - Core - Resistência
      this.tempExecMedio = null; // LentoExcêntrico - Controlado - Rápido
      this.repeticoes = null; // Quantidade de repetições por série
      this.agrupMusc = []; // Agrupamentos musculares recrutados
    }
  }
  
  export default Exercicio