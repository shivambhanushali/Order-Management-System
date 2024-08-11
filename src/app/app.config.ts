import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthGuardService } from './auth/auth-guard/auth-guard.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(), provideAnimationsAsync(),
    AuthGuardService, JwtHelperService,
  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  ]
};
