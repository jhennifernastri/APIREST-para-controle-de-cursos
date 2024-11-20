export class Curso{
    Id!: number;
    Nome: string;
    AlunosMatriculados: number;
    CargaHoraria: number;

    public constructor(){
        this.Nome = '';
        this.AlunosMatriculados = 0;
        this.CargaHoraria = 0;
    }
}