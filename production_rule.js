

class Regra {
    constructor() {
      this.antecedente = []; // Vetor que armazena as cláusulas condicionais da regra
      this.variaveisAntecedente = []; // Atributo que armazena as variáveis envolvidas no antecedente
      this.acoesConsequente = []; // Atributo que armazena as funções caso todos os predicados em antecedente sejam verdadeiros
      this.variaveisConsequente = []; // Atributo que guarda as variáveis que sofrerão mudanças no consequente
    }
  
    adicionarClausula(clausula) {
      this.antecedente.push(clausula);
    }
  
    adicionarVariavelAntecedente(variavel) {
      this.variaveisAntecedente.push(variavel);
    }
  
    adicionarFuncaoConsequente(funcao) {
      this.acoesConsequente.push(funcao);
    }
  
    adicionarVariavelConsequente(variavel) {
      this.variaveisConsequente.push(variavel);
    }
  
    verificarAntecedente() {
      return this.antecedente.every(clausula => clausula());
    }
  
    executarConsequente() {
      if (this.verificarAntecedente()) {
        this.acoesConsequente.forEach(funcao => funcao());
      }
    }
  }

//Knowledge base
var regras = new Array(10).fill(null).map(() => new Regra())

//Regra 0: Calculadora de dias de treino durante 1 ano de programação variando com a disponibilidade do usuário

regras[0].adicionarClausula(
  function(usuario) {
    if(usuario.disponibilidade > 0){return true} 
    else {return false}
  }
) 
regras[0].adicionarClausula(() => usuario.disponibilidade.length > 0)
regras[0].adicionarFuncaoConsequente(calc_qtd_treinos_anual())
regras[0].variaveisAntecedente.push("Usuario.disponibilidade")
regras[0].variaveisConsequente.push("PlanoTreino.qtd_treinos_anual")



export function calc_qtd_treinos_anual(usuario) {
    let atual = new Date() //Data atual do usuário
    let final = new Date(atual.getFullYear() + 1, atual.getMonth(), atual.getDate()+1) //Data após 1 ano
    
    let dataIterada = new Date(atual.valueOf())
    dataIterada.setDate(dataIterada.getDate() + 1)//Avanço de 1 dia
    let diasTreino = 0

    while (dataIterada.valueOf() <= final.valueOf()) {
        // Obter o dia da semana (0 = domingo, 1 = segunda, ..., 6 = sábado)
        var diaSemana = dataIterada.getDay();
    
        // Verificar se o dia da semana está na disponibilidade do usuário
        if (usuario.disponibilidade.includes(diaSemana)) {
          diasTreino++;
          usuario.plano_treino.datas.push(new Date(dataIterada.valueOf()))
        }
    
        // Avançar para o próximo dia
        dataIterada.setDate(dataIterada.getDate() + 1);
    }
    
    usuario.plano_treino.qtd_treinos_anual = diasTreino;

}


export default Regra

/*
let idade = 20;

const regra = new Regra();
regra.adicionarClausula(() => idade > 18);
regra.adicionarVariavelAntecedente('idade');
regra.adicionarFuncaoConsequente(() => console.log('Idade é maior que 18.'));
regra.adicionarVariavelConsequente('mensagem');

regra.executarConsequente(); // Isso vai imprimir: "Idade é maior que 18."

*/

  