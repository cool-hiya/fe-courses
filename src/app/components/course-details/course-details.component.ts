import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {COURSES_PATH} from "src/app/constants";
import {Course} from "src/app/models";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnChanges {
  @Input() course!: Course;
  isLoading: boolean = false;
  hasError: boolean = false;

  get sourcePath(): string {
    const {category, source} = this.course;
    return `${COURSES_PATH}/${category}/${source}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      this.isLoading = true;
      this.hasError = false;
    }
  }

  onLoad() {
    this.isLoading = false;
  }

  onError() {
    this.isLoading = false;
    this.hasError = true;
  }
}
