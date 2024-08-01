import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  couter : number = 1;
  name :String = "junior";

  increment(){
    ++this.couter;
  }  decrement(){
    --this.couter;
  }

}
