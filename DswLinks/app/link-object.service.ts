import { Injectable } from '@angular/core';

import { LinkObject } from './link-object'
import { LINKS } from './mock-linkObjs'

@Injectable()
export class LinkObjectService {
  getLinkObjs(): Promise<LinkObject[]> {
    return Promise.resolve(LINKS);
  }
}
