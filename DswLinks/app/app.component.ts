import { Component } from '@angular/core';
import { LinkObject } from './link-object'

const LINKOBJS: LinkObject[] = [
    {
        appName: 'Customer Login:',
        nickName: 'Customer',
        prodUrl: 'https://www-112.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        psUrl: 'https://www-112ps.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        psDstUrl: 'https://www-112ps.bld.dst.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        uatUrl: 'https://www-112uat.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/"',
        fvtUrl: 'https://www-112fvt.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        preProdUrl: 'https://www-112preprod.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        devprUrl: 'https://www-112dev.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        localUrl: 'http://webauth.ibm.com/passport'
    },
    {
        appName: 'Customer Login:',
        nickName: 'Customer',
        prodUrl: 'https://www-112.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        psUrl: 'https://www-112ps.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        psDstUrl: 'https://www-112ps.bld.dst.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        uatUrl: 'https://www-112uat.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/"',
        fvtUrl: 'https://www-112fvt.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        preProdUrl: 'https://www-112preprod.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        devprUrl: 'https://www-112dev.etl.ibm.com/software/howtobuy/passportadvantage/paocustomer/',
        localUrl: 'http://webauth.ibm.com/passport'
    }
];

@Component({
    selector: 'my-app',
    templateUrl: 'app/link-list.component.html',
    styles: [`
    .bs-example {
      position: relative;
      padding: 5px 5px 5px;
      margin: 0 -15px 15px;
      border-color: #e5e5e5 #eee #eee;
      border-style: solid;
      border-width: 1px 0;
      -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);
      box-shadow: inset 0 3px 6px rgba(0,0,0,.05);
    }
    `]
})
export class AppComponent {
    title = 'DSW links';
    linkObjArr = LINKOBJS;

}
