import Exercicio from './exercicio.js'

var exercicios = []

/* WarmUp's (Along. ou Mobilidade) */
exercicios.push(new Exercicio(32, "Alongamento de posterior de coxa", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas"])) // Alongamento que você tenta alcançar a ponta dos pés
exercicios.push(new Exercicio(31, "Alongamento do peitoral com o braço flexionado", [1,2,3,4,5], 1, "NA", "Alongamento", ["Peito"])) // Alongamento do peitoral medial
exercicios.push(new Exercicio(30, "Mobilidade hélice", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Ombro"])) // Girar os braços fazendo movimento circular

/* Cores */

/* Resistência */
//Pernas
exercicios.push(new Exercicio(29, "Flexão plantar (livre)", [1,2,3,5], 2, "BodyWeight", "Resistencia", ["Panturrilha"])) // Flexão da panturrilha em pé (peso do corpo)
exercicios.push(new Exercicio(28, "Cadeira flexora", [1,2,3,4], 1, "Máquina", "Resistencia", ["Isquiotibiais"])) // Flexão de isquiotibiais na máquina
exercicios.push(new Exercicio(27, "Cadeira extensora", [1,2,3,4], 1, "Máquina", "Resistencia", ["Quadríceps"])) // Extensão de quadríceps na máquina
exercicios.push(new Exercicio(25, "Leg Press", [2,3,4], 2, "Máquina", "Resistencia", ["Pernas"])) // Leg Press
exercicios.push(new Exercicio(24, "Agachamento (barra teleguiada)", [2,3,4], 2, "Máquina", "Resistencia", ["Pernas"])) // Agachamento com barra teleguiada
exercicios.push(new Exercicio(23, "Agachamento (barra)", [2,3,4], 3, "PesoLivre", "Resistencia", ["Pernas"])) // Agachamento com barra de peso livre
exercicios.push(new Exercicio(22, "Agachamento", [1,5], 1, "BodyWeight", "Resistencia", ["Pernas"])) // Agachamento com peso do corpo
//Costas
exercicios.push(new Exercicio(21, "Barra (Pull-up)", [2,3,4,5], 3, "BodyWeight", "Resistencia", ["Costas"])) // Barra (Pull-up)
exercicios.push(new Exercicio(20, "Puxador vertical", [2,3,4,5], 1, "Máquina", "Resistencia", ["Costas"])) // Pull-up na máquina
exercicios.push(new Exercicio(19, "Remada (barra)", [2,3,4,5], 2, "PesoLivre", "Resistencia", ["Costas"])) // Remada com barra de peso livre
exercicios.push(new Exercicio(18, "Remada (máquina)", [2,3,4,5], 1, "Máquina", "Resistencia", ["Costas"])) // Remada na máquina
exercicios.push(new Exercicio(17, "Crucifixo inverso (máquina)", [2,3,4], 1, "Máquina", "Resistencia", ["Costas"])) // Crucifixo inverso na máquina
exercicios.push(new Exercicio(16, "Crucifixo inverso (halter)", [2,3,4], 2, "PesoLivre", "Resistencia", ["Costas"])) // Crucifixo inverso com halteres
//Bíceps
exercicios.push(new Exercicio(15, "Rosca direta (halter)", [2,3,4], 1, "PesoLivre", "Resistencia", ["Bíceps"])) // Rosca direta com halteres
exercicios.push(new Exercicio(14, "Rosca direta (barra)", [2,3,4], 2, "PesoLivre", "Resistencia", ["Bíceps"])) // Rosca direta com barra de peso livre
exercicios.push(new Exercicio(13, "Rosca Scott (máquina)", [2,3,4], 1, "Máquina", "Resistencia", ["Bíceps"])) // Rosca Scott na máquina
exercicios.push(new Exercicio(13, "Rosca Scott (barra)", [2,3,4], 2, "PesoLivre", "Resistencia", ["Bíceps"])) // Rosca Scott com barra de peso livre
//Tríceps
exercicios.push(new Exercicio(12, "Tríceps testa", [2,3,4], 1, "PesoLivre", "Resistencia", ["Tríceps"])) // Tríceps testa
exercicios.push(new Exercicio(11, "Extensão unilateral do cotovelo (halter)", [2,3,4], 2, "PesoLivre", "Resistencia", ["Tríceps"])) // Extensão unilateral do cotovelo (halter)
exercicios.push(new Exercicio(10, "Extensão unilateral do cotovelo (polia)", [2,3,4], 2, "Máquina", "Resistencia", ["Tríceps"])) // Extensão unilateral do cotovelo (polia)
exercicios.push(new Exercicio(9, "Rosca inversa", [2,3,4], 1, "Máquina", "Resistencia", ["Tríceps"])) // Rosca inversa
//Peito
exercicios.push(new Exercicio(8, "Supino declinado (halter)", [2,3,4], 3, "PesoLivre", "Resistencia", ["Peito", "Ombro", "Tríceps"])) // Supino com halter declinado
exercicios.push(new Exercicio(7, "Supino inclinado (halter)", [2,3,4], 2, "PesoLivre", "Resistencia", ["Peito", "Ombro", "Tríceps"])) // Supino com halter inclinado
exercicios.push(new Exercicio(6, "Supino (halter)", [2,3,4], 2, "PesoLivre", "Resistencia", ["Peito", "Ombro", "Tríceps"])) // Supino com halter
exercicios.push(new Exercicio(5, "Supino declinado", [2,3,4], 3, "PesoLivre", "Resistencia", ["Peito", "Ombro", "Tríceps"])) // Supino declinado
exercicios.push(new Exercicio(4, "Supino inclinado", [2,3,4], 2, "PesoLivre", "Resistencia", ["Peito", "Ombro", "Tríceps"])) // Supino inclinado
exercicios.push(new Exercicio(3, "Supino", [2,3,4], 2, "PesoLivre", "Resistencia", ["Peito", "Ombro", "Tríceps"])) // Supino padrão

// Cardios
exercicios.push(new Exercicio(2, "Esteira", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody"])) // Esteira
exercicios.push(new Exercicio(1, "Bicicleta", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody", "Pernas"])) // Bicicleta
exercicios.push(new Exercicio(0, "Pular corda", [1,2,5], 2, "BodyWeight", "Cardio", ["FullBody", "Pernas"])) // Pular Corda

export {exercicios}