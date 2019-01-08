import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { FirebaseRequestProvider } from '../../providers/firebase-request/firebase-request'; 

@IonicPage()
@Component({
  selector: 'page-description-capteur',
  templateUrl: 'description-capteur.html',
})
export class DescriptionPage {

  indexFromTabs: number = 0;
  itemPage: string = "";
  prevPage: string = "";
  entrepotSelection: string = "";
  sectionSelection: string = "";
  description:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afReq: FirebaseRequestProvider) {

    this.description = '';

  	let data = navParams.get('idexParam');
  	if(data != null){
      this.indexFromTabs = navParams.get('idexParam');
      this.itemPage = navParams.get('PageItem');
      this.prevPage = navParams.get('PrevPage');
      this.entrepotSelection = navParams.get('SelectionVille');
      this.sectionSelection = navParams.get('SelectionSection');
  	}
  }

  modifyDescriptionClick(){
  	this.afReq.set(this.itemPage+'/'+this.entrepotSelection+'/'+this.sectionSelection+'/'+this.indexFromTabs+'/Description',this.description).then(_ => this.returnToTabsPage());
  }

  returnToTabsPage(){
  	this.navCtrl.setRoot(this.prevPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionCapteurPage');
  }

}
