import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() {

    this.todos = [
      {
        id: 1,
        title: 'Learn Angular',
        desc: 'The best way to learn Angular',
        active: true
      },
      {
        id: 2,
        title: 'Learn React',
        desc: 'The best way to learn React',
        active: true
      },
      {
        id: 3,
        title: 'Learn Vue',
        desc: 'The best way to learn Vue',
        active: true
      },
      {
        id: 4,
        title: 'Learn C++',
        desc: 'The best way to learn C++',
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log("deleted todo");

    //get index of todo that needs to be deleted
    const index = this.todos.indexOf(todo);
    //splice out of array
    this.todos.splice(index, 1);

  }

  addTodo(todo:Todo){
    console.log("added todo");

    this.todos.push(todo);
  }

}
