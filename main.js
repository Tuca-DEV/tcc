import Usuario from "./usuario.js"
import Exercicio from './exercicio.js'
import PlanoTreino from './plano_treino.js'
import Treino from './treino.js'
import TabExercicios from './tabexercicios.js'
import Regra, {calc_qtd_treinos_anual} from "./production_rule.js"
import {traceValues} from "./ie.js"
 
export var askable_vars = ["nome", "idade", "sexo", "peso", "altura", "objetivo", "disponibilidade", "nivel", "comorbidades", "ant_lesoes"]

console.log("Qual sua disponibilidade? ")

let eu = new Usuario()
 
traceValues(eu)
console.log("Treinos totais: ", eu.plano_treino.qtd_treinos_anual)
console.log("Datas: "+eu.plano_treino.datas)


