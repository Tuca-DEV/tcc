
import {askable_vars, objVars} from './main.js'
import {regras} from './production_rule.js'
import {binding} from './binding.js'
import promptSync from 'prompt-sync';

const prompt = promptSync();

var tracedVars = []
var explanations = []

//Tentará obter um valor para a variável variable através de inferência ou pergunta ao usuário
function traceValues(nameVariable) {
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
        /*for(i in binding[nameVariable]) {
            console.log("\ni = "+i+"\n")
            activate(i, nameVariable)
        }
            */
        binding[nameVariable].forEach(x => {
            activate(x, nameVariable)
        })

    // Caso seja um objeto
    } else if (binding[nameVariable] instanceof Object && binding[nameVariable].length == undefined) {
        activate(binding[nameVariable], nameVariable)    

    } else {
        console.log("Não foi possível traçar a variável no momento\n")
    } 

    tracedVars.push(nameVariable)
}

//Método para inferir o valor da variável
function infer(nameVariable){
    var selected_regras = []
    select(regras, nameVariable, selected_regras) //Seleciona as regras para dentro do vetor selected_regras
    selected_regras.forEach(r => { //Para cada regra selecionada, aplique-a
        if(!r.used){r.used = true; apply(r)} // Se a regra não foi utilizada anteriormente
    })
}

//Seleção das regras
function select(regras, nameVariable, selected_regras){
    //Para cada regra, analise se a variável em questão é alterada pelo consequente desta regra
    regras.forEach(r => {
        for(var i = 0; i < r.nameVariaveisConsequente.length; i++) {  
            //Selecionando a regra de fato
            if (r.nameVariaveisConsequente[i] == nameVariable) { 
                selected_regras.push(r); 
                break;
            } 
        }
    });
}

//Avalia se a regra selecionada será executada
function apply(regra){
    if(evalconditions(regra)) { 
        explanations.push(regra.exp)
        regra.executarConsequente() //Executará o consequente da regra caso todos os predicados sejam verdadeiros com o valor da variável
    } 
}

//Avalia se todos os testes lógicos na regra retornam valor verdadeiro
function evalconditions(regra) {    
    for(var i=0; i < regra.antecedente.length; i++){
        if(!tracedVars.includes(regra.nameVariaveisAntecedente[i])){traceValues(regra.nameVariaveisAntecedente[i])}
        if(!regra.antecedente[i]()) {
            return false
        } //Caso haja um predicado com valor falso, retornará falso
    }
    return true
}

function activate(objeto, nameVariable) {
    //Teste para ver se o if no traceValues funciona corretamente
    if(!(objeto instanceof Object)) {return console.log("\nERRO! NÃO É OBJETO: "+nameVariable+"||"+objeto)}

    //Atributos do objeto
    var atr = Object.keys(objeto)
    atr.forEach(nameAtr => {
        var nameAtrComplete = nameVariable + "." + nameAtr;
        if(objVars.includes(nameAtrComplete)) {
            traceValues(nameAtrComplete)
        }
    })
}

export {traceValues, explanations}
