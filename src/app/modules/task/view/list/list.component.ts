import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../controller/task.service';
import { Task } from '../../model/Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private controller: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks()
  }

  public getTasks() {
    this.controller.getTasks()
      .subscribe((r) => {
        this.tasks = r;
      })
  }

  public deleteTask(task: Task) {
    var conf = confirm("¿Desea eliminar la tarea?")
    if (conf) {
      this.controller.deleteTask(task)
        .subscribe((r) => {
          this.getTasks()
        })
    }

  }

  public completeTask(t: Task) {
    t.done = !t.done;
    this.controller.updateTask(t)
      .subscribe((r) => {
        alert("Estado cambiado")
      })
  }

  public updateTask(t: Task) {
    this.router.navigate(['/update/' + t.id])
  }
}
