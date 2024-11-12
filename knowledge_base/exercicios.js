import Exercicio from '../entities/exercicio.js'

var exercicios = []
var nextId = 0
var nextDesc = null

// Automatização de inserção de ID's
function adicionarExercicio(nome, tipoCont, niveisOpt, dificuldade, tipo, tipoSubTreino, agrupMusc, descricao) {
    const exercicio = new Exercicio(nextId++, nome, tipoCont, niveisOpt, dificuldade, tipo, tipoSubTreino, agrupMusc, descricao);
    exercicios.push(exercicio);
}

/* WarmUp's (Along. ou Mobilidade) */

//Braço

adicionarExercicio("Alongamento de tríceps sobre a cabeça", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Tríceps"], 
    "Eleve o cotovelo esquerdo e estique a mão até a parte superior das costas. Fique em pé com os pés afastados na largura dos ombros e os joelhos levemente dobrados. Aponte o cotovelo esquerdo em direção ao teto e toque o centro da parte superior das costas com a mão esquerda.\nSe você não conseguir alcançar a parte superior das costas, coloque a mão na nuca. Incline a cabeça para frente quando colocar a mão na nuca e, em seguida, empurre a cabeça para trás com cuidado para aumentar a tensão no tríceps.\nPuxe o cotovelo esquerdo com a mão direita suavemente. Pegue o cotovelo esquerdo com a mão direita. Puxe delicadamente o cotovelo para trás e em direção ao lado direito até sentir um alongamento no tríceps esquerdo.\nTome cuidado para não alongar o braço para além da amplitude de movimento natural.") // Alongamento colocando uma mão sobre o meio das costas e a outra puxando o cotovelo do braço posicionado nas costas para trás

adicionarExercicio("Alongamento de tríceps horizontal", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Tríceps"], 
    "Levante o braço esquerdo e estique o braço para o lado direito. Fique em pé com os pés afastados na largura dos ombros e os joelhos levemente dobrados, em vez de travados. Cruze o braço esquerdo esticado sobre o corpo na altura dos ombros. \nSegure o braço esquerdo com o pulso direito. Com o braço esquerdo ainda estendido, levante o braço direito até a altura do cotovelo esquerdo. Coloque o pulso direito em um ponto confortável próximo ao cotovelo esquerdo. \nDependendo de sua flexibilidade, você pode colocar o pulso logo abaixo do cotovelo, no antebraço, ou acima do cotovelo, no tríceps. \nColocar o pulso mais acima do braço dará mais força e ajudará a alongar mais músculos do ombro e laterais que se conectam ao tríceps. \nNão se alongue ao ponto de sentir dor ou desconforto. Ouça o seu corpo e não exceda a amplitude de movimento natural do seu braço.") // Alongamento em que um braço será posicionado lateralmente, com a outra mão sobre o tríceps do braço posicionado, empurrá-lo para o mesmo sentido

adicionarExercicio("Alongamento de tríceps sobre um apoio", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Tríceps"], 
    "Ajoelhe-se na frente de uma cadeira baixa ou otomano. Você precisará de um objeto baixo e resistente, como uma cadeira, otomano ou mesinha mais pesada. Ajoelhe-se longe do objeto a uma distância aproximadamente igual ao comprimento dos joelhos até o topo da cabeça.\nVocê precisará se inclinar com o corpo paralelo ao chão sem que a cabeça toque no objeto.\nIncline-se para a frente e coloque os cotovelos na cadeira. Incline-se para a frente e coloque os cotovelos acima da cabeça para se apoiar na beira da cadeira. Dobre os cotovelos enquanto os apoia na cadeira para suportar o peso da parte superior do corpo. Enquanto se posiciona, use a cadeira e o chão de apoio para não forçar a região lombar.\nContinue ajoelhado enquanto se inclina para a frente para que os joelhos fiquem dobrados em um ângulo de 90 graus com as canelas tocando o chão.") // Alongamento em que os braços seram levantados e flexionados de forma que as mãos estejam para trás, nesta posição, encostar os cotovelos sobre uma superfície de forma que se consiga empurrar os cotovelos para cima, enquanto o tronco desce

adicionarExercicio("Alongamento de bíceps palmas da mão sobre superfície", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Bíceps"], 
    "Fique em pé com os pés separados à distância dos quadris.Coloque um braço atrás do corpo e desça-o até que o pulso esteja apoiado sobre o banco ou a mesa. A palma da mão deve estar voltada para cima. Cuidadosamente, desça o corpo até sentir o bíceps começar a se alongar. À medida em que o faz, o seu braço continuará a se mover para mais longe do corpo.") // Alongamento em pé, de costas para uma superfície na altura do quadril, colocar os braços para trás, com as palmas da mão encostando na superfície

adicionarExercicio("Alongamento de bíceps com os braços abertos", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Bíceps"], 
    "Fique em pé com os pés separados à distância dos quadris. Se preferir, você pode ficar com as costas contra a parede ou um poste a fim de intensificar o alongamento.Dobre ligeiramente os joelhos e direcione os dedos dos pés para frente. Levante ambos os braços lateralmente para fora e deixe-os à altura dos ombros. Eles devem permanecer no mesmo nível.\nLentamente, gire os pulsos até que as palmas das mãos estejam voltadas para trás. Você imediatamente começará a sentir os músculos do bíceps se alongando. Caso a sensação não apareça, comece a trazer os braços lenta e cuidadosamente para trás até sentir o alongamento se intensificar.") // Alongamento em pé, abrir os braços fazendo um angulo de 90 graus com o torso, girar as mãos lentamente para trás e manter a posição


adicionarExercicio("Alongamento de bíceps com as palmas da mão para trás", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Bíceps", "Peito"], 
    "Fique em pé com os pés separados à distância dos quadris. Dobre ligeiramente os joelhos e direcione os dedos dos pés para frente. Entrelace as mãos por trás das costas, unindo as palmas entre si. Alongue os braços e gire-os cuidadosamente, deixando as palmas das mãos voltadas para baixo. Lentamente, eleve os braços em direção à cabeça e pare quando o bíceps começar a se alongar.") // Alongamento em pé, colocar os braços para trás com as mãos se entrelaçando e a palma da mão apontada para o chão, esticar os braços nesta posição

//Peitoral e deltóide
adicionarExercicio("Alongamento do peitoral com o braço 90 graus", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Peito"], 
    "Fique em um portal, com um pé à frente do outro. Se você quer alongar o lado esquerdo do peito, coloque a perna direita à frente e flexionada de leve (e vice-versa). Se você treinou ou trabalhou sentado o dia inteiro, use esse alongamento para relaxar os músculos cansados. Estabilize o seu ombro contra o portal. Flexione um braço em 90° e coloque a palma da mão e o ombro no portal da porta. Jogue o peito de leve para frente. Incline o corpo de leve para frente desse lado até sentir o músculo alongado. Vire a cabeça na direção oposta para otimizar o movimento.") // Alongamento do peitoral medial com apoio em alguma barra vertical


adicionarExercicio("Mobilidade hélice", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Ombro"], 
    "Com os braços esticados horizontalmente e paralelamente ao chão, gire-os em torno do eixo do ombro em movimentos circulares.") // Girar os braços fazendo movimento circular

adicionarExercicio("Manguito rotator", "rep", [1,2,3,4,5], 1, "Máquina", "Mobilidade", ["Peito", "Ombro"], 
    "Posição Inicial: Fique em pé ou sente-se em uma posição confortável com o braço que será trabalhado ao lado do corpo, cotovelo dobrado em um ângulo de 90 graus. Segure uma faixa elástica ou um halter leve com a mão. Mantenha o cotovelo junto ao corpo e mova a mão para fora, afastando-a do corpo sem mover o cotovelo. Isso ativa os músculos do manguito rotador, especialmente o infraespinhal e o redondo menor. Para trabalhar a rotação interna, troque a posição da faixa elástica ou ajuste o ângulo. Agora, puxe a mão para dentro, na direção do corpo, mantendo o cotovelo ainda junto ao tronco. Essa variação ativa o subescapular e o supraespinhal.") // Com o braço flexionado em angulação de 90 graus e o antebraço paralelo ao chão, puxar a polia no plano horizontal, desde a mão posicionada no abdomen até abrir esta angulação em 100 graus


adicionarExercicio("Alongamento do peitoral entre o espaldar", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Peito"], 
    "De costas para o espaldar, agache e coloque os dois braços por entre uma das barras, de forma que você a segure por trás, com as mãos pronadas. O peito ficará aberto e esticando-se para manter os braços na posição de segurar a barra do espaldar. Os pés devem apoiar o corpo, mas devem estar apoiados mais a frente do torso. Com a posição correta, para forçar mais o alongamento, deixe o quadril cair. Quanto maior o caimento, maior o alongamento.") // Alongamento do peitoral colocando os braços por dentro de uma das barra do espaldar e a agarrando pronadamente, enquanto deixa o quadril cair sem que encoste na parede, as pernas esticadas com o calcanhar no chão

adicionarExercicio( "Alongamento de ombro", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Ombro", "Peito"],
     "Estenda os braços horizontalmente e segure em alguma barra vertical. Com este braço fixado e segurando-se na barra, gire o torso para o sentido que abra a musculatura do peitoral e ombro. Repita o movimento para ambos os lados.") // Com um dos braços reto na altura dos ombros, segurar uma barra ou apoio, e girar o tronco levemente de forma a abrir a musculatura do peito/ombro

//Pernas
adicionarExercicio( "Alongamento de glúteo (posição pombo)", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas"], 
    "Comece de quatro e leve a perna esquerda para frente, dobrando o joelho com o calcanhar apontado para trás, em direção ao seu corpo. Em seguida, estique a perna direita para trás. Afunde o corpo, de maneira que a beirada da sua coxa esquerda toque o chão. Segure a posição por 20 a 30 segundos e, por fim, coloque a perna direita para frente para trocar de lado.") // Alongamento que você se deita sobre uma das pernas flexionadas lateralmente enquanto a outra estará esticada, tentando encostar o glúteo no chão

adicionarExercicio( "Alongamento de posterior de coxa em pé", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas", "Isquiotibiais"], 
    "Dá para adaptar esse movimento, que trabalha os isquiotibiais e as panturrilhas, de acordo com o seu nível de flexibilidade: se você não consegue flexionar todo o corpo, coloque as mãos na parede à sua frente para deixar os braços paralelos ao chão. Se quiser aumentar a dificuldade, segure os tornozelos e abaixe a cabeça até os joelhos. \nEsse movimento extremo não é indicado para quem tem problemas nas costas, pois comprime a coluna e pode causar dor e lesões.") // Alongamento que você tenta alcançar a ponta dos pés

adicionarExercicio( "Alongamento de quadríceps em pé", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas", "Quadríceps"], 
    "Para fazer esse alongamento, você tem que ficar de pé. Puxe a ponta de um dos pés em direção ao seu torso, flexionando a perna para trás. Se necessário, apoie as duas mãos no móvel que está na frente. Contraia os músculos do abdômen durante o exercício para aliviar a tensão nas costas.") // Alongamento que você coloca o pé nas costas e puxa a ponta do pé em direção às costas

adicionarExercicio( "Alongamento de adutores sentado (borboleta)", "rep", [1,2,3,4,5], 1, "NA", "Alongamento", ["Pernas"], 
    "Sente-se na esteira com as pernas estendidas à sua frente. Aproxime cada pé com cuidado da virilha. Em seguida, relaxe os joelhos e aproxime-os do chão. Se você quiser intensificar o movimento, incline-se para frente até chegar perto dos pés."
) // Alongamento em que sentado, com as pernas esticadas, abre elas o máximo possível

adicionarExercicio( "Rebolada de quadril", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Pernas"], 
    "De pé, com os pés levemente afastados um do outro, girar o quadril em movimentos circulares em torno do eixo vertical do próprio corpo."
) // Mobilidade de movimentar o quadril em movimento circular

adicionarExercicio( "Mobilidade de tornozelo em pé", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Pernas", "Panturrilha"], 
    "De pé, com um pé apoiando, o outro irá girar-se em torno da articulação do tornozelo. Procurar obter a maior amplitude de movimento para maiores efeitos."
) // Em pé, girar o tornozelo circularmente de forma repetida

adicionarExercicio( "Mobilidade de joelho em pé", "rep", [1,2,3,4,5], 1, "NA", "Mobilidade", ["Pernas"], 
    "De pé, manter o corpo numa posição levemente agachada, apoiar as mãos nas articulações de cada joelho, e então girá-las em movimentos circulares.") // Em pé, de forma levemente agachada, com as mãos no joelho, girar a articulação com movimentos circulares no plano horizontal

//Costas
adicionarExercicio( "Pendurar na barra", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Costas"], 
    "Suspender o próprio corpo, com os braços esticados verticalmente e segurando em uma barra alta. Relaxar os ombros e deixar o quadril e o corpo lentamente sofrer a ação da gravidade.") // Se pendurar na barra e deixar o corpo esticar-se com a gravidade

adicionarExercicio( "Alongamento das costas contra uma superfície", "time", [1,2,3,4,5], 1, "NA", "Alongamento", ["Costas"], 
    "Incline-se para a frente e apoie as mãos na superfície, com os braços estendidos. Mantenha os pés alinhados com os ombros e leve o quadril para trás, como se estivesse tentando afastá-lo da superfície. Ao fazer isso, deixe a coluna reta, inclinando o tronco para baixo, até sentir o alongamento nas costas. Para intensificar, desça o tronco em direção ao chão levemente, sentindo o alongamento se aprofundar na região lombar e entre as escápulas.") // Com os braços totalmente esticados na vertical para cima, apoiar as mãos sobre uma superfície e descer o tronco em direção ao chão

adicionarExercicio( "Barra com a escápula", "rep", [1,2,3,4,5], 2, "NA", "Mobilidade", ["Costas"], 
    "Com o corpo suspenso segurando-se em uma barra alta, erguer-se apenas com o movimento escapular. Atenção: não utilize a força dos braços, apenas das escápulas. Tente realizar o máximo de amplitude com esta região das costas.") // Se pendurar na barra e iniciar o movimento de barra, mas somente com a força das escápulas

/* Cores */

//Fase OPT 1 ESTABILIZAÇÃO
adicionarExercicio( "Ponte", "rep", [1], 1, "BodyWeight", "Core", ["Abdômen"], 
    "Para realizar o exercício ponte, comece deitando-se de bruços no chão. Apoie-se nos antebraços, alinhando-os diretamente abaixo dos ombros, e flexione os pés, mantendo-os firmemente no chão. Em seguida, eleve o corpo, contraindo o abdômen e os glúteos, para manter o corpo em linha reta, desde os ombros até os calcanhares, evitando que os quadris fiquem muito altos ou baixos. Mantenha o pescoço neutro, olhando para o chão e com a coluna alinhada.") // Deitado com as pernas flexionadas, elevar o glúteo

adicionarExercicio( "Extensão torácia de bruços", "rep", [1], 1, "BodyWeight", "Core", ["Lombar"], 
    "Deite-se de bruços com os braços ao lado do corpo e as palmas voltadas para baixo. Contraia os músculos das costas e eleve ligeiramente a cabeça, o peito e os braços, girando os ombros para trás e para baixo, como se fosse aproximar as escápulas. Mantenha os braços estendidos, com as palmas voltadas para fora, em direção ao teto, e segure a posição por alguns segundos, mantendo o pescoço alinhado com a coluna. Em seguida, desça lentamente e repita.") // Deitado pronadamente, levantar os braços e o tronco

adicionarExercicio( "Prancha", "time", [1,2,3,4,5], 2, "BodyWeight", "Core", ["Abdômen", "Lombar"],
    "Para fazer o exercício prancha, posicione-se de bruços, apoiando os antebraços e as pontas dos pés no chão, com os cotovelos alinhados diretamente abaixo dos ombros. Eleve o corpo, mantendo-o em linha reta dos ombros aos calcanhares, contraindo o abdômen e os glúteos para garantir a estabilidade e evitar que os quadris fiquem muito altos ou baixos. Mantenha o pescoço alinhado com a coluna e olhe para baixo para evitar tensão.") // Prancha

adicionarExercicio( "Marcha abdominal", "rep", [1], 1, "BodyWeight", "Core", ["Abdômen"], 
    "Deite-se de costas no chão com os joelhos dobrados e os pés apoiados no chão, mantendo a coluna neutra. Coloque as mãos ao lado do corpo ou sobre o abdômen para sentir a contração muscular. Contraia o abdômen e eleve um pé do chão, trazendo o joelho em direção ao peito, até formar um ângulo de 90 graus com o quadril. Retorne lentamente o pé ao chão e repita o movimento com a outra perna, alternando como se estivesse marchando. Concentre-se em manter o abdômen firme e evitar o arqueamento das costas durante o movimento.") // Ficar levantando as pernas flexionadas unilateralmente enquanto deitado

//Fase OPT 2,3,4 FORÇA
adicionarExercicio( "Abdominal na bola suiça", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Abdômen"],
    "Comece sentando-se na bola com os pés apoiados no chão e afastados na largura dos quadris, para dar estabilidade. Deslize o corpo para a frente até que a parte inferior das costas e a lombar estejam apoiadas na bola, com as coxas paralelas ao chão e o tronco inclinado para trás. Coloque as mãos atrás da cabeça ou cruzadas sobre o peito, mantendo os cotovelos abertos e o olhar voltado para o teto. Contraia o abdômen e eleve o tronco em direção ao teto, fazendo um movimento curto e controlado, sem tirar a lombar da bola. Retorne devagar à posição inicial e repita. Mantenha a respiração constante, soltando o ar ao subir e inspirando ao descer, e foque em evitar movimentos bruscos para não comprometer a estabilidade na bola.") // Abdominal simples deitado na bola suiça

adicionarExercicio( "Hiperextensão lombar", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Lombar"],
    "Posicione-se em um banco específico para hiperextensões, com os quadris ligeiramente acima da almofada de apoio e os tornozelos presos na parte inferior. Cruze os braços sobre o peito ou coloque as mãos atrás da cabeça, mantendo o tronco alinhado com as pernas. Contraia os músculos das costas e eleve o tronco até que ele fique alinhado com o resto do corpo, evitando ultrapassar o nível dos quadris para não sobrecarregar a lombar. Em seguida, abaixe o tronco lentamente até a posição inicial, controlando o movimento e mantendo os músculos ativados. Respire normalmente, soltando o ar ao subir e inspirando ao descer, e mantenha a concentração para evitar movimentos bruscos e garantir a segurança do exercício.") // Levantar o tronco no banco romano

adicionarExercicio( "Abdominal reverso", "rep", [2,3,4], 2, "BodyWeight", "Core", ["Abdômen"],
    "Deite-se de costas no chão com as pernas esticadas e as mãos apoiadas ao lado do corpo ou sob os glúteos para maior apoio. Eleve as pernas, mantendo os joelhos levemente dobrados, até que formem um ângulo de 90 graus com os quadris. Em seguida, contraia o abdômen e eleve os quadris do chão, puxando as pernas em direção ao peito, enquanto mantém a parte superior das costas e a cabeça apoiadas no chão. Desça lentamente os quadris de volta à posição inicial, controlando o movimento para evitar que a coluna fique sobrecarregada. Respire de forma controlada, exalando ao levantar os quadris e inalando ao retornar à posição inicial. Esse exercício foca nos músculos abdominais inferiores e ajuda a melhorar a força e a definição da região.") // Deitado, elevar os pés até o teto

adicionarExercicio( "Puxada abdominal transversal na polia", "rep", [2,3,4], 2, "Máquina", "Core", ["Abdômen"],
    "Ajuste a polia para a altura de sua cabeça e use uma corda ou barra para o exercício. Fique de pé, com os pés afastados na largura dos ombros, e segure a corda com as duas mãos, mantendo uma pegada firme. Dê um passo para trás, de modo que a tensão na polia seja imediata, e posicione-se em uma posição ligeiramente inclinada para frente, com os joelhos levemente dobrados e a coluna reta. Contraia o abdômen e, ao exalar, puxe a corda para baixo e para o lado do seu corpo, movendo o tronco enquanto gira a parte superior do corpo, realizando uma torção abdominal. Mantenha os quadris firmes e evite movimentar as pernas durante o movimento. Retorne à posição inicial com controle e repita o movimento para o outro lado. Respire de forma controlada, exalando ao realizar a torção e inalando ao retornar à posição inicial. Esse exercício trabalha os músculos oblíquos, ajudando a definir a cintura e melhorar a rotação do tronco.") // Puxar a polia transversalmente, rotacionando o tronco

//Fase OPT 5 FORÇA EXPLOSIVA
adicionarExercicio( "Passe de bola com rotação", "rep", [5], 1, "Bola", "Core", ["Abdômen"],
    "Fique em pé, com os pés afastados na largura dos ombros e os dedos apontando para frente. Segure uma bola medicinal (que deve representar entre 5 e 10% do seu peso corporal). Para o movimento, utilize os músculos abdominais e os quadris para girar o corpo de forma rápida e explosiva em 90 graus. À medida que o corpo gira, gire a perna de trás e permita que ela passe para uma extensão tripla (extensão do quadril, extensão do joelho e flexão plantar do tornozelo). Lance a bola medicinal com o braço traseiro, estendendo-o e aplicando força. Pegue a bola e repita o movimento o mais rápido possível, mas de forma controlada.") // De pé, lançar a bola medicinal para o lado com a maior velocidade possivel girando o tronco em direção lateral

adicionarExercicio( "Arremesar de bola medicinal na bola suiça", "rep", [5], 3, "Bola", "Core", ["Abdômen", "Costas"],
    "Deite-se em uma bola de estabilidade, com a bola apoiada na parte inferior das costas, os joelhos dobrados em um ângulo de 90 graus, os pés planos no chão e os dedos apontando para frente. Segure uma bola medicinal (que deve representar entre 5 e 10% do seu peso corporal) acima da cabeça, com os braços estendidos. Para o movimento, faça um movimento rápido de crunch para a frente, arremessando a bola contra a parede ou para um parceiro. Ao lançar a bola, permita que os braços sigam completamente o movimento até o final.") // Deitado em cima da bola suiça, levantar o tronco e lançar a bola medicinal a frente na maior velocidade possível

adicionarExercicio( "Lançamento oblíquo", "rep", [5], 2, "Bola", "Core", ["Abdômen", "Ombro"],
    "Fique de frente para uma parede ou para um parceiro, com os pés afastados na largura dos ombros, os joelhos ligeiramente dobrados e os dedos apontando para frente. Segure uma bola medicinal (que deve representar entre 5 e 10% do seu peso corporal) conforme ilustrado. Para o movimento, arremesse a bola contra a parede ou para o parceiro com um movimento de baixo para cima. Use um movimento de puxar para pegar a bola. Repita o exercício o mais rápido possível, mas de forma controlada. Este exercício pode ser feito de forma contínua para um lado ou alternando os lados.") // De pé, lançar a bola medicinal obliquamente com a maior velocidade possivel em direção ao teto 

adicionarExercicio( "Lançamento de futebol", "rep", [5], 2, "Bola", "Core", ["Abdômen", "Costas"],
    "Fique em pé segurando uma bola medicinal (que deve representar entre 5 e 10% do seu peso corporal) acima da cabeça, conforme ilustrado. Para o movimento, arremesse rapidamente a bola medicinal em direção ao chão, permitindo que os braços sigam completamente o movimento.") // De pé, lançar a bola medicinal com a maior velocidade possivel em direção ao chão

/* Resistência */

//FullBody
adicionarExercicio( "Agachamento > bíceps > desenvolvimento de ombro (com bola suiça)", "rep", [1, 2], 1, "PesoLivre", "Resistência", ["Pernas", "Ombro", "Bíceps"],
    "Comece com os pés afastados na largura dos ombros, apontando para frente, e os joelhos alinhados com os dedos dos pés (segundo e terceiro dedos). Posicione a bola na região inferior das costas, conforme mostrado. Para o movimento, abaixe-se em uma posição de agachamento, mantendo os membros inferiores alinhados corretamente. Em seguida, levante-se até a posição ereta, contraindo os músculos glúteos e quadríceps. Quando estiver estabilizado, faça um movimento de rosca e pressione os halteres acima da cabeça até que ambos os braços estejam totalmente estendidos. Retorne lentamente à posição inicial e repita o movimento. Para regressão, diminua o alcance do movimento. Para progressão, você pode alternar os braços, usar um único braço ou realizar o exercício com uma perna só.") // Agachar, depois bíceps curl, depois levantar os halteres pra cima, apoiando-se as costas em uma bola suiça verticalmente na parede

adicionarExercicio( "Two-Arm push press", "rep", [5], 2, "PesoLivre", "Resistência", [ "Ombro", "Pernas"],
    "Fique em pé com os pés afastados na largura dos ombros. Segure dois halteres nas mãos, com os braços na altura dos ombros. Para o movimento, impulsione rapidamente os halteres para cima, como em um press de ombro, enquanto simultaneamente coloca as pernas em uma posição de estocada. A perna de trás deve estar em extensão tripla (flexão plantar, extensão do joelho e extensão do quadril), enquanto a perna da frente deve estar ligeiramente dobrada. Mantenha o alinhamento adequado ao retornar à posição inicial.") // Ao levantar os halteres, flexionar uma das pernas e esticar a de trás

adicionarExercicio( "Barbell clean", "rep", [5], 3, "PesoLivre", "Resistência", ["Ombro", "Pernas", "Bíceps"],
    "Agache-se ao lado da barra, mantendo os pés planos no chão. Segure a barra com os braços totalmente estendidos e a largura das mãos um pouco maior que a dos ombros. Posicione os ombros sobre ou ligeiramente à frente da barra, com a pelve em posição neutra. Para iniciar o movimento, estenda os joelhos e os quadris, levantando a barra em linha reta (mantendo a barra próxima às canelas), com os cotovelos estendidos. Continue movendo a barra para cima, estendendo explosivamente os quadris, joelhos e tornozelos (flexão plantar) em um movimento de salto. Quando atingir a flexão plantar máxima, eleve os ombros, dobre e puxe com os braços. Puxe a barra o mais alto possível antes de girar os cotovelos para baixo e para a frente, posicionando-os sob a barra. Hiperestenda os pulsos enquanto os cotovelos se movem para baixo. Aponte os cotovelos para frente. Coloque a barra sobre a parte da frente dos ombros, mantendo o tronco ereto. Flexione os quadris e os joelhos para absorver o peso da barra.") // De uma posição agachada com os braços segurando a barra, levante-a eregindo todos os músculos e a levante apoiada nos ombros

adicionarExercicio( "Lançamento acima", "rep", [5], 1, "Bola", "Resistência", ["Ombro", "Pernas"],
    "Fique em pé com as costas voltadas para a parede, em uma posição de semi-agachamento, segurando uma bola medicinal conforme mostrado. Para o movimento, salte do chão de forma explosiva, estendendo os braços acima da cabeça. Lance a bola medicinal contra a parede. Libere a bola antes que os braços ultrapassem a linha das orelhas, evitando que as costas entrem em hiperextensão. Ao aterrissar, faça-o de forma controlada e estável, evitando qualquer compensação no corpo.") // Com a bola nos joelhos e agachado, pular explosivamente e jogar a bola medicinal para cima

//Pernas
adicionarExercicio( "Flexão plantar (livre)", "rep", [1,2,3,5], 2, "BodyWeight", "Resistência", ["Panturrilha"],
    "Comece em pé com os pés descalços ou em calçados confortáveis. Metade do seu pé, a parte do calcanhar, deve estar livre, sem possibilidade de encostar em um apoio, porém a outra metade do pé deve estar sobre uma superfície. Um exemplo de local seria utilizar de uma escada. Mantendo os calcanhares sem contato com uma superfície, empurre os dedos dos pés para baixo, como se estivesse tentando empurrar o solo, estendendo o tornozelo. Durante o movimento, contraia os músculos da panturrilha para ativá-los e garantir que o movimento seja eficaz. Evite movimentos bruscos e execute de forma controlada, sentindo a musculatura da panturrilha se contraindo. Após a flexão, retorne lentamente os pés à posição neutra, sem realizar movimentos rápidos ou forçados. Esse exercício é útil para fortalecer a panturrilha e melhorar a mobilidade do tornozelo.") // Flexão da panturrilha em pé (sem chão, total amplitude de movimento)

adicionarExercicio( "Flexão plantar em pé", "rep", [1,2], 1, "BodyWeight", "Resistência", ["Panturrilha"], 
    "Comece em pé ou sentado, com os pés descalços ou em calçados confortáveis. Mantenha os calcanhares no chão e, em seguida, empurre os dedos dos pés para baixo, como se estivesse tentando empurrar o solo, estendendo o tornozelo. Durante o movimento, contraia os músculos da panturrilha para ativá-los e garantir que o movimento seja eficaz. Evite movimentos bruscos e execute de forma controlada, sentindo a musculatura da panturrilha se contraindo. Após a flexão, retorne lentamente os pés à posição neutra, sem realizar movimentos rápidos ou forçados. Esse exercício é útil para fortalecer a panturrilha e melhorar a mobilidade do tornozelo.") // Flexão da panturrilha em pé (no chão)

adicionarExercicio( "Cadeira flexora", "rep", [1,2,3,4], 1, "Máquina", "Resistência", ["Isquiotibiais"],
    "Comece ajustando a máquina de forma que os rolos de apoio fiquem posicionados na parte inferior das pernas, logo acima dos tornozelos, e o banco esteja na altura do quadril. Sente-se na cadeira com as costas apoiadas no encosto e os pés posicionados corretamente, com os joelhos ligeiramente flexionados e a largura dos quadris. Segure as alças laterais da máquina para garantir estabilidade e, em seguida, contraia os músculos posteriores da coxa (isquiotibiais) para flexionar os joelhos, puxando os rolos para baixo em direção às nádegas. Mantenha o movimento controlado e evite o impulso excessivo. Após atingir a posição de flexão máxima, retorne lentamente à posição inicial, estendendo os joelhos de forma controlada. Respire de forma controlada, exalando ao flexionar os joelhos e inspirando ao retornar.") // Flexão de isquiotibiais na máquina

adicionarExercicio( "Cadeira extensora", "rep", [1,2,3,4], 1, "Máquina", "Resistência", ["Quadríceps"],
    "Comece ajustando a máquina de forma que os rolos de apoio fiquem posicionados na parte inferior das pernas, logo acima dos tornozelos, e o banco esteja na altura do quadril. Sente-se na cadeira com as costas apoiadas no encosto e os pés posicionados corretamente, com os joelhos ligeiramente flexionados e a largura dos quadris. Segure as alças laterais da máquina para garantir estabilidade e, em seguida, contraia os músculos posteriores da coxa (isquiotibiais) para flexionar os joelhos, puxando os rolos para baixo em direção às nádegas. Mantenha o movimento controlado e evite o impulso excessivo. Após atingir a posição de flexão máxima, retorne lentamente à posição inicial, estendendo os joelhos de forma controlada. Respire de forma controlada, exalando ao flexionar os joelhos e inspirando ao retornar.") // Extensão de quadríceps na máquina

adicionarExercicio( "Leg Press", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Pernas"],
    "Comece ajustando o banco da máquina de forma que você fique confortável e com os pés posicionados na plataforma. Sente-se com as costas e a cabeça bem apoiadas no encosto, mantendo os joelhos flexionados em um ângulo de cerca de 90 graus, e os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente apontados para frente. Segure as alças laterais para estabilidade. Para iniciar o movimento, empurre a plataforma com os pés, estendendo os joelhos e quadris, mas sem travar completamente as articulações. Mantenha a posição controlada e, ao atingir a extensão máxima, retorne lentamente à posição inicial, flexionando os joelhos de forma controlada até que eles atinjam novamente o ângulo de 90 graus. Evite usar o impulso e garanta que o movimento seja sempre controlado, respirando normalmente durante o exercício, exalando ao empurrar a plataforma e inspirando ao retornar à posição inicial.") // Leg Press

adicionarExercicio( "Agachamento (barra teleguiada)", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Pernas"], 
    "Comece posicionando a barra sobre os ombros, logo abaixo do pescoço, e ajustando a altura da barra na máquina para que fique confortável. Fique em pé, com os pés afastados na largura dos ombros, e as pontas dos pés ligeiramente voltadas para fora. Segure as alças da barra com as mãos, mantendo os braços estendidos e os cotovelos ligeiramente dobrados. Mantenha o tronco ereto, contraindo o abdômen e olhando para a frente. \nPara iniciar o movimento, faça um agachamento, empurrando os quadris para trás e flexionando os joelhos, mantendo-os alinhados com os dedos dos pés. Aprofunde o movimento até que suas coxas fiquem paralelas ao chão ou um pouco abaixo, sempre mantendo as costas retas e o peito aberto. Não deixe os joelhos passarem da linha dos pés e evite que os calcanhares saiam do chão. \nApós atingir a posição mais baixa, empurre a plataforma de volta para cima, estendendo os joelhos e quadris de forma controlada até retornar à posição inicial. Mantenha o movimento controlado e não use o impulso. Respire de forma controlada, exalando ao subir e inspirando ao descer.") // Agachamento com barra teleguiada

adicionarExercicio( "Agachamento (barra)", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Pernas"], 
    "Comece com a barra posicionada sobre os trapézios (na parte superior das costas, logo abaixo do pescoço), e ajuste a largura da pegada para que suas mãos fiquem um pouco além da largura dos ombros. Certifique-se de que a barra esteja estável e centralizada. Fique em pé, com os pés afastados na largura dos ombros, e os dedos dos pés ligeiramente voltados para fora. \nAntes de iniciar o movimento, contraia o abdômen e mantenha o tronco ereto, com o olhar voltado para frente. Para começar o agachamento, empurre os quadris para trás e flexione os joelhos, mantendo-os alinhados com os dedos dos pés. Desça controladamente até que as coxas fiquem paralelas ao chão ou um pouco abaixo, evitando que os joelhos ultrapassem os dedos dos pés e mantendo o peso nos calcanhares. Durante o movimento, evite arquear as costas, mantendo o tronco ereto. \nAo atingir a posição mais baixa, empurre a plataforma de volta para cima, estendendo os joelhos e quadris de maneira controlada, até voltar à posição inicial. Certifique-se de não travar os joelhos no final do movimento. Respire de forma controlada, exalando ao subir e inspirando ao descer. O agachamento com barra livre exige mais estabilização, então mantenha o core firme durante todo o movimento para garantir a segurança e a eficácia do exercício.") // Agachamento com barra de peso livre

adicionarExercicio( "Agachamento", "rep", [1,5], 1, "BodyWeight", "Resistência", ["Pernas"], 
    "Para realizar o agachamento normal, comece em pé com os pés afastados na largura dos ombros e os dedos ligeiramente apontados para fora. Mantenha o tronco ereto, com os ombros para trás e os braços estendidos à frente ou sobre os quadris para equilíbrio. Empurre os quadris para trás e flexione os joelhos, descendo controladamente até que as coxas fiquem paralelas ao chão, mantendo o peso nos calcanhares e as costas retas. Em seguida, empurre os calcanhares para voltar à posição inicial, estendendo os joelhos e quadris, enquanto mantém o core contraído e a respiração controlada.") // Agachamento com peso do corpo

adicionarExercicio( "Agachamento (apoio banco)", "rep", [1], 1, "BodyWeight", "Resistência", ["Pernas"],
    "Para realizar o agachamento com apoio no banco, comece em pé com os pés afastados na largura dos ombros e os dedos ligeiramente apontados para fora. Posicione-se a frente do banco de apoio. Mantenha o tronco ereto, com os ombros para trás e os braços estendidos à frente ou sobre os quadris para equilíbrio. Empurre os quadris para trás e flexione os joelhos, descendo controladamente até que encoste no apoio, mantendo o peso nos calcanhares e as costas retas. Em seguida, empurre os calcanhares para voltar à posição inicial, estendendo os joelhos e quadris, enquanto mantém o core contraído e a respiração controlada."
) // Agachamento com apoio do banco

//Costas
adicionarExercicio( "Remada na polia", "rep", [1, 2, 3], 1, "Máquina", "Resistência", ["Costas", "Bíceps"], 
    "Comece ajustando a máquina de cabos para que a alça esteja na altura do peito ou um pouco mais baixa. Fique em pé com os pés afastados na largura dos ombros, com os joelhos ligeiramente flexionados e o tronco levemente inclinado para frente, mantendo as costas retas e o abdômen contraído. Segure a alça com as duas mãos e, com os braços estendidos à frente, puxe o cabo em direção ao seu corpo, mantendo os cotovelos próximos ao torso. Durante o movimento, puxe os ombros para trás e para baixo, contraindo as costas e os músculos do meio das costas (romboides e trapézio). Evite usar impulso e execute o movimento de forma controlada. Após atingir a posição final, com os cotovelos completamente dobrados e as mãos próximas ao tronco, retorne lentamente à posição inicial, estendendo os braços à frente, mantendo sempre a postura correta.") // Com as pernas levemente flexionadas, puxar as polias 

adicionarExercicio( "Voador na bola suiça", "rep", [1], 1, "PesoLivre", "Resistência", ["Costas"], 
    "Comece posicionando-se deitado sobre a bola, com as costas e a cabeça apoiadas nela e os pés firmemente plantados no chão, afastados na largura dos quadris. Segure um haltere em cada mão, com os braços estendidos para frente, à altura do peito, com as palmas voltadas uma para a outra. Certifique-se de que sua coluna esteja alinhada e que o core (abdômen) esteja contraído para estabilidade.\nInicie o movimento abrindo os braços lateralmente, mantendo uma leve flexão nos cotovelos, até que seus braços fiquem paralelos ao chão ou um pouco abaixo disso. Durante a execução, evite que os cotovelos se estiquem completamente ou que a parte inferior das costas se curve. Em seguida, retorne à posição inicial, aproximando as mãos à frente do peito, contraindo o peito durante o movimento de fechamento. Mantenha a execução controlada, respirando de forma constante: inspire ao abrir os braços e expire ao retorná-los à posição inicial.") // Voador na bola suiça

adicionarExercicio( "Puxada na bola suiça", "rep", [1], 1, "PesoLivre", "Resistência", ["Costas"], 
    "Para realizar a puxada na bola suíça, deite-se de costas sobre a bola, com os pés apoiados no chão e os joelhos dobrados a 90 graus. Segure um haltere ou cabo com as mãos estendidas acima da cabeça e, em seguida, puxe os pesos em direção ao tronco, flexionando os cotovelos e concentrando-se em contrair os músculos das costas. Mantenha a coluna alinhada e o abdômen contraído para estabilidade, evitando que os ombros se elevem. Retorne lentamente à posição inicial de forma controlada, respirando de forma constante: exale ao puxar e inspire ao retornar.") // Puxar os pesos com o cotovelo mais próximo do abdômen na bola suiça

adicionarExercicio( "Barra (Pull-up)", "rep", [2,3,4,5], 3, "BodyWeight", "Resistência", ["Costas", "Bíceps"],
    "Comece com as mãos posicionadas na barra, um pouco além da largura dos ombros, com as palmas das mãos voltadas para frente (pegada pronada) ou voltadas uma para a outra (pegada neutra), dependendo da sua preferência. Pendure-se na barra com os braços estendidos, mantendo o corpo alinhado e os pés fora do chão.\nInicie o movimento contraindo as costas e os ombros, puxando o corpo para cima até que o queixo ultrapasse a barra. Durante o movimento, evite balançar o corpo ou usar o impulso das pernas. Mantenha o tronco firme e concentre-se em puxar com os músculos das costas, principalmente o latíssimo do dorso. Após atingir a posição final, com o queixo acima da barra, desça o corpo de forma controlada até que os braços fiquem completamente estendidos. Respire de forma controlada: inspire ao descer e exale ao subir.") // Barra (Pull-up)

adicionarExercicio( "Puxador vertical", "rep", [2,3,4,5], 1, "Máquina", "Resistência", ["Costas", "Bíceps"], 
    "Para realizar o puxador vertical, sente-se na máquina e ajuste a barra para que ela fique ao nível do seu peito. Segure a barra com as mãos afastadas na largura dos ombros e as palmas voltadas para frente. Puxe a barra em direção ao peito, concentrando-se na contração das costas e bíceps. Mantenha o tronco reto e evite balançar o corpo. Retorne de forma controlada à posição inicial.");

adicionarExercicio( "Remada (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Costas", "Bíceps"], 
    "Para realizar a remada com barra, posicione-se de pé com os pés afastados na largura dos ombros. Segure a barra com as mãos afastadas um pouco além da largura dos ombros e flexione os joelhos. Incline o tronco para frente mantendo as costas retas e puxe a barra em direção ao seu abdômen, contraindo as costas e os bíceps. Retorne à posição inicial de forma controlada.");

adicionarExercicio( "Remada (máquina)", "rep", [2,3,4,5], 1, "Máquina", "Resistência", ["Costas", "Bíceps"], 
    "Para a remada na máquina, sente-se com os pés bem posicionados e segure as alças com as mãos. Puxe as alças em direção ao seu tronco, mantendo os cotovelos próximos ao corpo. Concentre-se na contração das costas e dos bíceps enquanto puxa as alças. Retorne lentamente à posição inicial.");

adicionarExercicio( "Crucifixo inverso (máquina)", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Costas"], 
    "No crucifixo inverso na máquina, sente-se e ajuste as alças na altura dos ombros. Segure as alças com os braços estendidos à frente e puxe as alças para os lados, concentrando-se na contração dos músculos das costas. Mantenha o tronco firme e evite movimentos bruscos. Retorne lentamente à posição inicial.");

adicionarExercicio( "Crucifixo inverso (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Costas"], 
    "Para o crucifixo inverso com halteres, deite-se de barriga para baixo em um banco inclinado, segurando um haltere em cada mão. Com os braços estendidos à frente, puxe os halteres para os lados, contraindo as costas. Evite arquear as costas durante o movimento e retorne de forma controlada à posição inicial.");

//Bíceps
adicionarExercicio( "Rosca direta com uma perna (halter)", "rep", [1], 2, "PesoLivre", "Resistência", ["Bíceps"], 
    "Para realizar a rosca direta com uma perna com halteres, fique de pé com uma perna apoiada no chão e a outra elevada, mantendo o equilíbrio. Segure um haltere em cada mão com as palmas voltadas para frente. Execute a rosca direta, flexionando os cotovelos e trazendo os halteres até a altura dos ombros, concentrando a contração no bíceps. Mantenha o tronco estável durante o movimento e repita o exercício com a outra perna.");

adicionarExercicio( "Rosca direta com uma perna (barra)", "rep", [1], 1, "PesoLivre", "Resistência", ["Bíceps"], 
    "Para a rosca direta com barra e uma perna elevada, fique em pé com uma perna apoiada no chão e a outra levemente elevada. Segure a barra com as palmas das mãos voltadas para frente e execute a flexão dos cotovelos, levando a barra até a altura dos ombros. Mantenha o tronco firme, evitando balanços, e repita o movimento.");

adicionarExercicio( "Rosca direta (halter)", "rep", [2,3,4], 1, "PesoLivre", "Resistência", ["Bíceps"], 
    "Para a rosca direta com halteres, fique em pé com os pés na largura dos ombros, segurando um haltere em cada mão. Flexione os cotovelos, levantando os halteres até a altura dos ombros, mantendo os cotovelos fixos ao lado do corpo. Concentre-se na contração do bíceps e retorne lentamente à posição inicial.");

adicionarExercicio( "Rosca direta (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Bíceps"], 
    "Na rosca direta com barra, fique em pé com os pés alinhados com os ombros e segure a barra com as palmas das mãos voltadas para cima. Flexione os cotovelos para levar a barra até a altura dos ombros, contraindo o bíceps. Mantenha os cotovelos fixos ao longo do corpo e retorne de forma controlada à posição inicial.");

adicionarExercicio( "Rosca Scott (máquina)", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Bíceps"], 
    "Para a rosca Scott na máquina, sente-se na máquina com as costas apoiadas e os braços estendidos à frente. Segure as alças com as palmas voltadas para cima e puxe-as em direção ao rosto, contraindo os bíceps. Evite movimentar os ombros e mantenha o tronco fixo durante o movimento.");

adicionarExercicio( "Rosca Scott (barra)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Bíceps"], 
    "No exercício de rosca Scott com barra, sente-se em um banco Scott com a barra posicionada à sua frente. Segure a barra com as palmas voltadas para cima e execute a flexão dos cotovelos, trazendo a barra em direção ao peito. Concentre-se na contração dos bíceps e evite movimentar os ombros.");

//Tríceps
adicionarExercicio( "Tríceps testa", "rep", [2,3,4], 1, "PesoLivre", "Resistência", ["Tríceps"], 
    "Para o tríceps testa, deite-se em um banco plano e segure uma barra ou halteres com as mãos voltadas para frente. Com os cotovelos dobrados, abaixe a barra ou halteres até a testa, mantendo os cotovelos fixos. Estenda os braços para voltar à posição inicial, contraindo os tríceps no topo.");

adicionarExercicio( "Extensão unilateral do cotovelo (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Tríceps"], 
    "Para a extensão unilateral do cotovelo com haltere, posicione-se em um banco inclinado e segure um haltere com uma das mãos. Com o cotovelo flexionado, estenda o braço para trás, concentrando-se na contração do tríceps. Retorne lentamente à posição inicial e repita com o outro braço.");

adicionarExercicio( "Extensão unilateral do cotovelo (polia)", "rep", [2,3,4], 2, "Máquina", "Resistência", ["Tríceps"], 
    "Na extensão unilateral do cotovelo com polia, segure a alça da polia com uma mão e posicione-se com o cotovelo flexionado. Estenda o braço para baixo, contraindo os tríceps, e retorne de forma controlada à posição inicial. Mantenha o tronco estável durante o exercício.");

adicionarExercicio( "Rosca inversa", "rep", [2,3,4], 1, "Máquina", "Resistência", ["Tríceps"], 
    "Para a rosca inversa na máquina, sente-se e posicione os braços na máquina com as palmas voltadas para baixo. Puxe as alças em direção ao tronco, mantendo os cotovelos fixos ao lado do corpo. Concentre-se na contração dos músculos do tríceps durante o movimento e retorne à posição inicial.");

//Peito
adicionarExercicio( "Passe de bola frontal", "rep", [5], 1, "Bola", "Resistência", ["Peito", "Ombro", "Tríceps"], 
    "Fique de frente para uma parede ou parceiro e adote uma posição com os pés alinhados e quadrados. Segure uma bola medicinal (5 a 10% do peso corporal) com ambas as mãos, com os cotovelos flexionados, na altura do peito. Empurre e solte a bola para frente com a maior força possível, estendendo os cotovelos e contraindo o peito, sem permitir que os ombros se elevem. Pegue a bola e repita o movimento o mais rápido possível.") // Jogar a bola medicinal com uma força concêntrica explosiva em um ângulo de 30 graus a cima da linha dos ombros

adicionarExercicio( "Passe de bola com rotação (foco nos ombros)", "rep", [5], 1, "Bola", "Resistência", ["Peito", "Ombro", "Tríceps"],
    "Fique em pé com os pés na largura dos ombros e os dedos apontando para frente. Segure uma bola medicinal (entre 5 e 10% do peso corporal). Utilize os músculos abdominais e os quadris para rotacionar rapidamente e de forma explosiva o corpo em 90 graus. À medida que o corpo gira, faça com que a perna de trás pivote e entre em extensão tripla (extensão do quadril, do joelho e flexão plantar do tornozelo). Lance a bola medicinal com o braço de trás, estendendo-o e aplicando força. Pegue a bola e repita o movimento o mais rápido possível, de forma controlada.") // Jogar a bola medicinal com uma força concêntrica explosiva em um ângulo de 30 graus a cima da linha dos ombros para a lateral 

    adicionarExercicio( "Supino declinado (halter)", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"], 
        "No supino declinado com halteres, deite-se em um banco declinado e segure um haltere em cada mão. Com os braços estendidos, abaixe os halteres em direção ao peito e, em seguida, empurre-os para cima, contraindo os músculos do peito. Mantenha os pés firmes no banco e o tronco estável.");

    adicionarExercicio( "Supino inclinado (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"], 
        "Para o supino inclinado com halteres, deite-se em um banco inclinado e segure um haltere em cada mão. Abaixe os halteres em direção ao peito, mantendo os cotovelos a um ângulo de 45 graus. Empurre os halteres para cima, contraindo os músculos do peito e dos ombros.");
    
    adicionarExercicio( "Supino (halter)", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"], 
        "No supino com halteres, deite-se em um banco plano e segure um haltere em cada mão. Abaixe os halteres até a altura do peito, mantendo os cotovelos ligeiramente flexionados. Empurre os halteres de volta à posição inicial, contraindo os músculos do peito.");
    
    adicionarExercicio( "Supino declinado", "rep", [2,3,4], 3, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"], 
        "Para o supino declinado, deite-se em um banco declinado e segure a barra com as mãos afastadas. Abaixe a barra até o peito e, em seguida, empurre-a de volta para cima, contraindo os músculos do peito. Mantenha os pés firmes no banco e o tronco estável.");
    
    adicionarExercicio( "Supino inclinado", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"], 
        "No supino inclinado, deite-se em um banco inclinado e segure a barra com as mãos afastadas. Abaixe a barra até o peito e empurre-a de volta para a posição inicial, contraindo os músculos do peito e ombros.");
    
    adicionarExercicio( "Supino na bola suiça", "rep", [1,2], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"], 
        "Para o supino na bola suíça, deite-se sobre a bola com os pés firmemente apoiados no chão e segure os halteres com as mãos. Abaixe os halteres até a altura do peito e, em seguida, empurre-os de volta à posição inicial, mantendo os músculos do peito e ombro contraídos.");
    
    adicionarExercicio( "Supino", "rep", [2,3,4], 2, "PesoLivre", "Resistência", ["Peito", "Ombro", "Tríceps"], 
        "No supino tradicional, deite-se em um banco plano e segure a barra com as mãos afastadas. Abaixe a barra até o peito e empurre-a de volta à posição inicial, concentrando-se no trabalho do peito.");
    
    adicionarExercicio( "Flexão militar", "rep", [1,2,3], 2, "BodyWeight", "Resistência", ["Peito", "Ombro", "Tríceps"], 
        "Para a flexão militar, comece na posição de prancha, com as mãos posicionadas ligeiramente mais afastadas que a largura dos ombros. Execute uma flexão, descendo até o peito quase tocar o chão, e depois empurre de volta para a posição inicial.");
    
    adicionarExercicio( "Flexão militar (apoio dos joelhos)", "rep", [1], 1, "BodyWeight", "Resistência", ["Peito", "Ombro", "Tríceps"], 
        "A flexão militar com apoio dos joelhos é uma variação onde você executa o movimento com os joelhos apoiados no chão. Essa modificação torna o exercício mais acessível, mas ainda trabalha os músculos do peito, ombro e tríceps.");
    

//Ombro
adicionarExercicio( "Dumbble Scaption", "rep", [1], 1, "PesoLivre", "Resistência", ["Ombro"], 
    "Segure os halteres ao lado do corpo, com as palmas voltadas para os lados. Levante um pé do chão, conforme ilustrado. Levante ambos os braços, com os polegares para cima, em um ângulo de 45 graus à frente do corpo, até que as mãos alcancem aproximadamente a altura dos olhos. Mantenha as escápulas retraídas e deprimidas durante todo o exercício, sem permitir que as costas arqueiem. Segure a posição. Lentamente, retorne os braços para os lados do corpo e repita. Para regressão, execute com os dois pés no chão ou sentado. Para progressão, tente com um pé e alternando os braços, um pé e um braço ou utilizando modalidades proprioceptivas.");

adicionarExercicio( "Desenvolvimento de ombro na bola suiça", "rep", [1, 2], 2, "PesoLivre", "Resistência", ["Ombro"], 
    "No desenvolvimento de ombro na bola suíça, sente-se sobre a bola com os pés firmemente apoiados no chão. Segure os halteres na altura dos ombros e empurre-os para cima até os braços estarem completamente estendidos.");

adicionarExercicio( "Desenvolvimento de ombro", "rep", [2, 3, 4], 2, "PesoLivre", "Resistência", ["Ombro"], 
    "No desenvolvimento de ombro, sente-se em um banco e segure os halteres na altura dos ombros. Empurre os halteres para cima até que os braços fiquem totalmente estendidos, contraindo os músculos do ombro no topo do movimento.");

adicionarExercicio( "Desenvolvimento de ombro (máquina)", "rep", [2, 3, 4], 1, "Máquina", "Resistência", ["Ombro"], "No desenvolvimento de ombro na máquina, sente-se na máquina com as costas apoiadas e os braços posicionados nas alças. Empurre as alças para cima até os braços estarem estendidos, focando na contração dos músculos do ombro.");



// Cardios
adicionarExercicio( "Esteira", "time", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody"], 
    "O exercício na esteira consiste em caminhar ou correr, ajustando a velocidade de acordo com o objetivo do treino. Trabalha o corpo todo, ajudando no condicionamento cardiovascular.\nPara correr corretamente, mantenha a postura ereta com a cabeça alinhada e o olhar voltado para frente, evitando tensionar os ombros e pescoço. Movimente os braços de forma natural, com os cotovelos dobrados em 90 graus, enquanto os pés devem pousar abaixo do corpo, com a parte média ou frontal do pé tocando o solo primeiro. Respire de maneira profunda e controlada, ajustando o ritmo da respiração ao seu passo. Mantenha uma cadência constante e evite começar com intensidade excessiva, para não se exaurir rapidamente. Ao terminar, desacelere progressivamente e faça alongamentos para auxiliar na recuperação muscular.");

adicionarExercicio( "Bicicleta", "time", [1,2,3,4,5], 1, "Máquina", "Cardio", ["FullBody", "Pernas"], 
    "A bicicleta ergométrica é uma ótima opção para um treino cardiovascular de baixo impacto. Ajuste a resistência para desafiar suas pernas enquanto mantém a intensidade do exercício.\nPara pedalar corretamente, ajuste o banco da bicicleta de forma que seus joelhos fiquem ligeiramente flexionados quando os pés estiverem nos pedais na posição mais baixa. Mantenha as costas retas e os ombros relaxados, com as mãos no guidão de maneira confortável. Durante o pedal, use a força das pernas de maneira controlada, alternando entre força e velocidade em cada pedalada, e evite esticar totalmente as pernas para prevenir lesões. Mantenha uma postura estável, com os quadris firmes e os pés sempre alinhados com os pedais. Respire de forma profunda e cadenciada, ajustando a intensidade conforme necessário. Ao terminar, diminua a velocidade gradualmente e faça alongamentos para relaxar os músculos.");

adicionarExercicio( "Pular corda", "rep", [1,2,5], 2, "BodyWeight", "Cardio", ["FullBody", "Pernas"], 
    "Pular corda é um exercício cardiovascular eficaz que trabalha o corpo todo. Mantenha a postura ereta, mova os braços para girar a corda e tente manter um ritmo constante para melhorar a resistência.\nPara pular corda corretamente, comece com os pés juntos e os joelhos ligeiramente flexionados, mantendo uma postura ereta com os ombros relaxados e os cotovelos perto do corpo. Segure as extremidades da corda com as mãos, posicionadas ligeiramente à frente e ao lado do corpo, e use os pulsos para girar a corda de forma suave e controlada. Ao saltar, levante-se apenas o suficiente para que a corda passe por baixo dos pés, mantendo os saltos curtos e rápidos. Evite saltos altos e landings pesados, pois isso pode sobrecarregar os joelhos e tornozelos. Mantenha uma respiração regular e cadenciada, e, ao terminar, desacelere gradualmente o ritmo antes de finalizar o exercício.") 


export {exercicios}