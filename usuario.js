
import PlanoTreino from './plano_treino.js'

class Usuario {
  // Var's objetivo: planoTreino
  constructor() {
    //Cadastradas
    this.id = undefined;
    this.nome = undefined;
    this.idade = undefined;
    //Perguntadas
    this.altura = undefined;
    this.peso = undefined;
    this.sexo = undefined;
    this.objetivo = undefined;
    this.disponibilidade = [];
    this.nivel = undefined;
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
  