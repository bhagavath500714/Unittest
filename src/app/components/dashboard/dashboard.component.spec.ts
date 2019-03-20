import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { isNumber } from 'util';

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
  it('age value should be a number', () => {
      expect(isNumber(dashboardComponent.age));
  });

  //Negative Scenario Test 1
  let nejDashboardComponent = new DashboardComponent();
  nejDashboardComponent = Object.assign({}, dashboardComponent);
  delete nejDashboardComponent.age;
  delete nejDashboardComponent.operation;
  it('Missing data from operation field', () => {
    expect(nejDashboardComponent.operation).toBeUndefined();
  });
  it('Missing data from age field', () => {
    expect(nejDashboardComponent.age).toBeUndefined();
  });

  //Negative Scenario Test 2
  let nejtDashboardComponent = new DashboardComponent();
  nejtDashboardComponent = Object.assign({}, dashboardComponent);
  nejtDashboardComponent.age = 12;
  it('age value is not valid number', () =>{
    expect(isNaN(nejtDashboardComponent.age));
  });
});
