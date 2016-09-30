import { Component } from '@angular/core';

import { LinkObject } from './link-object'
//import { LinkObjectService } from './link-object.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/links">Links</a>
        <a routerLink="/dashboard">Dashboard</a>
      </nav>
      <router-outlet></router-outlet>
      `,
    styles: [`
    .bs-example {
      position: relative;
      padding: 5px 5px 5px;
      margin: 0 -15px 15px;
      border-color: #e5e5e5 #eee #eee;
      border-style: solid;
      border-width: 1px 0;
      -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);
      border-radius: 5px;
      box-shadow: 0 2px 8px #999;
    }
    `]
})
export class AppComponent {
    title = 'DSW links';
}
