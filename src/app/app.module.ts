import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
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
    PhilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
