import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ICountry } from '../types/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  countries = new BehaviorSubject<ICountry[]>([]);
  countryDetail = new BehaviorSubject<ICountry | null>(null);

  constructor(private http: HttpClient) {}

  getCountries() {
    this.http
      .get(`https://restcountries.com/v3.1/all`)
      .subscribe((countries) => {
        this.countries.next(countries as ICountry[]);
      });
  }

  getCountry(country: any) {
    console.log('getting country');
    return this.http
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .subscribe((country) => {
        console.log({ country });
        if ((country as ICountry[])?.[0]) {
          this.countryDetail.next((country as ICountry[])?.[0]);
        }
      });
  }
}
