import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountryDetailPage } from '../country-detail/country-detail';
import { Country } from '../../model/country';
import { CountryProvider } from '../../providers/country/country';

@IonicPage()
@Component({
  selector: 'page-country-list',
  templateUrl: 'country-list.html',
  providers: [
    CountryProvider
  ]
})
export class CountryListPage {
  public countries: Country[];
  public continent: string;
  public country: Country;

  constructor(public navCtrl: NavController, public navParams: NavParams, private countryProvider: CountryProvider) {
    this.continent = navParams.get("continent");
    this.countryProvider.getCountries(this.continent).subscribe(
      response => {
        this.countries = response;
      }
    );
  }

  public details(country: Country) {
    this.navCtrl.push(CountryDetailPage, {country: country});
  }

}
