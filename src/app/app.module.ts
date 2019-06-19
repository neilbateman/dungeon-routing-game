import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { StorylineOneComponent } from './storyline-one/storyline-one.component';
import { StorylineTwoComponent } from './storyline-two/storyline-two.component';
import { QuitComponent } from './quit/quit.component';
import { DarkPathComponent } from './dark-path/dark-path.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StorylineOneComponent,
    StorylineTwoComponent,
    QuitComponent,
    DarkPathComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
