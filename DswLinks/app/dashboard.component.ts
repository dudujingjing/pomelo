import { Component, OnInit } from '@angular/core';
import { LinkObject } from './link-object';
import { LinkObjectService } from './link-object.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.compoment.html'
})
export class DashboardComponent implements OnInit{
  links : LinkObject[] = [];

  constructor(private linkObjectService: LinkObjectService){  }

  ngOnInit(): void {
    this.linkObjectService.getLinkObjs().then(links => this.links = links.slice(1,3));
  }
  gotoDetail(link: LinkObject): void {

  }
}
