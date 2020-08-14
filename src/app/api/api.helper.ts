import {plainToClass, serialize, TransformClassToPlain} from 'class-transformer';
import {Project} from '../model/project';
import {SendTodo} from '../model/sendTodo';
import {environment} from '../../environments/environment.prod';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AccountsHttpService{
  constructor(private http: HttpClient){}

  GetProject(): Observable<any>{
    return this.http.get(environment.prodURI);
  }
}


export class ApiHelper{


  private PutURI: string;

    public GetProject(): Project {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', environment.prodURI, false);
      xhr.send();
      if (xhr.status !== 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        const realProject = plainToClass(Project, JSON.parse(xhr.responseText));
        return realProject;
      }
    }

   public UpdateCheck(idProject: number, idTodo: number): void {
     const xhr = new XMLHttpRequest();
     this.PutURI = environment.prodURI + idProject + '/todos/' + idTodo;
     xhr.open('PUT', this.PutURI, false);
     xhr.send();
     if (xhr.status !== 200) {
       alert( xhr.status + ': ' + xhr.statusText );
     } else {
       console.log(xhr.responseText);
     }
   }

    public AddTodo(text: string, projectId: number): void{
      const todo = serialize(new SendTodo(null, projectId, text));
      this.PostJson(todo);
    }
    private PostJson(todo: string): void{
      const xhr = new XMLHttpRequest();
      xhr.open('POST', environment.todoURI, false);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(todo);
      if (xhr.status !== 200) {
        alert( xhr.status + ': ' + xhr.statusText );
      } else {
        console.log(xhr.responseText);
      }
    }

    public AddTodoAndCreateProject(text: string, title: string): void{
      const todo = serialize(new SendTodo(title, null, text));
      this.PostJson(todo);
    }
}
