import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../service/Countries.Service';
import { ICountry } from '../types/country';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  selectedCountry = '' || localStorage.getItem('selected');

  constructor(
    public countriesServices: CountriesService,
    private route: ActivatedRoute
  ) {}
  countryName: string = '';
  country?: ICountry;
  ngOnInit(): void {
    this.countriesServices.getCountries();
    this.route.params.subscribe((params) => {
      console.log(params);
      this.countryName = params['name'];

      if (
        this.countriesServices.countryDetail &&
        this.countriesServices.countryDetail.value?.name.common ===
          this.countryName
      ) {
        this.country = this.countriesServices.countryDetail.value;
      } else {
        this.countriesServices.getCountry(this.countryName);
      }
    });

    this.countriesServices.countryDetail.subscribe((country) => {
      if (this.countryName === country?.name?.common) {
        this.country = country;
      }
    });
  }

  public getCountryName(country: string) {
    return this.countriesServices.countries.value.find(
      (c) => c.fifa === country
    )?.name.common;
  }

  get getCountryCurrency() {
    return (Object.values(this.country?.currencies as any) as any)?.[0]
      ?.name as any;
  }
}
