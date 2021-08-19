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
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'May, 1, 2013'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 49.99,
        code: 'XPS-8796',
        duration: 80,
        rating: 5,
        releaseDate: 'August, 3, 1988'
      }
    ]
  }

}
