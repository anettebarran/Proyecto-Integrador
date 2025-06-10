import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Feature } from './components/feature/feature';
import { Services } from './components/services/services';
import { Project } from './components/project/project';
import { Team } from './components/team/team';
import { Prices } from './components/prices/prices';
import { Contact } from './components/contact/contact';


export const routes: Routes = [
    { path: 'navbar', component: Navbar },
    { path: 'home', component: Home },
    { path: 'feature', component: Feature },
    { path: 'service', component: Services },
    { path: 'project', component: Project },
    { path: 'team', component: Team },
    { path: 'prices', component: Prices },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '' } 
];
