import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { StorylineOneComponent } from './storyline-one/storyline-one.component';
import { StorylineTwoComponent } from './storyline-two/storyline-two.component';
import { QuitComponent } from './quit/quit.component';
import { DarkPathComponent } from './dark-path/dark-path.component';

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
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
