import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent{
  constructor(private router: Router) {
  }

  isActive(instruction: any[]): boolean {
    return this.router.isRouteActive(this.router.generate(instruction));
  }
}
