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
  public UpdateCheck(idProject: number, idTodo: number, isCompleted: boolean): Observable<object> {
    const PutURI = environment.prodURI + idProject + '/todos/' + idTodo;
    return this.http.put(PutURI, {isCompleted});
  }

  public AddTodo(text: string, project_id: number): Observable<object> {
    return this.PostJson( { project_id, todos_attributes: [{ text }]});
  }

  public AddTodoAndCreateProject(text: string, title: string): Observable<object>{
    return this.PostJson(  { title, todos_attributes: [{ text }]});
  }

  private PostJson(todo: object): Observable<object>{
    return this.http.post(environment.todoURI, todo);
  }
}
