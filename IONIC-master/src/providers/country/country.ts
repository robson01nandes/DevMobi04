import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Country } from "../../model/country";

/*
  Generated class for the CountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountryProvider {
  public countries: Country[];

  constructor(public http: HttpClient) {
    console.log("Hello CountryProvider Provider");
  }

  public getCountries(continent: string) {
    let url: string;
    if (continent && continent.toLowerCase() != "all") {
      url = `https://restcountries.eu/rest/v2/region/${continent}`;
    } else {
      url = `https://restcountries.eu/rest/v2/all`;
    }

    return this.http.get<Country[]>(url);
  }
}
