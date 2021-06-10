import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumboxComponent } from './numbox.component';

describe('NumboxComponent', () => {
  let component: NumboxComponent;
  let fixture: ComponentFixture<NumboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
