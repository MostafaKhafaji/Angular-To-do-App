import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-app';
  allTasks: Array<object> = [];

  triggerEvInParent(task: string) {
    this.allTasks.push({
      name: task,
      isCompleted: false,
    });
  }
  taskDelete(task: string) {
    this.allTasks = this.allTasks.filter((e: any) => {
      return e.name != task;
    });
  }
  taskComlete(task: string) {
    this.allTasks = this.allTasks.map((e: any) => {
      if (e.name === task) {
        e.isCompleted = !e.isCompleted;
      }
      return e;
    });
    console.log(this.allTasks);
  }
}
