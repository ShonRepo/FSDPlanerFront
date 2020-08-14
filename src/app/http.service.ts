import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment.prod';
import {SendTodo} from './model/sendTodo';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }
  GetProject(): Observable<any> {
    return this.http.get(environment.prodURI);
  }
  public UpdateCheck(idProject: number, idTodo: number): Observable<any> {
    const PutURI = environment.prodURI + idProject + '/todos/' + idTodo;
    return this.http.put(PutURI, null);
  }

  public AddTodo(text: string, projectId: number): Observable<any> {
    return this.PostJson(new SendTodo(null, projectId, text));
  }

  public AddTodoAndCreateProject(text: string, title: string): Observable<any>{
    return this.PostJson(new SendTodo(title, null, text));
  }

  private PostJson(todo: any): Observable<any>{
    return this.http.post(environment.todoURI, todo);
  }
}
