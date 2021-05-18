import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueAnneeComponent } from './statistique-annee.component';

describe('StatistiqueAnneeComponent', () => {
  let component: StatistiqueAnneeComponent;
  let fixture: ComponentFixture<StatistiqueAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueAnneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
