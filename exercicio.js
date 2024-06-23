class Exercicio {
    constructor() {
      this.idExerc = null;
      this.nome = null;
      this.nivelOpt = null; // Fase OPT mais recomendada para o exercício ser utilizado
      this.dificuldade = null; // 1 a 3 (iniciante, intermediário, avançado)
      this.intensidade = null; // 1 a 3: Refere-se ao nível de consumo de O2 do exercício ou a quantidade de carga relativa (exercícios que podem utilizar muito peso)
      this.mainMusc = null // Músculo mais recrutado
      this.tipoSubTreino = null; // Cardio - WarmUp - Core - Resistência
      this.tempExecMedio = null; // LentoExcêntrico - Controlado - Rápido
      this.repeticoes = null; // Quantidade de repetições por série
      this.agrupMusc = []; // Agrupamentos musculares recrutados
      this.restricoes = []; // Comorbidade ou antiga lesão do usuário que o proibirá ou limitará de realizar o exercício
    }
  }
  
  export default Exercicio