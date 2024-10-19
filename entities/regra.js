class Regra {
    constructor() {
      this.antecedente = []; // Vetor que armazena as cláusulas condicionais da regra
      this.nameVariaveisAntecedente = []; // Atributo que armazena as variáveis envolvidas no antecedente
      this.acoesConsequente = []; // Atributo que armazena as funções caso todos os predicados em antecedente sejam verdadeiros
      this.nameVariaveisConsequente = []; // Atributo que guarda o nome das variáveis que sofrerão mudanças no consequente
      this.exp = null // Atributo string que armazena a explicação da regra
      this.used = false;
    }
  
    executarConsequente() {
        this.acoesConsequente.forEach(funcao => funcao());
    }
  }

  export default Regra