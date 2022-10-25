import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService
      .getProjects()
      .subscribe((project) => (this.projects = project));
  }

  testFunc() {
    console.log(this.projects);
  }
}
