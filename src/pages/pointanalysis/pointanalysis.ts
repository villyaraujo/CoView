import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController ,ViewController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pointanalysis',
  templateUrl: 'pointanalysis.html',
})
export class PointanalysisPage {

  public pointid;
  public lat;
  infopoint: any;
  public loader;
  public name;
  public state;
  public country;
  public air: any;
  public covid: any;
  public long;
  public imgbefore;
  public imgafter;
  public country_code;
  public details;

  constructor(public navCtrl: NavController ,public toastCtrl: ToastController ,
    public loadingCtrl: LoadingController , public navParams: NavParams, private view: ViewController) {
  }
  
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Stay Safe! Loading.."
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  ionViewDidLoad() {
    this.pointid = this.navParams.get('id');
    this.lat = this.navParams.get('lat');
    this.name = this.navParams.get('name');
    this.state = this.navParams.get('state') != "" ? this.navParams.get('state') : "";
    this.country = this.navParams.get('country');
    this.long = this.navParams.get('long');
    this.imgbefore = this.navParams.get('imgbefore');
    this.imgafter = this.navParams.get('imgafter');
    this.country_code = this.navParams.get('country_code');
    this.details = this.navParams.get('details');
    
    if(this.country_code != "")
      this.getStatsOfCovid(this.country_code);
  }

  closeModal() {
    this.view.dismiss();
  }

  getStatsOfCovid(country){
    fetch(
      "https://corona-api.com/countries/"+country
    )
    .then(res => res.json())
    .then(data => {
      this.covid = data;
      this.covid.data.latest_data.calculated.death_rate = data.data.latest_data.calculated.death_rate.toFixed(2);
    })
    .catch(err => console.error(err))
  }
}
