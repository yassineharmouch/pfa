import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { CreateTacheeComponent } from './create-tachee/create-tachee.component';
import { UpdateTacheeComponent } from './update-tachee/update-tachee.component';
import { TacheeDetailsComponent } from './tachee-details/tachee-details.component';
import { TacheeListComponent } from './tachee-list/tachee-list.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateTacheeComponent,
    UpdateTacheeComponent,
    TacheeDetailsComponent,
    TacheeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
