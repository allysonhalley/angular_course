import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){ }

  ngOnInit(): void {
    // In this line a charactere " ! " is present because i had a error about null possibility
    this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!);
  }

  save(): void{
    this.courseService.save(this.course);
  }

}
