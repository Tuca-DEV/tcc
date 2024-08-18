  class Exercicio {
    constructor(idExerc = null, nome = null, niveisOpt = [], dificuldade = null, tipo = null, tipoSubTreino = null, agrupMusc = []) {
        this.idExerc = idExerc;
        this.nome = nome;
        this.niveisOpt = niveisOpt; // Fases OPT mais recomendadas para o exercício ser utilizado
        this.dificuldade = dificuldade; // 1 a 3 (iniciante, intermediário, avançado) ou null (não aplicável)
        this.tipo = tipo; // (Máquina, PesoLivre, Bola, Kettlebell, BodyWeight)
        this.tipoSubTreino = tipoSubTreino; // (Alongamento, Mobilidade, Cardio, Resistência)
        this.agrupMusc = agrupMusc; // Agrupamentos musculares recrutados (FullBody, Pernas, Abdômen, Peito, Costas, Ombros, Bíceps, Tríceps)

       
        // this.tempExecMedio = null; // LentoExcêntrico - Controlado - Rápido
        // this.repeticoes = null; // Quantidade de repetições por série
    }
}

export default Exercicio;
