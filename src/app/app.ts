import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { routes } from './app.routes';
import { Home } from "./pages/home/home";
import { Feature } from "./components/feature/feature";
import { Services } from "./components/services/services";
import { Project } from "./components/project/project";
import { Team } from "./components/team/team";
import { Prices } from './components/prices/prices';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Home,
    Feature,
    Services,
    Project,
    Team,
    Prices,
    Contact,
    Footer,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected title = 'ProyectoIntegrador';
}
