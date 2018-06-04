import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Country } from '../../model/country';

/**
 * Generated class for the CountryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-detail',
  templateUrl: 'country-detail.html',
})
export class CountryDetailPage {
  public country: Country = {name: "", area: 0, population: 0, alpha3Code: ""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewWillEnter() {
     this.country = this.navParams.get("country");
  }

}
