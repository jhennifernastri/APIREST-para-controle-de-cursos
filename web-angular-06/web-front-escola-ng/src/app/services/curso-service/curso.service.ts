import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../../models/cursos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpClient:HttpClient) { }

  get():Observable<Curso[]>{
    return this.httpClient.get<Curso[]>('https://localhost:44333/api/cursos');
  }

  getById(id:number):Observable<Curso>{
    return this.httpClient.get<Curso>(`https://localhost:44333/api/cursos/${id}`);
  }

  getByName(nome:string):Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(`https://localhost:44333/api/cursos?nome=${nome}`);
  }

  put(curso:Curso):Observable<Curso>{
    return this.httpClient.put<Curso>(`https://localhost:44333/api/cursos/${curso.Id}`, curso);
  }
  
  post(curso:Curso):Observable<Curso>{
    return this.httpClient.post<Curso>(`https://localhost:44333/api/cursos/`,curso);
  }

  delete(id:number):Observable<Curso>{
    return this.httpClient.delete<Curso>(`https://localhost:44333/api/cursos/${id}`);
  }

}
