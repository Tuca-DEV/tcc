import Exercicio from './exercicio.js'

var exercicios = []

// WarmUp's

// Cores

// Resistência

// Cardios
exercicios.push(new Exercicio(0, "Esteira", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody"])) // Esteira
exercicios.push(new Exercicio(1, "Bicicleta", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody", "Pernas"])) // Bicicleta
exercicios.push(new Exercicio(2, "Pular corda", [1,2,5], 2, "BodyWeight", "Cardio", ["FullBody", "Pernas"])) // Pular Corda

export {exercicios}