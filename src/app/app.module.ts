import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TerminalComponent } from './terminal/terminal.component';
import { IntroComponent } from './intro/intro.component';
import { ResumeComponent } from './resume/resume.component';
import { GraphicComponent } from './graphic/graphic.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhilComponent } from './phil/phil.component';
import { MarkdownViewComponent } from './markdown-view/markdown-view.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TerminalComponent,
    IntroComponent,
    ResumeComponent,
    GraphicComponent,
    ProjectsComponent,
    PhilComponent,
    MarkdownViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
