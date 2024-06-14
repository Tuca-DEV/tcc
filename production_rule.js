import {binding} from './binding.js'

class Regra {
    constructor() {
      this.antecedente = []; // Vetor que armazena as cláusulas condicionais da regra
      this.nameVariaveisAntecedente = []; // Atributo que armazena as variáveis envolvidas no antecedente
      this.acoesConsequente = []; // Atributo que armazena as funções caso todos os predicados em antecedente sejam verdadeiros
      this.nameVariaveisConsequente = []; // Atributo que guarda o nome das variáveis que sofrerão mudanças no consequente
    }
  
    executarConsequente() {
        this.acoesConsequente.forEach(funcao => funcao());
    }
  }

//Knowledge base
var regras = new Array(10).fill(null).map(() => new Regra())

////Regra 0: Calculadora de dias de treino durante 1 ano de programação variando com a disponibilidade do usuário

regras[0].antecedente.push(function() {return binding["Usuario.disponibilidade"].length > 0})
regras[0].acoesConsequente.push(normDisp, calc_qtd_treinos_anual)
regras[0].nameVariaveisAntecedente.push("Usuario.disponibilidade")
regras[0].nameVariaveisConsequente.push("Usuario.planoTreino.qtTreinosAnual", "Usuario.planoTreino.datas")

function calc_qtd_treinos_anual() {
    binding["Usuario.disponibilidade"]
    let atual = new Date() //Data atual do usuário ao criar plano de treinos
    let final = new Date(atual.getFullYear() + 1, atual.getMonth(), atual.getDate()+1) //Data após 1 ano
    
    let dataIterada = new Date(atual.valueOf())
    dataIterada.setDate(dataIterada.getDate() + 1)//Avanço de 1 dia
    let diasTreino = 0

    while (dataIterada.valueOf() <= final.valueOf()) {
        // Obter o dia da semana (0 = domingo, 1 = segunda, ..., 6 = sábado)
        var diaSemana = dataIterada.getDay();
    
        // Verificar se o dia da semana está na disponibilidade do usuário
        if (binding["Usuario.disponibilidade"].includes(diaSemana)) {
          diasTreino++;
          binding["Usuario.planoTreino.datas"].push(new Date(dataIterada.valueOf()))
        }
    
        // Avançar para o próximo dia
        dataIterada.setDate(dataIterada.getDate() + 1);
    }
    
    binding["Usuario.planoTreino.qtTreinosAnual"] = diasTreino;

}

//Normalizar os dados para tipo inteiro em Usuario.disponibilidade
function normDisp(){
  binding["Usuario.disponibilidade"].forEach((day, i) => {
    binding["Usuario.disponibilidade"][i] = parseInt(day)
  })
}

////Regra 1: Definição das fases OPT a serem utilizadas

// Caso o objetivo do usuário já tenha sido definido
regras[1].antecedente.push(function() {return binding["Usuario.objetivo"].length > 0}) 
regras[1].acoesConsequente.push(defineFases)
regras[1].nameVariaveisAntecedente.push("Usuario.objetivo")
regras[1].nameVariaveisConsequente.push("Usuario.planoTreino.fases")

// Função que define as fases de acordo com o objetivo
function defineFases() { 
  switch(binding["Usuario.objetivo"]) {
    case "emagrecimento":
      binding["Usuario.planoTreino.fases"].push(1, 2)
      break
    case "hipertrofia":
      binding["Usuario.planoTreino.fases"].push(1, 2, 3, 4)
      break
    case "esporte":
      binding["Usuario.planoTreino.fases"].push(1, 2, 3, 4, 5)
      break
    default:
      console.log("Objetivo não definido, valor: "+binding["Usuario.objetivo"]+"\n")
  }
}



export {regras}



  