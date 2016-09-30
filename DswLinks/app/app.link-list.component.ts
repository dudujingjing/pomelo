import { Component, OnInit } from '@angular/core'
import { LinkObjectService } from './link-object.service';
import { LinkObject } from './link-object'

@Component({
  moduleId: module.id,
  selector:    'link-list',
  templateUrl: 'link-list.component.html',
  providers: [ LinkObjectService ]
})
export class LinkeListComponent implements OnInit{
  links: LinkObject[];
  selectedLink: LinkObject;

  constructor(private service: LinkObjectService){  }

  ngOnInit() {
    this.links = this.service.getLinkObjs();
  }

  selectLink(link: LinkObject) {
    this.selectedLink = link;
  }
}
