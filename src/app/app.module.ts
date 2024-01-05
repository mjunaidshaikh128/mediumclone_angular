import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { BackendErrorMessagesComponent } from './shared/components/backend-error-messages/backend-error-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    BackendErrorMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
