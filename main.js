import Usuario from "./usuario.js"
import Exercicio from './exercicio.js'
import {traceValues, explanations} from "./ie.js"
import {binding} from './binding.js'
 
export var askable_vars = ["Usuario.nome", "Usuario.idade", "Usuario.sexo", "Usuario.peso", "Usuario.altura", "Usuario.objetivo", "Usuario.disponibilidade", "Usuario.nivel"]
export var objVars = ["Usuario.planoTreino", "Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.treinos.tabExercicios.idExercicios",  "Usuario.planoTreino.treinos.tabExercicios.intensidade",  "Usuario.planoTreino.treinos.tabExercicios.modTempoExec"]

traceValues("Usuario")


var treinos = binding["Usuario.planoTreino.treinos"]

for(var i = 0; i < treinos.length; i++){      // Imprimir tabExercicios Core de todos os treinos
    console.log(treinos[i])
    console.log("WarmUp Exercises: "+treinos[i].tabExercicios[0].nomeExercicios)
    console.log("Resistance Exercises: "+ treinos[i].tabExercicios[2].nomeExercicios)
    console.log("Core Exercises: "+ treinos[i].tabExercicios[1].nomeExercicios)
    console.log("Cardio Exercises: "+ treinos[i].tabExercicios[3].nomeExercicios)
    for(var j = 0; j < 4; j++){
        console.log("Intensidades: "+treinos[i].tabExercicios[j].intensidade)
    }
    }

console.log("Treinos.length: ", binding["Usuario.planoTreino.treinos"].length)
console.log("Fases por mês do plano de treinos: ", binding["Usuario.planoTreino.fases"])
console.log("Objetivo: ", binding["Usuario.objetivo"])
console.log("Disponibilidade: ", binding["Usuario.disponibilidade"])
for(var i = 0; i < binding["Usuario.planoTreino.freqNoMes"].length; i++){
    console.log("Frequência no mês "+i+": "+binding["Usuario.planoTreino.freqNoMes"][i])
}
console.log("Explicação: ", explanations)


