import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountryDetailPage } from '../country-detail/country-detail';

/**
 * Generated class for the CountryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-list',
  templateUrl: 'country-list.html',
})
export class CountryListPage {
  public country: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.country = {name: "Brazil"}
    console.log(this.country);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryListPage');
  }

  public showDetails(name: string) {
    console.log(`Nome: ${name}`)
    this.navCtrl.push(CountryDetailPage);
  }

}
