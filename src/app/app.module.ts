import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListAppareilComponent } from './list-appareil/list-appareil.component';
import {FormsModule} from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from "primeng/avatar";
import { InputTextModule } from 'primeng/inputtext';
import {InputSwitchModule} from "primeng/inputswitch";
import { ImageModule } from 'primeng/image';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TagModule} from "primeng/tag";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ListAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    AvatarModule,
    InputTextModule,
    InputSwitchModule,
    ImageModule,
    TagModule,
    DividerModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
