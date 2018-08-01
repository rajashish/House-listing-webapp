import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstListingComponent } from './first-listing/first-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';
import { AddListingComponent } from './add-listing/add-listing.component';
import { SortByPipe } from './pipes/sort-by.pipe';

export const routes = [
  { path: 'load', component : FirstListingComponent ,
    children : [ {

    },
  {
    
  }]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FirstListingComponent,
    CribCardComponent,
    AddListingComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CribsService , UtilService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static routes = routes;
 }
