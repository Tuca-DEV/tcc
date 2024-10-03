import PlanoTreino from './plano_treino.js'

class Usuario {
  // Var's objetivo: planoTreino
  constructor() {
    //Cadastradas
    this.id = null;
    this.nome = null;
    this.idade = null;
    this.sexo = null;
    //Perguntadas
    this.altura = null;
    this.peso = null;
    this.objetivo = null;
    this.disponibilidade = [];
    this.nivel = null;
    //Inferida
    this.planoTreino = new PlanoTreino;
  }

}

export default Usuario 
  