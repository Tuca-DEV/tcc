//import {x, y} from './ie.js'
//import user from './main.js'
import Usuario from "../entities/usuario.js"

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
        "Usuario.planoTreino.freqNoMes": user.planoTreino.freqNoMes,
        "Usuario.planoTreino.treinos": user.planoTreino.treinos, //Array de Treino's
    
            //n Treino
            "Usuario.planoTreino.treinos.data": user.planoTreino.treinos[0].data,
            "Usuario.planoTreino.treinos.fase": user.planoTreino.treinos[0].fase,
            "Usuario.planoTreino.treinos.tempoTotal": user.planoTreino.treinos[0].tempoTotal,
            "Usuario.planoTreino.treinos.volume": user.planoTreino.treinos[0].volume,
            "Usuario.planoTreino.treinos.intensidade": user.planoTreino.treinos[0].intensidade,
            "Usuario.planoTreino.treinos.agrupMusc": user.planoTreino.treinos[0].agrupMusc,
            "Usuario.planoTreino.treinos.tabExercicios": user.planoTreino.treinos[0].tabExercicios, //Array de TabExercicios

                //4 TabExercicios
                "Usuario.planoTreino.treinos.tabExercicios.tipo": user.planoTreino.treinos[0].tabExercicios[0].tipo,
                //Todos são Arrays abaixo
                "Usuario.planoTreino.treinos.tabExercicios.idExercicios": user.planoTreino.treinos[0].tabExercicios[0].idExercicios,
                "Usuario.planoTreino.treinos.tabExercicios.nomeExercicios": user.planoTreino.treinos[0].tabExercicios[0].nomeExercicios,
                "Usuario.planoTreino.treinos.tabExercicios.intensidade": user.planoTreino.treinos[0].tabExercicios[0].intensidade,
                "Usuario.planoTreino.treinos.tabExercicios.tempoDescanso": user.planoTreino.treinos[0].tabExercicios[0].tempoDescanso,
                "Usuario.planoTreino.treinos.tabExercicios.tempoTotal": user.planoTreino.treinos[0].tabExercicios[0].tempoTotal,
                "Usuario.planoTreino.treinos.tabExercicios.repeticoes": user.planoTreino.treinos[0].tabExercicios[0].repeticoes,
                "Usuario.planoTreino.treinos.tabExercicios.sets": user.planoTreino.treinos[0].tabExercicios[0].sets,
                "Usuario.planoTreino.treinos.tabExercicios.modTempoExec": user.planoTreino.treinos[0].tabExercicios[0].modTempoExec,

//Obs: Não há ligação para a classe Exercicio pois esta classe será pré-determinada manualmente pelos programadores

    //Getters e Setters
    get "Usuario"() {
        return user;
    },
    set "Usuario"(valor) {
        user = valor;
    },
    get "Usuario.id"() {
        return user.id;
    },
    set "Usuario.id"(valor) {
        user.id = valor;
    },
    get "Usuario.nome"() {
        return user.nome;
    },
    set "Usuario.nome"(valor) {
        user.nome = valor;
    },
    get "Usuario.idade"() {
        return user.idade;
    },
    set "Usuario.idade"(valor) {
        user.idade = valor;
    },
    get "Usuario.altura"() {
        return user.altura;
    },
    set "Usuario.altura"(valor) {
        user.altura = valor;
    },
    get "Usuario.peso"() {
        return user.peso;
    },
    set "Usuario.peso"(valor) {
        user.peso = valor;
    },
    get "Usuario.sexo"() {
        return user.sexo;
    },
    set "Usuario.sexo"(valor) {
        user.sexo = valor;
    },
    get "Usuario.objetivo"() {
        return user.objetivo;
    },
    set "Usuario.objetivo"(valor) {
        user.objetivo = valor;
    },
    get "Usuario.nivel"() {
        return user.nivel;
    },
    set "Usuario.nivel"(valor) {
        user.nivel = valor;
    },
    get "Usuario.disponibilidade"() {
        return user.disponibilidade;
    },
    set "Usuario.disponibilidade"(valor) {
        user.disponibilidade = valor;
    },
    get "Usuario.planoTreino"() {
        return user.planoTreino;
    },
    set "Usuario.planoTreino"(valor) {
        user.planoTreino = valor;
    },

    // PlanoTreino
    get "Usuario.planoTreino.fases"() {
        return user.planoTreino.fases;
    },
    set "Usuario.planoTreino.fases"(valor) {
        user.planoTreino.fases = valor;
    },
    get "Usuario.planoTreino.freqNoMes"() {
        return user.planoTreino.freqNoMes;
    },
    set "Usuario.planoTreino.freqNoMes"(valor) {
        user.planoTreino.freqNoMes = valor;
    },
    get "Usuario.planoTreino.treinos"() {
        return user.planoTreino.treinos;
    },
    set "Usuario.planoTreino.treinos"(valor) {
        user.planoTreino.treinos = valor;
    },

    // Treinos
    get "Usuario.planoTreino.treinos.data"() {
        return user.planoTreino.treinos[0].data;
    },
    set "Usuario.planoTreino.treinos.data"(valor) {
        user.planoTreino.treinos[0].data = valor;
    },
    get "Usuario.planoTreino.treinos.fase"() {
        return user.planoTreino.treinos[0].fase;
    },
    set "Usuario.planoTreino.treinos.fase"(valor) {
        user.planoTreino.treinos[0].fase = valor;
    },
    get "Usuario.planoTreino.treinos.tempoTotal"() {
        return user.planoTreino.treinos[0].tempoTotal;
    },
    set "Usuario.planoTreino.treinos.tempoTotal"(valor) {
        user.planoTreino.treinos[0].tempoTotal = valor;
    },
    get "Usuario.planoTreino.treinos.volume"() {
        return user.planoTreino.treinos[0].volume;
    },
    set "Usuario.planoTreino.treinos.volume"(valor) {
        user.planoTreino.treinos[0].volume = valor;
    },
    get "Usuario.planoTreino.treinos.intensidade"() {
        return user.planoTreino.treinos[0].intensidade;
    },
    set "Usuario.planoTreino.treinos.intensidade"(valor) {
        user.planoTreino.treinos[0].intensidade = valor;
    },
    get "Usuario.planoTreino.treinos.agrupMusc"() {
        return user.planoTreino.treinos[0].agrupMusc;
    },
    set "Usuario.planoTreino.treinos.agrupMusc"(valor) {
        user.planoTreino.treinos[0].agrupMusc = valor;
    },
    get "Usuario.planoTreino.treinos.tabExercicios"() {
        return user.planoTreino.treinos[0].tabExercicios;
    },
    set "Usuario.planoTreino.treinos.tabExercicios"(valor) {
        user.planoTreino.treinos[0].tabExercicios = valor;
    },

    // TabExercicios
    get "Usuario.planoTreino.treinos.tabExercicios.tipo"() {
        return user.planoTreino.treinos[0].tabExercicios[0].tipo;
    },
    set "Usuario.planoTreino.treinos.tabExercicios.tipo"(valor) {
        user.planoTreino.treinos[0].tabExercicios[0].tipo = valor;
    },
    get "Usuario.planoTreino.treinos.tabExercicios.idExercicios"() {
        return user.planoTreino.treinos[0].tabExercicios[0].idExercicios;
    },
    set "Usuario.planoTreino.treinos.tabExercicios.idExercicios"(valor) {
        user.planoTreino.treinos[0].tabExercicios[0].idExercicios = valor;
    },
    get "Usuario.planoTreino.treinos.tabExercicios.nomeExercicios"() {
        return user.planoTreino.treinos[0].tabExercicios[0].nomeExercicios;
    },
    set "Usuario.planoTreino.treinos.tabExercicios.nomeExercicios"(valor) {
        user.planoTreino.treinos[0].tabExercicios[0].nomeExercicios = valor;
    },
    get "Usuario.planoTreino.treinos.tabExercicios.intensidade"() {
        return user.planoTreino.treinos[0].tabExercicios[0].intensidade;
    },
    set "Usuario.planoTreino.treinos.tabExercicios.intensidade"(valor) {
        user.planoTreino.treinos[0].tabExercicios[0].intensidade = valor;
    },
    get "Usuario.planoTreino.treinos.tabExercicios.tempoDescanso"() {
        return user.planoTreino.treinos[0].tabExercicios[0].tempoDescanso;
    },
    set "Usuario.planoTreino.treinos.tabExercicios.tempoDescanso"(valor) {
        user.planoTreino.treinos[0].tabExercicios[0].tempoDescanso = valor;
    },
    get "Usuario.planoTreino.treinos.tabExercicios.tempoTotal"() {
        return user.planoTreino.treinos[0].tabExercicios[0].tempoTotal;
    },
    set "Usuario.planoTreino.treinos.tabExercicios.tempoTotal"(valor) {
        user.planoTreino.treinos[0].tabExercicios[0].tempoTotal = valor;
    },
    get "Usuario.planoTreino.treinos.tabExercicios.repeticoes"() {
        return user.planoTreino.treinos[0].tabExercicios[0].repeticoes;
    },
    set "Usuario.planoTreino.treinos.tabExercicios.repeticoes"(valor) {
        user.planoTreino.treinos[0].tabExercicios[0].repeticoes = valor;
    },
    get "Usuario.planoTreino.treinos.tabExercicios.sets"() {
        return user.planoTreino.treinos[0].tabExercicios[0].sets;
    },
    set "Usuario.planoTreino.treinos.tabExercicios.sets"(valor) {
        user.planoTreino.treinos[0].tabExercicios[0].sets = valor;
    },
    get "Usuario.planoTreino.treinos.tabExercicios.modTempoExec"() {
        return user.planoTreino.treinos[0].tabExercicios[0].modTempoExec;
    },
    set "Usuario.planoTreino.treinos.tabExercicios.modTempoExec"(valor) {
        user.planoTreino.treinos[0].tabExercicios[0].modTempoExec = valor;
    }


}

export {binding}
