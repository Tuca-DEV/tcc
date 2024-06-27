import {binding} from './binding.js'
import Treino from './treino.js'

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

////Regra 0: Inicializa o array de treinos calcuando os dias de treino durante 1 ano de programação variando de acordo com o objetivo do usuário e a disponibilidade semanal

regras[0].antecedente.push(function() {return binding["Usuario.disponibilidade"].length > 0}) // Se disponibilidade foi definido
regras[0].antecedente.push(function() {return binding["Usuario.objetivo"].length > 0}) // Se o objetivo foi definido
regras[0].antecedente.push(function() {return binding["Usuario.nivel"] > 0}) // Se o nível foi definido
regras[0].acoesConsequente.push(normNivel, normDisp, calc_qtd_treinos_anual)
regras[0].nameVariaveisAntecedente.push("Usuario.disponibilidade", "Usuario.objetivo", "Usuario.nivel")
regras[0].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data")

function calc_qtd_treinos_anual() {

    var first = true // Primeiro treino a ser definido?
    var atual = new Date() //Data atual do usuário ao criar plano de treinos
    var final = new Date(atual.getFullYear() + 1, atual.getMonth(), atual.getDate()+1) //Data após 1 ano
    var semanaNoMes = Array.from({ length: 12 }, () => []) // Matriz que carregará os dias de treino das semanas de cada mês
    var disp = []
    // Passagem dos valores, não do objeto Array (Tomar cuidado com a passagem de valores por referência)
    binding["Usuario.disponibilidade"].forEach(dia => {
      disp.push(dia)
    })
  
    switch (binding["Usuario.objetivo"]) {
      case "emagrecimento": // Para usuários iniciantes, os 6 primeiros meses são 3 dias e os últimos 4. Para usuários intermediários/avançados 4 dias todo ano
        if(binding["Usuario.nivel"] == 1) { // Usuário iniciante
          if(disp.length >= 4){ // 4 ou mais dias disponíveis
            while(disp.length > 4){ // Remove dias extras
              var index = Math.floor(Math.random() * disp.length)
              disp.splice(index,1)
            }
            // Armazena a frequência dos 6 últimos mêses
            for(var i = 6; i < 12; i++){
              for(var item of disp){
                semanaNoMes[i].push(item)
              }
              
            }
            // Diminui para 3 dias
            var i = Math.floor(Math.random() * disp.length) 
            disp.splice(index,1)
            // Armazena a frequência dos 6 primeiros mêses
            for(var i = 0; i < 6; i++){
              for(var item of disp){
                semanaNoMes[i].push(item)
              }
            }

          } else { // 3 ou menos dias disponíveis
            while(disp.length < 3){ // Adiciona dias aleatórios da semana para cobrir os treinos necessários
              var i = Math.floor(Math.random() * 7)
              if(!disp.includes(i)){disp.push(i)}
            }
            // Armazena a frequência dos primeiros 6 mêses
            for(var i = 0; i < 6; i++){
              for(var item of disp){
                semanaNoMes[i].push(item)
              }
            }

            while(disp.length < 4){ // Adiciona dias aleatórios da semana para cobrir os treinos necessários
              var i = Math.floor(Math.random() * 7)
              if(!disp.includes(i)){disp.push(i)}
            }
            // Armazena a frequência dos 6 últimos mêses
            for(var i = 6; i < 12; i++){ 
              for(var item of disp){
                semanaNoMes[i].push(item)
              }
            }

          }
        } else { // Usuário intermediário ou avançado
          if(disp.length > 4){ // Mais de 4 dias disponíveis
            while(disp.length > 4){ // Remove dias extras
              var index = Math.floor(Math.random() * disp.length)
              disp.splice(index,1)
            }
          } else if (disp.length < 4) { // Menos de 4 dias disponíveis
            while(disp.length < 4){ // Adiciona dias aleatórios da semana para cobrir os treinos necessários
              var i = Math.floor(Math.random() * 7)
              if(!disp.includes(i)){disp.push(i)}
            }
          }
          for(var i = 0; i < 12; i++){
            for(var item of disp){
              semanaNoMes[i].push(item)
            }
          }
        }
        break;
      case "hipertrofia":
        if(binding["Usuario.nivel"] == 1){
          if(disp.length >= 5){ // Se o usuário tem 5 ou mais dias disponíveis na semana
            while(disp.length > 5){
              var index = Math.floor(Math.random() * disp.length)
              disp.splice(index,1)
            }  
            for(var i = 0; i < 12; i++){
              if(i >= 8 && i <= 10){ // Para os meses SEP, OCT, NOV
                for(var item of disp){
                  semanaNoMes[i].push(item)
                }
              }
            }
            // Tira 1 dia aleatório
            var index = Math.floor(Math.random() * disp.length)
            disp.splice(index,1)

            for(var i = 0; i < 12; i++){
              if(i >= 2 && i <= 5 || i == 11){ // Para os meses MAR, APR, MAY, JUN, DEC
                for(var item of disp){
                  semanaNoMes[i].push(item)
                }
              }
            }

            // Tira 1 dia aleatório
            var index = Math.floor(Math.random() * disp.length)
            disp.splice(index,1)

            for(var i = 0; i < 12; i++){
              if(i == 0 || i == 1 || i == 6 || i == 7){ // Para os meses JAN, FEV, JUL, AUG
                for(var item of disp){
                  semanaNoMes[i].push(item)
                }
              }
            }

          } else if (disp.length == 4){ // Usuário tem 4 dias disponíveis


          } else { // Usuário tem 3 ou menos dias disponíveis


          }
        } else { // Usuário intermediário ou avançado
          if(disp.length >= 5){ // Se o usuário tem 5 ou mais dias disponíveis na semana
            while(disp.length > 5){
              var index = Math.floor(Math.random() * disp.length)
              disp.splice(index,1)
            }  

            for(var i = 0; i < 12; i++){
              if((i >= 2 && i <= 5) || i >= 8 && i <= 10){ // Para os meses MAR, APR, MAY, JUN, SEP, OCT, NOV
                for(var item of disp){
                  semanaNoMes[i].push(item)
                }
              }
            }
            // Tira 1 dia aleatório
            var index = Math.floor(Math.random() * disp.length)
            disp.splice(index,1)

            for(var i = 0; i < 12; i++){
              if(i == 0 || i == 1 || i == 6 || i == 7 || i == 11){ // Para os meses JAN, FEV, JUL, AUG, DEC
                for(var item of disp){
                  semanaNoMes[i].push(item)
                }
              }
            }

          } else { // Tem 4 ou menos dias de disponibilidade
            while(disp.length < 4){ // Adiciona dias aleatórios da semana para cobrir os treinos necessários
              var i = Math.floor(Math.random() * 7)
              if(!disp.includes(i)){disp.push(i)}
            }

            for(var i = 0; i < 12; i++){
              if(i == 0 || i == 1 || i == 6 || i == 7 || i == 11){ // Para os meses JAN, FEV, JUL, AUG, DEC
                for(var item of disp){
                  semanaNoMes[i].push(item)
                }
              }
            }

            while(disp.length < 5){ // Adiciona dias aleatórios da semana para cobrir os treinos necessários
              var i = Math.floor(Math.random() * 7)
              if(!disp.includes(i)){disp.push(i)}
            }

            for(var i = 0; i < 12; i++){
              if((i >= 2 && i <= 5) || i >= 8 && i <= 10){ // Para os meses MAR, APR, MAY, JUN, SEP, OCT, NOV
                for(var item of disp){
                  semanaNoMes[i].push(item)
                }
              }
            }

          }      
          
        }
        break;
      case "esporte": // Define 3 dias de treino semanais de acordo com a disponibilidade do usuário
        if(disp.length > 3){
          while(disp.length > 3){
            var index = Math.floor(Math.random() * disp.length)
            disp.splice(index,1)
          }
        } else if (disp.length < 3){
          while(disp.length < 3){ // Adiciona dias aleatórios da semana para cobrir os treinos necessários
            var i = Math.floor(Math.random() * 7)
            if(!disp.includes(i)){disp.push(i)}
          }
        }
        for(var i = 0; i < 12; i++){
          for(var item of disp){
            semanaNoMes[i].push(item)
          }
        }
        break;
      default:
        console.log("ERRO, OBJETIVO DO USUÁRIO ZUADO");
    }
  
    
    var dataIterada = new Date(atual.valueOf())
    dataIterada.setDate(dataIterada.getDate() + 1)//Avanço de 1 dia

    while (dataIterada.valueOf() <= final.valueOf()) {
        // Obter o dia da semana (0 = domingo, 1 = segunda, ..., 6 = sábado)
        var diaSemana = dataIterada.getDay();
        var mes = dataIterada.getMonth()
    
        // Se o planejamento inclui este dia dessa semana e estamos definindo o primeiro treino dele
        if (semanaNoMes[mes].includes(diaSemana) && first) {
          binding["Usuario.planoTreino.treinos"][0].data = new Date(dataIterada.valueOf())
          first = false
        // Se o planejamento inclui este dia dessa semana
        } else if (semanaNoMes[mes].includes(diaSemana)) {
          binding["Usuario.planoTreino.treinos"].push(new Treino(new Date(dataIterada.valueOf())))
        }
    
        // Avançar para o próximo dia
        dataIterada.setDate(dataIterada.getDate() + 1);
    }
}

//Normalizar os dados para tipo inteiro em Usuario.disponibilidade
function normDisp(){
  binding["Usuario.disponibilidade"].forEach((day, i) => {
    binding["Usuario.disponibilidade"][i] = parseInt(day)
  })
}
//Normalizar os dados para tipo inteiro em Usuario.nivel
function normNivel(){
  binding["Usuario.nivel"] = parseInt(binding["Usuario.nivel"])
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

//// Regra 2
/*
regras[2].antecedente.push(function() {return binding["Usuario.objetivo"].length > 0}) 
regras[2].acoesConsequente.push(defineFases)
regras[2].nameVariaveisAntecedente.push("Usuario.objetivo")
regras[2].nameVariaveisConsequente.push("Usuario.planoTreino.fases")
*/

export {regras}



  