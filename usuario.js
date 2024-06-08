
import PlanoTreino from './plano_treino.js'

class Usuario {
  constructor(id = null, nome = null, idade = null, sexo = null, peso = null, altura = null, objetivo = null, disponibilidade = [], nivel = null, comorbidades = [], ant_lesoes = []) {
    //Cadastradas
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    //Perguntadas
    this.altura = altura;
    this.peso = peso;
    this.sexo = sexo;
    this.objetivo = objetivo;
    this.disponibilidade = disponibilidade;
    this.nivel = nivel;
    this.comorbidades = comorbidades;
    this.ant_lesoes = ant_lesoes;
    //Inferida
    this.plano_treino = new PlanoTreino();
  }


/*
  definirPlanoTreino(planoTreino) {
    this.plano_treino = new PlanoTreino();
  }
  */
 
}

export default Usuario 
  