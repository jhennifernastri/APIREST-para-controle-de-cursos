import { Component } from '@angular/core';
import { Curso } from '../../../models/cursos';
import { CursoService } from '../../../services/curso-service/curso.service';


@Component({
  selector: 'app-curso-index',
  templateUrl: './curso-index.component.html',
  styleUrls: ['./curso-index.component.css']
})
export class CursoIndexComponent {

  Cursos:Curso[];
  Id: number | null;
  Nome: string;

  constructor(private cursosService:CursoService){
    this.Cursos = [];
    this.Id = null;
    this.Nome = '';
  }

  definirPesquisar():void{

    if(this.Id !== null){
      this.pesquisarPorId(this.Id);
      return;
    }

    if(this.Nome !== ''){
      this.pesquisarPorNome(this.Nome);
      return;
    }

    this.pesquisar();
  }
  pesquisar():void{
    this.cursosService.get().subscribe({
      next: (jsonCursos:Curso[]) => {
        this.Cursos = jsonCursos
      },
      error: (jsonErro:any) => {
        this.exibirMensagemErro(jsonErro.status);
      }
    });
  }

  pesquisarPorId(id:number):void{
    this.cursosService.getById(id).subscribe({
      next: (jsonCurso:Curso) => {
        this.Cursos = [jsonCurso];
      },
      error: (jsonErro:any) => {
        this.exibirMensagemErro(jsonErro.status);
      }
    });
  }

  pesquisarPorNome(nome:string):void{
    this.cursosService.getByName(nome).subscribe({
      next: (jsonCursos:Curso[]) => {
        this.Cursos = jsonCursos;
      },
      error: (jsonErro:any) => {
        this.exibirMensagemErro(jsonErro.status);
      }
    });
  }

  exibirMensagemErro(status: number):void{
    if(status === 0)
      alert('Falha na requisição.\nEntre em contato com o suporte!');
    else if (status === 404)
      alert('Nenhum medicamento foi encontrado!');
    else if (status === 500)
      alert('Erro interno no servidor!\nEntre em contato com o Suporte!');
  }

}
