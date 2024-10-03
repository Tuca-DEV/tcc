import Usuario from "./entities/usuario.js"
import Exercicio from './entities/exercicio.js'
import {traceValues, explanations} from "./inference_engine/ie.js"
import {binding} from './facts_database/binding.js'
import {mesRelativo} from './knowledge_base/production_rule.js'
 
export var askable_vars = ["Usuario.nome", "Usuario.idade", "Usuario.sexo", "Usuario.peso", "Usuario.altura", "Usuario.objetivo", "Usuario.disponibilidade", "Usuario.nivel"]
export var objVars = ["Usuario.planoTreino", "Usuario.planoTreino.treinos", "Usuario.planoTreino.treinos.tabExercicios", 
    //Em treino
    "Usuario.planoTreino.treinos.tempoTotal", "Usuario.planoTreino.treinos.volume", "Usuario.planoTreino.treinos.tempoTotal", "Usuario.planoTreino.treinos.intensidade","Usuario.planoTreino.treinos.data",
    //Em cada exercício
    "Usuario.planoTreino.treinos.tabExercicios.idExercicios",  "Usuario.planoTreino.treinos.tabExercicios.intensidade",  "Usuario.planoTreino.treinos.tabExercicios.modTempoExec", "Usuario.planoTreino.treinos.tabExercicios.repeticoes", "Usuario.planoTreino.treinos.tabExercicios.sets", "Usuario.planoTreino.treinos.tabExercicios.tempoDescanso", "Usuario.planoTreino.treinos.tabExercicios.tempoTotal"]

traceValues("Usuario")


var treinos = binding["Usuario.planoTreino.treinos"]

var q =0
var f = []
var m = []
for(var i = 0; i < treinos.length; i++){      // Imprimir tabExercicios Core de todos os treinos
        
        console.log(treinos[i].data)
        console.log(treinos[i].fase)
        console.log(treinos[i].intensidade)
        console.log("Tempo Total: "+Math.round(treinos[i].tempoTotal/60))
        
        console.log("WarmUp Exercises: "+treinos[i].tabExercicios[0].nomeExercicios)
        console.log("Core Exercises: "+ treinos[i].tabExercicios[1].nomeExercicios)
        console.log("Resistance Exercises: "+ treinos[i].tabExercicios[2].nomeExercicios)
        console.log("Cardio Exercises: "+ treinos[i].tabExercicios[3].nomeExercicios)
        
        for(var j = 0; j < 4; j++){
            console.log("Intensidade: "+treinos[i].tabExercicios[j].intensidade)
        }
        for(var j = 0; j < 4; j++){
            console.log("modTempoExec: "+treinos[i].tabExercicios[j].modTempoExec)
        }
        for(var j = 0; j < 4; j++){
            console.log("Repetições: "+treinos[i].tabExercicios[j].repeticoes)
        } 
        for(var j = 0; j < 4; j++){
            console.log("Sets: "+treinos[i].tabExercicios[j].sets)
        }
        for(var j = 0; j < 4; j++){
            console.log("Tempo de Descanso: "+treinos[i].tabExercicios[j].tempoDescanso)
        }
        for(var j = 0; j < 4; j++){
            console.log("Tempo de execução total: "+treinos[i].tabExercicios[j].tempoTotal)
        }
            
        console.log("\n")
        
}
console.log("Acima: "+ q)
console.log("Fases: "+f)
console.log("Meses relativos: "+m)
console.log("Treinos.length: ", binding["Usuario.planoTreino.treinos"].length)
console.log("Fases por mês do plano de treinos: ", binding["Usuario.planoTreino.fases"])
console.log("Objetivo: ", binding["Usuario.objetivo"])
console.log("Disponibilidade: ", binding["Usuario.disponibilidade"])
for(var i = 0; i < binding["Usuario.planoTreino.freqNoMes"].length; i++){
    console.log("Frequência no mês "+i+": "+binding["Usuario.planoTreino.freqNoMes"][i])
}
    
console.log("Explicação: ", explanations)


