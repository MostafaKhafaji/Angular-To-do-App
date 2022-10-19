import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  task: string = '';
  isValid: boolean = true;

  @Output() taskAdded = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleAddTask() {
    if (this.task) {
      this.taskAdded.emit(this.task);
      this.task = '';
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}
