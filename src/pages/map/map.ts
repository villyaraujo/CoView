import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as Leaflet from 'leaflet';
import { LoadingController } from 'ionic-angular';
import L from 'leaflet';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: Leaflet.Map;
  points = [];
  public loader;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    this.presentLoading();
    this.SideMap();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Stay safe"
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  SideMap() {
    this.map = new Leaflet.Map('map').setView([0, 0], 3);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Side by Side © <a href="https://www.sidebyside.com/">SidebySide</a>'
    }).addTo(this.map);
    fetch('https://raw.githubusercontent.com/villyaraujo/CoView/master/api.json?token=ACOVM44BJKKSHAAUZJZJFLC62ITPA')
      .then(res => res.json())
      .then(data => {
        this.points = data;
        console.log(data);
        this.addPoint();
        this.closeLoading();
      })
      .catch(err => console.error(err));
  }

  addPoint() {
   
    for (let property of this.points) {
      Leaflet.marker([property.lat, property.long]).addTo(this.map)
        .bindPopup(property.point + '<img src="' + property.img + '"/> ' + '<br>' + `${`this.openModal(pointanalysis)`}` )
      }
      
  }

  openModal(pointanalysis) {
    const mymodal = this.modal.create('PointanalysisPage', { COD: pointanalysis.COD });
    mymodal.present();
  }

}

