import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-graph',
  templateUrl: 'graphics.html'
})
export class GraphicsPage {

  public active_mundo;
  public confirmed_mundo;
  public deaths_mundo;
  public new_confirmed_mundo;
  public new_deaths_mundo;
  public new_recovered_mundo;
  public recovered_mundo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getGraphics() {
  fetch(
    "https://raw.githubusercontent.com/villyaraujo/CoView/master/graph"
  )
    .then(res => res.json())
    .then(data => {
      this.navCtrl.push(GraphicsPage, {
        active_mundo: data.active_mundo.jpg,
        confirmed_mundo: data.confirmed_mundo.jpg,
        deaths_mundo: data.deaths_mundo.jpg,
        new_confirmed_mundo: data.new_confirmed_mundo.jpg,
        new_deaths_mundo: data.new_deaths_mundo.jpg,
        new_recovered_mundo: data.new_recovered_mundo.jpg,
        recovered_mundo: data.recovered_mundo.jpg,
      });
    })
    .catch(err => console.error(err));
}

  ionViewDidLoad() {
    this.active_mundo = this.navParams.get('active_mundo');
    this.confirmed_mundo = this.navParams.get('confirmed_mundo');
    this.deaths_mundo = this.navParams.get('deaths_mundo');
    this.new_confirmed_mundo = this.navParams.get('new_confirmed_mundo');
    this.new_deaths_mundo = this.navParams.get('new_deaths_mundo');
    this.new_recovered_mundo = this.navParams.get('new_recovered_mundo');
    this.recovered_mundo = this.navParams.get('recovered_mundo');
  }
}