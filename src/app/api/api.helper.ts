import {plainToClass, serialize, TransformClassToPlain} from 'class-transformer';
import {Project} from './project';

export class SendTodo{

  constructor(title: string, project_id: number, text: string) {
    this.project_id = project_id;
    this.text = text;
    this.title = title;
  }
  title: string;
  project_id: number;
  text: string;
}

export class ApiHelper{
  prodURI = 'https://fsdplaner.herokuapp.com/projects/';
  todoURI = 'https://fsdplaner.herokuapp.com/todos';

  private PutURI: string;

    public GetProject(): Project {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.prodURI, false);
      xhr.send();
      if (xhr.status !== 200) {
        alert( xhr.status + ': ' + xhr.statusText );
      } else {
        const realProject = plainToClass(Project, JSON.parse(xhr.responseText));
        return realProject;
      }
   }

   public UpdateCheck(idProject: number, idTodo: number): void {
     const xhr = new XMLHttpRequest();
     this.PutURI = this.prodURI + idProject + '/todos/' + idTodo;
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
      xhr.open('POST', this.todoURI, false);
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
