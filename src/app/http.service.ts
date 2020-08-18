import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }
  GetProject(): Observable<object> {
    return this.http.get(environment.prodURI);
  }
  public UpdateCheck(idProject: number, idTodo: number): Observable<object> {
    const PutURI = environment.prodURI + idProject + '/todos/' + idTodo;
    return this.http.put(PutURI, null);
  }

  public AddTodo(text: string, project_id: number): Observable<object> {
    return this.PostJson({ title: null, project_id, text});
  }

  public AddTodoAndCreateProject(text: string, title: string): Observable<object>{
    return this.PostJson(  { title, project_id: null, text });
  }

  private PostJson(todo: object): Observable<object>{
    return this.http.post(environment.todoURI, todo);
  }
}
