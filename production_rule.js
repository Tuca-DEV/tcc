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
regras[0].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
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
regras[1].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
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
regras[2].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
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
regras[3].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
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
regras[4].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.freqNoMes")
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
regras[5].acoesConsequente.push(regra5)
regras[5].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data")
regras[5].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.fases", "Usuario.planoTreino.treinos.fase")
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
regras[6].acoesConsequente.push(regra6)
regras[6].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data")
regras[6].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.fases", "Usuario.planoTreino.treinos.fase")
regras[6].exp = "Regra 6: Caso o usuário queira hipertrofia muscular, haverá a seguinte ordem de fases opt durante os meses: 1, 2, 3, 2, 3, 4, 1, 2, 3, 4, 3, 2"

// Função que define as fases durante os meses
function regra6() { 
  binding["Usuario.planoTreino.fases"].push(1, 2, 3, 2, 3, 4, 1, 2, 3, 4, 3, 2)

  calcOptTreino();
}

////Regra 7: Definição das fases OPT a serem utilizadas por usuários com objetivo de esporte
regras[7].antecedente.push(() => binding["Usuario.objetivo"] == "esporte") 
regras[7].acoesConsequente.push(regra7)
regras[7].nameVariaveisAntecedente.push("Usuario.objetivo", "Usuario.planoTreino.treinos.data")
regras[7].nameVariaveisConsequente.push("Usuario.planoTreino.treinos", "Usuario.planoTreino.fases", "Usuario.planoTreino.treinos.fase")
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

////Regra 8: 
regras[8].antecedente.push(() => binding["Usuario.planoTreino.freqNoMes"] != null) 
regras[8].antecedente.push(() => binding["Usuario.planoTreino.treinos"].length > 1) // Os treinos foram definidos
regras[8].acoesConsequente.push(regra8)
regras[8].nameVariaveisAntecedente.push("Usuario.planoTreino.freqNoMes", "Usuario.planoTreino.treinos")
regras[8].nameVariaveisConsequente.push("Usuario.planoTreino.treinos.agrupMusc", "Usuario.planoTreino.treinos")
regras[8].exp = "Regra 8: Os agrupamentos musculares trabalhados em cada dia são definidos de acordo com a frequência diária das semanas naquele mês."

// Função que define as fases durante os meses
function regra8() { 
  var semanaNoMes = binding["Usuario.planoTreino.freqNoMes"]
  var treinos = binding["Usuario.planoTreino.treinos"]
  var pMes = treinos[0].data.getMonth()
  var intercala = 0

  for(var i = 0; i < treinos.length; i++){
    var mes = mesRelativo(treinos[i].data.getMonth(), pMes)
    var freq3 = [["Peito", "Ombro", "Tríceps"], ["Pernas"], ["Costas", "Bíceps"]]
    var freq4 = [["Peito", "Ombro", "Tríceps"], ["Pernas","Costas", "Bíceps"]]
    var freq5 = [["Peito"], ["Pernas"], ["Costas"], ["Ombro"], ["Bíceps", "Tríceps"]]
    
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

export {regras}



