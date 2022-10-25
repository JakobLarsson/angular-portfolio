import { Component, OnInit, Input } from '@angular/core';
import { Projects } from 'src/app/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project!: Projects;
  constructor() {}

  ngOnInit(): void {}

  toSingleProject() {
    console.log('test');
  }
}
