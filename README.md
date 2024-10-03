# Planejamento de Treinos na Academia (Projeto TCC)

## Descrição
Este projeto é parte do meu Trabalho de Conclusão de Curso (TCC) e consiste em um aplicativo que cria um planejamento de treinos físicos na academia para um ano inteiro, personalizado para cada usuário através de uma inteligência artificial Expert System. A IA segue o modelo teórico OPT(Optimum Performance Training) sugerido e criado pela Academia Nacional de Medicina Esportiva (NASM). O repositório atual é implementado em JavaScript e testado em servidores Node.js. Atualmente, estamos na fase de implementação com React Native em outro <a href="https://github.com/viniciusSt1/SelfTrain">repositório</a>.

## Algoritmo
O algoritmo utilizado é um sistema especialista, que toma decisões com base em um conjunto de regras pré-definidas para criar um plano de treinos personalizado de um ano. Todos os treinos de cada dia são meticulosamente inferidos pela inteligência artificial. Sua data, seus exercícios, as repetições, sets, e etc.

## Progresso Atual
**(97%)**<br>
O algoritmo consegue:
- Explicar quais regras utilizou e porque chegou em determinado planejamento de treino
- Indicar o caminho de seu padrão de inferência
- Determinar o valor de uma variável caso ela possa ser perguntada ou através de inferências (regras)
- Determinar a quantidade de treinos necessários
- Inferir as datas de todos os treinos durante 1 ano de acordo com as informações do usuário
- Inferir as fases OPT de cada treino
- Inferir os agrupamentos musculares de cada treino
- Inferir o planejamento de exercícios dos treinos de aeróbico 
- Inferir o planejamento de exercícios dos treinos de core
- Inferir o planejamento de exercícios dos treinos de resistência (anaeróbicos)
- Inferir o planejamento de exercícios de aquecimento para os treinos
- Selecionar os exercícios de aquecimento, aeróbico, resistência e core
- Inferir a quantidade de repetições necessárias para cada exercício
- Inferir a intensidade(carga/consumo de oxigênio) necessária em cada exercício
- Inferir a quantidade de sets necessários para cada exercício
- Inferir o tempo de descanso necessário para cada exercício
- Inferir o modo de execução de cada exercício
- Inferir o tempo total de um treino
- Inferir o volume total de um treino
- Inferir a intensidade média de um treino

## Tecnologias Utilizadas
- **JavaScript (ECMASCRIPT2020)**
- **Node.js (v20.17.0)**
- **React Native** (planejado para futuras implementações)

## Como executar
Basta ter o Node.JS (v20.17.0) e dar o comando ```node main.js``` na pasta raiz do projeto.<br>
O algoritmo perguntará os valores de certas variáveis, então especificarei aqui o intervalo de valores possíveis que devem ser escritos para testarem o aplicativo:<br>
- Variável objetivo: {emagrecimento, hipertrofia, esporte}
- Variável disponibilidade: {0, 1, 2, 3, 4, 5, 6}     OBS: *Não repetir os mesmos valores*
- Variável Idade: Qualquer valor inteiro maior que 0 e menor que 100
- Variável Nível: {0, 1, 2}

## Bugs tratáveis
- Ao definir treinos para o nível 4 do modelo OPT, o algoritmo sobrecarrega o tempo total do treino, planejando, em média, treinos de 2 horas totais. O ideal seria no máximo 1 hora e 30 minutos de treino total.
- Caso indique que o usuário é nível iniciante, ao começar a seleção de exercícios de resistência, a execução é interrompida por tentar obter valores de undefined. Pois não há exercícios suficientes nível 1 no array ```exercicios```.

## Fontes
- Principles of Expert Systems. Peter J.F. Lucas & Linda C. van der Gaag. 1991. (Principal fonte)
- JavaScript: O guia definitivo (6° edição). David Flanagan. 2013.
- NASM ESSENTIALS OF PERSONAL FITNESS TRAINING (6° edição). National Academy of Sports Medicine. 2018.

## Contribuição
Se tiver sugestões de aprimoramento no meu código, por favor, não se acanhe!

