import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    {
      title: 'Buy Milk',
      description: 'Go to the milk store and buy milk'
    },
    {
      title: 'Create a KanBan app', 
      description: 'Using Firebase and Angular create a Kanban app!'
    }
  ];
  
  title = 'kanban-fire';
}
