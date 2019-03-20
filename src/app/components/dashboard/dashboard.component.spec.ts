import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const data: any = require('../../../assets/constant/testdata.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Positive Scenario Test
  let dashboardComponent = new DashboardComponent();
  dashboardComponent = data.criteria.operands[0];
  it('type value should be age', () => {
      expect(dashboardComponent.type).toBe('age');
  });
  it('operation value should be once among predefined enum operations', () => {
      expect (Object.values(DashboardComponent.Operation)).toContain(dashboardComponent.operation);
  });
});
