import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowbookComponent } from './showbook/showbook.component';
import { ShowauthorComponent } from './showauthor/showauthor.component';
import { LinksComponent } from './links/links.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthordataComponent } from './showauthor/authordata/authordata.component';
import { BookdataComponent } from './showbook/bookdata/bookdata.component';
import { New1Component } from './new1/new1.component';
import { PeopledbComponent } from './new1/peopledb/peopledb.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowbookComponent,
    ShowauthorComponent,
    LinksComponent,
    AuthordataComponent,
    BookdataComponent,
    New1Component,
    PeopledbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
