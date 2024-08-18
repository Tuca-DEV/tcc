import Usuario from "./usuario.js"
import Exercicio from './exercicio.js'
import {traceValues, explanations} from "./ie.js"
import {binding} from './binding.js'
 
export var askable_vars = ["Usuario.nome", "Usuario.idade", "Usuario.sexo", "Usuario.peso", "Usuario.altura", "Usuario.objetivo", "Usuario.disponibilidade", "Usuario.nivel"]

export var objVars = ["Usuario.planoTreino", "Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios", "Usuario.planoTreino.treinos.data", "Usuario.planoTreino.treinos.tabExercicios.idExercicios"]

traceValues("Usuario")

console.log(binding["Usuario.planoTreino.treinos"])
/*for(var i = 0; i < binding["Usuario.planoTreino.treinos"].length; i++){      // Imprimir tabExercicios de todos os treinos
    console.log(binding["Usuario.planoTreino.treinos"][i].tabExercicios[0])
}*/
console.log("Treinos.length: ", binding["Usuario.planoTreino.treinos"].length)
console.log("Fases por mês do plano de treinos: ", binding["Usuario.planoTreino.fases"])
console.log("Objetivo: ", binding["Usuario.objetivo"])
console.log("Disponibilidade: ", binding["Usuario.disponibilidade"])
console.log("Explicação: ", explanations)


