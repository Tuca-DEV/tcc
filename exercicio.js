  class Exercicio {
    constructor(idExerc = null, nome = null, tipoContagem = null, niveisOpt = [], dificuldade = null, tipo = null, tipoSubTreino = null, agrupMusc = []) {
        this.idExerc = idExerc;
        this.nome = nome;
        this.tipoContagem = tipoContagem // time ou rep : Tempo ou repetições
        this.niveisOpt = niveisOpt; // Fases OPT mais recomendadas para o exercício ser utilizado
        this.dificuldade = dificuldade; // 1 a 3 (iniciante, intermediário, avançado) 
        this.tipo = tipo; // (Máquina, PesoLivre, Bola, Kettlebell, BodyWeight)
        this.tipoSubTreino = tipoSubTreino; // (Alongamento, Mobilidade, Cardio, Resistência, Core)
        this.agrupMusc = agrupMusc; // Agrupamentos musculares recrutados (FullBody, Pernas, Abdômen, Peito, Costas, Ombros, Bíceps, Tríceps)

    }
}

export default Exercicio;
