import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './master.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
