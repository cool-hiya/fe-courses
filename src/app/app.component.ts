import {CoursesService} from './services/courses.service';
import {Component, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from './models';
import {MatSidenavContainer} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses$: Observable<Course[]>;
  selectedCourse!: Course;

  @ViewChild('sidenav') sidenav!: MatSidenavContainer;

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.getCourses();
  }

  onCourseSelect(course: Course) {
    this.selectCourse(course);
    this.openSideNav();
  }

  private selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  private openSideNav() {
    this.sidenav.open();
  }
}
