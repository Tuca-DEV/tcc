import { askable_vars } from './main.js'
import { regras } from './production_rule.js'


//Tentará obter um valor para a variável variable através de inferência ou pergunta ao usuário
export function traceValues(variable) {
    infer(variable)
    if(variable === undefined || typeof(variable) == 'object' && askable_vars.includes(nameof(variable))) { //Caso a variável não tenha sido inferida e pode ser perguntada
        if(typeof(variable) == 'object') { //Se é uma variável multi-valorada
            var i = prompt("Quantos valores quer adicionar a(o) "+nameof(variable)+"?  ")
            for(var c = 0; c < i; c++){
                variable[c] = prompt("Valor de ["+c+"]: ")
            }
        } else { //Se é uma variável uni-valorada
            console.log("Qual o valor de "+nameof(variable)+"?")
            variable = prompt("Diga aqui: ")
        }
        
    } else {
        console.log("Não foi possível traçar a variável\n")
    }
}

//Método para inferir o valor da variável
function infer(variable){
    var selected_regras = []
    select(regras, variable, selected_regras) //Seleciona as regras para dentro do vetor selected_regras
    selected_regras.forEach(r => { //Para cada regra selecionada, aplique-a
        apply(r)
    })
}

//Seleção das regras
function select(regras, variable, selected_regras){
    regras.forEach((r, i) => { //Para cada regra, analise se a variável em questão é alterada pelo consequente desta regra
        for(var i = 0; i < r.variaveisConsequente.length; i++) {  
            if (r.variaveisConsequente[i] == nameof(variable)) {selected_regras.push(r); break;} //Selecionando a regra de fato
        }
    });
}

//Avalia se a regra selecionada será executada
function apply(regra){
    if(evalconditions(regra)) { 
        regra.executarConsequente() //Executará o consequente da regra caso todos os predicados sejam verdadeiros com o valor da variável
    } else {
        console.log("Não foi possível\n")
    }
}

//Avalia se todos os testes lógicos na regra retornam valor verdadeiro
function evalconditions(regra) {
    regra.antecedente.forEach((clausula, i) => {
        traceValues(regra.variaveisAntecedente[i])
        if(!clausula) return false //Caso haja um predicado com valor falso, retornará falso
    })
    return true
}

