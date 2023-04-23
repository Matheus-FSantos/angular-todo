import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public mode= 'list';

  public localItens!: string | null;
  public todos: Todo[] = [];

  public title: string = "My Tasks 🚀";
  public inputText = "";
  public inputStatus: boolean = false;

  public constructor() {
    this.loadLS();
  }

  public add(text: string): void {
    if(text.length >= 3) {
      this.todos.push(new Todo(text));
      this.inputText = "";
      this.inputStatus = false;
      this.saveLS();
      this.changeMode();
    } else {
      alert("Para adicionar uma nova tarefa, ela deve ter no minimo 3 caracteres!");
    }
  }

  public done(todo: Todo): void {
    this.saveLS()
    todo.done = true;
  }

  public undone(todo: Todo): void {
    this.saveLS()
    todo.done = false;
  }

  public remove(todo: Todo): void {
    let index = this.todos.indexOf(todo);

    if(index !== -1){
      this.todos.splice(index, 1);
      this.saveLS();
    }
  }

  public updateStatus(){
    if(this.inputStatus !== true)
      this.inputStatus = true;
  }

  public saveLS(): void {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  public loadLS(): void {
    this.localItens = localStorage.getItem('todos');
    
    if(this.localItens)
      this.todos = JSON.parse(this.localItens);
    else
      this.todos = [];
  }

  public changeMode(){
    if(this.mode === 'list')
      this.mode = 'add'
    else
      this.mode = 'list'
  }
}
