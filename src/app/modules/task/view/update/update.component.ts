import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/Task';
import { TaskService } from '../../controller/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  public task: Task = new Task();
  constructor(private controller: TaskService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const parametro = params['id']; 
      this.controller.getTask(parametro)
      .subscribe((r) => {
        this.task = r;
      })
    });
      
  }

  saveChanges(){
    var newTask: Task = {
      id: this.task.id,
      title: this.task.title,
      done: this.task.done
    };

    this.controller.updateTask(newTask)
    .subscribe((r) => {
      alert("Tarea actualizada")
      this.router.navigate(['/list'])
    })
  }

}
