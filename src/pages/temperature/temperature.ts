import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { FirebaseRequestProvider } from '../../providers/firebase-request/firebase-request'; 
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html',
})
export class TemperaturePage {

  Capteurs: Observable<any[]>;

  testRadioOpen: boolean;
  selectionCable: string;
  selectionSilo: string;

  constructor(public alerCtrl: AlertController, private navCtrl: NavController,private firebaseRequest : FirebaseRequestProvider, private toast: ToastProvider) {
    this.selectionCable = '';
    this.selectionSilo = '';
    
  }

  onSelectSiloChange(selectionEntrepotChanged: any) {
    this.selectionSilo = selectionEntrepotChanged;
    console.log('Selected', selectionEntrepotChanged);
    console.log(this.Capteurs);
    
  }

  onSelectCableChange(selectionSectionChanged: any) {
    this.selectionCable = selectionSectionChanged;
    console.log('Selected', selectionSectionChanged);
    this.Capteurs = this.firebaseRequest.get('Capteurs'+'/'+this.selectionSilo+'/'+this.selectionCable)
    
  }

  descriptionClicked(Index:number): Promise<any>{
    return this.navCtrl.push('DescriptionPage', { 'PrevPage': 'TemperaturePage', 'PageItem': 'Capteurs','idexParam': Index, 'SelectionVille': this.selectionSilo, 'SelectionSection': this.selectionCable});
  }

  onClickItemList(description:JSON, index:Number){
      this.toast.show('Capteur ' + index +' : ' + description);
  }
  
  statsClicked(Index:number): Promise<any>{
    return this.navCtrl.push('StatistiquesPage', { 'PrevPage': 'TemperaturePage', 'PageItem': 'Capteurs','idexParam': Index });
  }

}