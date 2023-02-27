import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:3000/tasks'

  constructor(private httpClient : HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url);
  }

  deleteTask(task : Task) : Observable<Task[]> {
    let deleteUrl = `${this.url}/${task.id}`;
    return this.httpClient.delete<Task[]>(deleteUrl);
  }

}
