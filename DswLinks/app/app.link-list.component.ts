import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector:    'link-list',
  templateUrl: 'link-list.component.html',
  providers: [ LinkObjectService ]
})
export class LinkeListComponent() implements OnInit{
  links: AppLinkObj[];
  selectedLink: AppLinkObj;

  constructor(private service: LinkObjectService){  }

  ngOnInit() {
    this.links = this.service.getLinkObjs();
  }

  selectLink(link: AppLinkObj) {
    this.selectedLink = link;
  }
}
