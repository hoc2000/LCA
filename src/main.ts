import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as RegisterElement} from 'swiper/element/bundle';

RegisterElement();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
