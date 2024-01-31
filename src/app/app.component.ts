import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estate_express';

  screenHieght:number;
  constructor() {
    this.screenHieght = window.innerHeight;
  }
}
