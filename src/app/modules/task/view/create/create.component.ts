import { Component } from '@angular/core';
import { Task } from '../../model/Task';
import { TaskService } from '../../controller/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public task: Task = new Task();
  constructor(private controller: TaskService, private router: Router) {
    
  }

  public create(){
    this.controller.newTask(this.task)
    .subscribe((r) => {
      this.router.navigate(['/list'])
    })
  }
}
