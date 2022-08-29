import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(), //pegando apenas o primeiro dado
      delay(1000), // testando o spiner
      tap((courses) => console.log(courses))
    );
  }

  //metodo de inserção de registro

  save(record: Course) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }
}
