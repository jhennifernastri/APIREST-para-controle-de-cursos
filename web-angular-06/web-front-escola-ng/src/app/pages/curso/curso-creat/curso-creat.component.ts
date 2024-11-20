import { Component } from '@angular/core';
import { Curso } from '../../../models/cursos';
import { CursoService } from 'src/app/services/curso-service/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-creat',
  templateUrl: './curso-creat.component.html',
  styleUrls: ['./curso-creat.component.css']
})
export class CursoCreatComponent {

  Curso:Curso;

  constructor(private cursosServices:CursoService,
    private router:Router){
    this.Curso = new Curso();
  }

  enviar():void{
    this.cursosServices.post(this.Curso).subscribe({
      next: () => {
        alert('Curso adicionado com sucesso');
        this.router.navigate(['/cursos']);
      },
      error: (jsonErro:any) => {
        this.exibirMensagemErro(jsonErro.status);
      }
    });
  }

  exibirMensagemErro(status: number):void{
    if(status === 0)
      alert('Falha na requisição.\nEntre em contato com o suporte!');
    else if (status === 400)
      alert('Verifique os dados que estão sendo enviados!');
    else if (status === 404)
      alert('Nenhum medicamento foi encontrado!');
    else if (status === 500)
      alert('Erro interno no servidor!\nEntre em contato com o Suporte!');
  }

  validarDadosExibirMensagem():boolean{
    let msg:string = '';

    if(this.Curso.Nome === ''){
      msg += 'Nome;\n';
    }

    if(this.Curso.AlunosMatriculados === null){
      msg += 'Alunos matriculados;\n';
    }

    if(this.Curso.CargaHoraria === null){
      msg += 'Carga horaria;\n';
    }

    if(msg !== ''){
      msg = 'Preencha corretamente os dados a seguir:\n' + msg;
      alert(msg);
      return false;
    }
    
    return true
  }

}
