class TabExercicios {
    // Var's objetivo: idExercicios
    constructor(tipo) {
      this.idExercicios = [] // Qual o exercício
      this.nomeExercicios = []
      this.tempoDescanso = [] // Tempo de descanso entre sets (em segundos)
      this.tempoTotal = [] // Tempo total para executar todas as repetições (em segundos), sem contar o descanso entre séries
      this.repeticoes = [] // Repetições por set
      this.intensidade = [] // Carga em % de RM(Repetição máxima) ou intensidade de consumo de O2(1 a 3) ou NA (Não aplicável)
      this.sets = [] // Quantidade de agrupamentos de repetições 
      this.modTempoExec = [] // LentoExcêntrico(4/2/1) - Controlado(2/0/2) - Rápido(1/0/1) - Médio(1/1/1) - NA (Não aplicável)
      this.tipo = tipo; // WarmUp(0) - Core(1) - Resistência(2) - Cardio(3)
    }
  
  }

export default TabExercicios