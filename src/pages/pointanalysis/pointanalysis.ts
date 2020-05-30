import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pointanalysis',
  templateUrl: 'pointanalysis.html',
})
export class PointanalysisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
   
  }

  closeModal() {
    this.view.dismiss();
  }
}
