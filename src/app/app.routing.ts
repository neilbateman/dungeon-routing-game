import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { StorylineOneComponent } from './storyline-one/storyline-one.component';
import { StorylineTwoComponent } from './storyline-two/storyline-two.component';
import { QuitComponent } from './quit/quit.component';
import { DarkPathComponent } from './dark-path/dark-path.component';
import { AttackComponent } from './attack/attack.component';
import { CowerComponent } from './cower/cower.component';
import { GuideComponent } from './guide/guide.component';
import { FinalBossComponent } from './final-boss/final-boss.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const appRoutes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'storylineOne',
  component: StorylineOneComponent
},
{
  path: 'storylineOne/storylineTwo',
  component: StorylineTwoComponent
},
{
  path: 'storylineTwo',
  component: StorylineTwoComponent
},
{
  path: 'storylineOne/darkPath/storylineTwo',
  component: StorylineTwoComponent
},
{
  path: 'storylineOne/quit',
  component: QuitComponent
},
{
  path: 'storylineOne/quit/home',
  component: HomeComponent
},
{
  path: 'storylineOne/darkPath',
  component: DarkPathComponent
},
{
  path: 'storylineOne/darkPath/attack',
  component: AttackComponent
},
{
  path: 'storylineOne/storylineTwo/attack',
  component: AttackComponent
},
{
  path: 'storylineOne/darkPath/cower',
  component: CowerComponent
},
{
  path: 'storylineOne/storylineTwo/guide',
  component: GuideComponent
},
{
  path: 'storylineOne/darkPath/storylineTwo/guide',
  component: GuideComponent
},
{
  path: 'storylineOne/darkPath/attack/darkPath',
  component: DarkPathComponent
},
{
  path: 'storylineOne/storylineTwo/guide/attack',
  component: AttackComponent
},
{
  path: 'storylineOne/storylineTwo/guide/finalBoss',
  component: FinalBossComponent
},
{
  path: 'storylineOne/storylineTwo/attack/darkPath',
  component: DarkPathComponent
},
{
  path: 'players/:id',
  component: PlayerDetailComponent
},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
