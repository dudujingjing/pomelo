import { Component } from '@angular/core';

export class AppLinkObj {
    appName: string;
    nickName: string;
    prodUrl: string;
    psUrl: string;
    psDstUrl: string;
    uatUrl: string;
    fvtUrl: string;
    preProdUrl: string;
    devprUrl: string;
    localUrl: string;
};

const LINKOBJS: AppLinkObj[] = [
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
    template: `
    <table class="data-table-1" border="0" cellpadding="0" cellspacing="0">
      <caption><em>DSW Links</em></caption>
      <tr>
        <th>Application</th>
        <th>Production</th>
        <th>Support</th>
        <th>PS-DST</th>
        <th>UAT</th>
        <th>FVT</th>
        <th>Pre-prod</th>
        <th>Devpr</th>
        <th>Local</th>

      </tr>
      <tr *ngFor='let linkObj of linkObjArr'>
        <td>{{linkObj.nickName}}</td>
        <td><a href="{{linkObj.prodUrl}}">{{linkObj.nickName}}</a></td>
        <td><a href="{{linkObj.psUrl}}">{{linkObj.nickName}}</a></td>
        <td><a href="{{linkObj.psDstUrl}}">{{linkObj.nickName}}</a></td>
        <td><a href="{{linkObj.uatUrl}}">{{linkObj.nickName}}</a></td>
        <td><a href="{{linkObj.fvtUrl}}">{{linkObj.nickName}}</a></td>
        <td><a href="{{linkObj.preProdUrl}}">{{linkObj.nickName}}</a></td>
        <td><a href="{{linkObj.devprUrl}}">{{linkObj.nickName}}</a></td>
        <td><a href="{{linkObj.localUrl}}">Customer</a></td>
      </tr>
      </table>

  `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
    title = 'DSW links';
    linkObjArr = LINKOBJS;

}
