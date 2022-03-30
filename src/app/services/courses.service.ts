import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {COURSES_PATH} from '../constants';
import {Course} from '../models';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${COURSES_PATH}/courses.json`, {responseType: 'json'})
  }
}
