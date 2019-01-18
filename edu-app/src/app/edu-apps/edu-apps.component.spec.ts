import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduAppsComponent } from './edu-apps.component';

describe('EduAppsComponent', () => {
  let component: EduAppsComponent;
  let fixture: ComponentFixture<EduAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
