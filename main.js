import Usuario from "./usuario.js"
import Exercicio from './exercicio.js'
import {traceValues} from "./ie.js"
import {binding} from './binding.js'
 
export var askable_vars = ["Usuario.nome", "Usuario.idade", "Usuario.sexo", "Usuario.peso", "Usuario.altura", "Usuario.objetivo", "Usuario.disponibilidade", "Usuario.nivel", "Usuario.comorbidades", "Usuario.ant_lesoes"]
export var objVars = ["Usuario.planoTreino", "Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios"]

traceValues("Usuario")

console.log("Treinos: ", binding["Usuario.planoTreino.treinos"])
console.log("Treinos.length: ", binding["Usuario.planoTreino.treinos"].length)
console.log("Disponibilidade: ", binding["Usuario.disponibilidade"])
