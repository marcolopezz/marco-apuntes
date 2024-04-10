import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesAngularComponent } from './apuntes-angular.component';

describe('ApuntesAngularComponent', () => {
  let component: ApuntesAngularComponent;
  let fixture: ComponentFixture<ApuntesAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApuntesAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
