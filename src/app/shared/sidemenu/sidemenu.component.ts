import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes
  .map( route => route.children ?? [] )
  .flat()
  .filter( route => route && route.path )
  .filter( route => !route.path?.includes(':') )

  constructor() {

    // const dashboardRoutes = routes
    //   .map( route => route.children ?? [] )
    //   .flat()
    //   .filter( route => route && route.path )
    //   .filter( route => !route.path?.includes(':') )

    // console.log(dashboardRoutes);
  }

}
