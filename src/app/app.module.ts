import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjekteComponent } from './projekte/projekte.component';
import { PanAndPaperComponent } from './pan-and-paper/pan-and-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjekteComponent,
    PanAndPaperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
