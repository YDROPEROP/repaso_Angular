import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModel } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModel,
    HeroesModule,

  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
