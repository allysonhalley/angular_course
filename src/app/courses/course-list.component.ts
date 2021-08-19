import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 5.4,
        releaseDate: 'May, 1, 2013'
      },
      {
        id: 2,
        name: 'Angular: http',
        imageUrl: '',
        price: 49.99,
        code: 'XPS-8796',
        duration: 80,
        rating: 4,
        releaseDate: 'August, 3, 1988'
      }
    ]
  }

}
