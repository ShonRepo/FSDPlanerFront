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
