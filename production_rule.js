import {binding} from './binding.js'
import Treino from './treino.js'
import {exercicios} from './exercicios.js'

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
var regras = new Array(30).fill(null).map(() => new Regra())

////Regra 0: Inicializa o array de treinos calcuando os dias de treino durante 1 ano de programação para usuário que quer EMAGRECER e é INICIANTE
regras[0].antecedente.push(() => binding["Usuario.disponibilidade"].length > 0) // Se disponibilidade foi definido
regras[0].antecedente.push(() => binding["Usuario.objetivo"] == "emagrecimento") // Se o objetivo é emagrecimento
regras[0].antecedente.push(() => binding["Usuario.nivel"] == 1) // Se o nível é iniciante
regras[0].acoesConsequente.push(normNivel, normDisp, regra0)
regras[0].nameVariaveisAntecedente.push("Usuario.disponibilidade", "Usuario.objetivo", "Usuario.nivel")
regras[0].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
regras[0].exp = "Regra 0: Para usuários que querem emagrecer e iniciantes, os 6 primeiros meses são 3 dias, e os últimos 4 dias"

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
regras[1].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
regras[1].exp = "Regra 1: Para usuários que querem emagrecer e tem nível intermediários/avançado, a frequência semanal durante todo o ano é de 4 dias"

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
regras[2].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
regras[2].exp = "Regra 2: Para usuários que querem hipertrofia e são iniciantes, JAN,FEV,JUL,AGO: 3 dias; MAR,ABR,MAI,JUN,DEZ: 4 dias; SET,OUT,NOV: 5 dias"

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

    while(disp.length < 3){ // Adiciona dias aleatórios da semana para cobrir os treinos necessários
      var i = Math.floor(Math.random() * 7)
      if(!disp.includes(i)){disp.push(i)}
    }

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
regras[3].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
regras[3].exp = "Regra 3: Para usuários que querem hipertrofia e são intermediário/avançado, JAN,FEV,JUL,AGO,DEZ: 4 dias; MAR,ABR,MAI,JUN,SET,OUT,NOV: 5 dias"

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
regras[4].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
regras[4].exp = "Regra 4: Para todos os usuários que querem aprimoramento em esportes: 3 dias de frequência semanal no ano todo"

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
  binding["Usuario.planoTreino.freqNoMes"] = semanaNoMes
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
regras[5].antecedente.push(() => binding["Usuario.objetivo"] == "emagrecimento") 
regras[5].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data instanceof Date) // Datas definidas 
regras[5].acoesConsequente.push(regra5)
regras[5].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data")
regras[5].nameVariaveisConsequente.push("Usuario.planoTreino.fases", "Usuario.planoTreino.treinos.fase")
regras[5].exp = "Regra 5: Caso o usuário queira emagrecer, haverá uma intercalação entre fases 1 e 2 do modelo OPT durante os meses"

// Função que define as fases durante os meses
function regra5() { 
  for(var i = 0; i < 12; i++){
    if(i%2==0){
      binding["Usuario.planoTreino.fases"].push(1)
    } else {
      binding["Usuario.planoTreino.fases"].push(2)
    }
  } 

  calcOptTreino();
}

////Regra 6: Definição das fases OPT a serem utilizadas por usuários com objetivo de hipertrofia
regras[6].antecedente.push(() => binding["Usuario.objetivo"] == "hipertrofia") 
regras[6].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data instanceof Date) // Datas definidas 
regras[6].acoesConsequente.push(regra6)
regras[6].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data")
regras[6].nameVariaveisConsequente.push("Usuario.planoTreino.fases", "Usuario.planoTreino.treinos.fase")
regras[6].exp = "Regra 6: Caso o usuário queira hipertrofia muscular, haverá a seguinte ordem de fases opt durante os meses: 1, 2, 3, 2, 3, 4, 1, 2, 3, 4, 3, 2"

// Função que define as fases durante os meses
function regra6() { 
  binding["Usuario.planoTreino.fases"].push(1, 2, 3, 2, 3, 4, 1, 2, 3, 4, 3, 2)

  calcOptTreino();
}

////Regra 7: Definição das fases OPT a serem utilizadas por usuários com objetivo de esporte
regras[7].antecedente.push(() => binding["Usuario.objetivo"] == "esporte") 
regras[7].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data instanceof Date) // Datas definidas 
regras[7].acoesConsequente.push(regra7)
regras[7].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data")
regras[7].nameVariaveisConsequente.push("Usuario.planoTreino.fases", "Usuario.planoTreino.treinos.fase")
regras[7].exp = "Regra 7: Caso o usuário queira desenvolvimento para esportes, os primeiros dois meses serão fase 1 e 2, respectivamente. Os próximos meses utilizarão mais de 1 fase por mês, seguindo uma intercalação de fases (1, 2 e 5) com (2 e 5)"

// Função que define as fases durante os meses
function regra7() { 
  binding["Usuario.planoTreino.fases"].push(1, 2)
  for(var i = 2; i < 12; i++){
    if(i%2==0){
      binding["Usuario.planoTreino.fases"].push([1,2,5])
    } else {
      binding["Usuario.planoTreino.fases"].push([2,5])
    }
  }

  calcOptTreino()
}

// Define a fase OPT para cada treino singular
function calcOptTreino(){
  var treinos = binding["Usuario.planoTreino.treinos"]
  var faseNoMes = binding["Usuario.planoTreino.fases"]
  var pMes = treinos[0].data.getMonth() //Mês de criação do treino
  var intercala = 0 // Variável para intercalar os treinos de diferentes fases OPT no mesmo mês

  for(var i = 0; i < treinos.length; i++){
    var mes = mesRelativo(treinos[i].data.getMonth(), pMes) // Mês relativo (mês de criação = 0)

    if(faseNoMes[mes] instanceof Array){ // Se o Mês tem mais de 1 fase OPT
      if(faseNoMes[mes][intercala] == undefined){faseNoMes[mes][intercala] = 1} // Correção de erro
      treinos[i].fase = faseNoMes[mes][intercala] // Recebe a fase OPT referente ao mês e a intercalação

      if(faseNoMes[mes].length == 3){// Se há 3 tipos de fase OPT no mesmo mês
        intercala = (intercala+1)%3
      } else if (faseNoMes[mes].length == 2){// Se há 2 tipos de fase OPT no mesmo mês
        intercala = (intercala+1)%2
      }
    }else{ // Apenas uma fase OPT no mesmo mês
      treinos[i].fase = faseNoMes[mes]
    }
  }
}

////Regra 8: Define os agrupamentos musculares trabalhados em cada treino
regras[8].antecedente.push(() => binding["Usuario.planoTreino.freqNoMes"] != null)  // Frequência no mês definida
regras[8].antecedente.push(() => binding["Usuario.planoTreino.treinos"].length > 1) // Os treinos foram definidos
regras[8].acoesConsequente.push(regra8)
regras[8].nameVariaveisAntecedente.push("Usuario.planoTreino.freqNoMes", "Usuario.planoTreino.treinos.data")
regras[8].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.agrupMusc")
regras[8].exp = "Regra 8: Os agrupamentos musculares trabalhados em cada dia são definidos de acordo com a frequência diária das semanas naquele mês."

// Função que define os agrupamentos musculares de cada treino
function regra8() { 
  var semanaNoMes = binding["Usuario.planoTreino.freqNoMes"]
  var treinos = binding["Usuario.planoTreino.treinos"]
  var pMes = treinos[0].data.getMonth()
  var intercala = 0

  var freq3 = [["Peito", "Ombro", "Tríceps"], ["Pernas"], ["Costas", "Bíceps"]]
  var freq4 = [["Peito", "Ombro", "Tríceps"], ["Pernas","Costas", "Bíceps"]]
  var freq5 = [["Peito"], ["Pernas", "Isquiotibiais", "Quadríceps", "Panturrilha"], ["Costas"], ["Ombro"], ["Bíceps", "Tríceps"]]

  for(var i = 0; i < treinos.length; i++){
    var mes = mesRelativo(treinos[i].data.getMonth(), pMes)
    
    if(treinos[i].agrupMusc[0] == "Cardio"){ // Se já foi definido como Cardio, não sobrescrever e ir para o próximo treino
      continue
    }

    if(semanaNoMes[mes].length == 3){
      if(intercala > (freq3.length-1)){intercala = 0}

      treinos[i].agrupMusc = freq3[intercala]
      intercala++
    } else if (semanaNoMes[mes].length == 4){
      if(intercala > (freq4.length-1)){intercala = 0}

      treinos[i].agrupMusc = freq4[intercala]
      intercala++
    } else if (semanaNoMes[mes].length == 5) {
      if(intercala > (freq5.length-1)){intercala = 0}

      treinos[i].agrupMusc = freq5[intercala]
      intercala++
    } else {
      console.log("ERRO na Regra 8")
    }
  }
}

////Regra 9: Seleciona os exercícios de cardio para usuários que querem hipertrofiar ou esporte
regras[9].antecedente.push(() => binding["Usuario.objetivo"] == "hipertrofia" || binding["Usuario.objetivo"] == "esporte") 
regras[9].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data instanceof Date) // Datas definidas 
regras[9].acoesConsequente.push(regra9)
regras[9].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data")
regras[9].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.idExercicios", "Usuario.planoTreino.treinos.tabExercicios.tempoTotal")
regras[9].exp = "Regra 9: Se o usuário quer hipertrofiar ou esportes, terá cardio de 10 minutos em todos os treinos na seção WarmUp"

// Função que define as fases durante os meses
function regra9() { 
  var selectedExercs = []
  var treinos = binding["Usuario.planoTreino.treinos"]

  // Seleção de exercícios cardio com pouca dificuldade
  exercicios.forEach((ex) => {
    if(ex.tipoSubTreino == "Cardio" && ex.dificuldade == 1){selectedExercs.push(ex)}
  })

  for(var i = 0; i < treinos.length; i++){
    var index = Math.round(Math.random()*(selectedExercs.length - 1)) // Seleção de um exercício aleatoriamente

    treinos[i].tabExercicios[0].idExercicios.push(selectedExercs[index].idExerc)
    treinos[i].tabExercicios[0].nomeExercicios.push(selectedExercs[index].nome)
    treinos[i].tabExercicios[0].tempoTotal.push(10*60)
  }
}

////Regra 10: Seleciona os exercícios de cardio para usuários que querem emagrecer
regras[10].antecedente.push(() => binding["Usuario.objetivo"] == "emagrecimento") 
regras[10].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data instanceof Date) // Datas definidas 
regras[10].antecedente.push(() => binding["Usuario.planoTreino.freqNoMes"] != null)  // Frequência no mês definida
regras[10].antecedente.push(() => binding["Usuario.nivel"] > 0)  // Nível do usuário definido
regras[10].acoesConsequente.push(regra10)
regras[10].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes", "Usuario.nivel")
regras[10].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.idExercicios", "Usuario.planoTreino.treinos.tabExercicios.tempoTotal")
regras[10].exp = "Regra 10: Se o usuário quer emagrecer, se a frequência semanal do mês é de 3 dias de treino: cardio de 20 minutos todos os dias, se a frequência semanal do mês é de 4 dias de treino: cardio exclusivo em um dia, e nos outros 3: cardio de 20 minutos."

// Função que define os cardios nos treinos
function regra10() { 
  var selectedExerc =[]
  var treinos = binding["Usuario.planoTreino.treinos"]
  var freqDoMes = binding["Usuario.planoTreino.freqNoMes"]
  var diaSemana = 1

  // Seleção de exercícios cardio 
  exercicios.forEach((ex) => {
    if(ex.tipoSubTreino == "Cardio"){selectedExerc.push(ex)}
  })

  for(var i = 0; i < treinos.length; i++){
    var mesAtual = mesRelativo(treinos[i].data.getMonth(), treinos[0].data.getMonth())
    var index = Math.round(Math.random()*(selectedExerc.length - 1))

    if(freqDoMes[mesAtual].length == 3){
      treinos[i].tabExercicios[3].idExercicios.push(selectedExerc[index].idExerc)
      treinos[i].tabExercicios[3].nomeExercicios.push(selectedExerc[index].nome)
      treinos[i].tabExercicios[3].tempoTotal.push(1200)

    } else if (freqDoMes[mesAtual].length == 4){
      if(diaSemana < 4) { // Se não é o quarto dia de treino daquela semana
        treinos[i].tabExercicios[3].idExercicios.push(selectedExerc[index].idExerc)
        treinos[i].tabExercicios[3].nomeExercicios.push(selectedExerc[index].nome)
        treinos[i].tabExercicios[3].tempoTotal.push(1200)

      } else {
        var treinoTempoTotal = 0
        treinos[i].agrupMusc = ["Cardio"]

        while(treinoTempoTotal < (60*60)){ // Enquanto o tempo total não ultrapassar 1 hora
          index = Math.round(Math.random()*(selectedExerc.length - 1))

          treinos[i].tabExercicios[3].idExercicios.push(selectedExerc[index].idExerc)
          treinos[i].tabExercicios[3].nomeExercicios.push(selectedExerc[index].nome)
          treinos[i].tabExercicios[3].tempoTotal.push(20*60)

          treinoTempoTotal += (20*60)
        }

      }

      diaSemana++
      if(diaSemana > 4){diaSemana = 1}
      
    } else {
      console.log("ERRO: Valor de frequência errado!\n")
    }

  }
}


////Regra 11: Seleciona os exercícios para o core de cada treino
regras[11].antecedente.push(() => binding["Usuario.objetivo"] != null) // Objetivo definido
regras[11].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data instanceof Date) // Datas definidas 
regras[11].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].fase > 0) // Fases dos treinos definidas
regras[11].antecedente.push(() => binding["Usuario.idade"] > 0) // Idade do usuário definida
regras[11].antecedente.push(() => binding["Usuario.nivel"] > 0) // Nível do usuário definido
regras[11].acoesConsequente.push(regra11)
regras[11].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.treinos.fase", "Usuario.idade", "Usuario.nivel")
regras[11].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.idExercicios")
regras[11].exp = "Regra 11: Filtragem dos exercícios para o Core mais adequado para cada treino com base nas notas\n Se o exercício é recomendado para a fase OPT do treino: nota + 0.65\n Se o exercício tem dificuldade 2, o usuário é idoso e o treino é dos primeiros meses: nota - 0.65\n Se o nível do usuário é superior ou igual a dificuldade do exercício: nota + 0.15. Se não: nota - 0.15\n Se o exercício é realizado com pesos livres ou kettlebell e o usuário é iniciante: nota -0.1. Se não: +0.1\nCaso o exercício não seja de core ou o usuário é idoso e o exercício é dificuldade 3, não selecionar o exercício"

function regra11() { 
  var treinos = binding["Usuario.planoTreino.treinos"]
  var quantExercs

  for(var i = 0; i < treinos.length; i++){
    //Condições de Eliminação caso verdadeiras
    var condElimina = [function(id){if(exercicios[id].tipoSubTreino != "Core"){return true} return false}]// Se o exercício não é da seção Core, elimine
    condElimina.push(function(id){if(binding["Usuario.idade"] > 60 && exercicios[id].dificuldade == 3){return true}; return false}) // Se o Usuário é idoso (>60) e esse é um exercício de dificuldade 3, elimine-o

    //Condições de nota
    var condNota = [function(id){if(exercicios[id].niveisOpt.includes(treinos[i].fase)){return 0.65} return 0}] // Se a fase OPT do Treino é compatível com uma das fases OPT recomendadas do exercício, +0.65
    condNota.push(function(id){ // Se o usuário é idoso, o exercício é de dificuldade 2, e o treino é dos 3 primeiros mêses, -0.2
      if(binding["Usuario.idade"] > 60 && exercicios[id].dificuldade == 2 && mesRelativo(treinos[i].data.getMonth(), treinos[0].data.getMonth()) < 4){
        return -0.2
      }
      return 0}) 
    condNota.push(function(id){if(binding["Usuario"].nivel >= exercicios[id].dificuldade){return 0.15} return -0.15}) // Se o usuário tem um nível igual ou superior a dificuldade deste exercício, +0.2. Se não, -0.2
    condNota.push(function(id){if(binding["Usuario"].nivel == 1 && exercicios[id].tipo == "Kettlebell" || exercicios[id].tipo == "PesoLivre"){return -0.2} return 0.1}) // Se o usuário tem um nível 1 e o exercício é realizado com pesos livres ou Kettlebell, -0.1. Se não (é Máquina ou Bola ou BodyWeight), +0.1
   
    

    // Se o treino é de Cardio ou Pernas, não haverá treino para Core
    if(treinos[i].agrupMusc == "Cardio" || treinos[i].agrupMusc == "Perna"){ // Baseado na ideia de que treinos de Cardio e Perna tem muito impacto, logo, sobrecarga na coluna. Caso o sistema de sustentação do corpo (Core) esteja enfraquecido, lesões podem ocorrer na coluna vertebral do aluno
      continue
    }

    var exerciciosComNota = notaExerc(condElimina, condNota, 0.1)

    //Definindo a quantidade de Exercícios para o Core neste treino
    if(treinos[i].fase == 1){
      quantExercs = 4
    } else if (treinos[i].fase == 5){
      quantExercs = 3
    } else { // Fases OPT 2, 3 ou 4
      if(Math.random() >= 0.5){ // Aleatoriedade de 50% para ser 2 ou 3 exercícios de Core neste treino em específico
        quantExercs = 3
      } else {
        quantExercs = 2
      }
    }

    while(quantExercs > 0){
      quantExercs--
      var id = exerciciosComNota[quantExercs][0]
      treinos[i].tabExercicios[1].idExercicios.push(id) 
      treinos[i].tabExercicios[1].nomeExercicios.push(exercicios[id].nome)
    }

  }
}

////Regra 12: Seleciona os exercícios de resistência de cada treino
regras[12].antecedente.push(() => binding["Usuario.objetivo"] != null) // Objetivo definido
regras[12].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data instanceof Date) // Datas definidas 
regras[12].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].fase > 0) // Fases dos treinos definidas
regras[12].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].agrupMusc.length > 0) // Agrupamento muscular definido
regras[12].antecedente.push(() => binding["Usuario.idade"] > 0) // Idade do usuário definida
regras[12].antecedente.push(() => binding["Usuario.nivel"] > 0) // Nível do usuário definido
regras[12].acoesConsequente.push(regra12)
regras[12].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.treinos.fase", "Usuario.planoTreino.treinos.agrupMusc","Usuario.idade", "Usuario.nivel")
regras[12].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.idExercicios")
regras[12].exp = "Regra 12: Filtragem dos exercícios da seção Resistência mais adequado para cada treino com base nas notas\n Se o exercício é recomendado para a fase OPT do treino: nota + 0.65\n Se o exercício tem dificuldade 2, o usuário é idoso e o exercício é dos primeiros mêses: nota -0.2.\n Se o nível do usuário é superior a da dificuldade do exercício: nota + 0.1.\n Se o exercício tem a mesma dificuldade que o nível do usuário: +0.2\n Se o exercício é realizado com pesos livres ou kettlebell e o usuário é iniciante: nota -0.2. Se não: +0.1\n"

function regra12() { 
  var treinos = binding["Usuario.planoTreino.treinos"]
  var quantExercs

  for(var i = 0; i < treinos.length; i++){
    //Condições de Eliminação caso verdadeiras
    var condElimina = [function(id){if(exercicios[id].tipoSubTreino != "Resistência"){return true} return false}]// Se o exercício não é da seção Resistência, elimine
    condElimina.push(function(id){ // Se o treino não apresenta nenhum dos agrupamentos musculares trabalhados no exercício, elimine-o
      for(var c = 0; c < exercicios[id].agrupMusc.length; c++){
        if(treinos[i].agrupMusc.includes(exercicios[id].agrupMusc[c].toString())){return false}
      }
      return true
    })
    condElimina.push(function(id){if(binding["Usuario.idade"] > 60 && exercicios[id].dificuldade == 3){return true}; return false}) // Se o Usuário é idoso (>60) e esse é um exercício de dificuldade 3, elimine-o

    //Condições de nota
    var condNota = [function(id){if(exercicios[id].niveisOpt.includes(treinos[i].fase)){return 0.4} return 0}] // Se a fase OPT do Treino é compatível com uma das fases OPT recomendadas do exercício, +0.65
    condNota.push(function(id){ // Se o usuário é idoso, o exercício é de dificuldade 2, e o treino é dos 3 primeiros mêses, -0.2
      if(binding["Usuario.idade"] > 60 && exercicios[id].dificuldade == 2 && mesRelativo(treinos[i].data.getMonth(), treinos[0].data.getMonth()) < 4){
        return -0.2
      }
      return 0}) 
    condNota.push(function(id){if(binding["Usuario.nivel"] == exercicios[id].dificuldade){return 0.2} return 0}) // Se o usuário tem um nível igual a dificuldade deste exercício, +0.25.
    condNota.push(function(id){if(binding["Usuario.nivel"] > exercicios[id].dificuldade){return 0.1} return 0}) // Se o usuário tem um nível superior a dificuldade deste exercício, +0.1.
    condNota.push(function(id){if(binding["Usuario.nivel"] == 1 && (exercicios[id].tipo == "Kettlebell" || exercicios[id].tipo == "PesoLivre")){return -0.2} return 0.1}) // Se o usuário tem um nível 1 e o exercício é realizado com pesos livres ou Kettlebell, -0.1. Se não (é Máquina ou Bola ou BodyWeight), +0.1
   
    if(treinos[i].agrupMusc == "Cardio"){ // Se o treino é de Cardio, não terá anaeróbico
      continue
    }

    var exerciciosComNota = notaExerc(condElimina, condNota, 0.2)

    //Definindo a quantidade de Exercícios de Resistência neste treino
    switch(treinos[i].fase){
      case 1:
        quantExercs = 6
        break
      case 2:
        quantExercs = 6
        break
      case 3: 
        if(Math.random() > 0.6){
          quantExercs = 8
        } else {
          quantExercs = 7
        }
        break
      case 4:
        quantExercs = 6
        break
      case 5:
        quantExercs = 7
        break
      default:
        console.log("ERRO: fase em regra 12 com valor indefinido!")
        return
    }

    while(quantExercs > 0){
      quantExercs--
      var id = exerciciosComNota[quantExercs][0]
     
      treinos[i].tabExercicios[2].idExercicios.push(id) 
      treinos[i].tabExercicios[2].nomeExercicios.push(exercicios[id].nome)
    }

  }
}


////Regra 13: Seleciona os exercícios de WarmUp de cada treino
regras[13].antecedente.push(() => binding["Usuario.nivel"] > 0) // Nível do usuário definido
regras[13].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].fase > 0) // Fases dos treinos definidas
regras[13].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].agrupMusc.length > 0) // Agrupamento muscular definido
regras[13].acoesConsequente.push(regra13)
regras[13].nameVariaveisAntecedente.push("Usuario.nivel", "Usuario.planoTreino.treinos.fase","Usuario.planoTreino.treinos.agrupMusc")
regras[13].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.idExercicios")
regras[13].exp = "Regra 13: Filtragem dos exercícios da seção WarmUp mais adequado para cada treino de acordo com os músculos a serem utilizados no treino.\n Se o nível do usuário for maior ou igual à dificuldade do exercício, ele recebe mais chances de ser selecionado"

function regra13() { 
  var treinos = binding["Usuario.planoTreino.treinos"]
  var quantExercs

  for(var i = 0; i < treinos.length; i++){

    //Condições de Eliminação caso verdadeiras
    var condElimina = [function(id){if(exercicios[id].tipoSubTreino != "Alongamento" && exercicios[id].tipoSubTreino != "Mobilidade"){return true} return false}]// Se o exercício não é da seção Resistência, elimine-o
    condElimina.push(function(id){ // Se o treino não apresenta nenhum dos agrupamentos musculares trabalhados no exercício, elimine-o
      var treinoAgrupMusc = []
      
      if(treinos[i].agrupMusc[0] == "Cardio"){ // Caso o agrupamento seja "Cardio", um ajuste deve ser feito para podermos analisar os agrupamentos de fato
        treinoAgrupMusc.push("Pernas", "Isquiotibiais", "Quadríceps", "Panturrilha")
      } else {
        treinoAgrupMusc = treinos[i].agrupMusc
      }

      for(var c = 0; c < exercicios[id].agrupMusc.length; c++){
        if(treinoAgrupMusc.includes(exercicios[id].agrupMusc[c])){return false}
      }
      return true
    })

    //Condições de nota
    var condNota = [function(id){if(binding["Usuario.nivel"] >= exercicios[id].dificuldade){return 0.1} return 0}] // Se o nível do usuário é maior ou igual à dificuldade do exercício, +0.1
   
    var exerciciosComNota = notaExerc(condElimina, condNota, 0.1)

    //Definindo a quantidade de Exercícios de Resistência neste treino
    if(treinos[i].fase == 1){
      quantExercs = 2
    } else if (treinos[i].fase == 5){
      quantExercs = 4
    } else if (treinos[i].fase >= 2 && treinos[i].fase <= 4){
      quantExercs = 3
    } else {
      console.log("ERRO: fase em regra 12 com valor indefinido!")
        return
    }

    while(quantExercs > 0){
      quantExercs--
      var id = exerciciosComNota[quantExercs][0]

      if(id < 0){
        console.log(treinos[i])
        console.log()
        console.log()
      }
      
      treinos[i].tabExercicios[0].idExercicios.push(id) 
      treinos[i].tabExercicios[0].nomeExercicios.push(exercicios[id].nome)
    }

  }
}
  
  

function notaExerc(condElimina, condNota, rand){
  var selecaoExercs = Array.from({ length: exercicios.length }, () => [-10, -10])

  for(var i = 0; i < exercicios.length; i++){

    var nota = 0; 

    // Se alguma condição de eliminação for satisfeita, nota recebe -0.9
    for(var c = 0; c < condElimina.length; c++){
      if(condElimina[c](exercicios[i].idExerc)){nota = -0.9; break;}  
    }

    if(nota == -0.9){continue} // Se a nota for -0.9, não selecionar este exercício e ver o próximo

   
    for(var c = 0; c < condNota.length; c++){
      nota += condNota[c](exercicios[i].idExerc)
    }

    nota += Math.random()*rand
    

    if(nota >= 0){ // Se o exercício tem nota positiva, selecione-o

      for(var c = 0; c < selecaoExercs.length; c++){
        if(nota >= selecaoExercs[c][1]){ // Se a nota dada a este exercício for maior que um dos exercício selecionados
          selecaoExercs.splice(c, 0, [exercicios[i].idExerc, nota]) // Insere o exercício nesta posição
          break
        }
      }
      
    }

  }

  return selecaoExercs
}

////Regra 14: Define as intensidades de todos os exercícios
regras[14].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data != null) // Datas definidas
regras[14].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].fase > 0) // Fases OPT dos treinos definidas
regras[14].antecedente.push(() => binding["Usuario.planoTreino.treinos.tabExercicios"][0].idExercicios.length > 0) // Exercícios já selecionados
regras[14].acoesConsequente.push(regra14)
regras[14].nameVariaveisAntecedente.push("Usuario.planoTreino.treinos.data", "Usuario.planoTreino.treinos.fase", "Usuario.planoTreino.treinos.tabExercicios.idExercicios")
regras[14].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.intensidade")
regras[14].exp = "Regra 14: Para todo WarmUp: NA \n Para Core, na fase 1: NA ou 10%BW para exercícios com bola medicinal\n Para Resistência, na fase 1: 50-70%RM; 2: 70-80%RM; 3: 75-85%RM; 4: 85-100%; 5: 30-45%RM/85-100%RM\n Para cardio, na fase 1: 1-2; na fase 2: 2-3\n * Em WarmUp, caso o exercício seja cardio, intensidade é 1"

function regra14() { 
  var treinos = binding["Usuario.planoTreino.treinos"]
  
  for(var i = 0; i < treinos.length; i++){

    for(var secao = 0; secao < treinos[i].tabExercicios.length; secao++){
      var tabela = treinos[i].tabExercicios[secao] // Tabela da seção "secao"
      var mes = mesRelativo(treinos[i].data.getMonth(), treinos[0].data.getMonth()) // Mês relativo do treino (primeiro(0), segundo(1), terceiro(2)...)
      var c = 0;

      switch(secao){
        case 0: // WarmUp
          
          // Para todas as fases OPT, caso o exercício não seja Cardio, ele receberá intensidade NA, caso seja Cardio, intensidade 1
          while(c < tabela.idExercicios.length){
            if(exercicios[tabela.idExercicios[c]].tipoSubTreino == "Cardio"){ // Se o exercício é tipo Cardio
              tabela.intensidade[c] = 1
            } else {
              tabela.intensidade[c] = "NA"
            }
            c++
          }
          break

        case 1: // Core

          // Para todas as fases OPT, Core exercises receberão intensidade NA
          while(c < tabela.idExercicios.length){
            if(exercicios[tabela.idExercicios[c]].tipo == "Bola"){
              tabela.intensidade[c] = "10% BW"
            }else {
              tabela.intensidade[c] = "NA"
            }
            c++
          }
          break

        case 2: // Resistência
        
          switch(treinos[i].fase){ // Fases OPT do treino
            case 1:
              var intensidade = 0; 
              if(mes >= 0 && mes <= 3){ // Para os primeiros mêses, 50% de intensidade
                intensidade = 50
              } else if (mes >= 4 && mes <= 7){ // Para os 4 mêses do meio do ano, 60% de intensidade
                intensidade = 60 
              } else if (mes >= 8 && mes <= 11){ // Para os 4 últimos meses do ano, 70% de intensidade
                intensidade = 70
              }

              while(c < tabela.idExercicios.length){
                tabela.intensidade[c] = intensidade + "% RM"
                c++
              }
              break

            case 2:

              var intensidade = 0; 
              if(mes >= 0 && mes <= 3){ // Para os primeiros mêses, 70% de intensidade
                intensidade = 70
              } else if (mes >= 4 && mes <= 7){ // Para os 4 mêses do meio do ano, 75% de intensidade
                intensidade = 75 
              } else if (mes >= 8 && mes <= 11){ // Para os 4 últimos meses do ano, 80% de intensidade
                intensidade = 80
              }

              while(c < tabela.idExercicios.length){
                tabela.intensidade[c] = intensidade + "% RM"
                c++
              }
              break

            case 3:

              var intensidade = 0; 
              if(mes >= 0 && mes <= 3){ // Para os primeiros mêses, 75% de intensidade
                intensidade = 75
              } else if (mes >= 4 && mes <= 7){ // Para os 4 mêses do meio do ano, 80% de intensidade
                intensidade = 80 
              } else if (mes >= 8 && mes <= 11){ // Para os 4 últimos meses do ano, 85% de intensidade
                intensidade = 85
              }

              while(c < tabela.idExercicios.length){
                tabela.intensidade[c] = intensidade + "% RM"
                c++
              }
              break

            case 4:

              var intensidade = 0; 
              if(mes >= 0 && mes <= 3){ // Para os primeiros mêses, 85% de intensidade
                intensidade = 85
              } else if (mes >= 4 && mes <= 7){ // Para os 4 mêses do meio do ano, 95% de intensidade
                intensidade = 95 
              } else if (mes >= 8 && mes <= 11){ // Para os 4 últimos meses do ano, 100% de intensidade
                intensidade = 100
              }

              while(c < tabela.idExercicios.length){
                tabela.intensidade[c] = intensidade + "% RM"
                c++
              }
              break

            case 5:
              var intensidade = 0
              while(c < tabela.idExercicios.length){
                if(c%2 == 0){ // Alterna entre 85-100% e 30-45% de intensidade para cada exercício
                  if(mes >= 0 && mes <= 3){ // Para os primeiros mêses, 85% de intensidade
                    intensidade = 85
                  } else if (mes >= 4 && mes <= 7){ // Para os 4 mêses do meio do ano, 95% de intensidade
                    intensidade = 95 
                  } else if (mes >= 8 && mes <= 11){ // Para os 4 últimos meses do ano, 100% de intensidade
                    intensidade = 100
                  }
  
                }else{
                  if(mes >= 0 && mes <= 3){ // Para os primeiros mêses, 30% de intensidade
                    intensidade = 30
                  } else if (mes >= 4 && mes <= 7){ // Para os 4 mêses do meio do ano, 40% de intensidade
                    intensidade = 40 
                  } else if (mes >= 8 && mes <= 11){ // Para os 4 últimos meses do ano, 45% de intensidade
                    intensidade = 45
                  }
                }
                
                if(exercicios[tabela.idExercicios[c]].tipo == "Bola"){
                  tabela.intensidade[c] = "10% BW"
                } else {
                  tabela.intensidade[c] = intensidade + "% RM"
                }

                c++
              }
              break
            
          default:
            console.log("Erro regra 14, fase do treino inválida")
            return -1
          }
          break
        case 3: // Cardio
          if(tabela.idExercicios.length < 1){
            break
          }

          if(treinos[i].fase == 1){
            while(c < tabela.idExercicios.length){
              if(c%2 == 0){
                tabela.intensidade[c] = 1
              }else{
                tabela.intensidade[c] = 2
              }
              c++
            }
          } else if (treinos[i].fase == 2){
            while(c < tabela.idExercicios.length){
              if(c%2 == 0){
                tabela.intensidade[c] = 2
              }else{
                tabela.intensidade[c] = 3
              }
              c++
            }
          } else {
            console.log("Erro regra 14, fase do treino inválida em seção Cardio!")
            return -1
          }
  
          break

        default:
          console.log("Erro regra 14, seção inválida!")
          return -1
      }
    }

  }
}
  
////Regra 15: Define os modos de execução de todos os exercícios
regras[15].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].fase > 0) // Fases OPT dos treinos definidas
regras[15].antecedente.push(() => binding["Usuario.planoTreino.treinos.tabExercicios"][0].idExercicios.length > 0) // Exercícios já selecionados
regras[15].acoesConsequente.push(regra15)
regras[15].nameVariaveisAntecedente.push("Usuario.planoTreino.treinos.fase", "Usuario.planoTreino.treinos.tabExercicios.idExercicios")
regras[15].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.modTempoExec")
regras[15].exp = "Regra 15(modo de execução): Para WarmUp, na fase 1: LE; 2, 3 e 4: R; 5: C\n Para Core, na fase 1: LE; 2, 3 e 4: M; 5: R\n Para Resistência, na fase 1: LE; 2: LE/C; 3: C; 4 e 5: R\n Para todo exercício Cardio: NA"

function regra15() { 
  var treinos = binding["Usuario.planoTreino.treinos"]
  
  for(var i = 0; i < treinos.length; i++){

    for(var secao = 0; secao < treinos[i].tabExercicios.length; secao++){
      var tabela = treinos[i].tabExercicios[secao] // Tabela da seção "secao"
      var c = 0;

      switch(secao){
        case 0: // WarmUp

          var mod = null
          if(treinos[i].fase == 1){
            mod = "LE"
          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 4){
            mod = "R"
          } else if (treinos[i].fase == 5){
            mod = "C"
          } else {
            console.log("Erro na regra 15. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(exercicios[tabela.idExercicios[c]].tipoSubTreino == "Cardio"){ //Se é tipo Cardio, recebe NA
              tabela.modTempoExec[c] = "NA"
            } else if (exercicios[tabela.idExercicios[c]].tipoSubTreino == "Mobilidade") {
              tabela.modTempoExec[c] = "M"
            } else {
              tabela.modTempoExec[c] = mod
            }

            c++
          }

          break

        case 1: // Core

          var mod = null
          if(treinos[i].fase == 1){
            mod = "LE"
          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 4){
            mod = "M"
          } else if (treinos[i].fase == 5){
            mod = "C"
          } else {
            console.log("Erro na regra 15. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(exercicios[tabela.idExercicios[c]].tipoContagem == "time"){
              tabela.modTempoExec[c] = "NA"
            } else {
              tabela.modTempoExec[c] = mod
            }

            c++
          }
          
          break

        case 2: // Resistência
          var mod = null
          if(treinos[i].fase == 1){
            mod = "LE"
          } else if (treinos[i].fase == 2){
            mod = "LE/C"
          } else if (treinos[i].fase == 3){
            mod = "C"
          } else if (treinos[i].fase <= 5){
            mod = "R"
          } else {
            console.log("Erro na regra 15. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(mod == "LE/C"){ 
              if(c%2==0){
                tabela.modTempoExec[c] = "C"
              } else {
                tabela.modTempoExec[c] = "LE"
              }

            } else {
              tabela.modTempoExec[c] = mod
            }

            c++
          }
          
          break

        case 3: // Cardio

          // Para todos os cardios, modTempoExec recebe NA
          while(c < tabela.idExercicios.length){
            tabela.modTempoExec[c] = "NA"
            c++
          }

          break

        default:
          console.log("Erro regra 15, seção inválida!")
          return -1
      }
    }

  }
}  

////Regra 16: Define a quantidade de repetições de todos os exercícios
regras[16].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data != null) // Datas definidas
regras[16].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].fase > 0) // Fases OPT dos treinos definidas
regras[16].antecedente.push(() => binding["Usuario.planoTreino.treinos.tabExercicios"][0].idExercicios.length > 0) // Exercícios já selecionados
regras[16].acoesConsequente.push(regra16)
regras[16].nameVariaveisAntecedente.push("Usuario.planoTreino.treinos.data", "Usuario.planoTreino.treinos.fase", "Usuario.planoTreino.treinos.tabExercicios.idExercicios")
regras[16].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.repeticoes")
regras[16].exp = "Regra 16(repetições): Para WarmUp, na fase 1: 1 ou 5-8; 2, 3 e 4: 5-10; 5: 10-15\n Para Core, na fase 1: 12-20; nas demais: 8-12\n Para Resistência, na fase 1: 12-20; 2: 8-12; 3: 6-12; 4: 4-6; 5: 1-5 ou 8-10\n Para Cardio, na fase 1: 12-20; nas demais: 8-12.\n * Se o exercício for de contagem de tempo, recebe 1 repetição"

function regra16() { 
  var treinos = binding["Usuario.planoTreino.treinos"]
  
  for(var i = 0; i < treinos.length; i++){

    for(var secao = 0; secao < treinos[i].tabExercicios.length; secao++){
      var tabela = treinos[i].tabExercicios[secao] // Tabela da seção "secao"
      var mes = mesRelativo(treinos[i].data.getMonth(), treinos[0].data.getMonth()) // Mês relativo do treino (primeiro(0), segundo(1), terceiro(2)...)
      var c = 0;

      switch(secao){
        case 0: // WarmUp

          var reps = 0

          if(treinos[i].fase == 1){
            reps = "1/5-8"
          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 4){
            reps = "5-10"
          } else if (treinos[i].fase == 5){
            reps = "10-15"
          } else {
            console.log("Erro na regra 16. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(exercicios[tabela.idExercicios[c]].tipoSubTreino == "Cardio"){
              tabela.repeticoes[c] = 1
            } else if(reps == "1/5-8"){ // Se o grupo de valores para as repetições é (1 ou 5 a 8)
              if(exercicios[tabela.idExercicios[c]].tipoSubTreino == "Alongamento"){
                tabela.repeticoes[c] = 1
              } else if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 5
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 6
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 8
              }
            } else if (reps == "5-10"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 5
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 8
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 10
              }
            } else if (reps == "10-15"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 10
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 13
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 15
              }
            }

            c++
          }

          break

        case 1: // Core
          var reps = 0

          if(treinos[i].fase == 1){
            reps = "12-20"
          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 5){
            reps = "8-12"
          } else {
            console.log("Erro na regra 16. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(exercicios[tabela.idExercicios[c]].tipoContagem == "time"){
              tabela.repeticoes[c] = 1

            } else if(reps == "12-20"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 12
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 16
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 20
              }
              
            } else if (reps == "8-12"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 8
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 10
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 12
              }
            }

            c++
          }    

          break

        case 2: // Resistência

          var reps = 0

          if(treinos[i].fase == 1){
            reps = "12-20"
          } else if (treinos[i].fase == 2){
            reps = "8-12"
          } else if (treinos[i].fase == 3){
            reps = "6-12"
          } else if(treinos[i].fase == 4) {
            reps = "4-6"
          } else if(treinos[i].fase == 5) {
            reps = "1-5/8-10"
          } else {
            console.log("Erro na regra 16. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(exercicios[tabela.idExercicios[c]].tipoContagem == "time"){
              tabela.repeticoes[c] = 1

            } else if(reps == "12-20"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 12
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 16
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 20
              }
              
            } else if (reps == "8-12"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 8
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 10
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 12
              }
            } else if (reps == "6-12"){
              if(mes >= 0 && mes <= 2){ // Primeiros 3 meses
                tabela.repeticoes[c] = 6
              }else if (mes >= 3 && mes <= 5){ // 4°, 5° e 6° mêses treinando
                tabela.repeticoes[c] = 8
              }else if (mes >= 6 && mes <= 8) { // 7°, 8° e 9° mêses treinando
                tabela.repeticoes[c] = 10
              }else if(mes >= 9 && mes <= 12){ // últimos meses
                tabela.repeticoes[c] = 12
              }
            } else if (reps == "4-6") {
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 4
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 5
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 6
              }
            } else if (reps == "1-5/8-10"){
              if(c%2 == 0){ // 1-5
                if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                  tabela.repeticoes[c] = 1
                }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                  tabela.repeticoes[c] = 3
                } else { // Últimos 4 meses
                  tabela.repeticoes[c] = 5
                }
              } else { // 8-10
                if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                  tabela.repeticoes[c] = 8
                }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                  tabela.repeticoes[c] = 9
                } else { // Últimos 4 meses
                  tabela.repeticoes[c] = 10
                }
              }
            }

            c++
          }    
          break

        case 3: // Cardio

          var reps = 0

          if(treinos[i].fase == 1){
            reps = "12-20"
          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 5){
            reps = "8-12"
          } else {
            console.log("Erro na regra 16. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(exercicios[tabela.idExercicios[c]].tipoContagem == "time"){
              tabela.repeticoes[c] = 1

            } else if(reps == "12-20"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 12
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 16
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 20
              }
              
            } else if (reps == "8-12"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.repeticoes[c] = 8
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.repeticoes[c] = 10
              } else { // Últimos 4 meses
                tabela.repeticoes[c] = 12
              }
            }

            c++
          }    
          break

        default:
          console.log("Erro regra 14, seção inválida!")
          return -1
      }
    }

  }
}  

////Regra 17: Define a quantidade de sets de todos os exercícios
regras[17].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].data != null) // Datas definidas
regras[17].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].fase > 0) // Fases OPT dos treinos definidas
regras[17].antecedente.push(() => binding["Usuario.planoTreino.treinos.tabExercicios"][0].idExercicios.length > 0) // Exercícios já selecionados
regras[17].acoesConsequente.push(regra17)
regras[17].nameVariaveisAntecedente.push("Usuario.planoTreino.treinos.data", "Usuario.planoTreino.treinos.fase", "Usuario.planoTreino.treinos.tabExercicios.idExercicios")
regras[17].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.sets")
regras[17].exp = "Regra 17(número de sets): Para WarmUp, na fase 1: 1-3; nas demais: 1-2 para alongamentos e 2-3 para pliométricos\n Para Core, na fase 1: 1-4; nas demais: 2-3\n Para Resistência, na fase 1: 2-3; 2: 2-4; 3: 3-5; 4: 4-6; 5: 3-5\n Para Cardio, na fase 1: 1-2; 2: 2-3; 3: 2; 4: 1; 5: 2-3"

function regra17() { 
  var treinos = binding["Usuario.planoTreino.treinos"]
  
  for(var i = 0; i < treinos.length; i++){

    for(var secao = 0; secao < treinos[i].tabExercicios.length; secao++){
      var tabela = treinos[i].tabExercicios[secao] // Tabela da seção "secao"
      var mes = mesRelativo(treinos[i].data.getMonth(), treinos[0].data.getMonth()) // Mês relativo do treino (primeiro(0), segundo(1), terceiro(2)...)
      var c = 0;

      switch(secao){
        case 0: // WarmUp

          var sets = 0

          if(treinos[i].fase == 1){
            sets = "1-3"
          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 5){
            sets = "1-2/2-3"
          } else {
            console.log("Erro na regra 17. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(exercicios[tabela.idExercicios[c]].tipoSubTreino == "Cardio"){ // Se for exercício de cardio
              tabela.sets[c] = 1
            } else if(sets == "1-3"){ // Se o grupo de valores para as repetições é (1 a 3)
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.sets[c] = 1
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.sets[c] = 2
              } else { // Últimos 4 meses
                tabela.sets[c] = 3
              }
                
            } else if (sets == "1-2/2-3"){
              if(exercicios[tabela.idExercicios[c]].tipoSubTreino == "Alongamento"){ // Se for exercício de alongamento
                if(mes >= 0 && mes <= 5){ // Primeiros 6 meses
                  tabela.sets[c] = 1
                }else{ // Últimos 6 meses
                  tabela.sets[c] = 2
                }
              } else { // Se for exercício de mobilidade ou 
                if(mes >= 0 && mes <= 5){ // Primeiros 6 meses
                  tabela.sets[c] = 2
                }else{ // Últimos 6 meses
                  tabela.sets[c] = 3
                }
              }
              
            }

            c++
          }

          break

        case 1: // Core
          var sets = 0

          if(treinos[i].fase == 1){
            sets = "1-4"
          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 5){
            sets = "2-3"
          } else {
            console.log("Erro na regra 17. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(sets == "1-4"){ 
              if(mes >= 0 && mes <= 2){ // Primeiros 3 meses
                tabela.sets[c] = 1
              }else if (mes >= 3 && mes <= 5){ // 4°, 5° e 6° mêses treinando
                tabela.sets[c] = 2
              }else if(mes >= 6 && mes <= 8) { // 7°, 8° e 9° mêses treinando
                tabela.sets[c] = 3
              }else { // Últimos 3 mêses
                tabela.sets[c] = 4
              }
                
            } else if (sets == "2-3"){
              if(mes >= 0 && mes <= 5){ // Primeiros 6 meses
                tabela.sets[c] = 2
              }else{ // Últimos 6 meses
                tabela.sets[c] = 3
              }
            }

            c++
          }

          break

        case 2: // Resistência
          var sets = 0

          if(treinos[i].fase == 1){
            sets = "2-3"
          } else if(treinos[i].fase == 2) {
            sets = "2-4"
          } else if (treinos[i].fase == 3 || treinos[i].fase == 5){
            sets = "3-5"
          } else if (treinos[i].fase == 4){
            sets = "4-6"
          } else {
            console.log("Erro na regra 17. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(sets == "2-3"){ 
              if(mes >= 0 && mes <= 7){ // Primeiros 8 meses
                tabela.sets[c] = 2
              }else { // Últimos 4 meses treinando
                tabela.sets[c] = 3
              }

            } else if (sets == "2-4"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.sets[c] = 2
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.sets[c] = 3
              }else { // Últimos 4 meses treinando
                tabela.sets[c] = 4
              }

            } else if (sets == "3-5"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.sets[c] = 3
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.sets[c] = 4
              }else { // Últimos 4 meses treinando
                tabela.sets[c] = 5
              }

            } else if (sets == "4-6"){
              if(mes >= 0 && mes <= 3){ // Primeiros 4 meses
                tabela.sets[c] = 4
              }else if (mes >= 4 && mes <= 7){ // 5°, 6°, 7° e 8° mêses treinando
                tabela.sets[c] = 5
              }else { // Últimos 4 meses treinando
                tabela.sets[c] = 6
              }

            }

            c++
          }


          break

        case 3: // Cardio
          var sets = 0

          if(treinos[i].fase == 1){
            sets = "1-2"
          } else if (treinos[i].fase == 2 || treinos[i].fase == 5){
            sets = "2-3"
          } else if (treinos[i].fase == 3){
            sets = 2
          } else if(treinos[i].fase == 4) {
            sets = 1
          } else {
            console.log("Erro na regra 17. Fase inválida!")
            return -1
          }

          while(c < tabela.idExercicios.length){
            if(typeof(sets) == "number"){ // Se sets já é do tipo number
              tabela.sets[c] = sets

            } else { // Se sets é um intervalo de valores
              if(sets == "1-2"){
                if(mes >= 0 && mes <= 5){ // Primeiros 6 meses
                  tabela.sets[c] = 1
                }else{ // Últimos 6 meses
                  tabela.sets[c] = 2
                }
              }else if(sets == "2-3"){
                if(mes >= 0 && mes <= 5){ // Primeiros 6 meses
                  tabela.sets[c] = 2
                }else{ // Últimos 6 meses
                  tabela.sets[c] = 3
                }
              }else {
                console.log("ERRO na regra 17! Sets bugado")
                return -1
              }
            }
                
            c++
          }

  
          break

        default:
          console.log("Erro regra 14, seção inválida!")
          return -1
      }
    }

  }
}  

////Regra 18: Define o tempo de descanso entre as séries de todos os exercícios
regras[18].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].fase > 0) // Fases OPT dos treinos definidas
regras[18].antecedente.push(() => binding["Usuario.planoTreino.treinos.tabExercicios"][0].idExercicios.length > 0) // Exercícios já selecionados
regras[18].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].tabExercicios[1].intensidade[0] != null) // Intensidades definidas 
regras[18].acoesConsequente.push(regra18)
regras[18].nameVariaveisAntecedente.push("Usuario.planoTreino.treinos.fase", "Usuario.planoTreino.treinos.tabExercicios.idExercicios", "Usuario.planoTreino.treinos.tabExercicios.intensidade")
regras[18].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.tempoDescanso")
regras[18].exp = "Regra 18: Para WarmUp, na fase 1: NA para alongamentos e 0-90s para os outros exercícios; nas demais fases: NA para alongamentos e 0-60s para os outros exercícios\n Para Core, na fase 1: 0-90s; nas demais: 0-60s\n Para Resistência, na fase 1: 0-90s; 2 e 3: 0-60s; 4: 3-5min; 5: 1-2min ou 3-5 min para exercícios power\n Para Cardio, na fase 1: 0-90s; nas demais: 0-60s\n * Os valores exatos também são baseados nas intensidades de cada exercício"

function regra18() { 
  var treinos = binding["Usuario.planoTreino.treinos"]
  
  for(var i = 0; i < treinos.length; i++){

    for(var secao = 0; secao < treinos[i].tabExercicios.length; secao++){
      var tabela = treinos[i].tabExercicios[secao] // Tabela da seção "secao"
      var c = 0;

      switch(secao){
        case 0: // WarmUp

          var tempoDescanso = 0

          if(treinos[i].fase == 1){ // NA ou 0-90s
            while(c < tabela.idExercicios.length){
              if(exercicios[tabela.idExercicios[c]].tipoSubTreino == "Alongamento"){ // Se o Exercício é do tipo alongamento
                tempoDescanso = "NA"

              } else {
                if(tabela.intensidade[c] == "NA"){
                  tempoDescanso = 30
                } else if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                  var intensidade = tabela.intensidade[c]
                  if(intensidade == 1){
                    tempoDescanso = 40
                  } else if(intensidade == 2){
                    tempoDescanso = 70
                  } else if(intensidade == 3){
                    tempoDescanso = 90
                  }
                } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                  var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

                  if(intensidade >= 30 && intensidade <= 60){
                    tempoDescanso = 40
                  } else if(intensidade > 60 && intensidade <= 85){
                    tempoDescanso = 70
                  } else if(intensidade <= 100){
                    tempoDescanso = 90
                  } else if(intensidade == 10){
                    tempoDescanso = 50
                  }

                } else {
                  console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                  return -1
                }

              }

              tabela.tempoDescanso[c] = tempoDescanso
              c++
            }

          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 5) { // NA ou 0-60s
            while(c < tabela.idExercicios.length){
              if(exercicios[tabela.idExercicios[c]].tipoSubTreino == "Alongamento"){ // Se o Exercício é do tipo alongamento
                tempoDescanso = "NA"

              } else {
                if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                  var intensidade = tabela.intensidade[c]
                  if(intensidade == 1){
                    tempoDescanso = 20
                  } else if(intensidade == 2){
                    tempoDescanso = 40
                  } else if(intensidade == 3){
                    tempoDescanso = 60
                  }
                } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                  var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

                  if(intensidade >= 30 && intensidade <= 60){
                    tempoDescanso = 20
                  } else if(intensidade > 60 && intensidade <= 85){
                    tempoDescanso = 35
                  } else if(intensidade <= 100){
                    tempoDescanso = 50
                  } else if(intensidade == 10){
                    tempoDescanso = 60
                  }

                } else {
                  console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                  return -1
                }
              }
              tabela.tempoDescanso[c] = tempoDescanso
              c++
            }
              

          } else {
            console.log("Erro na regra 18. Fase inválida!")
            return -1
          }

          break

        case 1: // Core
          var tempoDescanso = 0

          if(treinos[i].fase == 1){ // 0-90s
            while(c < tabela.idExercicios.length){
              if(tabela.intensidade[c] == "NA"){ // Exercícios do tipo time
                tempoDescanso = 60
              } else if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                var intensidade = tabela.intensidade[c]
                if(intensidade == 1){
                  tempoDescanso = 40
                } else if(intensidade == 2){
                  tempoDescanso = 70
                } else if(intensidade == 3){
                  tempoDescanso = 90
                }
              } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

                if(intensidade >= 30 && intensidade <= 60){
                  tempoDescanso = 40
                } else if((intensidade > 60 && intensidade <= 85) || intensidade == 10){
                  tempoDescanso = 70
                } else if(intensidade <= 100){
                  tempoDescanso = 90
                } else if(intensidade == 10){
                  tempoDescanso = 50
                }

              } else {
                console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                return -1
              }

              tabela.tempoDescanso[c] = tempoDescanso
              c++
            }
          
          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 5) { // 0-60s
            while(c < tabela.idExercicios.length){
              if(tabela.intensidade[c] == "NA"){ // Exercícios do tipo time
                tempoDescanso = 30
              } else if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                var intensidade = tabela.intensidade[c]
                if(intensidade == 1){
                  tempoDescanso = 20
                } else if(intensidade == 2){
                  tempoDescanso = 40
                } else if(intensidade == 3){
                  tempoDescanso = 60
                }
              } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

                if(intensidade >= 30 && intensidade <= 60){
                  tempoDescanso = 20
                } else if((intensidade > 60 && intensidade <= 85) || intensidade == 10){
                  tempoDescanso = 35
                } else if(intensidade <= 100){
                  tempoDescanso = 50
                } else if(intensidade == 10){
                  tempoDescanso = 60
                }

              } else {
                console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                return -1
              }
              
              tabela.tempoDescanso[c] = tempoDescanso
              c++
            }

          } else {
            console.log("Erro na regra 18. Fase inválida!")
            return -1
          }

          break

        case 2: // Resistência
          var tempoDescanso = 0

          if(treinos[i].fase == 1){ // 0-90s
            while(c < tabela.idExercicios.length){
              if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                var intensidade = tabela.intensidade[c]
                if(intensidade == 1){
                  tempoDescanso = 40
                } else if(intensidade == 2){
                  tempoDescanso = 70
                } else if(intensidade == 3){
                  tempoDescanso = 90
                }
              } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

                if(intensidade >= 30 && intensidade <= 60){
                  tempoDescanso = 40
                } else if(intensidade > 60 && intensidade <= 85){
                  tempoDescanso = 70
                } else if(intensidade <= 100){
                  tempoDescanso = 90
                } else if(intensidade == 10){
                  tempoDescanso = 50
                }

              } else {
                console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                return -1
              }

              tabela.tempoDescanso[c] = tempoDescanso
              c++
            }
          
          } else if (treinos[i].fase == 2 || treinos[i].fase == 3) { // 0-60s
            while(c < tabela.idExercicios.length){
              if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                if(intensidade == 1){
                  tempoDescanso = 20
                } else if(intensidade == 2){
                  tempoDescanso = 40
                } else if(intensidade == 3){
                  tempoDescanso = 60
                }
              } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

                if(intensidade >= 30 && intensidade <= 60){
                  tempoDescanso = 20
                } else if(intensidade > 60 && intensidade <= 85){
                  tempoDescanso = 35
                } else if(intensidade <= 100){
                  tempoDescanso = 50
                } else if(intensidade == 10){
                  tempoDescanso = 60
                }

              } else {
                console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                return -1
              }
              
              tabela.tempoDescanso[c] = tempoDescanso
              c++
            }
          } else if (treinos[i].fase == 4){ // 3-5min 
            while(c < tabela.idExercicios.length){
              if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                if(intensidade == 1){
                  tempoDescanso = (3*60)
                } else if(intensidade == 2){
                  tempoDescanso = (4*60)
                } else if(intensidade == 3){
                  tempoDescanso = (5*60)
                }
              } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

                if(intensidade >= 30 && intensidade <= 60){
                  tempoDescanso = (3*60)
                } else if(intensidade > 60 && intensidade <= 85){
                  tempoDescanso = (3,5*60)
                } else if(intensidade <= 100){
                  tempoDescanso = (4*60)
                } else if(intensidade == 10){
                  tempoDescanso = (5*60)
                }

              } else {
                console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                return -1
              }
              
              tabela.tempoDescanso[c] = tempoDescanso
              c++
            }
          } else if(treinos[i].fase == 5){ // 1-2min para exercícios normais, 3-5min para exercícios power
            if(exercicios[tabela.idExercicios[c]].niveisOpt.includes(5)){ // Para exercícios power
              while(c < tabela.idExercicios.length){
                if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                  if(intensidade == 1){
                    tempoDescanso = (3*60)
                  } else if(intensidade == 2){
                    tempoDescanso = (4*60)
                  } else if(intensidade == 3){
                    tempoDescanso = (5*60)
                  }
                } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                  var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade
  
                  if(intensidade >= 30 && intensidade <= 60){
                    tempoDescanso = (3*60)
                  } else if(intensidade > 60 && intensidade <= 85){
                    tempoDescanso = (3,5*60)
                  } else if(intensidade <= 100){
                    tempoDescanso = (4*60)
                  } else if(intensidade == 10){
                    tempoDescanso = (5*60)
                  }
  
                } else {
                  console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                  return -1
                }
                
                tabela.tempoDescanso[c] = tempoDescanso
                c++
              }
            } else { // Para exercícios normais
              while(c < tabela.idExercicios.length){
                if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                  if(intensidade == 1){
                    tempoDescanso = (1*60)
                  } else if(intensidade == 2){
                    tempoDescanso = (1,5*60)
                  } else if(intensidade == 3){
                    tempoDescanso = (2*60)
                  }
                } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                  var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade
  
                  if(intensidade >= 30 && intensidade <= 60){
                    tempoDescanso = (1*60)
                  } else if(intensidade > 60 && intensidade <= 85){
                    tempoDescanso = (1,25*60)
                  } else if(intensidade <= 100){
                    tempoDescanso = (1,5*60)
                  } else if(intensidade == 10){
                    tempoDescanso = (2*60)
                  }
  
                } else {
                  console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                  return -1
                }
                
                tabela.tempoDescanso[c] = tempoDescanso
                c++
              }
            }

          } else {
            console.log("Erro na regra 18. Fase inválida!")
            return -1
          }

          break

        case 3: // Cardio
          var tempoDescanso = 0

          if(treinos[i].fase == 1){ // 0-90s
            while(c < tabela.idExercicios.length){
              if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                var intensidade = tabela.intensidade[c]
                if(intensidade == 1){
                  tempoDescanso = 40
                } else if(intensidade == 2){
                  tempoDescanso = 70
                } else if(intensidade == 3){
                  tempoDescanso = 90
                }
              } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

                if(intensidade >= 30 && intensidade <= 60){
                  tempoDescanso = 40
                } else if(intensidade > 60 && intensidade <= 85){
                  tempoDescanso = 70
                } else if(intensidade <= 100){
                  tempoDescanso = 90
                } else if(intensidade == 10){
                  tempoDescanso = 50
                }

              } else {
                console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                return -1
              }

              tabela.tempoDescanso[c] = tempoDescanso
              c++
            }
          
          } else if (treinos[i].fase >= 2 && treinos[i].fase <= 5) { // 0-60s
            while(c < tabela.idExercicios.length){
              if(typeof(tabela.intensidade[c]) == "number"){  // Formatação da intensidade entre os valores {0,1,2}
                if(intensidade == 1){
                  tempoDescanso = 20
                } else if(intensidade == 2){
                  tempoDescanso = 40
                } else if(intensidade == 3){
                  tempoDescanso = 60
                }
              } else if (typeof(tabela.intensidade[c] == "string")){ // Formatação da intensidade entre os valores {30-100% RM ou 10% BW}
                var intensidade = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

                if(intensidade >= 30 && intensidade <= 60){
                  tempoDescanso = 20
                } else if(intensidade > 60 && intensidade <= 85){
                  tempoDescanso = 35
                } else if(intensidade <= 100){
                  tempoDescanso = 50
                } else if(intensidade == 10){
                  tempoDescanso = 60
                }

              } else {
                console.log("Erro na regra 18! Tipo da variável intensidade bugado")
                return -1
              }
              
              tabela.tempoDescanso[c] = tempoDescanso
              c++
            }
            
          } else {
            console.log("Erro na regra 18. Fase inválida!")
            return -1
          }

          break

        default:
          console.log("Erro regra 14, seção inválida!")
          return -1
      }
    }

  }
}  

////Regra 19: Define o tempo de execução total de um exercício 
regras[19].antecedente.push(() => binding["Usuario.planoTreino.treinos"].length > 1) // Treinos definidos
regras[19].antecedente.push(() => binding["Usuario.planoTreino.treinos.tabExercicios"][0].idExercicios.length > 0) // Exercícios já selecionados
regras[19].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].tabExercicios[1].sets[0] != null) // Sets definidos
regras[19].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].tabExercicios[1].repeticoes[0] != null) // Quantidade de repetições definidos
regras[19].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].tabExercicios[1].modTempoExec[0] != null) // Modo de execução definidos
regras[19].acoesConsequente.push(regra19)
regras[19].nameVariaveisAntecedente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios.idExercicios", "Usuario.planoTreino.treinos.tabExercicios.sets", "Usuario.planoTreino.treinos.tabExercicios.repeticoes", "Usuario.planoTreino.treinos.tabExercicios.modTempoExec")
regras[19].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.tabExercicios.tempoTotal")
regras[19].exp = "Regra 19: Soma o tempo de execução de cada repetição realizada em um exercício de acordo com o modo de execução (LE, C, M, R)"

function regra19(){
  var treinos = binding["Usuario.planoTreino.treinos"]

  for(var i = 0; i < treinos.length; i++){
    for(var secao = 0; secao < treinos[i].tabExercicios.length; secao++){
      var tabela = treinos[i].tabExercicios[secao] // Tabela da seção "secao"
      var c = 0;

      if(secao == 0){ // WarmUp
        while(c < tabela.idExercicios.length){
          var mod = tabela.modTempoExec[c]
          var reps = tabela.repeticoes[c]
          var sets = tabela.sets[c]
          var tempoTotal = tabela.tempoTotal[c]

          if(tempoTotal == null){ // Treinos que não tiveram o tempo total definido
            if(mod == "LE"){ // Lento Excêntrico configura em média 7 segundos por repetição
              tempoTotal = 30 * reps * sets 
            }else if (mod == "C"){ // Controlado em média tem 4 segundos por repetição
              tempoTotal = 4 * reps * sets
            }else if (mod == "M"){ // Médio em média tem 3 segundos por repetição
              tempoTotal = 3 * reps * sets
            }else if (mod == "R"){ // Rápido em média tem 2 segundos por repetição
              tempoTotal = 2 * reps * sets
            } 
            
          } 

          tabela.tempoTotal[c] = tempoTotal
          c++
        }

      } else { // Core, Resistência, Cardio
        while(c < tabela.idExercicios.length){
          var mod = tabela.modTempoExec[c]
          var reps = tabela.repeticoes[c]
          var sets = tabela.sets[c]
          var tempoTotal = tabela.tempoTotal[c]

          if(tempoTotal == null){ // Treinos que não tiveram o tempo total definido
            if(mod == "LE"){ // Lento Excêntrico configura em média 7 segundos por repetição
              tempoTotal = 7 * reps * sets 
            }else if (mod == "C"){ // Controlado em média tem 4 segundos por repetição
              tempoTotal = 4 * reps * sets
            }else if (mod == "M"){ // Médio em média tem 3 segundos por repetição
              tempoTotal = 3 * reps * sets
            }else if (mod == "R"){ // Rápido em média tem 2 segundos por repetição
              tempoTotal = 2 * reps * sets
            } else { // Exercícios tipo time
              tempoTotal = 60 * reps * sets
            }
          } 

          tabela.tempoTotal[c] = tempoTotal
          c++
        }
      }
    }

  }
}

////Regra 20: Define o tempo de execução total de um treino
regras[20].antecedente.push(() => binding["Usuario.planoTreino.treinos"].length > 1) // Treinos definidos
regras[20].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].tabExercicios[1].tempoDescanso[0] != null) // Quantidade de repetições definidos
regras[20].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].tabExercicios[1].tempoTotal[0] != null) // Modo de execução definidos
regras[20].acoesConsequente.push(regra20)
regras[20].nameVariaveisAntecedente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios.tempoDescanso", "Usuario.planoTreino.treinos.tabExercicios.tempoTotal")
regras[20].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tempoTotal")
regras[20].exp = "Regra 20: Soma o tempo de execução e tempos de descanso entre as séries, resultando no tempo total de treino"

function regra20(){
  var treinos = binding["Usuario.planoTreino.treinos"]

  for(var i = 0; i < treinos.length; i++){
    var somaTempo = 0
    for(var secao = 0; secao < treinos[i].tabExercicios.length; secao++){
      var tabela = treinos[i].tabExercicios[secao]
      var c = 0

      while(c < tabela.idExercicios.length){
        if(tabela.tempoDescanso[c] == "NA"){
          somaTempo += tabela.tempoTotal[c] 
        }else{
          somaTempo += tabela.tempoTotal[c] + tabela.tempoDescanso[c]
        }
        
        c++
      }
    }

    treinos[i].tempoTotal = somaTempo

  }
}

////Regra 21: Define o volume total de um treino, ou seja, quantidade de sets total
regras[21].antecedente.push(() => binding["Usuario.planoTreino.treinos"].length > 1) // Quantidade de datas dos treinos definida
regras[21].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].tabExercicios[1].sets[0] != null) // Quantidade de repetições definidos
regras[21].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].tabExercicios[1].intensidade[0] != null) // Intensidades dos exercícios definidas
regras[21].acoesConsequente.push(regra21)
regras[21].nameVariaveisAntecedente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios.sets", "Usuario.planoTreino.treinos.tabExercicios.intensidade")
regras[21].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.volume")
regras[21].exp = "Regra 21: Soma a quantidade de sets total de um treino (volume)"

function regra21(){
  var treinos = binding["Usuario.planoTreino.treinos"]

  for(var i = 0; i < treinos.length; i++){
    var somaSets = 0
    for(var secao = 0; secao < treinos[i].tabExercicios.length; secao++){
      var tabela = treinos[i].tabExercicios[secao]
      var c = 0

      while(c < tabela.idExercicios.length){
        if(tabela.intensidade[c] == "NA" && secao == 0){ // Se o exercício não tem intensidade e é da seção WarmUp (alongamento), não acrescerá o volume
          somaSets += 0
        } else {
          somaSets += tabela.sets[c]
        }

        c++
      }
    }

    treinos[i].volume = somaSets

  }
}

/*
////Regra 22: Define a intensidade média do treino
regras[22].antecedente.push(() => binding["Usuario.planoTreino.treinos"].length > 1) // Treinos definidos
regras[22].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].tabExercicios[1].intensidade[0] != null) // Quantidade de repetições definidos
regras[22].antecedente.push(() => binding["Usuario.planoTreino.treinos"][1].volume != null) // Volume dos treinos definido
regras[22].acoesConsequente.push(regra22)
regras[22].nameVariaveisAntecedente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios.intensidade", "Usuario.planoTreino.treinos.volume")
regras[22].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.intensidade")
regras[22].exp = "Regra 22: Faz a média aritmética para dar uma intensidade (de 1 a 3) média do treino"

function regra22(){
  var treinos = binding["Usuario.planoTreino.treinos"]

  for(var i = 0; i < treinos.length; i++){
    var somaIntensidade = 0
    for(var secao = 0; secao < treinos[i].tabExercicios.length; secao++){
      var tabela = treinos[i].tabExercicios[secao]
      var c = 0
      var num

      while(c < tabela.idExercicios.length){
        if(tabela.intensidade[c] == "NA"){ // NA de intensidade
          num = 0 
        }else if (typeof(tabela.intensidade[c]) == "string"){ // Valores em % de RM e BW
          num = Number(tabela.intensidade[c].substring(0, (tabela.intensidade[c].indexOf("%")))) // Recebe a parte numérica da intensidade

          if(num >= 0 && num <= 33){
            num = 1
          } else if(num > 33 && num <= 66){
            num = 2
          }else if (num > 66 && num <= 100){
            num = 3
          } else {
            console.log("Erro na regra 22. Número em formato incorreto")
            return -1
          }
        } else { // Valores de intensidade entre 1 e 3
          num = tabela.intensidade[c]
        }

        somaIntensidade += num
        c++
      }
    }

    var m = Math.round(somaIntensidade/treinos[i].volume) // Média de intensidade (valor entre 1 e 3)

    if(m == 1){
      treinos[i].intensidade = "Iniciante"
    } else if (m == 2){
      treinos[i].intensidade = "Intermediário"
    } else if (m == 3){
      treinos[i].intensidade = "Avançado"
    } else {
      console.log("Erro na regra 22, média fora do intervalo")
      return -1
    }

  }
}
  */


export {regras}



