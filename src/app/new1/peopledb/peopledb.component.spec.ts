import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopledbComponent } from './peopledb.component';

describe('PeopledbComponent', () => {
  let component: PeopledbComponent;
  let fixture: ComponentFixture<PeopledbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopledbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopledbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
