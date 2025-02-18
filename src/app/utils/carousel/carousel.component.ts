import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'lv-carousel',
  imports: [NzCardModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  items = [
    {title: 'Course 1'},
    {title: 'Course 2'},
    {title: 'Course 3'},
    {title: 'Course 4'},
  ]
}
