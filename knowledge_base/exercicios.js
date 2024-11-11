import Exercicio from '../entities/exercicio.js'

var exercicios = []
var nextId = 0

// Automatização de inserção de ID's
function adicionarExercicio(nome, niveisOpt, dificuldade, tipo, tipoSubTreino, agrupMusc, descricao) {
    const exercicio = new Exercicio(nextId++, nome, niveisOpt, dificuldade, tipo, tipoSubTreino, agrupMusc, descricao);
    exercicios.push(exercicio);
}

/* WarmUp's (Along. ou Mobilidade) */

//Braço
adicionarExercicio("Alongamento de tríceps sobre a cabeça", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Tríceps"]) // Alongamento colocando uma mão sobre o meio das costas e a outra puxando o cotovelo do braço posicionado nas costas para trás
adicionarExercicio("Alongamento de tríceps horizontal", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Tríceps"]) // Alongamento em que um braço será posicionado lateralmente, com a outra mão sobre o tríceps do braço posicionado, empurrá-lo para o mesmo sentido
adicionarExercicio("Alongamento de tríceps sobre um apoio", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Tríceps"]) // Alongamento em que os braços seram levantados e flexionados de forma que as mãos estejam para trás, nesta posição, encostar os cotovelos sobre uma superfície de forma que se consiga empurrar os cotovelos para cima, enquanto o tronco desce
adicionarExercicio("Alongamento de bíceps palmas da mão sobre superfície", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Bíceps"]) // Alongamento em pé, de costas para uma superfície na altura do quadril, colocar os braços para trás, com as palmas da mão encostando na superfície
adicionarExercicio("Alongamento de bíceps com os braços abertos", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Bíceps"]) // Alongamento em pé, abrir os braços fazendo um angulo de 90 graus com o torso, girar as mãos lentamente para trás e manter a posição
adicionarExercicio("Alongamento de bíceps com as palmas da mão para trás", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Bíceps", "Peito"]) // Alongamento em pé, colocar os braços para trás com as mãos se entrelaçando e a palma da mão apontada para o chão, esticar os braços nesta posição

//Peitoral e deltóide
adicionarExercicio("Alongamento do peitoral com o braço 90 graus", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Peito"]) // Alongamento do peitoral medial com apoio em alguma barra vertical
adicionarExercicio("Mobilidade hélice", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Ombro"]) // Girar os braços fazendo movimento circular
adicionarExercicio("Manguito rotator", "rep", [1,2,3,4,5], 1, "Máquina", "Mobilidade", ["Peito", "Ombro"]) // Com o braço flexionado em angulação de 90 graus e o antebraço paralelo ao chão, puxar a polia no plano horizontal, desde a mão posicionada no abdomen até abrir esta angulação em 100 graus
adicionarExercicio("Alongamento do peitoral com a barra estática", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Peito"]) // Alongamento do peitoral colocando os braços por dentro de uma das barra e a agarrando pronadamente, enquanto deixa o quadril cair sem que encoste na parede, as pernas esticadas com o calcanhar no chão
adicionarExercicio( "Alongamento de ombro", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Ombro", "Peito"]) // Com um dos braços reto na altura dos ombros, segurar uma barra ou apoio, e girar o tronco levemente de forma a abrir a musculatura do peito/ombro

//Pernas
adicionarExercicio( "Alongamento de glúteo", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas"]) // Alongamento que você se deita sobre uma das pernas flexionadas lateralmente enquanto a outra estará esticada, tentando encostar o glúteo no chão
adicionarExercicio( "Alongamento de posterior de coxa em pé", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas", "Isquiotibiais"]) // Alongamento que você tenta alcançar a ponta dos pés
adicionarExercicio( "Alongamento de quadríceps em pé", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas", "Quadríceps"]) // Alongamento que você coloca o pé nas costas e puxa a ponta do pé em direção às costas
adicionarExercicio( "Alongamento de adutores sentado com as pernas esticadas abertas", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas"]) // Alongamento em que sentado, com as pernas esticadas, abre elas o máximo possível
adicionarExercicio( "Rebolada de quadril", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Pernas"]) // Mobilidade de movimentar o quadril em movimento circular
adicionarExercicio( "Mobilidade de tornozelo em pé", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Pernas", "Panturrilha"]) // Em pé, girar o tornozelo circularmente de forma repetida
adicionarExercicio( "Mobilidade de joelho em pé", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Pernas"]) // Em pé, de forma levemente agachada, com as mãos no joelho, girar a articulação com movimentos circulares no plano horizontal

//Costas
adicionarExercicio( "Pendurar na barra", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Costas"]) // Se pendurar na barra e deixar o corpo esticar-se com a gravidade
adicionarExercicio( "Alongamento das costas contra uma superfície", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Costas"]) // Com os braços totalmente esticados na vertical para cima, apoiar as mãos sobre uma superfície e descer o tronco em direção ao chão
adicionarExercicio( "Barra com a escápula", "rep", [1,2,3,4,5], 2, "NA", "Mobilidade", ["Costas"]) // Se pendurar na barra e iniciar o movimento de barra, mas somente com a força das escápulas

/* Cores */

//Fase OPT 1 ESTABILIZAÇÃO
adicionarExercicio( "Ponte", "rep", [1], 1, "BodyWeight", "Core", ["Abdômen"]) // Deitado com as pernas flexionadas, elevar o glúteo
adicionarExercicio( "Floor prone cobra", "rep", [1], 1, "BodyWeight", "Core", ["Lombar"]) // Deitado pronadamente, levantar os braços e o tronco
adicionarExercicio( "Prancha", "time", [1,2,3,4,5], 2, "BodyWeight", "Core", ["Abdômen", "Lombar"]) // Prancha
adicionarExercicio( "Marching", "rep", [1], 1, "BodyWeight", "Core", ["Abdômen"]) // Ficar levantando as pernas flexionadas unilateralmente enquanto deitado

//Fase OPT 2,3,4 FORÇA
adicionarExercicio( "Abdominal na bola suiça", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Abdômen"]) // Abdominal simples deitado na bola suiça
adicionarExercicio( "Hiperextensão lombar", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Lombar"]) // Levantar o tronco no banco romano
adicionarExercicio( "Abdominal reverso", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Abdômen"]) // Deitado, elevar os pés até o teto
adicionarExercicio( "Puxada abdominal transversal na polia", "rep", [2,3,4], 2, "Máquina", "Core", ["Abdômen"]) // Puxar a polia transversalmente, rotacionando o tronco

//Fase OPT 5 FORÇA EXPLOSIVA
adicionarExercicio( "Rotation chest pass", "rep", [5], 1, "Bola", "Core", ["Abdômen"]) // De pé, lançar a bola medicinal para o lado com a maior velocidade possivel girando o tronco em direção lateral
adicionarExercicio( "Throwing on the swiss ball ", "rep", [5], 3, "Bola", "Core", ["Abdômen", "Costas"]) // Deitado em cima da bola suiça, levantar o tronco e lançar a bola medicinal a frente na maior velocidade possível
adicionarExercicio( "Oblique throw", "rep", [5], 2, "Bola", "Core", ["Abdômen", "Ombro"]) // De pé, lançar a bola medicinal obliquamente com a maior velocidade possivel em direção ao teto 
adicionarExercicio( "Soccer throw", "rep", [5], 2, "Bola", "Core", ["Abdômen", "Costas"]) // De pé, lançar a bola medicinal com a maior velocidade possivel em direção ao chão

/* Resistência */

//FullBody
adicionarExercicio( "Agachamento > curl > desenvolvimento de ombro com bola suiça", "rep", [1, 2], 1, "PesoLivre", "Resistência", ["Pernas", "Ombro", "Bíceps"]) // Agachar, depois bíceps curl, depois levantar os halteres pra cima, apoiando-se as costas em uma bola suiça verticalmente na parede
adicionarExercicio( "Two-Arm push press", "rep", [5], 2, "PesoLivre", "Resistência", [ "Ombro", "Pernas"]) // Ao levantar os halteres, flexionar uma das pernas e esticar a de trás
adicionarExercicio( "Barbell clean", "rep", [5], 3, "PesoLivre", "Resistência", ["Ombro", "Pernas", "Bíceps"]) // De uma posição agachada com os braços segurando a barra, levante-a eregindo todos os músculos e a levante apoiada nos ombros
adicionarExercicio( "Overhead medicine ball thrown", "rep", [5], 1, "Bola", "Resistência", ["Ombro", "Pernas"]) // Com a bola nos joelhos e agachado, pular explosivamente e jogar a bola medicinal para cima

//Pernas
adicionarExercicio( "Flexão plantar (livre)", "rep", [1,2,3,5], 2, "BodyWeight", "Resistência", ["Panturrilha"]) // Flexão da panturrilha em pé (sem chão, total amplitude de movimento)
adicionarExercicio( "Flexão plantar em pé", "rep", [1,2], 1, "BodyWeight", "Resistência", ["Panturrilha"]) // Flexão da panturrilha em pé (no chão)
adicionarExercicio( "Cadeira flexora", "rep", [1,2,3,4], 1, "Máquina", "Resistência", ["Isquiotibiais"]) // Flexão de isquiotibiais na máquina
adicionarExercicio( "Cadeira extensora", "rep", [1,2,3,4], 1, "Máquina", "Resistência", ["Quadríceps"]) // Extensão de quadríceps na máquina
adicionarExercicio( "Leg Press", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Pernas"]) // Leg Press
adicionarExercicio( "Agachamento (barra teleguiada)", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Pernas"]) // Agachamento com barra teleguiada
adicionarExercicio( "Agachamento (barra)", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Pernas"]) // Agachamento com barra de peso livre
adicionarExercicio( "Agachamento", "rep", [1,5], 1, "BodyWeight", "Resistência", ["Pernas"]) // Agachamento com peso do corpo
adicionarExercicio( "Agachamento (apoio banco)", "rep", [1], 1, "BodyWeight", "Resistência", ["Pernas"]) // Agachamento com apoio do banco
//Costas
adicionarExercicio( "Standing cable row", "rep", [1, 2], 1, "Máquina", "Resistência", ["Costas", "Bíceps"]) // Com as pernas levemente flexionadas, puxar as polias 
adicionarExercicio( "Voador na bola suiça", "rep", [1], 1, "PesoLivre", "Resistência", ["Costas"]) // Voador na bola suiça
adicionarExercicio( "Puxada na bola suiça", "rep", [1], 1, "PesoLivre", "Resistência", ["Costas"]) // Puxar os pesos com o cotovelo mais próximo do abdômen na bola suiça
adicionarExercicio( "Barra (Pull-up)", "rep", [2,3,4,5], 3, "BodyWeight", "Resistência", ["Costas", "Bíceps"]) // Barra (Pull-up)
adicionarExercicio( "Puxador vertical", "rep", [2,3,4,5], 1, "Máquina", "Resistência", ["Costas", "Bíceps"]) // Pull-up na máquina
adicionarExercicio( "Remada (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Costas", "Bíceps"]) // Remada com barra de peso livre
adicionarExercicio( "Remada (máquina)", "rep", [2,3,4,5], 1, "Máquina", "Resistência", ["Costas", "Bíceps"]) // Remada na máquina
adicionarExercicio( "Crucifixo inverso (máquina)", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Costas"]) // Crucifixo inverso na máquina
adicionarExercicio( "Crucifixo inverso (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Costas"]) // Crucifixo inverso com halteres
//Bíceps
adicionarExercicio( "Rosca direta com uma perna (halter)", "rep", [1], 2, "PesoLivre", "Resistência", ["Bíceps"]) // Fazer uma rosca direta com halteres se apoiando apenas com uma perna enquanto a outra fica acima do solo
adicionarExercicio( "Rosca direta com uma perna (barra)", "rep", [1], 1, "PesoLivre", "Resistência", ["Bíceps"]) // Fazer uma rosca direta com a barra se apoiando apenas com uma perna enquanto a outra fica acima do solo
adicionarExercicio( "Rosca direta (halter)", "rep", [2,3,4], 1, "PesoLivre", "Resistência", ["Bíceps"]) // Rosca direta com halteres
adicionarExercicio( "Rosca direta (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Bíceps"]) // Rosca direta com barra de peso livre
adicionarExercicio( "Rosca Scott (máquina)", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Bíceps"]) // Rosca Scott na máquina
adicionarExercicio( "Rosca Scott (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Bíceps"]) // Rosca Scott com barra de peso livre
//Tríceps
adicionarExercicio( "Tríceps testa", "rep", [2,3,4], 1, "PesoLivre", "Resistência", ["Tríceps"]) // Tríceps testa
adicionarExercicio( "Extensão unilateral do cotovelo (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Tríceps"]) // Extensão unilateral do cotovelo (halter)
adicionarExercicio( "Extensão unilateral do cotovelo (polia)", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Tríceps"]) // Extensão unilateral do cotovelo (polia)
adicionarExercicio( "Rosca inversa", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Tríceps"]) // Rosca inversa
//Peito
adicionarExercicio( "Two-arm chest pass", "rep", [5], 1, "Bola", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Jogar a bola medicinal com uma força concêntrica explosiva em um ângulo de 30 graus a cima da linha dos ombros
adicionarExercicio( "Rotation chest pass", "rep", [5], 1, "Bola", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Jogar a bola medicinal com uma força concêntrica explosiva em um ângulo de 30 graus a cima da linha dos ombros para a lateral 
adicionarExercicio( "Supino declinado (halter)", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Supino com halter declinado
adicionarExercicio( "Supino inclinado (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Supino com halter inclinado
adicionarExercicio( "Supino (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Supino com halter
adicionarExercicio( "Supino declinado", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Supino declinado
adicionarExercicio( "Supino inclinado", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Supino inclinado
adicionarExercicio( "Supino na bola suiça", "rep", [1,2], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Supino na bolsa suiça
adicionarExercicio( "Supino", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Supino padrão
adicionarExercicio( "Flexão militar", "rep", [1,2,3,], 2, "BodyWeight", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Flexão militar
adicionarExercicio( "Flexão militar (apoio dos joelhos)", "rep", [1], 1, "BodyWeight", "Resistência", ["Peito", "Ombro", "Tríceps"]) // Flexão militar com joelhos encostados
//Ombro
adicionarExercicio( "Dumbble Scaption", "rep", [1], 1, "PesoLivre", "Resistência", ["Ombro"]) // Com uma perna levemente levantada do chão, erguer os halteres na linha dos ombros em uma angulação de 45° da linha de visão horizontal e segurar um pouco
adicionarExercicio( "Desenvolvimento de ombro na bola suiça", "rep", [1, 2], 2, "PesoLivre", "Resistência", ["Ombro"]) // Desenvolvimento de ombro sentado na bola suiça
adicionarExercicio( "Desenvolvimento de ombro", "rep", [2, 3, 4], 2, "PesoLivre", "Resistência", ["Ombro"]) // Desenvolvimento de ombro sentado na bola suiça
adicionarExercicio( "Desenvolvimento de ombro (máquina)", "rep", [2, 3, 4], 1, "Máquina", "Resistência", ["Ombro"]) // Desenvolvimento de ombro na máquina


// Cardios
adicionarExercicio( "Esteira", "time", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody"]) // Esteira
adicionarExercicio( "Bicicleta", "time", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody", "Pernas"]) // Bicicleta
adicionarExercicio( "Pular corda", "rep", [1,2,5], 2, "BodyWeight", "Cardio", ["FullBody", "Pernas"]) // Pular Corda

export {exercicios}