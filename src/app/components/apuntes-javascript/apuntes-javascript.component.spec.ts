import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesJavascriptComponent } from './apuntes-javascript.component';

describe('ApuntesJavascriptComponent', () => {
  let component: ApuntesJavascriptComponent;
  let fixture: ComponentFixture<ApuntesJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApuntesJavascriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntesJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
