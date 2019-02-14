import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilanteDashboardComponent } from './vigilante-dashboard.component';

describe('VigilanteDashboardComponent', () => {
  let component: VigilanteDashboardComponent;
  let fixture: ComponentFixture<VigilanteDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VigilanteDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VigilanteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
