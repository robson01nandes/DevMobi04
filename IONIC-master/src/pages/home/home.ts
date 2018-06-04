import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountryListPage } from '../country-list/country-list';
import { Continent } from '../../model/continent';
import { Country } from '../../model/country';
import { CountryProvider } from '../../providers/country/country';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public continents: Continent[];
  public countries: Country[];
  public continent: Continent;

  constructor(public navCtrl: NavController) {
    this.continents = [{name: "America"}, {name: "Africa"},
		{name: "Asia"}, {name: "Europe"}, {name: "Oceania"}];
  }

  ionViewDidLoad() {}

  public searchCountry(continent: string) {
    if(typeof continent != 'string') {
      continent = 'All';
    }
    this.navCtrl.push(CountryListPage, { continent: continent });
  }
}
