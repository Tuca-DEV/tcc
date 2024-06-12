class TabExercicios {
    // Var's objetivo: idExercicios
    constructor(tipo) {
      this.idExercicios = []
      this.nomeExercicios = []
      this.tempoDescanso = []
      this.repeticoes = []
      this.sets = []
      this.modTempoExec = [] // LentoExcêntrico - Controlado - Rápido
      this.tipo = tipo; // Cardio - WarmUp - Core - Resistência
    }
  
    // Método para adicionar um exercício
    adicionarExercicio(index, id, nome, descanso, repeticoes, sets, modExec) {
      if (index >= 0 && index < this.idExercicios.length) {
        this.idExercicios[index] = id;
        this.nomeExercicios[index] = nome;
        this.tempoDescanso[index] = descanso;
        this.repeticoes[index] = repeticoes;
        this.sets[index] = sets;
        this.modTempoExec[index] = modExec;
      } else {
        console.error("Índice fora do intervalo");
      }
    }
  
    // Método para obter os dados de um exercício
    obterExercicio(index) {
      if (index >= 0 && index < this.idExercicios.length) {
        return {
          id: this.idExercicios[index],
          nome: this.nomeExercicios[index],
          descanso: this.tempoDescanso[index],
          repeticoes: this.repeticoes[index],
          sets: this.sets[index],
          modExec: this.modTempoExec[index]
        };
      } else {
        console.error("Índice fora do intervalo");
        return null;
      }
    }
  
    // Método para listar todos os exercícios
    listarExercicios() {
      const exercicios = [];
      for (let i = 0; i < this.idExercicios.length; i++) {
        if (this.idExercicios[i] !== null) {
          exercicios.push(this.obterExercicio(i));
        }
      }
      return exercicios;
    }
  }

export default TabExercicios