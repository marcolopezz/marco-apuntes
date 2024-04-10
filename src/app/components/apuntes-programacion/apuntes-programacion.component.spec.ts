import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesProgramacionComponent } from './apuntes-programacion.component';

describe('ApuntesProgramacionComponent', () => {
  let component: ApuntesProgramacionComponent;
  let fixture: ComponentFixture<ApuntesProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApuntesProgramacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntesProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
