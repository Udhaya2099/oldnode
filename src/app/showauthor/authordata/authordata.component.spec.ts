import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthordataComponent } from './authordata.component';

describe('AuthordataComponent', () => {
  let component: AuthordataComponent;
  let fixture: ComponentFixture<AuthordataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthordataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
