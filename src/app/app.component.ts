import { Component, OnInit } from '@angular/core';
import * as SolidClient from 'solid-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Solid App seed';
  solid = SolidClient;
  ngOnInit(): void {
    // this.solid.config.authEndpoint = 'https://solid.example.com'
    // this.solid.config.proxy = 'https://solid.example.com/proxy'
    // this.solid.config.timeout = 3000
    console.log('Solid version:' + this.solid.meta.version());
  }
}
