import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatSelectModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule  } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
// import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
// import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // SearchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule ,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
