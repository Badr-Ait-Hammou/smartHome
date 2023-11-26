import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListAppareilComponent } from './list-appareil/list-appareil.component';
import {FormsModule} from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from "primeng/avatar";
import { InputTextModule } from 'primeng/inputtext';
import {InputSwitchModule} from "primeng/inputswitch";

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ListAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    AvatarModule,
    InputTextModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
