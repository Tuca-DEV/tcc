class TabExercicios {
    constructor(z = 10, tipo = "resistencia") {
      // Inicializando os vetores com o tamanho z (Quantidade de exercícios) e o tipo de treino
      this.id_exercicios = new Array(z).fill(null);
      this.nome_exercicios = new Array(z).fill(null);
      this.tempo_descanso = new Array(z).fill(null);
      this.repeticoes = new Array(z).fill(null);
      this.sets = new Array(z).fill(null);
      this.mod_t_exec = new Array(z).fill(null);
      this.tipo = tipo;
    }
  
    // Método para adicionar um exercício
    adicionarExercicio(index, id, nome, descanso, repeticoes, sets, modExec) {
      if (index >= 0 && index < this.id_exercicios.length) {
        this.id_exercicios[index] = id;
        this.nome_exercicios[index] = nome;
        this.tempo_descanso[index] = descanso;
        this.repeticoes[index] = repeticoes;
        this.sets[index] = sets;
        this.mod_t_exec[index] = modExec;
      } else {
        console.error("Índice fora do intervalo");
      }
    }
  
    // Método para obter os dados de um exercício
    obterExercicio(index) {
      if (index >= 0 && index < this.id_exercicios.length) {
        return {
          id: this.id_exercicios[index],
          nome: this.nome_exercicios[index],
          descanso: this.tempo_descanso[index],
          repeticoes: this.repeticoes[index],
          sets: this.sets[index],
          modExec: this.mod_t_exec[index]
        };
      } else {
        console.error("Índice fora do intervalo");
        return null;
      }
    }
  
    // Método para listar todos os exercícios
    listarExercicios() {
      const exercicios = [];
      for (let i = 0; i < this.id_exercicios.length; i++) {
        if (this.id_exercicios[i] !== null) {
          exercicios.push(this.obterExercicio(i));
        }
      }
      return exercicios;
    }
  }

export default TabExercicios