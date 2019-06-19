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
import { AttackComponent } from './attack/attack.component';
import { CowerComponent } from './cower/cower.component';
import { GuideComponent } from './guide/guide.component';
import { FinalBossComponent } from './final-boss/final-boss.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StorylineOneComponent,
    StorylineTwoComponent,
    QuitComponent,
    DarkPathComponent,
    AttackComponent,
    CowerComponent,
    GuideComponent,
    FinalBossComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
