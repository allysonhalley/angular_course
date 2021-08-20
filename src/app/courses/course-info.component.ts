import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  courseId: number;

  constructor(private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    // In this line a charactere " ! " is present becouse i had a error about null possibility
    this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')!;
  }

}
