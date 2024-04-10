import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemainComponent } from './sidemain.component';

describe('SidemainComponent', () => {
  let component: SidemainComponent;
  let fixture: ComponentFixture<SidemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
