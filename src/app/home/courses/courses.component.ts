import { Component, OnInit, ViewChild } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from '../../utils/carousel/carousel.component'

@Component({
  selector: 'app-courses',
  imports: [NzGridModule, NzCarouselModule, NzButtonModule, CarouselModule, CarouselComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  items = [
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
    { title: 'Card 3', description: 'Description for card 3' },
    { title: 'Card 4', description: 'Description for card 4' },
    { title: 'Card 5', description: 'Description for card 5' },
    { title: 'Card 6', description: 'Description for card 6' },
  ];

}
