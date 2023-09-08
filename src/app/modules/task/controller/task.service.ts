import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Task } from '../model/Task';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000/api/v1/task";
  private extractData(res:any){
    let body = res || {} || [];
    return body;
  }

  public newTask(task: Task): Observable<Task>{
    return this.http.post(this.url, task)
    .pipe(map(this.extractData));
  }

  public getTasks(): Observable<Task[]>{
    return this.http.get(this.url)
    .pipe(map(this.extractData));
  }

  public getTask(id: number): Observable<Task>{
    return this.http.get(this.url + '/get/'+ id)
    .pipe(map(this.extractData));
  }

  public deleteTask(task: Task): Observable<any>{
    return this.http.delete(this.url, {
      body: {
        id: task.id
      }
    })
    .pipe(map(this.extractData));
  }

  public updateTask(task: Task): Observable<Task>{
    return this.http.patch(this.url, task)
    .pipe(map(this.extractData));
  }
}
