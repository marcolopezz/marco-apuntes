import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesVisualComponent } from './apuntes-visual.component';

describe('ApuntesVisualComponent', () => {
  let component: ApuntesVisualComponent;
  let fixture: ComponentFixture<ApuntesVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApuntesVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntesVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
