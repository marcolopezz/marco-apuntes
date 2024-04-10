import { Component } from '@angular/core';
import { ApuntesVisualComponent } from '../apuntes-visual/apuntes-visual.component';
import { CommonModule } from '@angular/common';
import { ApuntesGitComponent } from '../apuntes-git/apuntes-git.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [ApuntesVisualComponent, CommonModule, ApuntesGitComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
