import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Course} from "src/app/models";


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() courseSelect: EventEmitter<Course> = new EventEmitter();

  onSelect(course: Course) {
    this.courseSelect.emit(course);
  }
}
