import { Component, OnInit } from '@angular/core';
import { CountriesService } from './service/Countries.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'countries';
  constructor(public countriesServices: CountriesService) {}

  ngOnInit(): void {}
}
