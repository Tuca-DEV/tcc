import Usuario from "./usuario.js"
import Exercicio from './exercicio.js'

import {traceValues} from "./ie.js"
 
export var askable_vars = ["Usuario.nome", "Usuario.idade", "Usuario.sexo", "Usuario.peso", "Usuario.altura", "Usuario.objetivo", "Usuario.disponibilidade", "Usuario.nivel", "Usuario.comorbidades", "Usuario.ant_lesoes"]
export var objVars = ["Usuario.planoTreino", "Usuario.planoTreino.treinos", "Usuario"]

var user = new Usuario
export {user}
traceValues("User")

console.log("Treinos totais: ", user.plano_treino.qtd_treinos_anual)
console.log("Datas: "+user.plano_treino.datas)


