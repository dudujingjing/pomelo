import { Component, OnInit } from '@angular/core'

import { LinkObjectService } from './link-object.service';
import { LinkObject } from './link-object'

@Component({
  moduleId: module.id,
  selector:    'link-list',
  templateUrl: 'link-list.component.html',
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
export class LinkeListComponent implements OnInit{
  links: LinkObject[];
  selectedLink: LinkObject;

  constructor(private linkObjectService: LinkObjectService){  }

  getLinks(): void {
    this.linkObjectService.getLinkObjs().then(links => this.links = links);
  }

  ngOnInit(): void {
    this.getLinks();
  }

  selectLink(link: LinkObject): void {
    this.selectedLink = link;
  }
}
