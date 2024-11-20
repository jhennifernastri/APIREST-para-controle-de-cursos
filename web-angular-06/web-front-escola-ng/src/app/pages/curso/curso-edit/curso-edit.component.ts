import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../../models/cursos';
import { CursoService } from '../../../services/curso-service/curso.service';


@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent {

  Curso: Curso;

  constructor(private activatedRoute: ActivatedRoute,
    private cursosService: CursoService,
    private router: Router) {

    this.Curso = new Curso();
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');

    this.cursosService.getById(Number(id)).subscribe({
      next: (jsonCurso: Curso) => {
        this.Curso = jsonCurso;
      }
    });
  }

  alterar():void{
    if(this.validarDadosExibirMensagem()){
      this.cursosService.put(this.Curso).subscribe({
        next: () => {
          alert('Curso alterado com sucesso');
          this.router.navigate(['/cursos']);
        },
        error: (jsonErro:any) => {
          this.exibirMensagemErro(jsonErro.status);
        }
      });
    }
  } 

  excluir():void{
    if (confirm(`Você tem certeza de que deseja deletar este curso ${this.Curso.Id}?`)){
      this.cursosService.delete(this.Curso.Id).subscribe({
        next: () => {
          alert('Curso deletado com sucesso');
          this.router.navigate(['/cursos']);
        },
        error: (jsonErro:any) => {
          this.exibirMensagemErro(jsonErro.status);
        }
      });
    }
  }

  exibirMensagemErro(status: number):void{
    if(status === 0)
      alert('Falha na requisição.\nEntre em contato com o suporte!');
    else if (status === 400)
      alert('Verifique os dados que estão sendo enviados!');
    else if (status === 404)
      alert('Nenhum curso foi encontrado!');
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
