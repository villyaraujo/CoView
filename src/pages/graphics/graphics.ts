import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-graph',
  templateUrl: 'graphics.html'
})
export class GraphicsPage {

  public loader;
  public active_mundo;
  public confirmed_mundo;
  public deaths_mundo;
  public new_confirmed_mundo;
  public new_deaths_mundo;
  public new_recovered_mundo;
  public recovered_mundo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
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
    this.getGraphics();
  }

  getGraphics() {
  fetch(
    "https://raw.githubusercontent.com/villyaraujo/CoView/master/graph"
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.active_mundo = data.active_mundo.jpg;
      this.confirmed_mundo = data.confirmed_mundo.jpg;
      this.deaths_mundo = data.deaths_mundo.jpg;
      this.new_confirmed_mundo = data.new_confirmed_mundo.jpg;
      this.new_deaths_mundo = data.new_deaths_mundo.jpg;
      this.new_recovered_mundo = data.new_recovered_mundo.jpg;
      this.recovered_mundo = data.recovered_mundo.jpg;
      })
    .catch(err => console.error(err));
  }
}