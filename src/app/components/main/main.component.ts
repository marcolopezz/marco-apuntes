import { Component } from '@angular/core';
import { SidemainComponent } from '../../shared/sidemain/sidemain.component';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidemainComponent, PageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
