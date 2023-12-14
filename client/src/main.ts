import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/master/master.config';
import { MasterComponent } from './app/master/master.component';

bootstrapApplication(MasterComponent, appConfig)
  .catch((err) => console.error(err));
