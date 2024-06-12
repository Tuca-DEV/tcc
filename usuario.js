
import PlanoTreino from './plano_treino.js'

class Usuario {
  // Var's objetivo: planoTreino
  constructor() {
    //Cadastradas
    this.id = null;
    this.nome = null;
    this.idade = null;
    //Perguntadas
    this.altura = null;
    this.peso = null;
    this.sexo = null;
    this.objetivo = null;
    this.disponibilidade = [];
    this.nivel = null;
    this.comorbidades = [];
    this.antLesoes = [];
    //Inferida
    this.planoTreino = new PlanoTreino;
  }


/*
  definirPlanoTreino(planoTreino) {
    this.plano_treino = new PlanoTreino();
  }
  */
 
}

export default Usuario 
  