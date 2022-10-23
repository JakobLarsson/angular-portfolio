import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageProjectComponent } from './single-page-project.component';

describe('SinglePageProjectComponent', () => {
  let component: SinglePageProjectComponent;
  let fixture: ComponentFixture<SinglePageProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePageProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
