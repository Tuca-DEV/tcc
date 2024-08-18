class TabExercicios {
    // Var's objetivo: idExercicios
    constructor(tipo) {
      this.idExercicios = [] // Qual o exercício
      this.nomeExercicios = []
      this.tempoDescanso = [] // Tempo de descanso entre sets (em segundos)
      this.tempoExec = [] // Tempo de cada repetição (em segundos)
      this.repeticoes = [] // Repetições por set
      this.intensidade = [] // Carga em % de RM(Repetição máxima) ou intensidade de consumo de O2(1 a 3) ou NA (Não aplicável)
      this.sets = [] // Quantidade de agrupamentos de repetições 
      this.modTempoExec = [] // LentoExcêntrico - Controlado - Rápido - NA (Não aplicável)
      this.tipo = tipo; // Cardio - WarmUp - Core - Resistência
    }
  
  }

export default TabExercicios