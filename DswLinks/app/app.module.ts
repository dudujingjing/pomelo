import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }       from './app.component';
import { LinkeListComponent } from './link-list.component';
import { DashboardComponent } from './dashboard.component'
import { LinkObjectService }  from './link-object.service';
import { routing }            from './app.routing'

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,LinkeListComponent,DashboardComponent ],
  providers:    [LinkObjectService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
