import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../task';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:3000/tasks'

  constructor(private httpClient : HttpClient) { }

  addTask(task : Task) : Observable<Task[]> {
    return this.httpClient.post<Task[]>(this.url, task, httpOptions);
  }

  getTasks() : Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url);
  }
  
  updateTask(task : Task) : Observable<Task[]> {
    let updateUrl = `${this.url}/${task.id}`;
    return this.httpClient.put<Task[]>(updateUrl, task, httpOptions);
  }

  deleteTask(task : Task) : Observable<Task[]> {
    let deleteUrl = `${this.url}/${task.id}`;
    return this.httpClient.delete<Task[]>(deleteUrl);
  }


}
