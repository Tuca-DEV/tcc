import Exercicio from './exercicio.js'

var exercicios = []

/* WarmUp's (Along. ou Mobilidade) */

//Braço
exercicios.push(new Exercicio(0, "Alongamento de tríceps sobre a cabeça", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Tríceps"])) // Alongamento colocando uma mão sobre o meio das costas e a outra puxando o cotovelo do braço posicionado nas costas para trás
exercicios.push(new Exercicio(1, "Alongamento de tríceps horizontal", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Tríceps"])) // Alongamento em que um braço será posicionado lateralmente, com a outra mão sobre o tríceps do braço posicionado, empurrá-lo para o mesmo sentido
exercicios.push(new Exercicio(2, "Alongamento de tríceps sobre um apoio", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Tríceps"])) // Alongamento em que os braços seram levantados e flexionados de forma que as mãos estejam para trás, nesta posição, encostar os cotovelos sobre uma superfície de forma que se consiga empurrar os cotovelos para cima, enquanto o tronco desce
exercicios.push(new Exercicio(3, "Alongamento de bíceps palmas da mão sobre superfície", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Bíceps"])) // Alongamento em pé, de costas para uma superfície na altura do quadril, colocar os braços para trás, com as palmas da mão encostando na superfície
exercicios.push(new Exercicio(4, "Alongamento de bíceps com os braços abertos", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Bíceps"])) // Alongamento em pé, abrir os braços fazendo um angulo de 90 graus com o torso, girar as mãos lentamente para trás e manter a posição
exercicios.push(new Exercicio(5, "Alongamento de bíceps com as palmas da mão para trás", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Bíceps", "Peito"])) // Alongamento em pé, colocar os braços para trás com as mãos se entrelaçando e a palma da mão apontada para o chão, esticar os braços nesta posição

//Peitoral e deltóide
exercicios.push(new Exercicio(6, "Alongamento do peitoral com o braço 90 graus", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Peito"])) // Alongamento do peitoral medial com apoio em alguma barra vertical
exercicios.push(new Exercicio(7, "Mobilidade hélice", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Ombro"])) // Girar os braços fazendo movimento circular
exercicios.push(new Exercicio(8, "Manguito rotator", "rep", [1,2,3,4,5], 1, "Máquina", "Mobilidade", ["Peito", "Ombro"])) // Com o braço flexionado em angulação de 90 graus e o antebraço paralelo ao chão, puxar a polia no plano horizontal, desde a mão posicionada no abdomen até abrir esta angulação em 100 graus
exercicios.push(new Exercicio(9, "Alongamento do peitoral com a barra estática", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Peito"])) // Alongamento do peitoral colocando os braços por dentro de uma das barra e a agarrando pronadamente, enquanto deixa o quadril cair sem que encoste na parede, as pernas esticadas com o calcanhar no chão
exercicios.push(new Exercicio(10, "Alongamento de ombro", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Ombro", "Peito"])) // Com um dos braços reto na altura dos ombros, segurar uma barra ou apoio, e girar o tronco levemente de forma a abrir a musculatura do peito/ombro

//Pernas
exercicios.push(new Exercicio(11, "Alongamento de glúteo", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas"])) // Alongamento que você se deita sobre uma das pernas flexionadas lateralmente enquanto a outra estará esticada, tentando encostar o glúteo no chão
exercicios.push(new Exercicio(12, "Alongamento de posterior de coxa em pé", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas", "Isquiotibiais"])) // Alongamento que você tenta alcançar a ponta dos pés
exercicios.push(new Exercicio(13, "Alongamento de quadríceps em pé", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas", "Quadríceps"])) // Alongamento que você coloca o pé nas costas e puxa a ponta do pé em direção às costas
exercicios.push(new Exercicio(14, "Alongamento de adutores sentado com as pernas esticadas abertas", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas"])) // Alongamento em que sentado, com as pernas esticadas, abre elas o máximo possível
exercicios.push(new Exercicio(15, "Rebolada de quadril", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Pernas"])) // Mobilidade de movimentar o quadril em movimento circular
exercicios.push(new Exercicio(16, "Mobilidade de tornozelo em pé", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Pernas", "Panturrilha"])) // Em pé, girar o tornozelo circularmente de forma repetida
exercicios.push(new Exercicio(17, "Mobilidade de joelho em pé", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Pernas"])) // Em pé, de forma levemente agachada, com as mãos no joelho, girar a articulação com movimentos circulares no plano horizontal

//Costas
exercicios.push(new Exercicio(18, "Pendurar na barra", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Costas"])) // Se pendurar na barra e deixar o corpo esticar-se com a gravidade
exercicios.push(new Exercicio(19, "Alongamento das costas contra uma superfície", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Costas"])) // Com os braços totalmente esticados na vertical para cima, apoiar as mãos sobre uma superfície e descer o tronco em direção ao chão
exercicios.push(new Exercicio(20, "Barra com a escápula", "rep", [1,2,3,4,5], 2, "NA", "Mobilidade", ["Costas"])) // Se pendurar na barra e iniciar o movimento de barra, mas somente com a força das escápulas

/* Cores */

//Fase OPT 1 ESTABILIZAÇÃO
exercicios.push(new Exercicio(21, "Ponte", "rep", [1], 1, "BodyWeight", "Core", ["Abdômen"])) // Deitado com as pernas flexionadas, elevar o glúteo
exercicios.push(new Exercicio(22, "Floor prone cobra", "rep", [1], 1, "BodyWeight", "Core", ["Lombar"])) // Deitado pronadamente, levantar os braços e o tronco
exercicios.push(new Exercicio(23, "Prancha", "time", [1,2,3,4,5], 2, "BodyWeight", "Core", ["Abdômen", "Lombar"])) // Prancha
exercicios.push(new Exercicio(24, "Marching", "rep", [1], 1, "BodyWeight", "Core", ["Abdômen"])) // Ficar levantando as pernas flexionadas unilateralmente enquanto deitado

//Fase OPT 2,3,4 FORÇA
exercicios.push(new Exercicio(25, "Abdominal na bola suiça", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Abdômen"])) // Abdominal simples deitado na bola suiça
exercicios.push(new Exercicio(26, "Hiperextensão lombar", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Lombar"])) // Levantar o tronco no banco romano
exercicios.push(new Exercicio(27, "Abdominal reverso", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Abdômen"])) // Deitado, elevar os pés até o teto
exercicios.push(new Exercicio(28, "Puxada abdominal transversal na polia", "rep", [2,3,4], 2, "Máquina", "Core", ["Abdômen"])) // Puxar a polia transversalmente, rotacionando o tronco

//Fase OPT 5 FORÇA EXPLOSIVA
exercicios.push(new Exercicio(29, "Rotation chest pass", "rep", [5], 1, "Bola", "Core", ["Abdômen"])) // De pé, lançar a bola medicinal para o lado com a maior velocidade possivel girando o tronco em direção lateral
exercicios.push(new Exercicio(30, "Throwing on the swiss ball ", "rep", [5], 3, "Bola", "Core", ["Abdômen", "Costas"])) // Deitado em cima da bola suiça, levantar o tronco e lançar a bola medicinal a frente na maior velocidade possível
exercicios.push(new Exercicio(31, "Oblique throw", "rep", [5], 2, "Bola", "Core", ["Abdômen", "Ombro"])) // De pé, lançar a bola medicinal obliquamente com a maior velocidade possivel em direção ao teto 
exercicios.push(new Exercicio(32, "Soccer throw", "rep", [5], 2, "Bola", "Core", ["Abdômen", "Costas"])) // De pé, lançar a bola medicinal com a maior velocidade possivel em direção ao chão

/* Resistência */

//FullBody
exercicios.push(new Exercicio(33, "Agachamento > curl > desenvolvimento de ombro com bola suiça", "rep", [1, 2], 1, "PesoLivre", "Resistência", ["Pernas", "Ombro", "Bíceps"])) // Agachar, depois bíceps curl, depois levantar os halteres pra cima, apoiando-se as costas em uma bola suiça verticalmente na parede
exercicios.push(new Exercicio(34, "Two-Arm push press", "rep", [5], 2, "PesoLivre", "Resistência", [ "Ombro", "Pernas"])) // Ao levantar os halteres, flexionar uma das pernas e esticar a de trás
exercicios.push(new Exercicio(35, "Barbell clean", "rep", [5], 3, "PesoLivre", "Resistência", ["Ombro", "Pernas", "Bíceps"])) // De uma posição agachada com os braços segurando a barra, levante-a eregindo todos os músculos e a levante apoiada nos ombros
exercicios.push(new Exercicio(36, "Overhead medicine ball thrown", "rep", [5], 1, "Bola", "Resistência", ["Ombro", "Pernas"])) // Com a bola nos joelhos e agachado, pular explosivamente e jogar a bola medicinal para cima

//Pernas
exercicios.push(new Exercicio(37, "Flexão plantar (livre)", "rep", [1,2,3,5], 2, "BodyWeight", "Resistência", ["Panturrilha"])) // Flexão da panturrilha em pé (peso do corpo)
exercicios.push(new Exercicio(38, "Cadeira flexora", "rep", [1,2,3,4], 1, "Máquina", "Resistência", ["Isquiotibiais"])) // Flexão de isquiotibiais na máquina
exercicios.push(new Exercicio(39, "Cadeira extensora", "rep", [1,2,3,4], 1, "Máquina", "Resistência", ["Quadríceps"])) // Extensão de quadríceps na máquina
exercicios.push(new Exercicio(40, "Leg Press", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Pernas"])) // Leg Press
exercicios.push(new Exercicio(41, "Agachamento (barra teleguiada)", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Pernas"])) // Agachamento com barra teleguiada
exercicios.push(new Exercicio(42, "Agachamento (barra)", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Pernas"])) // Agachamento com barra de peso livre
exercicios.push(new Exercicio(43, "Agachamento", "rep", [1,5], 1, "BodyWeight", "Resistência", ["Pernas"])) // Agachamento com peso do corpo
//Costas
exercicios.push(new Exercicio(44, "Standing cable row", "rep", [1, 2], 1, "Máquina", "Resistência", ["Costas", "Bíceps"])) // Com as pernas levemente flexionadas, puxar as polias 
exercicios.push(new Exercicio(45, "Voador na bola suiça", "rep", [1], 1, "PesoLivre", "Resistência", ["Costas"])) // Voador na bola suiça
exercicios.push(new Exercicio(46, "Puxada na bola suiça", "rep", [1], 1, "PesoLivre", "Resistência", ["Costas"])) // Puxar os pesos com o cotovelo mais próximo do abdômen na bola suiça
exercicios.push(new Exercicio(47, "Barra (Pull-up)", "rep", [2,3,4,5], 3, "BodyWeight", "Resistência", ["Costas", "Bíceps"])) // Barra (Pull-up)
exercicios.push(new Exercicio(48, "Puxador vertical", "rep", [2,3,4,5], 1, "Máquina", "Resistência", ["Costas", "Bíceps"])) // Pull-up na máquina
exercicios.push(new Exercicio(49, "Remada (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Costas", "Bíceps"])) // Remada com barra de peso livre
exercicios.push(new Exercicio(50, "Remada (máquina)", "rep", [2,3,4,5], 1, "Máquina", "Resistência", ["Costas", "Bíceps"])) // Remada na máquina
exercicios.push(new Exercicio(51, "Crucifixo inverso (máquina)", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Costas"])) // Crucifixo inverso na máquina
exercicios.push(new Exercicio(52, "Crucifixo inverso (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Costas"])) // Crucifixo inverso com halteres
//Bíceps
exercicios.push(new Exercicio(53, "Rosca direta com uma perna (halter)", "rep", [1], 2, "PesoLivre", "Resistência", ["Bíceps"])) // Fazer uma rosca direta com halteres se apoiando apenas com uma perna enquanto a outra fica acima do solo
exercicios.push(new Exercicio(54, "Rosca direta com uma perna (barra)", "rep", [1], 1, "PesoLivre", "Resistência", ["Bíceps"])) // Fazer uma rosca direta com a barra se apoiando apenas com uma perna enquanto a outra fica acima do solo
exercicios.push(new Exercicio(55, "Rosca direta (halter)", "rep", [2,3,4], 1, "PesoLivre", "Resistência", ["Bíceps"])) // Rosca direta com halteres
exercicios.push(new Exercicio(56, "Rosca direta (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Bíceps"])) // Rosca direta com barra de peso livre
exercicios.push(new Exercicio(57, "Rosca Scott (máquina)", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Bíceps"])) // Rosca Scott na máquina
exercicios.push(new Exercicio(58, "Rosca Scott (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Bíceps"])) // Rosca Scott com barra de peso livre
//Tríceps
exercicios.push(new Exercicio(59, "Tríceps testa", "rep", [2,3,4], 1, "PesoLivre", "Resistência", ["Tríceps"])) // Tríceps testa
exercicios.push(new Exercicio(60, "Extensão unilateral do cotovelo (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Tríceps"])) // Extensão unilateral do cotovelo (halter)
exercicios.push(new Exercicio(61, "Extensão unilateral do cotovelo (polia)", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Tríceps"])) // Extensão unilateral do cotovelo (polia)
exercicios.push(new Exercicio(62, "Rosca inversa", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Tríceps"])) // Rosca inversa
//Peito
exercicios.push(new Exercicio(63, "Two-arm chest pass", "rep", [5], 1, "Bola", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Jogar a bola medicinal com uma força concêntrica explosiva em um ângulo de 30 graus a cima da linha dos ombros
exercicios.push(new Exercicio(64, "Rotation chest pass", "rep", [5], 1, "Bola", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Jogar a bola medicinal com uma força concêntrica explosiva em um ângulo de 30 graus a cima da linha dos ombros para a lateral 
exercicios.push(new Exercicio(65, "Supino declinado (halter)", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino com halter declinado
exercicios.push(new Exercicio(66, "Supino inclinado (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino com halter inclinado
exercicios.push(new Exercicio(67, "Supino (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino com halter
exercicios.push(new Exercicio(68, "Supino declinado", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino declinado
exercicios.push(new Exercicio(69, "Supino inclinado", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino inclinado
exercicios.push(new Exercicio(70, "Supino na bola suiça", "rep", [1,2], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino na bolsa suiça
exercicios.push(new Exercicio(71, "Supino", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Supino padrão
exercicios.push(new Exercicio(72, "Flexão militar", "rep", [1,2,3,], 2, "BodyWeight", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Flexão militar
exercicios.push(new Exercicio(73, "Flexão militar (apoio dos joelhos)", "rep", [1], 1, "BodyWeight", "Resistência", ["Peito", "Ombro", "Tríceps"])) // Flexão militar com joelhos encostados
//Ombro
exercicios.push(new Exercicio(74, "Dumbble Scaption", "rep", [1], 1, "PesoLivre", "Resistência", ["Ombro"])) // Com uma perna levemente levantada do chão, erguer os halteres na linha dos ombros em uma angulação de 45° da linha de visão horizontal e segurar um pouco
exercicios.push(new Exercicio(75, "Desenvolvimento de ombro na bola suiça", "rep", [1, 2], 2, "PesoLivre", "Resistência", ["Ombro"])) // Desenvolvimento de ombro sentado na bola suiça
exercicios.push(new Exercicio(76, "Desenvolvimento de ombro", "rep", [2, 3, 4], 2, "PesoLivre", "Resistência", ["Ombro"])) // Desenvolvimento de ombro sentado na bola suiça
exercicios.push(new Exercicio(77, "Desenvolvimento de ombro (máquina)", "rep", [2, 3, 4], 1, "Máquina", "Resistência", ["Ombro"])) // Desenvolvimento de ombro na máquina


// Cardios
exercicios.push(new Exercicio(78, "Esteira", "time", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody"])) // Esteira
exercicios.push(new Exercicio(79, "Bicicleta", "time", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody", "Pernas"])) // Bicicleta
exercicios.push(new Exercicio(80, "Pular corda", "rep", [1,2,5], 2, "BodyWeight", "Cardio", ["FullBody", "Pernas"])) // Pular Corda

export {exercicios}