import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesTypescriptComponent } from './apuntes-typescript.component';

describe('ApuntesTypescriptComponent', () => {
  let component: ApuntesTypescriptComponent;
  let fixture: ComponentFixture<ApuntesTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApuntesTypescriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntesTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
