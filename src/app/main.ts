import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements as defineImgComponentSlider } from 'img-comparison-slider/loader';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
defineImgComponentSlider(window);