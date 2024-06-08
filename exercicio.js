export default class Exercicio {
  constructor(id_exerc, nivel_opt, dificuldade, intensidade, nome, agrup_musc = [], tipo_sub_treino, temp_exec_medio, repeticoes, restricoes = []) {
    this.id_exerc = id_exerc;
    this.nivel_opt = nivel_opt;
    this.dificuldade = dificuldade;
    this.intensidade = intensidade;
    this.nome = nome;
    this.agrup_musc = agrup_musc;
    this.tipo_sub_treino = tipo_sub_treino;
    this.temp_exec_medio = temp_exec_medio;
    this.repeticoes = repeticoes;
    this.restricoes = restricoes;
  }
}