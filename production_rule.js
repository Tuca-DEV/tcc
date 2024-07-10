import {binding} from './binding.js'
import Treino from './treino.js'

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

//Knowledge base
var regras = new Array(10).fill(null).map(() => new Regra())

////Regra 0: Inicializa o array de treinos calcuando os dias de treino durante 1 ano de programação para usuário que quer EMAGRECER e é INICIANTE
regras[0].antecedente.push(() => binding["Usuario.disponibilidade"].length > 0) // Se disponibilidade foi definido
regras[0].antecedente.push(() => binding["Usuario.objetivo"] == "emagrecimento") // Se o objetivo é emagrecimento
regras[0].antecedente.push(() => binding["Usuario.nivel"] == 1) // Se o nível é iniciante
regras[0].acoesConsequente.push(normNivel, normDisp, regra0)
regras[0].nameVariaveisAntecedente.push("Usuario.disponibilidade", "Usuario.objetivo", "Usuario.nivel")
regras[0].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data")
regras[0].exp = "Para usuários que querem emagrecer e iniciantes, os 6 primeiros meses são 3 dias, e os últimos 4 dias"

// Emag -> Nivel 1
function regra0() {
    var semanaNoMes = Array.from({ length: 12 }, () => []) // Matriz que carregará os dias da semanas de treino de cada mês
    var disp = []
    // Passagem dos valores, não do objeto Array (Tomar cuidado com a passagem de valores por referência)
    binding["Usuario.disponibilidade"].forEach(dia => {
      disp.push(dia)
    })

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

  calc_qtd_treinos_anual(semanaNoMes)
}

////Regra 1: Inicializa o array de treinos calcuando os dias de treino durante 1 ano de programação para usuário que quer EMAGRECER e é INTERMEDIÁRIO/AVANÇADO
regras[1].antecedente.push(() => binding["Usuario.disponibilidade"].length > 0) // Se disponibilidade foi definida
regras[1].antecedente.push(() => binding["Usuario.objetivo"] == "emagrecimento") // Se o objetivo é emagrecimento
regras[1].antecedente.push(() => binding["Usuario.nivel"] > 1) // Se o nível é intermediário/avançado
regras[1].acoesConsequente.push(normNivel, normDisp, regra1)
regras[1].nameVariaveisAntecedente.push("Usuario.disponibilidade", "Usuario.objetivo", "Usuario.nivel")
regras[1].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data")
regras[1].exp = "Para usuários que querem emagrecer e tem nível intermediários/avançado, a frequência semanal durante todo o ano é de 4 dias"

// Emag -> Nivel 2/3
function regra1() {
  var semanaNoMes = Array.from({ length: 12 }, () => []) // Matriz que carregará os dias da semanas de treino de cada mês
  var disp = []
  // Passagem dos valores, não do objeto Array (Tomar cuidado com a passagem de valores por referência)
  binding["Usuario.disponibilidade"].forEach(dia => {
    disp.push(dia)
  })

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

  calc_qtd_treinos_anual(semanaNoMes)
}

////Regra 2: Inicializa o array de treinos calcuando os dias de treino durante 1 ano de programação para usuário que quer HIPERTROFIA e é INICIANTE
regras[2].antecedente.push(() => binding["Usuario.disponibilidade"].length > 0) // Se disponibilidade foi definida
regras[2].antecedente.push(() => binding["Usuario.objetivo"] == "hipertrofia") // Se o objetivo é hipertrofia
regras[2].antecedente.push(() => binding["Usuario.nivel"] == 1) // Se o nível é iniciante
regras[2].acoesConsequente.push(normNivel, normDisp, regra2)
regras[2].nameVariaveisAntecedente.push("Usuario.disponibilidade", "Usuario.objetivo", "Usuario.nivel")
regras[2].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data")
regras[2].exp = "Para usuários que querem hipertrofia e são iniciantes, JAN,FEV,JUL,AGO: 3 dias; MAR,ABR,MAI,JUN,DEZ: 4 dias; SET,OUT,NOV: 5 dias"

// Hip -> Nivel 1
function regra2() {
  var semanaNoMes = Array.from({ length: 12 }, () => []) // Matriz que carregará os dias da semanas de treino de cada mês
  var disp = []
  // Passagem dos valores, não do objeto Array (Tomar cuidado com a passagem de valores por referência)
  binding["Usuario.disponibilidade"].forEach(dia => {
    disp.push(dia)
  })

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
    for(var i = 0; i < 12; i++){
      if(i >= 2 && i <= 5 || i == 11){ // Para os meses MAR, APR, MAY, JUN, DEC
        for(var item of disp){
          semanaNoMes[i].push(item)
        }
      }
    }

    var diaAdicionado;
    while(disp.length < 5){ // Adiciona dias aleatórios da semana para cobrir os treinos necessários
      var i = Math.floor(Math.random() * 7)
      if(!disp.includes(i)){disp.push(i); diaAdicionado = i;}
    }

    for(var i = 0; i < 12; i++){
      if(i >= 8 && i <= 10){ // Para os meses SEP, OCT, NOV
        for(var item of disp){
          semanaNoMes[i].push(item)
        }
      }
    }

    disp.pop() // Remove o último dia (que é aleatório) que foi adicionado
    while(disp.length > 3){
      var index = Math.floor(Math.random() * disp.length)
      disp.splice(index,1)
    }  

    for(var i = 0; i < 12; i++){
      if(i == 0 || i == 1 || i == 6 || i == 7){ // Para os meses JAN, FEV, JUL, AUG
        for(var item of disp){
          semanaNoMes[i].push(item)
        }
      }
    }

  } else { // Usuário tem 3 ou menos dias disponíveis
    for(var i = 0; i < 12; i++){
      if(i == 0 || i == 1 || i == 6 || i == 7){ // Para os meses JAN, FEV, JUL, AUG
        for(var item of disp){
          semanaNoMes[i].push(item)
        }
      }
    }

    while(disp.length < 4){ // Adiciona dias aleatórios da semana para cobrir os treinos necessários
      var i = Math.floor(Math.random() * 7)
      if(!disp.includes(i)){disp.push(i)}
    }

    for(var i = 0; i < 12; i++){
      if(i >= 2 && i <= 5 || i == 11){ // Para os meses MAR, APR, MAY, JUN, DEC
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
      if(i >= 8 && i <= 10){ // Para os meses SEP, OCT, NOV
        for(var item of disp){
          semanaNoMes[i].push(item)
        }
      }
    }
  }

  calc_qtd_treinos_anual(semanaNoMes)
}

////Regra 3: Inicializa o array de treinos calcuando os dias de treino durante 1 ano de programação para usuário que quer HIPERTROFIA e é INTERMEDIÁRIO/AVANÇADO
regras[3].antecedente.push(() => binding["Usuario.disponibilidade"].length > 0) // Se disponibilidade foi definida
regras[3].antecedente.push(() => binding["Usuario.objetivo"] == "hipertrofia") // Se o objetivo é hipertrofia
regras[3].antecedente.push(() => binding["Usuario.nivel"] > 1) // Se o nível é intermediário/avançado
regras[3].acoesConsequente.push(normNivel, normDisp, regra3)
regras[3].nameVariaveisAntecedente.push("Usuario.disponibilidade", "Usuario.objetivo", "Usuario.nivel")
regras[3].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data")
regras[3].exp = "Para usuários que querem hipertrofia e são intermediário/avançado, JAN,FEV,JUL,AGO,DEZ: 4 dias; MAR,ABR,MAI,JUN,SET,OUT,NOV: 5 dias"

// Hip -> Nivel 2/3
function regra3() {
  var semanaNoMes = Array.from({ length: 12 }, () => []) // Matriz que carregará os dias da semanas de treino de cada mês
  var disp = []
  // Passagem dos valores, não do objeto Array (Tomar cuidado com a passagem de valores por referência)
  binding["Usuario.disponibilidade"].forEach(dia => {
    disp.push(dia)
  })

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

  calc_qtd_treinos_anual(semanaNoMes)
}

////Regra 4: Inicializa o array de treinos calcuando os dias de treino durante 1 ano de programação para usuário que quer ESPORTES
regras[4].antecedente.push(() => binding["Usuario.disponibilidade"].length > 0) // Se disponibilidade foi definida
regras[4].antecedente.push(() => binding["Usuario.objetivo"] == "esporte") // Se o objetivo é hipertrofia
regras[4].acoesConsequente.push(normNivel, normDisp, regra4)
regras[4].nameVariaveisAntecedente.push("Usuario.disponibilidade", "Usuario.objetivo")
regras[4].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data")
regras[4].exp = "Para todos os usuários que querem aprimoramento em esportes: 3 dias de frequência semanal no ano todo"

// Esp
function regra4() {
  var semanaNoMes = Array.from({ length: 12 }, () => []) // Matriz que carregará os dias da semanas de treino de cada mês
  var disp = []
  // Passagem dos valores, não do objeto Array (Tomar cuidado com a passagem de valores por referência)
  binding["Usuario.disponibilidade"].forEach(dia => {
    disp.push(dia)
  })

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

  calc_qtd_treinos_anual(semanaNoMes)
}

function calc_qtd_treinos_anual(semanaNoMes){
  var first = true // Primeiro treino a ser definido?
  var atual = new Date() //Data atual do usuário ao criar plano de treinos
  var final = new Date(atual.getFullYear() + 1, atual.getMonth(), atual.getDate()+1) //Data após 1 ano

  var dataIterada = new Date(atual.valueOf())
  dataIterada.setDate(dataIterada.getDate() + 1)//Avanço de 1 dia
  var pMes = dataIterada.getMonth();//Qual o primeiro mês

  while (dataIterada.valueOf() <= final.valueOf()) {
      // Obter o dia da semana (0 = domingo, 1 = segunda, ..., 6 = sábado)
      var diaSemana = dataIterada.getDay();
      var mes = mesRelativo(dataIterada.getMonth(), pMes); //Retorna o mês relativo ao primeiro mês de criação do treino
  
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

//Padroniza os meses de acordo com o mês de criação do treino
function mesRelativo(mesAbs, pMes){
  if(mesAbs < pMes){
    return mesAbs + (12 - pMes);
  }else{
    return mesAbs - pMes;
  }
}

//Converter os dados para tipo inteiro em Usuario.disponibilidade
function normDisp(){
  binding["Usuario.disponibilidade"].forEach((day, i) => {
    binding["Usuario.disponibilidade"][i] = parseInt(day)
  })
}
//Converter os dados para tipo inteiro em Usuario.nivel
function normNivel(){
  binding["Usuario.nivel"] = parseInt(binding["Usuario.nivel"])
}

////Regra 5: Definição das fases OPT a serem utilizadas por usuários com objetivo de emagrecimento
regras[5].antecedente.push(() => binding["Usuario.objetivo"].length > 0) 
regras[5].acoesConsequente.push(defineFases)
regras[5].nameVariaveisAntecedente.push("Usuario.objetivo")
regras[5].nameVariaveisConsequente.push("Usuario.planoTreino.fases")
regras[5].exp = "aa"

// Função que define as fases de acordo com o objetivo
function defineFases() { 
  switch(binding["Usuario.objetivo"]) {
    case "emagrecimento":
      for(var i = 0; i < 12; i++){
        if(i%2==0){
          binding["Usuario.planoTreino.fases"].push(1)
        } else {
          binding["Usuario.planoTreino.fases"].push(2)
        }
      }
      break
    case "hipertrofia":
      binding["Usuario.planoTreino.fases"].push(1, 2, 3, 2, 3, 4, 1, 2, 3, 4, 3, 2)
      break
    case "esporte":
      binding["Usuario.planoTreino.fases"].push(1, 2)
      for(var i = 2; i < 12; i++){
        if(i%2==0){
          binding["Usuario.planoTreino.fases"].push([1,2,5])
        } else {
          binding["Usuario.planoTreino.fases"].push([2,5])
        }
      }
      break
    default:
      console.log("Objetivo não definido, valor: "+binding["Usuario.objetivo"]+"\n")
  }
}

export {regras}



