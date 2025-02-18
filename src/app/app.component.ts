import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [ HomeComponent, NzIconModule, NzLayoutModule, NzMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isCollapsed = false;
}
