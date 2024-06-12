import Usuario from "./usuario.js"
import Exercicio from './exercicio.js'
import {traceValues} from "./ie.js"
import {user} from './binding.js'
 
export var askable_vars = ["Usuario.nome", "Usuario.idade", "Usuario.sexo", "Usuario.peso", "Usuario.altura", "Usuario.objetivo", "Usuario.disponibilidade", "Usuario.nivel", "Usuario.comorbidades", "Usuario.ant_lesoes"]
export var objVars = ["Usuario.planoTreino", "Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios", "Usuario", "Usuario.disponibilidade"]

traceValues("User")

console.log("Treinos totais: ", user.planoTreino.qtdTreinosAnual)
console.log("Datas: "+user.planoTreino.datas)

