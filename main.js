import Usuario from "./usuario.js"
import Exercicio from './exercicio.js'
import {traceValues} from "./ie.js"
import {binding} from './binding.js'
 
export var askable_vars = ["Usuario.nome", "Usuario.idade", "Usuario.sexo", "Usuario.peso", "Usuario.altura", "Usuario.objetivo", "Usuario.disponibilidade", "Usuario.nivel", "Usuario.comorbidades", "Usuario.ant_lesoes"]
export var objVars = ["Usuario.planoTreino", "Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios", "Usuario.planoTreino.qtTreinosAnual"]


traceValues("Usuario")

console.log("Disponibilidade: ", binding["Usuario.disponibilidade"])
console.log("Treinos totais: ", binding["Usuario.planoTreino.qtTreinosAnual"])
console.log("Datas: "+binding["Usuario.planoTreino.datas"])

