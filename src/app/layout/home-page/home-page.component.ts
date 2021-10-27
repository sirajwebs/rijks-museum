import { Component, OnInit } from '@angular/core';
import { RijksDataService } from './../../shared/services/rijks-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private readonly rijksDataService: RijksDataService,
  ) { }

  ngOnInit(): void {
    this.rijksDataService.getData().subscribe(val => {
      console.log(val);
    })
  }

}
