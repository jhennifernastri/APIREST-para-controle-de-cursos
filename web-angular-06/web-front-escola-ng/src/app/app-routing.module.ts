import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursoIndexComponent } from './pages/curso/curso-index/curso-index.component';
import { CursoCreatComponent } from './pages/curso/curso-creat/curso-creat.component';
import { CursoEditComponent } from './pages/curso/curso-edit/curso-edit.component';
import { Message404Component } from './pages/message/message404/message404.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'cursos',component:CursoIndexComponent},
  {path:'cursos/create',component:CursoCreatComponent},
  {path:'cursos/edit/:id',component:CursoEditComponent},
  {path:'**',component:Message404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
