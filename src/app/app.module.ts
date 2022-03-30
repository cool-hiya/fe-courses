import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MarkdownModule} from 'ngx-markdown';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoursesListComponent} from './components/courses-list';
import {CommonModule} from '@angular/common';
import {CourseDetailsComponent} from './components/course-details';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
