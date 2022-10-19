import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() allTasks: any = [];
  @Output() taskDelete = new EventEmitter();
  @Output() taskComplete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  handleDelete(task: string) {
    this.taskDelete.emit(task);
  }
  handleComlpleted(task: string) {
    this.taskComplete.emit(task);
  }
}
