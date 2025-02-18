import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, ElementRef, Input, input, viewChild } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/element';

interface Slide {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  linkUrl?: string;
  order?: number;
  active?: boolean;
  customClass?: string;
  content?: {
    html?: string;
    text?: string;
  };
  metadata?: {
    [key: string]: any;
  };
}


@Component({
  selector: 'lv-carousel',
  imports: [NzCardModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //add custom elements schemas
})
export class CarouselComponent {


  private readonly swiperContainer = viewChild.required<ElementRef<SwiperContainer>>('swiperContainer');
  @Input() items: any

  constructor() {
    effect(() => {
      if (this.items.length !== 0) {
        const swiperElement = this.swiperContainer().nativeElement;

        Object.assign(swiperElement, swiperOptions);
        swiperElement.initialize();
      }
    });
  }
}

const swiperOptions: any = {
  initialSlide: 3,
  loop: false,
  spaceBetween: 30,
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    1260:{
      slidesPerView: 3,
    },
    1572:{
      slidesPerView: 4,
    },
  },
  roundLengths: true,
  slidesPerView: 4,
  pagination: true,
  navigation: true,
  zoom: true,
};