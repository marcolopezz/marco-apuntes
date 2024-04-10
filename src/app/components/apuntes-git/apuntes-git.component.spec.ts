import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesGitComponent } from './apuntes-git.component';

describe('ApuntesGitComponent', () => {
  let component: ApuntesGitComponent;
  let fixture: ComponentFixture<ApuntesGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApuntesGitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntesGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
