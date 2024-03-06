import { Component } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {

}
