import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {HTTP_PROVIDERS} from "@angular/http";
import {FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders, AuthMethods} from "angularfire2";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase({
        apiKey: "AIzaSyA0NVNGvwAWrWnzSJg1vGkSbgNr67FW6pk",
        authDomain: "kraft-90cb5.firebaseapp.com",
        databaseURL: "https://kraft-90cb5.firebaseio.com",
        storageBucket: "kraft-90cb5.appspot.com",
    }),
    firebaseAuthConfig({
        provider: AuthProviders.Password,
        method: AuthMethods.Password
    })
]);

