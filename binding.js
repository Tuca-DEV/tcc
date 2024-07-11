//import {x, y} from './ie.js'
//import user from './main.js'
import Usuario from "./usuario.js"

export var user = new Usuario;
var x = 0, y = 0; // x (cada treino do usuário) varia de 0 a Usuario.planoTreino.qtdTreinosAnual, y (tipo de subtreino) varia de 0 a 3


// Database de fatos DBF
var binding = {
    //Usuário
    "Usuario": user,
    "Usuario.id": user.id,
    "Usuario.nome": user.nome,
    "Usuario.idade": user.idade,
    "Usuario.altura": user.altura,
    "Usuario.peso": user.peso,
    "Usuario.sexo": user.sexo,
    "Usuario.objetivo": user.objetivo,
    "Usuario.nivel": user.nivel,
    "Usuario.disponibilidade": user.disponibilidade,
    "Usuario.planoTreino": user.planoTreino, 

        //PlanoTreino
        "Usuario.planoTreino.fases": user.planoTreino.fases,
        "Usuario.planoTreino.treinos": user.planoTreino.treinos, //Array de Treino's
    
            //n Treino
            "Usuario.planoTreino.treinos.data": user.planoTreino.treinos[x].data,
            "Usuario.planoTreino.treinos.fase": user.planoTreino.treinos[x].fase,
            "Usuario.planoTreino.treinos.tempoTotal": user.planoTreino.treinos[x].tempoTotal,
            "Usuario.planoTreino.treinos.volume": user.planoTreino.treinos[x].volume,
            "Usuario.planoTreino.treinos.intensidade": user.planoTreino.treinos[x].intensidade,
            "Usuario.planoTreino.treinos.agrupMusc": user.planoTreino.treinos[x].agrupMusc,
            "Usuario.planoTreino.treinos.tabExercicios": user.planoTreino.treinos[x].tabExercicios, //Array de TabExercicios

                //4 TabExercicios
                "Usuario.planoTreino.treinos.tabExercicios.tipo": user.planoTreino.treinos[x].tabExercicios[y].tipo,
                //Todos são Arrays abaixo
                "Usuario.planoTreino.treinos.tabExercicios.idExercicios": user.planoTreino.treinos[x].tabExercicios[y].idExercicios,
                "Usuario.planoTreino.treinos.tabExercicios.nomeExercicios": user.planoTreino.treinos[x].tabExercicios[y].nomeExercicios,
                "Usuario.planoTreino.treinos.tabExercicios.intensidade": user.planoTreino.treinos[x].tabExercicios[y].intensidade,
                "Usuario.planoTreino.treinos.tabExercicios.tempoDescanso": user.planoTreino.treinos[x].tabExercicios[y].tempoDescanso,
                "Usuario.planoTreino.treinos.tabExercicios.repeticoes": user.planoTreino.treinos[x].tabExercicios[y].repeticoes,
                "Usuario.planoTreino.treinos.tabExercicios.sets": user.planoTreino.treinos[x].tabExercicios[y].sets,
                "Usuario.planoTreino.treinos.tabExercicios.modTempoExec": user.planoTreino.treinos[x].tabExercicios[y].modTempoExec

//Obs: Não há ligação para a classe Exercicio pois esta classe será pré-determinada manualmente pelos programadores

}

export {binding}
