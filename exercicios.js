import Exercicio from './exercicio.js'

var exercicios = []

/* WarmUp's (Along. ou Mobilidade) */
exercicios.push(new Exercicio(0, "Alongamento de glúteo", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas"])) // Alongamento que você se deita sobre uma das pernas flexionadas lateralmente enquanto a outra estará esticada, tentando encostar o glúteo no chão
exercicios.push(new Exercicio(1, "Alongamento de posterior de coxa", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas"])) // Alongamento que você tenta alcançar a ponta dos pés
exercicios.push(new Exercicio(2, "Alongamento do peitoral com o braço flexionado", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Peito"])) // Alongamento do peitoral medial
exercicios.push(new Exercicio(3, "Mobilidade hélice", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Ombro"])) // Girar os braços fazendo movimento circular

/* Cores */

//Fase OPT 1 ESTABILIZAÇÃO
exercicios.push(new Exercicio(4, "Ponte", "rep", [1], 1, "BodyWeight", "Core", ["Abdômen"])) // Deitado com as pernas flexionadas, elevar o glúteo
exercicios.push(new Exercicio(5, "Floor prone cobra", "rep", [1], 1, "BodyWeight", "Core", ["Lombar"])) // Deitado pronadamente, levantar os braços e o tronco
exercicios.push(new Exercicio(6, "Prancha", "time", [1,2,3,4,5], 2, "BodyWeight", "Core", ["Abdômen", "Lombar"])) // Prancha
exercicios.push(new Exercicio(7, "Marching", "rep", [1], 1, "BodyWeight", "Core", ["Abdômen"])) // Ficar levantando as pernas flexionadas unilateralmente enquanto deitado

//Fase OPT 2,3,4 FORÇA
exercicios.push(new Exercicio(8, "Abdominal na bola suiça", "rep", [2,3,4], 3, "BodyWeight", "Core", ["Abdômen"])) // Abdominal simples deitado na bola suiça
exercicios.push(new Exercicio(9, "Hiperextensão lombar", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Lombar"])) // Levantar o tronco no banco romano
exercicios.push(new Exercicio(10, "Abdominal reverso", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Abdômen"])) // Deitado, elevar os pés até o teto
exercicios.push(new Exercicio(11, "Puxada abdominal transversal na polia", "rep", [2,3,4], 2, "Máquina", "Core", ["Abdômen"])) // Puxar a polia transversalmente, rotacionando o tronco

//Fase OPT 5 FORÇA EXPLOSIVA
exercicios.push(new Exercicio(12, "Rotation chest pass", "rep", [5], 1, "Bola", "Core", ["Abdômen"])) // De pé, lançar a bola medicinal para o lado com a maior velocidade possivel girando o tronco em direção lateral
exercicios.push(new Exercicio(13, "Throwing on the swiss ball ", "rep", [5], 3, "Bola", "Core", ["Abdômen"])) // Deitado em cima da bola suiça, levantar o tronco e lançar a bola medicinal a frente na maior velocidade possível
exercicios.push(new Exercicio(14, "Oblique throw", "rep", [5], 1, "Bola", "Core", ["Abdômen"])) // De pé, lançar a bola medicinal obliquamente com a maior velocidade possivel em direção ao teto 
exercicios.push(new Exercicio(15, "Soccer throw", "rep", [5], 1, "Bola", "Core", ["Abdômen"])) // De pé, lançar a bola medicinal com a maior velocidade possivel em direção ao chão

/* Resistência */
//Pernas
exercicios.push(new Exercicio(16, "Flexão plantar (livre)", "rep", [1,2,3,5], 2, "BodyWeight", "Resistência", ["Panturrilha"])) // Flexão da panturrilha em pé (peso do corpo)
exercicios.push(new Exercicio(17, "Cadeira flexora", "rep", [1,2,3,4], 1, "Máquina", "Resistência", ["Isquiotibiais"])) // Flexão de isquiotibiais na máquina
exercicios.push(new Exercicio(18, "Cadeira extensora", "rep", [1,2,3,4], 1, "Máquina", "Resistência", ["Quadríceps"])) // Extensão de quadríceps na máquina
exercicios.push(new Exercicio(19, "Leg Press", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Pernas"])) // Leg Press
exercicios.push(new Exercicio(20, "Agachamento (barra teleguiada)", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Pernas"])) // Agachamento com barra teleguiada
exercicios.push(new Exercicio(21, "Agachamento (barra)", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Pernas"])) // Agachamento com barra de peso livre
exercicios.push(new Exercicio(22, "Agachamento", "rep", [1,5], 1, "BodyWeight", "Resistência", ["Pernas"])) // Agachamento com peso do corpo
//Costas
exercicios.push(new Exercicio(23, "Barra (Pull-up)", "rep", [2,3,4,5], 3, "BodyWeight", "Resistência", ["Costas"])) // Barra (Pull-up)
exercicios.push(new Exercicio(24, "Puxador vertical", "rep", [2,3,4,5], 1, "Máquina", "Resistência", ["Costas"])) // Pull-up na máquina
exercicios.push(new Exercicio(25, "Remada (barra)", "rep", [2,3,4,5], 2, "PesoLivre", "Resistência", ["Costas"])) // Remada com barra de peso livre
exercicios.push(new Exercicio(26, "Remada (máquina)", "rep", [2,3,4,5], 1, "Máquina", "Resistência", ["Costas"])) // Remada na máquina
exercicios.push(new Exercicio(27, "Crucifixo inverso (máquina)", "rep", [2,3,4], 1, "Máquina", "Resistencia", ["Costas"])) // Crucifixo inverso na máquina
exercicios.push(new Exercicio(28, "Crucifixo inverso (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Costas"])) // Crucifixo inverso com halteres
//Bíceps
exercicios.push(new Exercicio(29, "Rosca direta (halter)", "rep", [2,3,4], 1, "PesoLivre", "Resistência", ["Bíceps"])) // Rosca direta com halteres
exercicios.push(new Exercicio(30, "Rosca direta (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Bíceps"])) // Rosca direta com barra de peso livre
exercicios.push(new Exercicio(31, "Rosca Scott (máquina)", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Bíceps"])) // Rosca Scott na máquina
exercicios.push(new Exercicio(32, "Rosca Scott (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Bíceps"])) // Rosca Scott com barra de peso livre
//Tríceps
exercicios.push(new Exercicio(33, "Tríceps testa", "rep", [2,3,4], 1, "PesoLivre", "Resistência", ["Tríceps"])) // Tríceps testa
exercicios.push(new Exercicio(34, "Extensão unilateral do cotovelo (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Tríceps"])) // Extensão unilateral do cotovelo (halter)
exercicios.push(new Exercicio(35, "Extensão unilateral do cotovelo (polia)", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Tríceps"])) // Extensão unilateral do cotovelo (polia)
exercicios.push(new Exercicio(36, "Rosca inversa", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Tríceps"])) // Rosca inversa
//Peito
exercicios.push(new Exercicio(37, "Supino declinado (halter)", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino com halter declinado
exercicios.push(new Exercicio(38, "Supino inclinado (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino com halter inclinado
exercicios.push(new Exercicio(39, "Supino (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino com halter
exercicios.push(new Exercicio(40, "Supino declinado", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino declinado
exercicios.push(new Exercicio(41, "Supino inclinado", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino inclinado
exercicios.push(new Exercicio(42, "Supino", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino padrão

// Cardios
exercicios.push(new Exercicio(43, "Esteira", "time", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody"])) // Esteira
exercicios.push(new Exercicio(44, "Bicicleta", "time", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody", "Pernas"])) // Bicicleta
exercicios.push(new Exercicio(45, "Pular corda", "rep", [1,2,5], 2, "BodyWeight", "Cardio", ["FullBody", "Pernas"])) // Pular Corda

export {exercicios}