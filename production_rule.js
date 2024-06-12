import {binding} from './binding.js'

class Regra {
    constructor() {
      this.antecedente = []; // Vetor que armazena as cláusulas condicionais da regra
      this.variaveisAntecedente = []; // Atributo que armazena as variáveis envolvidas no antecedente
      this.acoesConsequente = []; // Atributo que armazena as funções caso todos os predicados em antecedente sejam verdadeiros
      this.strVariaveisConsequente = []; // Atributo que guarda o nome das variáveis que sofrerão mudanças no consequente
    }
  
    executarConsequente() {
        this.acoesConsequente.forEach(funcao => funcao());
    }
  }

//Knowledge base
var regras = new Array(10).fill(null).map(() => new Regra())

//Regra 0: Calculadora de dias de treino durante 1 ano de programação variando com a disponibilidade do usuário

regras[0].adicionarClausula(function() {return binding["Usuario.disponibilidade"].length > 0})
regras[0].adicionarFuncaoConsequente(calc_qtd_treinos_anual)
regras[0].variaveisAntecedente.push("Usuario.disponibilidade")
regras[0].variaveisConsequente.push("PlanoTreino.qtd_treinos_anual")

function calc_qtd_treinos_anual() {
    let atual = new Date() //Data atual do usuário ao criar plano de treinos
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
          binding["Usuario.planoTreino.datas"].push(new Date(dataIterada.valueOf()))
        }
    
        // Avançar para o próximo dia
        dataIterada.setDate(dataIterada.getDate() + 1);
    }
    
    binding["usuario.planoTreino.qtTreinosAnual"] = diasTreino;

}

//Regra 1: escolha exercício ID

regras[1].adicionarClausula(function() {return binding["Usuario.disponibilidade"].length > 0})
regras[1].adicionarFuncaoConsequente(calc_qtd_treinos_anual)
regras[1].variaveisAntecedente.push("Usuario.disponibilidade")
regras[1].variaveisConsequente.push("PlanoTreino.qtd_treinos_anual")



export var regras
export default Regra



  