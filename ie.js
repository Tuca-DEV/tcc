
import {askable_vars, objVars} from './main.js'
import {regras} from './production_rule.js'
import {binding} from './binding.js'

var x = 0, y = 0;

//Tentará obter um valor para a variável variable através de inferência ou pergunta ao usuário
export function traceValues(nameVariable) {
    infer(nameVariable) // Tentativa de deduzir o valor da variável

    //Caso a variável não tenha sido inferida e pode ser perguntada
    if((binding[nameVariable] == null || binding[nameVariable].length == 0) && askable_vars.includes(nameVariable)) { 

        if(binding[nameVariable] instanceof Array) { //Se é uma variável multi-valorada tipo array
                var i = prompt("Quantos valores quer adicionar a(o) "+nameVariable+"?  ")
                for(var c = 0; c < i; c++){
                    binding[nameVariable][c] = prompt("Valor de ["+c+"]: ")
                }
        } else if (binding[nameVariable] != 'object') { //Se é uma variável uni-valorada
            console.log("Qual o valor de "+nameVariable+"?")
            binding[nameVariable] = prompt("Diga aqui: ")

        } else { //Variável ??
            console.log("\nALGO DE ERRADO N ESTA CERTO!\n") 
        }
    // Caso seja um array de objetos
    } else if (binding[nameVariable] instanceof Array && binding[nameVariable][0] instanceof Object) {
        //Para cada objeto no array de objetos faça
        for(i in binding[nameVariable]) {
            activate(i, nameVariable)
        }

    // Caso seja um objeto
    } else if (binding[nameVariable] instanceof Object && binding[nameVariable].length == undefined) {
        activate(binding[nameVariable], nameVariable)    

    } else {
        console.log("Não foi possível traçar a variável no momento\n")
    }

}

//Método para inferir o valor da variável
function infer(nameVariable){
    var selected_regras = []
    select(regras, nameVariable, selected_regras) //Seleciona as regras para dentro do vetor selected_regras
    selected_regras.forEach(r => { //Para cada regra selecionada, aplique-a
        apply(r)
    })
}

//Seleção das regras
function select(regras, nameVariable, selected_regras){
    //Para cada regra, analise se a variável em questão é alterada pelo consequente desta regra
    regras.forEach((r, i) => {
        for(var i = 0; i < r.variaveisConsequente.length; i++) {  
            //Selecionando a regra de fato
            if (r.variaveisConsequente[i] == nameVariable) { 
                selected_regras.push(r); 
                break;
            } 
        }
    });
}

//Avalia se a regra selecionada será executada
function apply(regra){
    if(evalconditions(regra)) { 
        regra.executarConsequente() //Executará o consequente da regra caso todos os predicados sejam verdadeiros com o valor da variável
    } else {
        console.log("Predicado falso\n")
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

function activate(objeto, nameVariable) {
    for (atr in objeto){
        nameAtr = nameVariable + "." + atr
        if(objVars.includes(nameAtr)) {
            traceValues(nameAtr)
        }
    }
}

export {x,y}