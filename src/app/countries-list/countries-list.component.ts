import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../service/Countries.Service';
import { ICountry } from '../types/country';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  getSelected(params: any) {
    let selected = params;
    localStorage.setItem('selected', selected);
  }

  constructor(public countriesServices: CountriesService) {}
  // Get Country

  filteredRegion: string = 'region';
  filteredString: string = '';
  countriesList: any;
  country: any;
  filteredCountryList: ICountry[] = [];
  region = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  ngOnInit(): void {
    // Get Countries
    this.countriesServices.getCountries();
    this.changeCountry();
    //   .subscribe((countries) => {
    //   console.log(countries)
    //   this.filteredCountryList = countries;
    //   this.countriesList = countries
    // });

    // Get Country
    // this.countriesServices.getCountry('peru').subscribe((country) => {
    //   this.country = country;
    //   console.log(this.country);
    // });

    // this.countriesServices.getRegion('europe').subscribe((region) => {
    //   this.region = region;
    //   console.log(this.region);
    // });
  }

  changeCountry() {
    this.countriesServices.countries.subscribe((countries) => {
      this.filteredCountryList =
        this.filteredRegion === 'region' || !this.filteredRegion
          ? countries
          : countries.filter((c) => c.region.includes(this.filteredRegion));
    });
    // console.log('Region', this.filteredRegion);
    // this.filteredCountryList =
    //   this.filteredRegion === 'region' || !this.filteredRegion
    //     ? this.countriesList
    //     : this.countriesList.filter((c: any) =>
    //         c.region.includes(this.filteredRegion)
    //       );
    //  if(!!(this.filteredString.trim())){
    //    console.log(this.filteredCountryList)
    //    this.filteredCountryList = this.filteredCountryList
    //    .filter(
    //      (c:any) =>
    //      c.name.common.toLowerCase().startsWith(this.filteredString.trim().toLowerCase()))
    //  }
  }
}
