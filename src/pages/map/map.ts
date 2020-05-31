import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  Modal
} from "ionic-angular";
import * as Leaflet from "leaflet";
import { LoadingController } from "ionic-angular";
import { PointanalysisPage } from "../pointanalysis/pointanalysis";

@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  map: Leaflet.Map;
  points = [];
  public loader;
  public pointdetails;
  response:any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    private modal: ModalController
  ) {}

  ionViewDidLoad() {
    this.presentLoading();
    this.SideMap();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Stay safe! Loading.."
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  SideMap() {
    this.map = new Leaflet.Map("map").setView([0, 0], 3);
    Leaflet.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
      attribution: 'CoView © <a href="https://www.coview.co/">Coview</a>'
    }).addTo(this.map);
    fetch(
      "https://raw.githubusercontent.com/villyaraujo/CoView/master/api.json"
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.points = data;
        this.addPoint();
        this.closeLoading();
      })
      .catch(err => console.error(err));
  }

  addPoint() {
    window.that = this;
    window.openModal = this.openModal;
    for (let property of this.points) {
      const propToString = encodeURI(JSON.stringify(property));
      const popup = property.name +
      '<img src="' +
      property.imgafter +
      '"/> ' +
      "<br>" +
      '<button type="button" data-code="'+propToString+'" onclick="window.openModal.call(window.that, this.dataset.code)">Get info</button>';
      Leaflet.marker([property.lat, property.long])
        .addTo(this.map)
        .bindPopup(popup);
    }
  }

  openModal(property) {
    this.response = JSON.parse(decodeURI(property));
    console.log(this.response);
    this.navCtrl.push(PointanalysisPage, {
      id: this.response.id,
      name: this.response.name,
      state: this.response.state,
      country: this.response.country,
      lat: this.response.lat,
      long: this.response.long,
      imgbefore: this.response.imgbefore,
      imgafter: this.response.imgafter,
      country_code: this.response.country_code,
      details: this.response.details
    });
    
  }
}