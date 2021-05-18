import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueJourComponent } from './statistique-jour.component';

describe('StatistiqueJourComponent', () => {
  let component: StatistiqueJourComponent;
  let fixture: ComponentFixture<StatistiqueJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueJourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
