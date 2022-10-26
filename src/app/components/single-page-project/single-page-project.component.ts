import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-page-project',
  templateUrl: './single-page-project.component.html',
  styleUrls: ['./single-page-project.component.scss'],
})
export class SinglePageProjectComponent implements OnInit {
  id?: string | null;
  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    console.log(this.id);
  }
}
